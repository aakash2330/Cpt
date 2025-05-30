"use client";
import { useEffect, useState } from "react";
import ExperienceSection from "./Components/Sections/Experience";
import { HeroSection } from "./Components/Sections/Hero";
import { ProjectsSection } from "./Components/Sections/Projects";
import ReactLenis from "lenis/react";
import { HeroVideoSection } from "./Components/Sections/Hero/HeroText";

export default function Page() {
  const [initialScrollHandled, setInitialScrollHandled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <ReactLenis root>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>

        <div className="h-[300dvh] hidden md:flex w-full  flex flex-col gap-0 justify-center items-center"></div>

        <div className="h-[40dvh] md:hidden w-full flex flex-col gap-0 justify-center items-center">
          <video
            className="w-full h-full"
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
        </div>
        <ProjectsSection></ProjectsSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </ReactLenis>
  );
}
