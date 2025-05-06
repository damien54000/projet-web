import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";

interface Props {};

export const Menu = ({}: Props) => {
    return (
        <div className="flex items-center justify-between py-4 px-60 bg-gradient-primary">
            <Link href="/"><Typography variant="nav-text" theme="white" component="div">Accueil</Typography></Link>
            <Link href="/nos-services"><Typography variant="nav-text" theme="white" component="div">Nos services</Typography></Link>
            <Link href="/a-propos"><Typography variant="nav-text" theme="white" component="div">A propos</Typography></Link>
            <Link href="/contact"><Typography variant="nav-text" theme="white" component="div">Contact</Typography></Link>
        </div>
    );
};