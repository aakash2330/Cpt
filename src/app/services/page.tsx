"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import { ServiceCard } from "./_components/ServiceCard";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";
const serviceData = [
  {
    image: "/construction_management.jpg",
    heading: "CONSTRUCTION MANAGEMENT",
    description:
      "Overseeing all phases of construction, we coordinate teams and resources to achieve seamless project execution.​​",
  },
  {
    image: "/general_contracting.jpg",
    heading: "GENERAL CONTRACTING",
    description:
      "Managing every aspect of the construction process, we ensure projects are delivered on time, within budget, and to the highest standards.​",
  },
  {
    image: "/residential.jpg",
    heading: "RESIDENTIAL",
    description:
      "Turn your dream home into a reality with our help. We offer comprehensive residential construction services to cater to your every need.",
  },
  {
    image: "/commercial.jpg",
    heading: "COMMERCIAL",
    description:
      "Achieve your ideal look and function for your commercial space with our assistance. We can provide you with exemplary construction solutions to meet your specific needs.",
  },
  {
    image: "/hospitality.jpg",
    heading: "HOSPITALITY",
    description:
      "See your envisioned property design for your hotel or hospitality space come to life with our aid. At City Professional Trades, we offer full-service construction services for this type of real estate.",
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

          <div className="relative z-10 flex h-full items-end">
            <AnimatedDiv
              style={textAnimation}
              className="w-full flex justify-center items-center flex-col sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-1/3 bg-[#121212] py-8 px-4 xs:px-6 sm:px-12 md:px-16 text-white rounded-tr-3xl"
            >
              <h2 className="mb-2 text-sm sm:text-2xl font-semibold tracking-wide">
                WHAT WE DO
              </h2>
              <p className="text-xs pl-1 text-center xs:text-sm sm:text-base">
                At City Professional Trades, we offer a comprehensive range of
                construction services tailored to meet the unique needs of each
                project. Our expertise spans:
              </p>
            </AnimatedDiv>
          </div>
        </div>

        {serviceData.map((project, i) => {
          const targetScale = 1 - (serviceData.length - i) * 0.05;
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
