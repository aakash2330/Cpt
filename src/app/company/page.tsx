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
        <div className="relative h-[40vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
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

          <div className="relative z-10 flex h-full hidden sm:flex items-end">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto bg-[#121212] py-6 xs:py-8 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
            >
              <h2 className="mb-3 sm:mb-4 text-xs xs:text-sm self-start sm:text-2xl pt-12 font-semibold tracking-wide">
                ABOUT CITY PROFESSIONAL TRADES
              </h2>
              <p className="text-xs xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
                City Professional Trades is a reliable construction service
                catering to commercial and residential clients in Toronto,
                Ontario, and its surrounding areas. We specialize in planning
                and executing large-scale building projects. Whether you need
                property design or remodeling services, we have you covered.
              </p>
            </AnimatedDiv>
          </div>
        </div>

        <div className="bg-background h-[80dvh] mt-20 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 ">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <ProjectImage
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 lg:h-124 object-cover rounded-lg"
                alt="project"
                url="/CPT(1)/1.png"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-4 sm:mb-6 text-sm sm:text-2xl font-semibold tracking-wide">
                Who We Are:
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  At City Professional Trades, we don't just build—we bring
                  visions to life. With over a decade of trusted craftsmanship
                  across Ontario, we specialize in Design & Build, General
                  Contracting, and Full-Scope Construction Services. Every
                  project is handled with precision, pride, and a deep
                  commitment to quality—because behind every build is a story
                  that matters.
                </p>

                <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  What sets us apart? No shortcuts. No compromises. Just honest
                  work, done right.
                </p>

                <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  We focus on relationships, results, and delivering on every
                  promise—with professionalism you can see and trust that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background h-[80dvh] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-[-150px]">
              <ProjectImage
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl h-64 sm:h-80 lg:h-124 object-cover rounded-lg"
                alt="project"
                url="/CPT(1)/2.png"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-4 sm:mb-6 text-sm sm:text-2xl font-semibold tracking-wide">
                Our Values
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Transparent and open communication at every stage of the
                    project
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Excellent service and prompt responses to questions and
                    concerns
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Outstanding problem-solving and project management skills to
                    meet all deadlines on schedule
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Hiring licensed, insured, and responsible subcontractors to
                    guarantee exceptional work
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Dedication to precise work and superior quality in our
                    building materials and techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

function Point() {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2761 7.48362C15.2761 7.07285 15.0453 6.71193 14.6779 6.54301L10.8287 4.71714L9.05916 0.924219C8.88747 0.554065 8.52747 0.324219 8.11947 0.324219C7.71147 0.324219 7.35147 0.554065 7.17884 0.924219L5.35391 4.7716L1.56376 6.54116C1.19268 6.71193 0.961914 7.07285 0.961914 7.48362C0.961914 7.89347 1.19268 8.25439 1.56099 8.42331L5.40838 10.2482L7.17884 14.043C7.35147 14.4122 7.71147 14.6412 8.11947 14.6412C8.52655 14.6412 8.88747 14.4122 9.05916 14.0421L10.885 10.1956L14.6742 8.42516C15.0453 8.25439 15.2761 7.89347 15.2761 7.48362Z"
        fill="#F16407"
      />
    </svg>
  );
}
