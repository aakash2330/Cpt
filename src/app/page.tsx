"use client";

import ReactLenis from "lenis/react";
import { ProjectsSection } from "./landing/Components/Sections/Projects";
import ExperienceSection from "./landing/Components/Sections/Experience";
import { HeroSection } from "./landing/Components/Sections/Hero";

export default function Page() {
  return (
    <ReactLenis root>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>

        <div className="h-[40dvh] md:h-[120dvh]  w-full flex flex-col gap-0 justify-center items-center">
          <video
            className="w-full h-full"
            autoPlay={true}
            preload="auto"
            muted
            loop
            playsInline
          >
            <source
              src="https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0If97Ylhs3QC5L7BNJrZvHfX2TuRSwhGcVDMK8"
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
