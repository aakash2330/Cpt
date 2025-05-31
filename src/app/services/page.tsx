"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import { ServiceCard } from "./_components/ServiceCard";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";

const serviceData = [
  {
    image: "/Servicepage/1.png",
    heading: "CONSTRUCTION MANAGEMENT",
    description:
      "We provide full project oversight, managing all trades, schedules, budgets, and site operations. Our team ensures every phase runs efficiently, with tight coordination and proactive problem-solving to keep your project moving forward, without delays or surprises.",
  },
  {
    image: "/Servicepage/2.png",
    heading: "GENERAL CONTRACTING",
    description:
      "As your General Contractor, we take total ownership of your project from start to finish. From permits and procurement to subcontractor management and final inspections, we deliver projects on time, on budget, and to exacting standards — every time.",
  },
  {
    image: "/Servicepage/3.png",
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



  return (
    <ReactLenis root>
      <div className="w-full bg-background mb-72">
        <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
          <AnimatedDiv
            style={imageAnimation}
            className="absolute inset-0 bg-black/20"
          >
            <Image
              src="/service_bg.jpg"
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
                WHAT WE DO
              </h2>
              <p className="text-xs font-inter xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
                At City Professional Trades, we deliver complete, high-quality
                construction solutions tailored to every project’s unique
                demands. We lead with precision, experience, and a no-compromise
                approach to safety, quality, and results.
              </p>
              <p className="text-xs mt-2 font-inter xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
                Our work covers every phase — from pre-construction planning to
                final turnover — ensuring seamless project delivery, clear
                communication, and dependable outcomes you can trust.
              </p>
            </AnimatedDiv>
          </div>
        </div>

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
    </ReactLenis>
  );
}
