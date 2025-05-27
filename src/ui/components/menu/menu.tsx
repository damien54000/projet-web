//Composant : Menu
//Affiche un menu de navigation horizontal visible uniquement sur ordinateur

//Import Design system
import { Typography } from "@/ui/design-system/typography/typography";

//Import externe
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="hidden md:flex items-center justify-between py-4 px-60 bg-gradient-primary">
      <Link href="/">
        <Typography variant="nav-text" theme="white" component="div">
          Accueil
        </Typography>
      </Link>
      <Link href="/nos-services">
        <Typography variant="nav-text" theme="white" component="div">
          Nos services
        </Typography>
      </Link>
      <Link href="/a-propos">
        <Typography variant="nav-text" theme="white" component="div">
          A propos
        </Typography>
      </Link>
      <Link href="/contact">
        <Typography variant="nav-text" theme="white" component="div">
          Contact
        </Typography>
      </Link>
    </div>
  );
};
