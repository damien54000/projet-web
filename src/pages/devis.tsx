import { generateCSRFToken } from "@/lib/csrf";
import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import DevisForm from "@/ui/components/form/devisform";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { GetServerSideProps } from "next";

export default function Devis({ csrfToken }: { csrfToken: string }) {
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
            <Typography variant="heading-lg">Demander un devis</Typography>
          </div>
          {/*Séprateur*/}
          <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10" />
          {/*Description*/}
          <div className="max-w-4xl md:text-center mx-6">
            <Typography variant="body-lg" theme="black-2" component="p">
              Obtenez une estimation personnalisée pour nos services d&apos;aide à
              domicile. Nos conseillers sont à votre disposition pour étudier
              vos besoins et vous proposer une solution adaptée.
            </Typography>
          </div>
        </div>

        {/*Cartes */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1080px] mx-auto">
          {/*Carte 1 */}
          <div className="bg-white border-t-2 text-center border-cyan rounded-2xl w-[340px] h-[165px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Titre */}
            <div className="mt-5">
              <Typography variant="button-lg" theme="cyan">
                Devis gratuit
              </Typography>
            </div>
            {/*Description */}
            <div className="m-8">
              <Typography variant="body-md">
                Recevez une estimation détaillée sans engagement de votre part
              </Typography>
            </div>
          </div>

          {/*Carte 2 */}
          <div className="bg-white border-t-2 text-center border-cyan rounded-2xl w-[340px] h-[165px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Titre */}
            <div className="mt-5">
              <Typography variant="button-lg" theme="cyan">
                Réponse rapide
              </Typography>
            </div>
            {/*Description */}
            <div className="m-8">
              <Typography variant="body-md">
                Nous nous engageons à vous répondre sous 24h maximum
              </Typography>
            </div>
          </div>

          {/*Carte 3 */}
          <div className="bg-white border-t-2 text-center border-cyan rounded-2xl w-[340px] h-[165px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Titre */}
            <div className="mt-5">
              <Typography variant="button-lg" theme="cyan">
                Accompagnement personnalisé
              </Typography>
            </div>
            {/*Description */}
            <div className="m-8">
              <Typography variant="body-md">
                Un conseiller dédié pour comprendre vos besoins spécifiques
              </Typography>
            </div>
          </div>
        </div>

        {/*Formulaire */}
        <div className="flex justify-center my-12">
          <div className="w-full max-w-[1080px]">
            <DevisForm csrfToken={csrfToken} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const secret = process.env.CSRF_SECRET || "default_secret";
  const csrfToken = generateCSRFToken(secret);

  return {
    props: {
      csrfToken,
    },
  };
};
