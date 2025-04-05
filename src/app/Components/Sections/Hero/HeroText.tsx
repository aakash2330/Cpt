import { Button } from "@/components/ui/button";

export function HeroTextMain() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="YOUR" />
        <HeroText title="Plac" />
        <HeroText title="VISION" />
      </div>

      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="OUR" />
        <HeroText title="BLUEPRINT" />
        <HeroText title="Place" />
      </div>

      <div className="flex justify-center items-center text-center gap-5">
        <Button variant="cta">Our Portfolio</Button>
        <Button>Free Quotation</Button>
      </div>
    </div>
  );
}

export function HeroText({ title }: { title: string }) {
  return <div className="text-7xl text-white">{title}</div>;
}
