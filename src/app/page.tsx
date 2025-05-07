import { redirect } from "next/navigation";
import { HeroSection } from "./Components/Sections/Hero";
import { LogoTicker } from "./Components/Sections/Hero/MarqueeText";
import { HeroVideoSection } from "./Components/Sections/HeroVideo";

export default function Page() {
  return redirect("/Home");
}
