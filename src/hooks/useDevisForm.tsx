import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useForm } from "react-hook-form";
import { z } from "zod";

const devisSchema = z.object({
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

type DevisFormData = z.infer<typeof devisSchema>;

export default function useDevisForm() {
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  });

  const onSubmit = async (data: DevisFormData) => {
    setSubmitResult(null);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const message =
          errorData.message || "Erreur lors de l'envoi du formulaire";
        setSubmitResult(message);
        return;
      }

      setSubmitResult("Votre message a bien été envoyé !");
      reset(); // réinitialise le formulaire après succès
    } catch (error) {
      setSubmitResult("Erreur réseau, veuillez réessayer plus tard.");
      console.error("Erreur fetch API devis :", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
    submitResult,
  };
}
