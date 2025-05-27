//Librairie pour valider les numéros de téléphone selon es normes internationales
import parsePhoneNumberFromString from "libphonenumber-js";

//Librairie de validation Zod
import { z } from "zod";

//Schéma de validation du formulaire de contact
export const contactSchema = z.object({
  //Nom complet : minimum 2 caractères requis
  name: z.string().min(2, "Nom et prénom requis"),

  //Email : doit être au bon format
  email: z.string().email("Email invalide"),

  //Téléphone : minimum 10 caractères requis et validation avec libphonenumber-js
  phone: z
    .string()
    .min(10, "Numéro requis")
    .refine(
      (val) => {
        const phone = parsePhoneNumberFromString(val, "FR"); //Analyse selon le format français
        return phone?.isValid(); // Retourne si le numéro est valide
      },
      {
        message: "Numéro invalide", //Message d'erreur si le numéro est invalide
      }
    ),

  //Sujet du message : minimum 2 caractères
  subject: z.string().min(2, "Objet requis"),

  //Corps du message : minimum 10 caractères
  message: z.string().min(10, "Message trop court"),

  //Consentement (obligatoire = true) : l'utilisateur doit cocher la case RGPD
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter la politique de confidentialité",
    }),
  }),

  //CSRF token (obligatoire et généré automatiquement) : protection contre les attaques CSRF
  csrfToken: z.string().min(1, "Token CSRF requis"),
});

//Schéma Zod transformé en Type TypeScript
export type ContactFormData = z.infer<typeof contactSchema>;