import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Header />
      <Menu />

      <Container>
        <div className="flex items-center justify-between md:py-16 py-10 px-14">
          <div className="flex flex-col items-start max-w-sm gap-4">
            <Typography variant="heading-xl" theme="primary">
              Services d&apos;aide à domicile personnalisés
            </Typography>
            <Typography variant="body-lg" theme="black">
              ASMD vous accompagne au quotidien avec des services d&apos;aide à la
              personne de qualité pour les personnes âgées et handicapées. Notre
              équipe qualifiée est à votre écoute pour répondre à tous vos
              besoins.
            </Typography>
            <div className="hidden md:block mt-4">
              <Link href="/devis">
                <Button size="large" variant="secondary">
                  Demander un devis
                </Button>
              </Link>
            </div>
            <div className="md:hidden mx-auto my-8">
              <Link href="/devis">
                <Button size="medium" variant="secondary">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              className="rounded-lg object-cover w-full h-auto shadow-grey"
              src="/assets/images/image-1.jpg"
              width={565.04}
              height={384}
              alt={""}
            />
          </div>
        </div>

        {/*3 cartes*/}
        <div className="flex flex-col items-center">
          <Typography variant="heading-lg">Nos services</Typography>
          <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10" />
        </div>
        <div className="flex justify-center items-start gap-8 flex-wrap pb-10">
          {/* Carte 1 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Image*/}
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image
                src="/assets/images/image-2.jpg"
                alt=""
                width={363}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/*Titre*/}
            <div className="my-6 mx-6">
              <Typography variant="heading-sm" theme="cyan">
                Aide aux personnes âgées
              </Typography>
              {/*Description*/}
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Nos auxiliaires de vie accompagnent les personnes âgées dans
                  tous les actes du quotidien : toilette, repas, courses, ménage
                  et activités sociales.
                </Typography>
              </div>
              <div className="my-12">
                {/*Bouton*/}
                <Link href="/nos-services#aide-personnes-agees">
                  <Button size="small" variant="primary">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Image*/}
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image
                src="/assets/images/image-3.jpg"
                alt=""
                width={363}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-6 mx-6">
              {/*Titre*/}
              <Typography variant="heading-sm" theme="cyan">
                Aide aux personnes handicapées
              </Typography>
              {/*Description*/}
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Services adaptés aux besoins spécifiques des personnes en
                  situation de handicap pour favoriser l&apos;autonomie et améliorer
                  la qualité de vie.
                </Typography>
              </div>
              <div className="my-12">
                <Link href="/nos-services#aide-personnes-handicapees">
                  <Button size="small" variant="primary">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
            {/*Image*/}
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image
                src="/assets/images/image-4.jpg"
                alt=""
                width={363}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-6 mx-6">
              {/*Titre*/}
              <Typography variant="heading-sm" theme="cyan">
                Soins et accompagnement
              </Typography>
              {/*Description*/}
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Coordination avec les professionnels de santé, aide à la prise
                  de médicaments, accompagnement aux rendez-vous médicaux.
                </Typography>
              </div>
              <div className="my-12">
                <Link href="/nos-services#soins-et-accompagnements">
                  <Button size="small" variant="primary">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
