//Composant : ContactForm
//Affiche un formulaire de contact sécurisé avec validation, messages d'erreur et soumission vers l'API

//Import Design system
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";

//Import Hooks
import useContactForm from "@/hooks/useContactForm";


type Props = {
  csrfToken: string; //Token CSRF géné côté serveur
};

{/*Initialisation du formulaire via le hook */}
export default function ContactForm({ csrfToken }: Props) {
  const {
    register, //Permet de lier les champs au formulaire
    handleSubmit, //Gère la soumission du formulaire
    errors, //Contient les erreurs de validation
    onSubmit, //Fonction appeée à la soumission
    submitResult, //Message de succès ou d'erreur
  } = useContactForm();


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-base max-w-2xl">
      {/* Champ caché pour le token CSRF */}
      <input type="hidden" value={csrfToken} {...register("csrfToken")} />
      <div>
        <Typography variant="button-lg" theme="cyan">
            Contactez-nous
        </Typography>
        {/*Séprateur*/}
        <div className="w-20 h-1 bg-gradient-primary mt-3 mb-8" />
      </div>

      {/*Formulaire*/}
      <div className="grid gap-x-4 gap-y-8">
        {/*Nom et prénom*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">
              Nom et prénom *
            </Typography>
          </div>
          <input type="text" {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red text-3xl">{errors.name.message}</p>}
        </div>
        {/*Adresse email*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">
              Adresse email *
            </Typography>
          </div>
          <input type="email" {...register("email")} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red text-3xl">{errors.email.message}</p>}
        </div>
        {/*Téléphone*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">
              Téléphone *
            </Typography>
          </div>
          <input type="text" {...register("phone")} className="w-full border p-2 rounded" />
          {errors.phone && <p className="text-red text-3xl">{errors.phone.message}</p>}
        </div>
        {/*Objet de votre message*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">
              Objet de votre message *
            </Typography>
          </div>
          <input type="text" {...register("subject")} className="w-full border p-2 rounded" />
          {errors.subject && <p className="text-red text-3xl">{errors.subject.message}</p>}
        </div>
        {/*Votre message */}
        <div className="md:col-span-2">
          <div className="mb-3">
            <Typography variant="body-md">
              Votre message *
            </Typography>
          </div>
          <textarea {...register("message")} rows={5} className="w-full border p-2 rounded" />
          {errors.message && <p className="text-red text-3xl">{errors.message.message}</p>}
        </div>
      </div>

      {/*Case RGPD*/}
      <div className="my-8">
        <div className="flex items-start">
          <input type="checkbox" {...register("consent")} className="mt-1 mr-2" />
          <label className="text-sm">
            J&apos;accepte que mes données soient traitées pour la gestion de ma demande conformément à la politique de confidentialité *
          </label>
        </div>
        {errors.consent && <p className="text-red text-3xl">{errors.consent.message}</p>}
      </div>

      {submitResult && (
        <div
          className={`my-4 p-3 rounded text-center border ${
            submitResult.toLowerCase().includes("envoyé")
              ? "text-green-text bg-green-bg border-green-border"
              : "text-red-text bg-red-bg border-red-border"
          }`}
        >
          {submitResult}
        </div>
      )}

      {/*Bouton envoyer ma demande */}
      <div>
        <Button type="submit" variant="primary" size="medium">Envoyer ma demande</Button>
      </div>
    </form>
  );
}
