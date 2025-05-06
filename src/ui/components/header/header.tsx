import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";

interface Props {

};

export const Header = ({}: Props) => {
    return (
        <div className="flex items-center justify-between py-2 px-12">
            <Link href="/"><Logo/></Link>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                    <Typography variant="heading-sm">06 44 25 60 22</Typography>
                    <Typography variant="caption-sm">7j/7 - 8h à 20h</Typography>
                </div>
                <Link href="/espace-client"><Button variant="tertiary">Espace client</Button></Link>
                <Link href="/devis"><Button variant="secondary">Demander un devis</Button></Link>
            </div>
        </div>
    );
};