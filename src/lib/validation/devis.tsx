import parsePhoneNumberFromString from "libphonenumber-js";
import { z } from "zod";

export const devisSchema = z.object({
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
  city: z.string().min(2, "Ville requise"),
  message: z.string().min(10, "Message trop court"),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter la politique de confidentialité",
    }),
  }),
  service: z.enum(["personnes-agees", "personnes-handicapees"], {
    errorMap: () => ({
      message: "Veuillez sélectionner un service",
    }),
  }),
  frequency: z.enum(
    ["ponctuel", "hebdomadaire", "bihebdomadaire", "mensuel", "autre"],
    {
      errorMap: () => ({
        message: "Veuillez sélectionner une fréquence",
      }),
    }
  ),
  csrfToken: z.string().min(1, "Token CSRF requis"),
});

export type DevisFormData = z.infer<typeof devisSchema>;