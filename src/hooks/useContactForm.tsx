//Hook : useContactForm
//Gère la logique du formulaire de contact (validation, soumission, feedback utilisateur)

//Librairies externes
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Schema de validation
import { contactSchema, ContactFormData} from "@/lib/validation/contact";

export default function useContactForm() {
  //Etat local pour stocker le message de succès ou d'erreur
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  // Initialisation du formulaire avec React Hook Form et Zod
  const {
    register, //Permet de lier les inputs HTML au formulaire
    handleSubmit, //Gère la soumission du formulaire
    formState: { errors, isSubmitting }, //Gestion des erreurs et de l'état de chargement
    reset, //Réinitialise le formulaire
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), // Connecte Zod à Reaact Hook Form
  });

  //Fonction appelée à la soumission du formulaire
  const onSubmit = async (data: ContactFormData) => {
    setSubmitResult(null); //Réinitialise le message précédent
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        //Erreur coté serveur (validation, etc..)
        const errorData = await res.json();
        const message =
          errorData.message || "Erreur lors de l'envoi du formulaire";
        setSubmitResult(message);
        return;
      }

      //Succès : message envoyé
      setSubmitResult("Votre message a bien été envoyé !");
      reset(); // réinitialise le formulaire après succès
    } catch (error) {
      // Erreur réseau ou autre
      setSubmitResult("Erreur réseau, veuillez réessayer plus tard.");
      console.error("Erreur fetch API contact :", error);
    }
  };

  //Retourne les méthodes et états utiles au composant
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
    submitResult,
  };
}
