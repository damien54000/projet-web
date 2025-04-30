import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Typography variant="heading-xl" theme="primary">
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
      </Typography>
      
    </>
  );
}
