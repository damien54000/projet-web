import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";


export default function APropos() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Header />
      <Menu />

      <Container>
        <div className="flex flex-col items-center my-8">
          {/*Titre*/}
          <div>
            <Typography variant="heading-lg">A propos</Typography>
          </div>
          {/*Séprateur*/}
          <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10" />
        </div>
      </Container>

      {/*Partie 1 : Notre histoire */}
      <div className="bg-white py-10">
        <Container>
          {/*Titre + description */}
          <div>
            {/*Titre */}
            <div className="mb-7">
              <Typography variant="button-lg" theme="cyan">
                Notre histoire
              </Typography>
            </div>
            {/*Description */}
            <div>
              <Typography className="leading-7" variant="body-md">
                <p>
                  Fondée en 2015, ASMD est née d&apos;une volonté profonde de
                  repenser l&apos;aide à domicile pour la rendre véritablement
                  personnalisée et humaine. Face au constat que chaque personne
                  a des besoins uniques, nous avons développé une approche
                  centrée sur l&apos;individu et son environnement.
                </p>
                <br />
                <p>
                  Depuis 10 ans, nous accompagnons les personnes âgées et en
                  situation de handicap dans leur quotidien, avec pour objectif
                  constant de préserver leur autonomie et leur qualité de vie à
                  domicile.
                </p>
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/*Partie 2 : Notre mission */}
      <div className="py-10">
        <Container>
          {/*Titre + description */}
          <div>
            {/*Titre */}
            <div className="mb-7">
              <Typography variant="button-lg" theme="cyan">
                Notre mission
              </Typography>
            </div>
            {/*Description */}
            <div>
              <Typography className="leading-7" variant="body-md">
                <p>
                  ASMD a pour mission de permettre à chacun de vivre dignement
                  et confortablement dans son environnement familier, quel que
                  soit son âge ou sa condition. Nous croyons fermement que le
                  maintien à domicile est un facteur essentiel de bien-être et
                  d&apos;épanouissement personnel.
                </p>
                <br />
                <p>
                  Pour accomplir cette mission, nous proposons des services
                  d&apos;aide à domicile adaptés précisément aux besoins et au mode
                  de vie de chaque bénéficiaire. Notre accompagnement évolue en
                  fonction des changements de situation, pour toujours rester
                  pertinent et efficace.
                </p>
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/*Partie 3 : Nos valeurs */}
      <div className="bg-white py-10">
        <Container>
          {/*Titre + description */}
          <div>
            {/*Titre */}
            <div className="mb-7">
              <Typography variant="button-lg" theme="cyan">
                Nos valeurs
              </Typography>
            </div>
            {/*Description */}
            <div>
              <Typography className="leading-7" variant="body-md">
                <p>
                  Nos valeurs sont le fondement de notre travail quotidien et
                  guident chacune de nos actions auprès de nos bénéficiaires :
                </p>
              </Typography>
            </div>
          </div>
          {/*Cartes */}
          <div className="flex flex-col items-center md:flex-row flex-wrap gap-x-12 gap-y-8 my-8">
            {/*Carte 1 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Respect
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  Nous accordons une importance primordiale au respect de la
                  personne, de ses choix, de son intimité et de son mode de vie.
                  Chaque bénéficiaire est traité avec dignité et considération.
                </Typography>
              </div>
            </div>

            {/*Carte 2 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Ecoute
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  L&apos;écoute attentive des besoins, des préférences et des
                  inquiétudes de nos bénéficiaires et de leurs familles est au
                  cœur de notre démarche.
                </Typography>
              </div>
            </div>

            {/*Carte 3 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Professionnalisme
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  Nous nous engageons à fournir des services de haute qualité,
                  avec rigueur et méthode, en respectant les meilleures
                  pratiques du secteur.
                </Typography>
              </div>
            </div>

            {/*Carte 4 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Adaptabilité
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  Nous comprenons que les besoins évoluent et nous ajustons nos
                  services en conséquence, avec flexibilité et réactivité.
                </Typography>
              </div>
            </div>

            {/*Carte 5 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Proximité
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  Nous cultivons une relation de confiance avec nos
                  bénéficiaires et restons disponibles 7j/7 pour répondre à
                  leurs besoins.
                </Typography>
              </div>
            </div>

            {/*Carte 6 */}
            <div className="py-4 px-5 w-[235px] h-[310px] bg-grey-4 rounded-2xl border-t-2 border-cyan shadow-grey hover:-translate-y-1 transform transition-transform duration-300">
              {/*Titre*/}
              <div className="mb-4">
                <Typography variant="button-lg" theme="cyan">
                  Bienveillance
                </Typography>
              </div>
              {/*Description*/}
              <div>
                <Typography
                  className="leading-7"
                  variant="body-md"
                  component="p"
                >
                  Notre approche est empreinte de bienveillance, d&apos;empathie et
                  de chaleur humaine pour créer un environnement rassurant et
                  agréable.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/*Partie 4 : Notre approche personnalisée */}
      <div className="py-10">
        <Container>
          {/*Titre + description */}
          <div>
            {/*Titre */}
            <div className="mb-7">
              <Typography variant="button-lg" theme="cyan">
                Notre approche personnalisée
              </Typography>
            </div>
            {/*Description */}
            <div>
              <Typography className="leading-7" variant="body-md">
                <p>
                  Chez ASMD, nous avons la conviction qu&apos;il n&apos;existe pas de
                  solution standard en matière d&apos;aide à domicile. Chaque
                  personne est unique, avec son histoire, ses habitudes et ses
                  besoins spécifiques.
                </p>
                <br />
                <p>
                  C&apos;est pourquoi nous avons développé une méthode d&apos;évaluation
                  approfondie qui nous permet de comprendre précisément votre
                  situation et vos attentes. À partir de cette analyse, nous
                  élaborons un plan d&apos;accompagnement sur mesure, qui sera
                  régulièrement réévalué pour s&apos;adapter à l&apos;évolution de vos
                  besoins.
                </p>
                <br />
                <p>
                  Cette approche personnalisée est notre marque distinctive et
                  la garantie d&apos;un service qui vous correspond vraiment.
                </p>
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/*Partie 5 : Nos engagements */}
      <div className="bg-white py-10">
        <Container>
          {/*Titre + description */}
          <div>
            {/*Titre */}
            <div className="mb-7">
              <Typography variant="button-lg" theme="cyan">
                Nos engagements
              </Typography>
            </div>
            {/*Description */}
            <div className="bg-grey-4 p-8">
              <Typography className="leading-7" variant="body-md">
                <p>
                  • Vous proposer un accompagnement adapté à vos besoins
                  spécifiques et à votre mode de vie
                </p>
                <p>
                  • Assurer une disponibilité 7j/7 pour répondre à vos attentes
                </p>
                <p>
                  • Garantir la continuité de service, même en cas d&apos;absence de
                  votre intervenant habituel
                </p>
                <p>
                  • Maintenir une communication transparente et régulière avec
                  vous et votre famille
                </p>
                <p>
                  • Évaluer régulièrement la qualité de nos prestations et votre
                  satisfaction
                </p>
                <p>
                  • Vous accompagner dans vos démarches administratives et
                  demandes d&apos;aides financières
                </p>
                <p>
                  • Respecter scrupuleusement votre intimité et votre espace
                  personnel
                </p>
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
