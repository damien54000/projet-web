import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import parsePhoneNumberFromString from "libphonenumber-js";

{/*Schema de validation */}
const contactSchema = z.object({
  name: z.string().min(2, "Nom et prénom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro requis").refine((val) => {
    const phone = parsePhoneNumberFromString(val, "FR");
    return phone?.isValid();
  }, {
    message: "Numéro invalide",
  }),
  subject: z.string().min(2, "Objet requis"),
  message: z.string().min(10, "Message trop court"),
  consent: z.literal(true, {errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }),}),
});

{/*Typage*/}
type ContactFormData = z.infer<typeof contactSchema>;

{/*Initialisation du formulaire */}
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  {/*Envoie vers le backend quand tout est validé*/}
  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    // Tu pourras ici appeler l'API sécurisée qu'on a faite
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-base max-w-2xl">
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
            J'accepte que mes données soient traitées pour la gestion de ma demande conformément à la politique de confidentialité *
          </label>
        </div>
        {errors.consent && <p className="text-red text-3xl">{errors.consent.message}</p>}
      </div>

      {/*Bouton envoyer ma demande */}
      <div>
        <Button type="submit" variant="primary" size="medium">Envoyer ma demande</Button>
      </div>
    </form>
  );
}
