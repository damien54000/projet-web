import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema, ContactFormData} from "@/lib/validation/contact";

export default function useContactForm() {
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitResult(null);
    try {
      const res = await fetch("/api/contact", {
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
      console.error("Erreur fetch API contact :", error);
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
