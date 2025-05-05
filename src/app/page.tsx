import { HeroSection } from "./Components/Sections/Hero";
import { LogoTicker } from "./Components/Sections/Hero/MarqueeText";
import { HeroImageSection } from "./Components/Sections/HeroImage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
      <HeroImageSection></HeroImageSection>
    </div>
  );
}
