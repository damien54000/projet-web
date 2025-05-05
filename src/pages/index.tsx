import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <div className="flex items-center gap-4 p-10">
        <Button variant="tertiary">👤 Espace client</Button>
        <Button variant="primary" size="small">En savoir plus</Button>
        <Button variant="secondary" size="large">Demander un devis</Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Logo />
        <Logo size="small"/>
      </div>
    






      
      {/*<Typography variant="heading-xl" theme="primary">
         Test
      </Typography>
      <Typography variant="heading-lg" component="div">
         Test
      </Typography>
      <Typography variant="button-lg" component="div">
         Test
      </Typography>
      <Typography variant="heading-sm" component="div">
         Test
      </Typography>
      <Typography variant="heading-xs" component="div">
         Test
      </Typography>*/}
      
    </>
  );
}
