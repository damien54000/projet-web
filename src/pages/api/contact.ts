import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import prisma from "@/lib/prisma";

import sanitizeHtml from "sanitize-html";
import { verifyCSRFToken } from "@/lib/csrf";

// Schéma Zod de verification
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().refine((val) => {
    const phone = parsePhoneNumberFromString(val, "FR");
    return phone?.isValid();
  }, { message: "Numéro invalide" }),
  subject: z.string().min(2),
  message: z.string().min(10),
  consent: z.literal(true),
  csrfToken: z.string().min(1),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  //Validation des données
  const result = contactSchema.safeParse(req.body);
  console.log("Résultat validation Zod :", result);

  if (!result.success) {
    return res.status(400).json({
      message: "Validation échouée",
      errors: result.error.format(),
    });
  }

  //Verification CSRF
  const secret = process.env.CSRF_SECRET || "default_secret";
  const isTokenValid = verifyCSRFToken(secret, result.data.csrfToken);

  if (!isTokenValid) {
    return res.status(403).json({ message: "Token CSRF invalide" });
  }

  //Nettoyage XSS
  const { csrfToken, ...rawData } = result.data;

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
    await prisma.contactMessage.create({ data });

    console.log("Message enregistré avec succès");

    return res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error: any) {
    console.error("Erreur Prisma :", error);
    return res.status(500).json({ message: "Erreur serveur", error: error.message });
  }

}
