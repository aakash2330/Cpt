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
    heading: "CONSTRUCTION MANAGEMENT",
    description:
      "We provide full project oversight, managing all trades, schedules, budgets, and site operations. Our team ensures every phase runs efficiently, with tight coordination and proactive problem-solving to keep your project moving forward, without delays or surprises.",
  },
  {
    image: "/new-img/gen.png",
    heading: "GENERAL CONTRACTING",
    description:
      "As your General Contractor, we do design & build and take total ownership of your project from start to finish. From permits and procurement to subcontractor management and final inspections, we deliver projects on time, on budget, and to exacting standards — every time.",
  },
  {
    image: "/new-img/res.png",
    heading: "RESIDENTIAL CONSTRUCTION",
    description:
      "We build homes that reflect your vision and lifestyle. From custom builds to multi-unit developments and renovations, our residential services combine quality craftsmanship, project management expertise, and attention to detail at every stage.",
  },
  {
    image: "/Servicepage/4.png",
    heading: "COMMERCIAL CONSTRUCTION",
    description:
      "Transform your commercial space into a high-performance, functional environment tailored to your business needs. We manage every aspect of commercial builds — from retail spaces and offices to large-scale developments — ensuring quality, compliance, and operational efficiency.",
  },
  {
    image: "/Servicepage/5.png",
    heading: "HOSPITALITY CONSTRUCTION",
    description:
      "Create hospitality spaces designed to impress and endure. We specialize in building hotels, restaurants, and entertainment venues that capture your brand’s character and deliver unforgettable guest experiences. From concept to completion, we get it done right.",
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
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto bg-[#121212] py-6 sm:py-8 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
            >
              <TextContent />
            </AnimatedDiv>
          </div>
        </div>

        {/* Text for Small Screens */}
        <div className="sm:hidden px-4 py-6 bg-[#121212] text-white rounded-tr-2xl -mt-6 relative z-20">
          <TextContent />
        </div>

        {/* Service Cards */}
        <div className="-mt-[100px] -mb-[100px] md:mt-0 lg:-mt-[100px] xl:mt-[100px] 2xl:mb-[200px]">
        {serviceData.map((project, i) => {
          const targetScale = 1 - (serviceData.length - i) * 0.1;
          return (
            <ServiceCard
              key={`p_${i}`}
              i={i}
              url={project?.image}
              title={project?.heading}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
        </div>
      </div>
    </ReactLenis>
  );
}
