"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import { ServiceCard } from "./_components/ServiceCard";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";

const serviceData = [
  {
    image: "/new-img/const.png",
    heading: "DRYWALL & STEEL STUD FRAMING",
    description:
      "We supply and install high-performance drywall systems, including steel stud framing, shaft walls, and complex assemblies for commercial, institutional, and residential applications. Fire-rated and acoustic assemblies? We've got it covered.",
  },
  {
    image: "/new-img/gen.png",
    heading: "ACOUSTIC & SPECIALTY CEILINGS",
    description:
      "From suspended T-bar ceilings to specialty acoustic panels, we deliver flawless ceilings that enhance performance, acoustics, and aesthetics.",
  },
  {
    image: "/new-img/res.png",
    heading: "INTERIOR & EXTERIOR PAINTING",
    description:
      "We handle everything from primer to finish coats with commercial-grade precision. Our scope includes elastomeric coatings, epoxy floors, and detailed architectural finishes.",
  },
  {
    image: "/Servicepage/4.png",
    heading: "TAPING & FINISHING (LEVELS 1–5)",
    description:
      "Level 4 and Level 5 finishes for smooth, seamless surfaces ready for high-end paint, wallcoverings, or specialty treatments",
  },
  {
    image: "/Servicepage/5.png",
    heading: "FRP & SPECIALTY WALL PANELS",
    description:
      "We install Fiberglass Reinforced Panels (FRP), wall guards, and other impact-resistant systems—ideal for healthcare, foodservice, and industrial settings.",
  },
  {
    image: "/Servicepage/6.png",
    heading: "FLOORING",
    description:
      "If applicable: vinyl, rubber, carpet tile, or epoxy floor systems installed to spec and schedule.",
  },
  {
    image: "/Servicepage/7.png",
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
            <Image
              src="/new-img/0627.png"
              alt="Construction workers at site"
              fill
              className="object-cover -z-1"
              priority
            />
          </AnimatedDiv>

          {/* Text for Large Screens */}
          <div className="hidden sm:flex items-end absolute inset-0 z-10">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto bg-[#12202F] py-6 sm:py-8 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
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
