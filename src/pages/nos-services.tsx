import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/footer/footer";
import { Header } from "@/ui/components/header/header";
import { Menu } from "@/ui/components/menu/menu";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";

import Image from 'next/image'
import Link from "next/link";

export default function NosServices(){
    return(
        <>
            <Seo title="ASMD" description="ASMD : ..." />
            <Header />
            <Menu />

            <Container>
                {/*Titre et description de la page */}
                <div className="flex flex-col items-center my-8">
                    {/*Titre*/}
                    <div>
                        <Typography variant="heading-lg">
                            Nos services
                        </Typography>
                    </div>
                    {/*Séprateur*/}
                    <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10" />
                    {/*Description*/}
                    <div className="max-w-4xl md:text-center mx-6">
                        <Typography variant="body-lg" theme="black-2" component="p">
                            ASMD vous accompagne au quotidien avec des services de qualité pour les personnes âgées et handicapées. Notre équipe qualifiée est à votre écoute pour répondre à tous vos besoins et vous offrir un soutien adapté à votre situation personnelle.
                        </Typography>
                    </div>
                </div>

                {/*Menu explorer*/}
                <div className="bg-white rounded-xl shadow-grey">
                    <div className="flex justify-center py-4">
                        <Typography variant="button-lg" theme="cyan">
                            Explorer nos services
                        </Typography>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center md:gap-40 mx-6 gap-y-3 py-4">
                        <div className="hover:text-cyan hover:border-b">
                            <Link href="#aide-personnes-agees">
                                <Typography variant="body-lg">
                                    Aide aux personnes âgées
                                </Typography>
                            </Link>
                        </div>
                        <div className="hover:text-cyan hover:border-b">
                            <Link href="#aide-personnes-handicapees">
                                <Typography variant="body-lg">
                                    Aide aux personnes handicapées
                                </Typography>
                            </Link>
                        </div>
                        <div className="hover:text-cyan hover:border-b">
                            <Link href="#soins-et-accompagnements">
                                <Typography variant="body-lg">
                                    Soins et accompagnements
                                </Typography>
                            </Link>
                        </div>   
                    </div>
                </div>
            </Container>

            {/*Bloc 1*/}
            <div className="bg-white my-10 py-10" id="aide-personnes-agees">
                <Container>
                    <div className="flex justify-center gap-12">

                    
                        {/*Titre + description*/}
                        <div className="max-w-xl mx-5">
                            <div>
                                <Typography variant="heading-lg" theme="cyan">
                                    Aide aux personnes âgées
                                </Typography>
                            </div>
                            <div className="mt-8">
                                <Typography className="leading-7" variant="body-md">
                                    <p>Chez ASMD, nous comprenons l'importance pour les personnes âgées de rester dans leur environnement familier aussi longtemps que possible. Notre service d'aide aux personnes âgées est conçu pour faciliter le maintien à domicile en toute sécurité et confort.</p>
                                    <br />
                                    <p>Nos intervenants qualifiés proposent un accompagnement personnalisé qui peut inclure :</p>
                                    <br />
                                    <p><strong>Aide à la toilette et à l'hygiène :</strong> assistance pour la toilette quotidienne, l'habillage et les soins d'hygiène personnelle</p>
                                    <p><strong>Préparation des repas :</strong> élaboration de repas équilibrés selon vos préférences et régimes alimentaires</p>
                                    <p><strong>Courses et approvisionnements :</strong> accompagnement pour les courses ou service de livraison à domicile</p>
                                    <p><strong>Entretien du domicile :</strong> ménage, repassage, rangement et autres tâches ménagères</p>
                                    <p><strong>Compagnie et activités :</strong> discussions, jeux, lecture, promenades et autres activités selon vos centres d'intérêt</p>
                                    <p><strong>Aide administrative :</strong> assistance pour le courrier, les démarches et la gestion des documents</p>
                                    <br />
                                    <p>Notre équipe est formée pour répondre aux besoins spécifiques des personnes âgées, avec bienveillance et respect de leur autonomie. Nous adaptons nos horaires et la fréquence de nos interventions selon vos besoins.</p>
                                </Typography>
                            </div>
                        </div>
                        
                        {/*Image*/}
                        <div className="hidden md:block w-[600px] h-[719px]">
                            <Image src="/assets/images/image-2.jpg" alt="" width={600} height={719} className="w-full h-full object-cover"/>
                        </div>

                    </div>
                </Container>
            </div>

            {/*Bloc 2*/}
            <div className="mt-10 p-5" id="aide-personnes-handicapees">
                <Container>
                    <div className="flex justify-center gap-12">

                        {/*Image*/}
                        <div className="hidden md:block w-[600px] h-[719px]">
                            <Image src="/assets/images/image-3.jpg" alt="" width={600} height={719} className="w-full h-full object-cover shadow-grey"/>
                        </div>

                    
                        {/*Titre + description*/}
                        <div className="max-w-xl">
                            <div>
                                <Typography variant="heading-lg" theme="cyan">
                                    Aide aux personnes handicapées
                                </Typography>
                            </div>
                            <div className="mt-8">
                                <Typography className="leading-7" variant="body-md">
                                    <p>ASMD propose des services adaptés aux personnes en situation de handicap pour les aider à conserver leur autonomie et améliorer leur qualité de vie quotidienne. Nous élaborons un plan d'accompagnement personnalisé en fonction de chaque type de handicap et des besoins spécifiques.</p>
                                    <br /> 
                                    <p>Notre offre d'accompagnement comprend :</p>
                                    <br />
                                    <p><strong>Aide aux gestes quotidiens :</strong> assistance pour les transferts, la mobilité, l'habillage et la toilette</p>
                                    <p><strong>Accompagnement spécialisé :</strong> adapté aux différents types de handicap (moteur, sensoriel, mental)</p>
                                    <p><strong>Soutien à la vie sociale :</strong> accompagnement aux activités extérieures, sorties culturelles ou rendez-vous</p>
                                    <p><strong>Adaptation du domicile :</strong> conseils pour l'aménagement du logement et l'utilisation d'équipements adaptés</p>
                                    <p><strong>Aide aux repas :</strong> préparation de repas adaptés aux restrictions alimentaires ou difficultés de déglutition</p>
                                    <p><strong>Stimulation cognitive :</strong> activités adaptées pour maintenir ou développer les capacités</p>
                                    <br />
                                    <p>Nos intervenants sont spécialement formés pour accompagner les personnes en situation de handicap avec respect de leur dignité et de leurs choix de vie. Nous travaillons en coordination avec les professionnels de santé et les structures spécialisées pour assurer un suivi optimal.</p>
                                </Typography>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            
            {/*Bloc 3*/}
            <div className="bg-white mt-10 py-10" id="soins-et-accompagnements">
                <Container>
                    <div className="flex justify-center gap-12">

                    
                        {/*Titre + description*/}
                        <div className="max-w-xl mx-5">
                            <div>
                                <Typography variant="heading-lg" theme="cyan">
                                    Soins et accompagnements
                                </Typography>
                            </div>
                            <div className="mt-8">
                                <Typography className="leading-7" variant="body-md">
                                    <p>Au-delà de l'aide à domicile, ASMD propose des services de coordination et d'accompagnement médical pour assurer un suivi de santé optimal. Nous facilitons la communication entre les différents professionnels de santé et veillons à la bonne observance des traitements.</p>
                                    <br />
                                    <p>Notre service de soins et accompagnements inclut :</p>
                                    <br />
                                    <p><strong>Coordination avec les professionnels de santé :</strong> liaison avec médecins, infirmiers, kinésithérapeutes et autres spécialistes</p>
                                    <p><strong>Accompagnement aux rendez-vous médicaux :</strong> transport et présence lors des consultations</p>
                                    <p><strong>Aide à la prise de médicaments :</strong> rappels et surveillance de la prise selon les prescriptions</p>
                                    <p><strong>Surveillance de l'état de santé :</strong> vigilance sur les symptômes et alerte en cas de changement</p>
                                    <p><strong>Gestion des documents médicaux :</strong> classement des ordonnances, résultats d'analyses et comptes-rendus</p>
                                    <p><strong>Soutien psychologique :</strong> écoute attentive et réconfort au quotidien</p>
                                    <br />
                                    <p>Notre équipe est formée pour répondre aux situations d'urgence et pour communiquer efficacement avec les services médicaux. Nous nous assurons que toutes les informations importantes concernant votre santé sont correctement transmises et suivies.</p>
                                </Typography>
                            </div>
                        </div>
                        
                        {/*Image*/}
                        <div className="hidden md:block w-[600px] h-[719px]">
                            <Image src="/assets/images/image-4.jpg" alt="" width={600} height={719} className="w-full h-full object-cover shadow-grey"/>
                        </div>

                    </div>
                </Container>
            </div>

            {/*Footer*/}
            <Footer/>


            
        </>
    )
}