import { HeroTextMain } from "./HeroText";
import { LogoTicker } from "./MarqueeText";

export function HeroSection() {
  return (
    <div className="h-screen bg-hero-main flex flex-col gap-12 justify-center items-center">
      <HeroTextMain></HeroTextMain>
      <LogoTicker></LogoTicker>
    </div>
  );
}
