"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";
import { ProjectImage } from "../landing/Components/Sections/Projects";

export default function CompanyPage() {
  const [loaded, setLoaded] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    setLoaded(true);
  }, []);

  const imageAnimation = useSpring({
    from: { transform: "translateY(-30px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 170, friction: 100 },
    delay: 100,
  });

  const textAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 170, friction: 22 },
    delay: 300,
  });
  const AnimatedDiv = animated("div");

  return (
    <ReactLenis root>
      <div className="w-full bg-background">
        <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
          <AnimatedDiv
            style={imageAnimation}
            className="absolute inset-0 bg-black/20"
          >
            <Image
              src="/WhatsApp Image 2025-05-22 at 2.09.52 AM.jpeg"
              alt="Construction workers at site"
              fill
              className="object-cover -z-1"
              priority
            />
          </AnimatedDiv>

          <div className="relative z-10 flex h-full items-end">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto bg-[#121212] py-6 xs:py-8 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
            >
              <h2 className="mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base font-semibold tracking-wide">
                ABOUT CITY PROFESSIONAL TRADES
              </h2>
              <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-none sm:max-w-md lg:max-w-lg">
                City Professional Trades is a reliable construction service
                catering to commercial and residential clients in Toronto,
                Ontario, and its surrounding areas. We specialize in planning
                and executing large-scale building projects. Whether you need
                property design or remodeling services, we have you covered.
              </p>
            </AnimatedDiv>
          </div>
        </div>

        <div className="bg-background min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <ProjectImage
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                alt="project"
                url="/3039a1af26a8a92b97f8cc3d71bb8088d296c635.png"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold tracking-wide">
                ABOUT CITY PROFESSIONAL TRADES
              </h2>
              <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                City Professional Trades is a reliable construction service
                catering to commercial and residential clients in Toronto,
                Ontario, and its surrounding areas. We specialize in planning and
                executing large-scale building projects. Whether you need property
                design or remodeling services, we have you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-background min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <ProjectImage
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                alt="project"
                url="/998213fe7d22125babfc46588e8561bf7f4697d5.png"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold tracking-wide">
                ABOUT CITY PROFESSIONAL TRADES
              </h2>
              <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                City Professional Trades is a reliable construction service
                catering to commercial and residential clients in Toronto,
                Ontario, and its surrounding areas. We specialize in planning and
                executing large-scale building projects. Whether you need property
                design or remodeling services, we have you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}