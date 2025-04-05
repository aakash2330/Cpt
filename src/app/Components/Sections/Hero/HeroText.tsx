import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroTextMain() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="YOUR" />
        <HeroVideo url=""></HeroVideo>
        <HeroText title="VISION" />
      </div>

      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="OUR" />
        <HeroText title="BLUEPRINT" />
        <HeroVideo className="w-32" url=""></HeroVideo>
      </div>

      <div className="flex mt-8 justify-center  items-center text-center gap-5">
        <Button className="px-10" variant="cta">
          Our Portfolio
        </Button>
        <Button className="px-10" variant="cta-outline">
          Free Quotation
        </Button>
      </div>
    </div>
  );
}

export function HeroVideo({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-slate-100 h-[58px] rounded-full w-24", className)}
    ></div>
  );
}

export function HeroText({ title }: { title: string }) {
  return <div className="text-7xl text-white">{title}</div>;
}
