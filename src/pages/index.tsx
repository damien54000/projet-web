import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Header />
      <Menu />
      <Container>
        <div className="flex items-center justify-between py-16 px-14">
          <div className="flex flex-col items-start space-y-6 max-w-sm">
            <Typography variant="heading-xl" theme="primary">Services d'aide à domicile personnalisés</Typography>
            <Typography variant="body-lg" theme="black">ASMD vous accompagne au quotidien avec des services d'aide à la personne de qualité pour les personnes âgées et handicapées. Notre équipe qualifiée est à votre écoute pour répondre à tous vos besoins.</Typography>
            <Button size="large" variant="secondary">Demander un devis</Button>
          </div>
          <div>
            <Image className="rounded-lg object-cover w-full h-auto" src="/assets/images/image-1.jpg" width={565.04} height={384} alt={""} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography variant="heading-lg">Nos services</Typography>
          <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10"></div>
        </div>
        <div className="flex justify-center items-start gap-8 flex-wrap pb-10">
          {/* Carte 1 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-base hover:-translate-y-1 transform transition-transform duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image src="/assets/images/image-2.jpg" alt="" width={363} height={200} className="w-full h-full object-cover"/>
            </div>
            <div className="my-6 mx-6">
              <Typography variant="heading-sm" theme="cyan">Aide aux personnes âgées</Typography>
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Nos auxiliaires de vie accompagnent les personnes âgées dans tous les actes du quotidien : toilette, repas, courses, ménage et activités sociales.
                </Typography>
              </div>
              <div className="my-12">
                <Button size="small" variant="primary">En savoir plus</Button>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-base hover:-translate-y-1 transform transition-transform duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image src="/assets/images/image-3.jpg" alt="" width={363} height={200} className="w-full h-full object-cover"/>
            </div>
            <div className="my-6 mx-6">
              <Typography variant="heading-sm" theme="cyan">Aide aux personnes handicapées</Typography>
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Services adaptés aux besoins spécifiques des personnes en situation de handicap pour favoriser l'autonomie et améliorer la qualité de vie.
                </Typography>
              </div>
              <div className="my-12">
                <Button size="small" variant="primary">En savoir plus</Button>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-2xl w-[363px] h-[450px] shadow-base hover:-translate-y-1 transform transition-transform duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl">
              <Image src="/assets/images/image-4.jpg" alt="" width={363} height={200} className="w-full h-full object-cover"/>
            </div>
            <div className="my-6 mx-6">
              <Typography variant="heading-sm" theme="cyan">Soins et accompagnement</Typography>
              <div className="my-3">
                <Typography variant="body-md" theme="black">
                  Coordination avec les professionnels de santé, aide à la prise de médicaments, accompagnement aux rendez-vous médicaux.
                </Typography>
              </div>
              <div className="my-12">
                <Button size="small" variant="primary">En savoir plus</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />


      
    </>
  );
}
