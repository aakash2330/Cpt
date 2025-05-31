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
              <p className="text-xs font-inter xs:text-sm sm:text-base leading-relaxed text-left max-w-none sm:max-w-md lg:max-w-lg">
                With over a decade of experience and a proven team of 100+
                professionals, we specialize in executing complex, large-scale
                interior projects with total confidence. From pre-construction
                planning to final turnover, we take full ownership of every
                detail — ensuring projects are completed safely, on time, and to
                the highest standard. Driven by the belief that "Quality means
                doing it right when no one is looking," we approach every build
                with integrity, clear communication, and craftsmanship you can
                see and trust. Count on us to get it done — and get it done
                right
              </p>
            </AnimatedDiv>
          </div>
        </div>

        <div className="bg-background min-h-screen mt-20 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
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
                <p className="text-xs xs:text-sm font-inter sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  We are builders, leaders, and problem-solvers. At City
                  Professional Trades, construction isn't just our business —
                  it's our craft, our responsibility, and our reputation on the
                  line with every project we take on.
                </p>

                <p className="text-xs xs:text-sm sm:text-base font-inter leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  For over a decade, we've earned the trust of clients by
                  consistently delivering work that speaks for itself. We manage
                  every job with precision, care, and a hands-on approach that
                  ensures nothing is left to chance.
                </p>

                <p className="text-xs xs:text-sm sm:text-base leading-relaxed font-inter max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  Our strength lies in our people. A team of experienced
                  professionals who take pride in their work, embrace
                  challenges, and are committed to doing what's right — not
                  what's easy. We value integrity, reliability, and a culture
                  where accountability isn't optional, it's expected.
                </p>

                <p className="text-xs xs:text-sm sm:text-base leading-relaxed font-inter max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  City Professional Trades is a company built on strong
                  relationships, clear leadership, and a results-driven mindset.
                  We believe in showing up, standing behind our word, and
                  exceeding expectations on every site we touch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
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
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Quality Without Compromise.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      We believe in doing it right the first time — even when no
                      one's watching.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Client. Project. Trust.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      Every decision we make, every move we take is built on
                      these three pillars.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Clear, Honest Communication.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      We keep our clients informed, involved, and confident from
                      start to finish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Precision & Craftsmanship.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      Superior materials, skilled trades, and attention to every
                      detail — no shortcuts, no excuses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Ownership & Accountability.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      We take full responsibility for our projects, deadlines,
                      and outcomes. If we say it, we mean it.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Safety First, Always.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      Protecting our people, clients, and worksites is
                      non-negotiable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Problem-Solving Expertise.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      We anticipate challenges and deliver smart, effective
                      solutions that keep projects on track.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1">
                    <Point />
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    Professionalism You Can Count On.
                    <br />
                    <p className="text-sm font-inter text-slate-300">
                      We show up prepared, deliver what we promise, and leave a
                      lasting impression through our work.
                    </p>
                  </div>
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
