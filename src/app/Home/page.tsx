import ExperienceSection from "./Components/Sections/Experience";
import { HeroSection } from "./Components/Sections/Hero";
import { HeroVideoSection } from "./Components/Sections/HeroVideo";
import { ProjectsSection } from "./Components/Sections/Projects";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
      <HeroVideoSection></HeroVideoSection>
      <ProjectsSection></ProjectsSection>
      <ExperienceSection></ExperienceSection>
    </div>
  );
}
