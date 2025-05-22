import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import useDevisForm from "@/hooks/useDevisForm";


type Props = {
  csrfToken: string;
};

{
  /*Initialisation du formulaire */
}
export default function DevisForm({ csrfToken }: Props) {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitResult,
  } = useDevisForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 rounded-lg shadow-base"
    >
      <input type="hidden" value={csrfToken} {...register("csrfToken")} />
      {/*Formulaire*/}
      <div className="grid gap-x-10 gap-y-8">
        {/*Nom et prénom*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">Nom et prénom *</Typography>
          </div>
          <input
            type="text"
            {...register("name")}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red text-3xl">{errors.name.message}</p>
          )}
        </div>
        {/*Adresse email*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">Adresse email *</Typography>
          </div>
          <input
            type="email"
            {...register("email")}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red text-3xl">{errors.email.message}</p>
          )}
        </div>
        {/*Téléphone*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">Téléphone *</Typography>
          </div>
          <input
            type="text"
            {...register("phone")}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red text-3xl">{errors.phone.message}</p>
          )}
        </div>
        {/*Ville*/}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">Ville *</Typography>
          </div>
          <input
            type="text"
            {...register("city")}
            className="w-full border p-2 rounded"
          />
          {errors.city && (
            <p className="text-red text-3xl">{errors.city.message}</p>
          )}
        </div>
        {/*Service */}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">
              Type de service souhaité *
            </Typography>
          </div>
          <select
            {...register("service")}
            className="w-full border p-2 rounded"
          >
            <option value="">Sélectionnez un service</option>
            <option value="personnes-agees">Aide aux personnes agées</option>
            <option value="personnes-handicapees">
              Aide aux personnes handicapées
            </option>
          </select>
          {errors.service && (
            <p className="text-red text-3xl">{errors.service.message}</p>
          )}
        </div>
        {/*Fréquence */}
        <div>
          <div className="mb-3">
            <Typography variant="body-md">Fréquence souhaitée *</Typography>
          </div>
          <select
            {...register("frequency")}
            className="w-full border p-2 rounded"
          >
            <option value="">Sélectionnez une fréquence</option>
            <option value="ponctuel">Ponctuel</option>
            <option value="hebdomadaire">Hebdomadaire</option>
            <option value="bihebdomadaire">Bi-hebdomadaire</option>
            <option value="mensuel">Mensuel</option>
            <option value="autre">Autre</option>
          </select>
          {errors.frequency && (
            <p className="text-red text-3xl">{errors.frequency.message}</p>
          )}
        </div>
        {/*Décrivez vos besoins */}
        <div className="md:col-span-2">
          <div className="mb-3">
            <Typography variant="body-md">Décrivez vos besoins *</Typography>
          </div>
          <textarea
            placeholder="Précisez vos attentes, nombre d&apos;heures souhaitées..."
            {...register("message")}
            rows={5}
            className="w-full border p-2 rounded"
          />
          {errors.message && (
            <p className="text-red text-3xl">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/*Case RGPD*/}
      <div className="my-8">
        <div className="flex items-start">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 mr-2"
          />
          <label className="text-sm">
            J&apos;accepte que mes données soient traitées pour la gestion de ma
            demande conformément à la politique de confidentialité *
          </label>
        </div>
        {errors.consent && (
          <p className="text-red text-3xl">{errors.consent.message}</p>
        )}
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
        <Button type="submit" variant="primary" size="medium">
          Envoyer ma demande
        </Button>
      </div>
    </form>
  );
}
