//API : /api/contact
// Reçoit les messages du formulaire de contact
// Valide les données (Zod), vérifie le token CSRF, nettoie les champs (XSS), enregistre dans la base de donnée (Prisma)

//Librairies externes
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import sanitizeHtml from "sanitize-html";

//Librairies internes
import prisma from "@/lib/prisma";
import { verifyCSRFToken } from "@/lib/csrf";

// Schéma Zod de verification
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().refine(
    (val) => {
      const phone = parsePhoneNumberFromString(val, "FR");
      return phone?.isValid();
    },
    { message: "Numéro invalide" }
  ),
  subject: z.string().min(2),
  message: z.string().min(10),
  consent: z.literal(true),
  csrfToken: z.string().min(1),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Vérifie que la méthode HTTP est POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  //Validation des données avec Zod
  const result = contactSchema.safeParse(req.body);
  console.log("Résultat validation Zod :", result);

  if (!result.success) {
    //Retourne les erreurs de validation
    return res.status(400).json({
      message: "Validation échouée",
      errors: result.error.format(),
    });
  }

  //Verification CSRF
  const secret = process.env.CSRF_SECRET || "default_secret";
  const isTokenValid = verifyCSRFToken(secret, result.data.csrfToken);

  if (!isTokenValid) {
    //Token invalide : accès interdit
    return res.status(403).json({ message: "Token CSRF invalide" });
  }

  //Nettoyage des champs pour éviter les injections XSS
  const { ...rawData } = result.data;

  const data = {
    name: sanitizeHtml(rawData.name),
    email: sanitizeHtml(rawData.email),
    phone: sanitizeHtml(rawData.phone),
    subject: sanitizeHtml(rawData.subject),
    message: sanitizeHtml(rawData.message),
    consent: rawData.consent,
  };

  console.log("Données envoyées à Prisma :", data);

  try {
    //Enregistrement du message dans la base via Prisma
    await prisma.contactMessage.create({ data });

    console.log("Message enregistré avec succès");

    return res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error: unknown) {
    console.error("Erreur Prisma :", error);

    // Gestion des erreurs Prisma
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Erreur serveur", error: error.message });
    }

    return res.status(500).json({ message: "Erreur serveur inconnue" });
  }
}
