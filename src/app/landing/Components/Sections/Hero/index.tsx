import { HeroTextMain } from "./HeroText";
import { LogoTicker } from "./MarqueeText";

export function HeroSection() {
  return (
    <div className="h-full md:h-[100dvh] w-full background-image-hero flex lg:py-8 flex-col gap-12 justify-start items-center">
      <HeroTextMain></HeroTextMain>
      <LogoTicker></LogoTicker>
    </div>
  );
}
