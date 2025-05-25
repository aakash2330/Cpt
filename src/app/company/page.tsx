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
              className="w-full flex justify-center items-center flex-col sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-1/3 bg-[#121212] py-8 px-4 xs:px-6 sm:px-12 md:px-16 text-white rounded-tr-3xl"
            >
              <h2 className="mb-2 text-sm sm:text-2xl font-semibold tracking-wide">
                ABOUT CITY PROFESSIONAL TRADES
              </h2>
              <p className="text-xs pl-1 xs:text-sm sm:text-base text-center">
                City Professional Trades is a reliable construction service
                catering to commercial and residential clients in Toronto,
                Ontario, and its surrounding areas. We specialize in planning
                and executing large-scale building projects. Whether you need
                property design or remodeling services, we have you covered.
              </p>
            </AnimatedDiv>
          </div>
        </div>
        <div className="bg-background h-[100vh] flex justify-between pr-32 items-center">
          <ProjectImage
            className="w-1/2 h-1/2"
            alt="project"
            url="/3039a1af26a8a92b97f8cc3d71bb8088d296c635.png"
          ></ProjectImage>

          <div>
            <h2 className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
              ABOUT CITY PROFESSIONAL TRADES
            </h2>
            <p className="text-xs xs:text-sm sm:text-base max-w-sm">
              City Professional Trades is a reliable construction service
              catering to commercial and residential clients in Toronto,
              Ontario, and its surrounding areas. We specialize in planning and
              executing large-scale building projects. Whether you need property
              design or remodeling services, we have you covered.
            </p>
          </div>
        </div>

        <div className="bg-background h-[100vh] flex justify-between pl-32 items-center">
          <div>
            <h2 className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
              ABOUT CITY PROFESSIONAL TRADES
            </h2>
            <p className="text-xs xs:text-sm sm:text-base max-w-sm">
              City Professional Trades is a reliable construction service
              catering to commercial and residential clients in Toronto,
              Ontario, and its surrounding areas. We specialize in planning and
              executing large-scale building projects. Whether you need property
              design or remodeling services, we have you covered.
            </p>
          </div>

          <ProjectImage
            className="w-1/2 h-1/2"
            alt="project"
            url="/998213fe7d22125babfc46588e8561bf7f4697d5.png"
          ></ProjectImage>
        </div>
      </div>
    </ReactLenis>
  );
}
