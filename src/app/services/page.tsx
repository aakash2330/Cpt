"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import { ServiceCard } from "./_components/ServiceCard";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";

const serviceData = [
  {
    image: "/Servicepage/new/15.jpg",
    heading: "DRYWALL & STEEL STUD FRAMING",
    description:
      "We supply and install high-performance drywall systems, including steel stud framing, shaft walls, and complex assemblies for commercial, institutional, and residential applications. Fire-rated and acoustic assemblies? We've got it covered.",
  },
  {
    image: "/Servicepage/new/10.jpg",
    heading: "ACOUSTIC & SPECIALTY CEILINGS",
    description:
      "From suspended T-bar ceilings to specialty acoustic panels, we deliver flawless ceilings that enhance performance, acoustics, and aesthetics.",
  },
  {
    image: "/Servicepage/new/14.jpg",
    heading: "INTERIOR & EXTERIOR PAINTING",
    description:
      "We handle everything from primer to finish coats with commercial-grade precision. Our scope includes elastomeric coatings, epoxy floors, and detailed architectural finishes.",
  },
  {
    image: "/Servicepage/new/9.webp",
    heading: "TAPING & FINISHING (LEVELS 1–5)",
    description:
      "We provide expert taping and finishing across all levels, delivering perfectly smooth surfaces that meet the highest industry standards. Whether for paint, wallcoverings, or specialty finishes, our work ensures a flawless foundation for every project",
  },
  {
    image: "/Servicepage/new/11.jpg",
    heading: "FRP & SPECIALTY WALL PANELS",
    description:
      "We specialize in the installation of Fiberglass Reinforced Panels (FRP), wall guards, and other durable wall systems designed to withstand everyday wear and tear. Perfect for healthcare, foodservice, and industrial spaces, our solutions combine strength, hygiene, and long-lasting protection.",
  },
  {
    image: "/Servicepage/new/12.jpg",
    heading: "FLOORING",
    description:
      "If applicable: vinyl, rubber, carpet tile, or epoxy floor systems installed to spec and schedule.",
  },
  {
    image: "/Servicepage/new/13.JPG",
    heading: "DIVISION 9 CONSULTING & ESTIMATING",
    description:
      "We don't just install - we advise. Our team supports GCs and developers with accurate Division 9 takeoffs, value engineering, and sequencing strategies to stay ahead of schedule.",
  },
];

export default function ServicePage() {
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

  const TextContent = () => (
    <>
      <h2 className="mb-3 sm:mb-4 text-xs xs:text-sm sm:text-2xl pt-6 sm:pt-12 font-semibold tracking-wide">
        WHAT WE DO
      </h2>
      <p className="text-xs font-inter xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
        At City Professional Trades, we deliver complete, high-quality
        construction solutions tailored to every project's unique demands. We
        lead with precision, experience, and a no-compromise approach to safety,
        quality, and results.
      </p>
      <p className="text-xs mt-2 font-inter xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
        Our work covers every phase — from pre-construction planning to final
        turnover — ensuring seamless project delivery, clear communication, and
        dependable outcomes you can trust.
      </p>
    </>
  );

  return (
    <ReactLenis root>
      <div className="w-full bg-background mb-4 lg:mb-24 2xl:mb-[-300px]">
        {/* Hero Section */}
        <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
          <AnimatedDiv
            style={imageAnimation}
            className="absolute inset-0 bg-black/20"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay={true}
              preload="auto"
              muted
              loop
              playsInline
            >
              <source
                src={
                  "https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0I9tEJkMDzKJTjHN3zxLqRt2wg0r8U4almPVvY"
                }
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
          </AnimatedDiv>

          {/* Text for Large Screens */}
          <div className="hidden sm:flex items-end absolute inset-0 z-10">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto bg-background py-6 sm:py-8 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
            >
              <TextContent />
            </AnimatedDiv>
          </div>
        </div>

        {/* Text for Small Screens */}
        <div className="sm:hidden px-4 py-6 bg-[#12202F] text-white rounded-tr-2xl -mt-6 relative z-20">
          <TextContent />
        </div>

        {/* Service Cards */}
        <div className="-mt-[100px] -mb-[100px] md:mt-0 lg:-mt-[100px] xl:mt-[100px] 2xl:mb-[200px]">
          {serviceData.map((project, i) => {
            const step = 1 / serviceData.length;
            const range: [number, number] = [i * step, 1];
            const targetScale = 1 - (serviceData.length - i) * 0.1; // gentler shrink

            return (
              <ServiceCard
                key={`p_${i}`}
                i={i}
                url={project.image}
                title={project.heading}
                description={project.description}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}
