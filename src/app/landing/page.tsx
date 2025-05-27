"use client";
import { useEffect, useState } from "react";
import ExperienceSection from "./Components/Sections/Experience";
import { HeroSection } from "./Components/Sections/Hero";
import { ProjectsSection } from "./Components/Sections/Projects";
import ReactLenis from "lenis/react";

export default function Page() {
  const [initialScrollHandled, setInitialScrollHandled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <ReactLenis root>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>
        <div className="h-[300dvh] w-full  flex flex-col gap-0 justify-center items-center"></div>
        <ProjectsSection></ProjectsSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </ReactLenis>
  );
}
