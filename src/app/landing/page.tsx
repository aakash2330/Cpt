import ExperienceSection from "./Components/Sections/Experience";
import { HeroSection } from "./Components/Sections/Hero";
import { ProjectsSection } from "./Components/Sections/Projects";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
      <ExperienceSection></ExperienceSection>
    </div>
  );
}
