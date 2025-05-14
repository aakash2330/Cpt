import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroTextMain() {
  return (
    <div className="flex mt-56 flex-col gap-6">
      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="YOUR" />
        <HeroVideo className="w-32" url=""></HeroVideo>
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
    <div className={cn(" h-[58px] rounded-full w-24", className)}>
      <HeroVideoSection></HeroVideoSection>
    </div>
  );
}

export function HeroText({ title }: { title: string }) {
  return <div className="text-7xl text-white">{title}</div>;
}

export function HeroVideoSection() {
  return (
    <video
      className="w-full rounded-full"
      autoPlay={true}
      preload="auto"
      muted
      loop
      playsInline
    >
      <source
        src="https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0In6eF4s0qH9cG4kJlRwMtVCQKijsoLYOD15ae"
        type="video/mp4"
      />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
