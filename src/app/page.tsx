import { HeroSection } from "./Components/Sections/Hero/Main";
import { LogoTicker } from "./Components/Sections/Hero/MarqueeText";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
    </div>
  );
}
