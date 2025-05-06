import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {};

export const Footer = ({}: Props) => {
    return (
        <>
        {/*Footer : Demande de devis */}
        <div className="flex flex-col items-center bg-bg-cyan py-12">
            <div>
                <Typography variant="heading-xl">
                    Demandez un devis personnalisé et gratuit
                </Typography>
            </div>
            <div className="mx-80 text-center py-7">
                <Typography variant="body-lg">
                    Nos conseillers sont à votre disposition pour évaluer vos besoins et vous proposer une solution adaptée. Bénéficiez d'un service sur mesure qui répond parfaitement à vos attentes.
                </Typography>
            </div>
            <div className="pt-2">
                <Button variant="secondary">Demander un devis</Button>
            </div>
        </div>

        {/*Footer : Pourquoi choisir ASMD ? */}
        <div className="bg-white py-12">
            <div className="flex flex-col items-center">
                <Typography variant="heading-lg">Pourquoi choisir ASMD ?</Typography>
                <div className="w-20 h-1 bg-gradient-primary mt-3 mb-10"></div>
            </div>
            <div>
                <div>
                    <div className="flex">
                        <div className="bg-grey-2 h-[60px] w-[60px] rounded-full flex items-center justify-center">
                            <Typography variant="heading-lg">
                                ✓
                            </Typography>
                        </div>
                        <div>
                            <div>
                                <Typography variant="heading-xs">
                                    Personnel qualifié
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body-md">
                                    Nos intervenants sont formés et expérimentés pour offrir des services de qualité et sécurisés.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        
        </>
    );
};