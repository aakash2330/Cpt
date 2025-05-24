"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, config } from "@react-spring/web";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";
import ProjectTimeline from "./_components/timeline";
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
    config: { tension: 170, friction: 26 },
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
      <div className="w-full mb-72">
        <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
          <AnimatedDiv
            style={imageAnimation}
            className="absolute inset-0 bg-black/20"
          >
            <Image
              src="/portfolio.jpg"
              alt="Construction workers at site"
              fill
              className="object-cover -z-1"
              priority
            />
          </AnimatedDiv>

          <div className="relative z-10 flex h-full items-end">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-1/3 bg-[#121212] py-8 px-4 xs:px-6 sm:px-12 md:px-16 text-white rounded-tr-3xl"
            >
              <h2 className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
                OUR WORK SPEAKS FOR ITSELF
              </h2>
              <p className="text-xs xs:text-sm sm:text-base max-w-sm">
                Explore our portfolio of residential and commercial projects,
                showcasing our commitment to quality, craftsmanship, and client
                satisfaction.
              </p>
            </AnimatedDiv>
          </div>
        </div>
        <ProjectTimeline />
      </div>
    </ReactLenis>
  );
}
