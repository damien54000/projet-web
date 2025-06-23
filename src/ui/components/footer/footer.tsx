//Composant : Footer
//Affiche le pied de la page

//Import Design system
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

//Import externe
import Link from "next/link";


export const Footer = () => {
    return (
        <>
        {/*Footer : Demande de devis */}
        <div className="flex flex-col justify-center items-center bg-bg-cyan py-12">
            <div className="text-center">
                <Typography variant="heading-xl">
                    Demandez un devis personnalisé et gratuit
                </Typography>
            </div>
            <div className="max-w-3xl text-center py-7">
                <Typography variant="body-lg">
                    Nos conseillers sont à votre disposition pour évaluer vos besoins et vous proposer une solution adaptée. Bénéficiez d&apos;un service sur mesure qui répond parfaitement à vos attentes.
                </Typography>
            </div>
            <div className="pt-2">
                <Link href="/devis">
                    <Button variant="secondary">Demander un devis</Button>
                </Link>
                
            </div>
        </div>

        {/*Footer : Pourquoi choisir ASMD ? */}
        <div className="bg-white pt-12 pb-20">
            <div className="flex flex-col items-center">
                <Typography variant="heading-lg">Pourquoi choisir ASMD ?</Typography>
                <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10"></div>
            </div>
            <div className="px-4 sm:px-6 md:flex justify-center">
                {/*Colonne gauche */}
                <div className="md:mr-10">
                    {/*Bloc 1 */}
                    <div className="flex gap-4 mb-7">
                        <div className="bg-grey-2 h-[60px] w-[60px] rounded-full flex items-center justify-center shrink-0">
                            <Typography theme="cyan" variant="heading-lg">
                                ✓
                            </Typography>
                        </div>
                        <div className="max-w-md">
                            <div>
                                <Typography variant="heading-xs">
                                    Personnel qualifié
                                </Typography>
                            </div>
                            <div className="mt-1">
                                <Typography variant="body-md">
                                    Nos intervenants sont formés et expérimentés pour offrir des services de qualité et sécurisés.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    
                    {/*Bloc 2 */}
                    <div className="flex gap-4 mb-7">
                        <div className="bg-grey-2 h-[60px] w-[60px] rounded-full flex items-center justify-center shrink-0">
                            <Typography theme="cyan" variant="heading-lg">
                                ✓
                            </Typography>
                        </div>
                        <div className="max-w-md">
                            <div>
                                <Typography variant="heading-xs">
                                    Services personnalisés
                                </Typography>
                            </div>
                            <div className="mt-1">
                                <Typography variant="body-md">
                                    Une prise en charge adaptée à chaque situation et à l&apos;évolution de vos besoins.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Colonne droite */}
                <div>
                    {/*Bloc 3 */}
                    <div className="flex gap-4 mb-7">
                        <div className="bg-grey-2 h-[60px] w-[60px] rounded-full flex items-center justify-center shrink-0">
                            <Typography theme="cyan" variant="heading-lg">
                                ✓
                            </Typography>
                        </div>
                        <div className="max-w-md">
                            <div>
                                <Typography variant="heading-xs">
                                    Disponibilité 7j/7
                                </Typography>
                            </div>
                            <div className="mt-1">
                                <Typography variant="body-md">
                                    Une équipe disponible tous les jours de la semaine pour répondre à vos besoins.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    
                    {/*Bloc 4 */}
                    <div className="flex gap-4">
                        <div className="bg-grey-2 h-[60px] w-[60px] rounded-full flex items-center justify-center shrink-0">
                            <Typography theme="cyan" variant="heading-lg">
                                ✓
                            </Typography>
                        </div>
                        <div className="max-w-md">
                            <div>
                                <Typography variant="heading-xs">
                                    Suivi régulier
                                </Typography>
                            </div>
                            <div className="mt-1">
                                <Typography variant="body-md">
                                    Des évaluations régulières pour garantir votre satisfaction et adapter nos services.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        {/*FOOTER */}
        <div className="bg-footer flex flex-col md:flex-row justify-center py-10 md:gap-40 gap-10 px-4">
            {/*Colonne 1 */}
            <div className="max-w-sm">
                <div>
                    <Typography theme="white" variant="heading-xs">
                        À propos d&apos;ASMD
                    </Typography>
                </div>
                <div className="w-10 h-1 bg-gradient-primary mt-3 mb-5"></div>
                <div>
                    <Typography theme="white" variant="body-md">
                        ASMD est une entreprise spécialisée dans l&apos;aide à domicile pour les personnes âgées et en situation de handicap. Notre mission est d&apos;améliorer la qualité de vie de nos bénéficiaires tout en respectant leur dignité et leur autonomie.
                    </Typography>
                </div>
            </div>

            {/*Colonne 2 */}
            <div>
                <div>
                    <Typography theme="white" variant="heading-xs">
                        Liens rapides
                    </Typography>
                </div>
                <div className="w-10 h-1 bg-gradient-primary mt-3 mb-5"></div>
                <div className="flex flex-col gap-y-3">
                    <div>
                        <Link href="/">
                            <Typography variant="body-md" theme="grey">Accueil</Typography>
                        </Link>
                    </div>
                    <div>
                        <Link href="/nos-services">
                            <Typography variant="body-md" theme="grey">Nos services</Typography>
                        </Link>
                    </div>
                    <div>
                        <Link href="a-propos">
                            <Typography variant="body-md" theme="grey">A propos</Typography>
                        </Link>
                    </div>
                    <div>
                        <Link href="/espace-client">
                            <Typography variant="body-md" theme="grey">Espace client</Typography>
                        </Link>
                    </div>
                    <div>
                        <Link href="/devis">
                            <Typography variant="body-md" theme="grey">Demander un devis</Typography>
                        </Link>
                    </div>
                    <div>
                        <Link href="/contact">
                            <Typography variant="body-md" theme="grey">Contact</Typography>
                        </Link>
                    </div>
                </div>
            </div>

            {/*Colonne 3 */}
            <div>
                <div>
                    <Typography theme="white" variant="heading-xs">
                        Contactez-nous
                    </Typography>
                </div>
                <div className="w-10 h-1 bg-gradient-primary mt-3 mb-5"></div>
                <div>
                    <Typography variant="body-md" theme="white">contact@asmd54.fr</Typography>
                    <Typography variant="body-md" theme="white">03 00 00 00 00</Typography>
                    <Typography variant="body-md" theme="white">23 bis rue Fabvier, 54700 Pont-à-Mousson</Typography>
                </div> 
            </div>
        </div>

        {/*Copyright*/}
        <div className="bg-footer">
            <div className="bg-grey-footer max-w-6xl h-[1px] mx-auto"/>
            <div className="flex justify-center py-4 gap-4">
                <div>
                    <Typography variant="caption" theme="grey">
                        © 2025 ASMD. Tous droits réservés.
                    </Typography>
                </div>
                <div className="bg-grey-footer w-[1px] h-4"/>
                <div>
                    <Link href="/mentions-legales">
                        <Typography variant="caption" theme="grey">
                            Mentions légales
                        </Typography>
                    </Link>
                </div>
            </div>
        </div>



        
        </>
    );
};