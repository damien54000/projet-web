//Composant : Header
//Affiche l'en t^te du site avec navigation responsive, logo, boutons d'action

//Import Design system
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

//Import externe
import Link from "next/link";
import { useState } from "react";


export const Header = () => {
  //Afficher ou cacher le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header mobile (icone burger et logo centré) */}
      <div className="flex items-center py-8 px-6 md:hidden">
        {/* Bouton menu burger */}
        <button
          className="flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-[2px] bg-gradient-primary rounded"></span>
          <span className="w-6 h-[2px] bg-gradient-primary rounded"></span>
          <span className="w-6 h-[2px] bg-gradient-primary rounded"></span>
        </button>

        {/* Logo centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Logo size="small" />
          </Link>
        </div>
      </div>

      {/* Ligne de séparation sous le header mobile */}
      <div className="md:hidden bg-gradient-primary w-full h-[1px] shadow-grey" />

      {/* Menu mobile (visible quand isMenuOpen est true) */}
      {isMenuOpen && (
        <div className="md:hidden px-10 py-4 space-y-4 flex flex-col items-center">
          {/* Liens de navigation */}
          <div className="bg-gradient-primary w-full text-center">
            {/* Lien Accueil */}
            <div className="py-3">
              <Link href="/">
                <Typography variant="nav-text" theme="white">
                  Accueil
                </Typography>
              </Link>
            </div>
            <div className="bg-white w-full h-[1px]" />

            {/* Lien Nos services */}
            <div className="py-3">
              <Link href="/nos-services">
                <Typography variant="nav-text" theme="white">
                  Nos services
                </Typography>
              </Link>
            </div>
            <div className="bg-white w-full h-[1px]" />

            {/* Lien A propos */}
            <div className="py-3">
              <Link href="/a-propos">
                <Typography variant="nav-text" theme="white">
                  A propos
                </Typography>
              </Link>
            </div>
            <div className="bg-white w-full h-[1px]" />

            {/* Lien Contact */}
            <div className="py-3">
              <Link href="/contact">
                <Typography variant="nav-text" theme="white">
                  Contact
                </Typography>
              </Link>
            </div>
            <div className="bg-white w-full h-[1px]" />
          </div>

          {/* Infos téléphone et boutons */}
          <div>
            <Typography variant="heading-sm">06 44 25 60 22</Typography>
            <Typography variant="caption-sm">7j/7 - 8h à 20h</Typography>
          </div>
          <Link href="/espace-client">
            <Button variant="tertiary">Espace client</Button>
          </Link>
          <Link href="/devis">
            <Button variant="secondary">Demander un devis</Button>
          </Link>
        </div>
      )}

      {/* Header Ordinateur */}
      <div className="hidden md:flex items-center justify-between py-2 px-12">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <Typography variant="heading-sm">06 44 25 60 22</Typography>
            <Typography variant="caption-sm">7j/7 - 8h à 20h</Typography>
          </div>
          <Link href="/espace-client">
            <Button variant="tertiary">Espace client</Button>
          </Link>
          <Link href="/devis">
            <Button variant="secondary">Demander un devis</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
