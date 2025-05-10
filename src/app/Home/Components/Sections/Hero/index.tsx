import { HeroTextMain } from "./HeroText";
import { LogoTicker } from "./MarqueeText";

export function HeroSection() {
  return (
    <div className="h-[120dvh] w-full background-image-hero flex flex-col gap-12 justify-center items-center">
      <HeroTextMain></HeroTextMain>
      <LogoTicker></LogoTicker>
    </div>
  );
}
