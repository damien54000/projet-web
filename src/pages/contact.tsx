//Page Contact

//Import externes
import { GetServerSideProps } from "next";

//Import interne
//Composant
import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import ContactForm from "@/ui/components/form/contactform";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";

//Design system
import { Typography } from "@/ui/design-system/typography/typography";

//Librairies
import { generateCSRFToken } from "@/lib/csrf";

export default function Contact({ csrfToken }: { csrfToken: string }) {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Header />
      <Menu />

      <Container>
        {/*Titre et description de la page */}
        <div className="flex flex-col items-center my-8">
          {/*Titre*/}
          <div>
            <Typography variant="heading-lg">Contact</Typography>
          </div>
          {/*Séprateur*/}
          <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10" />
          {/*Description*/}
          <div className="max-w-4xl md:text-center mx-6">
            <Typography variant="body-lg" theme="black-2" component="p">
              Besoin d&apos;informations sur nos services d&apos;aide à domicile ? Une
              question spécifique ? Notre équipe est disponible 7j/7 pour vous
              répondre et vous accompagner dans toutes vos démarches. N&apos;hésitez
              pas à nous contacter par téléphone ou en remplissant le formulaire
              ci-dessous.
            </Typography>
          </div>
        </div>

        {/*Formulaire + coordonnées*/}
        <div className="flex justify-center items-center md:items-start gap-x-32 gap-y-20 md:flex-row flex-col mb-10">
          {/*Formulaire */}
          <div>
            <ContactForm csrfToken={csrfToken} />
          </div>
          {/*Coordonnées */}
          <div className="bg-white max-w-80 p-6 rounded-lg shadow-base">
            <div>
              <Typography variant="button-lg" theme="cyan">
                Coordonnées
              </Typography>
              {/*Séprateur*/}
              <div className="w-20 h-1 bg-gradient-primary mt-3 mb-8" />
            </div>

            {/*Toutes les coordonnées */}
            <div className=" flex flex-col gap-y-14">
              {/*Coordonnée 1 : Adresse*/}
              <div className="flex">
                <div className="bg-gradient-primary mr-5 w-10 h-10 rounded-full shrink-0" />
                {/*Titre + description*/}
                <div>
                  {/*Titre*/}
                  <div className="mb-2">
                    <Typography variant="button-md">Adresse</Typography>
                  </div>
                  {/*Description*/}
                  <div>
                    <Typography variant="body-md">
                      23 bis rue Fabvier, 54700 Pont-à-Mousson
                    </Typography>
                  </div>
                </div>
              </div>

              {/*Coordonnée 2 : Téléphone*/}
              <div className="flex">
                <div className="bg-gradient-primary mr-5 w-10 h-10 rounded-full shrink-0" />
                {/*Titre + description*/}
                <div>
                  {/*Titre*/}
                  <div className="mb-2">
                    <Typography variant="button-md">Téléphone</Typography>
                  </div>
                  {/*Description*/}
                  <div>
                    <Typography variant="body-md">06 44 25 60 22</Typography>
                  </div>
                </div>
              </div>

              {/*Coordonnée 3 : Email*/}
              <div className="flex">
                <div className="bg-gradient-primary mr-5 w-10 h-10 rounded-full shrink-0" />
                {/*Titre + description*/}
                <div>
                  {/*Titre*/}
                  <div className="mb-2">
                    <Typography variant="button-md">Email</Typography>
                  </div>
                  {/*Description*/}
                  <div>
                    <Typography variant="body-md">
                      aurelieme@icloud.com
                    </Typography>
                  </div>
                </div>
              </div>

              {/*Coordonnée 4 : Horaires*/}
              <div className="flex">
                <div className="bg-gradient-primary mr-5 w-10 h-10 rounded-full shrink-0" />
                {/*Titre + description*/}
                <div>
                  {/*Titre*/}
                  <div className="mb-2">
                    <Typography variant="button-md">Horaires</Typography>
                  </div>
                  {/*Description*/}
                  <div>
                    <Typography variant="body-md">
                      Disponible 7j/7, de 8h à 20h pour vous accompagner
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

//Fonction exécutée coté serveur à chaque requête
//Génère un token CSRF et le transmet aux props de la page

export const getServerSideProps: GetServerSideProps = async () => {
  const secret = process.env.CSRF_SECRET || "default_secret"; //Récupère le secret CSRF depuis les variables d'environnement
  const csrfToken = generateCSRFToken(secret); //Génère un token CSRF unique

  return {
    props: {
      csrfToken, // Transmet le token à la page comme prop
    },
  };
};
