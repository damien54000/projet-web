import parsePhoneNumberFromString from "libphonenumber-js";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nom et prénom requis"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(10, "Numéro requis")
    .refine(
      (val) => {
        const phone = parsePhoneNumberFromString(val, "FR");
        return phone?.isValid();
      },
      {
        message: "Numéro invalide",
      }
    ),
  subject: z.string().min(2, "Objet requis"),
  message: z.string().min(10, "Message trop court"),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter la politique de confidentialité",
    }),
  }),
  csrfToken: z.string().min(1, "Token CSRF requis"),
});

export type ContactFormData = z.infer<typeof contactSchema>;