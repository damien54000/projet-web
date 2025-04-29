import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="ASMD" description="ASMD : ..." />
      <Typography variant="heading-sm">
         Test
      </Typography>
      <h1 className="text-9xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}
