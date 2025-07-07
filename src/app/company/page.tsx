"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "motion/react";
import ReactLenis from "lenis/react";
import { ProjectImage } from "../landing/Components/Sections/Projects";

const AnimatedDiv = animated("div");

const values = [
  {
    title: "Quality Without Compromise.",
    text: "We believe in doing it right the first time — even when no one's watching.",
  },
  {
    title: "Client. Project. Trust.",
    text: "Every decision we make, every move we take is built on these three pillars.",
  },
  {
    title: "Clear, Honest Communication.",
    text: "We keep our clients informed, involved, and confident from start to finish.",
  },
  {
    title: "Precision & Craftsmanship.",
    text: "Superior materials, skilled trades, and attention to every detail — no shortcuts, no excuses.",
  },
  {
    title: "Ownership & Accountability.",
    text: "We take full responsibility for our projects, deadlines, and outcomes. If we say it, we mean it.",
  },
  {
    title: "Safety First, Always.",
    text: "Protecting our people, clients, and worksites is non-negotiable.",
  },
  {
    title: "Problem-Solving Expertise.",
    text: "We anticipate challenges and deliver smart, effective solutions that keep projects on track.",
  },
  {
    title: "Professionalism You Can Count On.",
    text: "We show up prepared, deliver what we promise, and leave a lasting impression through our work.",
  },
];

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

  const TextContent = () => (
    <>
      <h2 className="mb-3 sm:mb-4 text-xs xs:text-sm sm:text-2xl pt-12 font-semibold tracking-wide">
        ABOUT CITY PROFESSIONAL TRADES
      </h2>
      <p className="text-xs xs:text-sm sm:text-base leading-relaxed text-left font-inter">
        With over a decade of experience and a proven team of 100+
        professionals, we specialize in executing complex, large-scale interior
        projects with total confidence. From pre-construction planning to final
        turnover, we take full ownership of every detail — ensuring projects are
        completed safely, on time, and to the highest standard. Driven by the
        belief that "Quality means doing it right when no one is looking," we
        approach every build with integrity, clear communication, and
        craftsmanship you can see and trust. Count on us to get it done — and
        get it done right.
      </p>
    </>
  );

  return (
    <ReactLenis root>
      <div ref={container} className="w-full bg-background">
        {/* Hero Section */}
        <div className="relative h-[40vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
          <AnimatedDiv
            style={imageAnimation}
            className="absolute inset-0 bg-black/20"
          >
            <Image
              src="/new-img/0627(8).png"
              alt="Construction workers at site"
              fill
              className="object-cover"
              priority
            />
          </AnimatedDiv>

          {/* Large Screen Overlay Text */}
          <div className="hidden sm:flex items-end absolute inset-0 z-10">
            <AnimatedDiv
              style={textAnimation}
              className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 h-auto bg-[#12202F] py-6 xs:py-8 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 text-white rounded-tr-2xl sm:rounded-tr-3xl"
            >
              <TextContent />
            </AnimatedDiv>
          </div>
        </div>

        {/* Small Screen Text Below Image */}
        <div className="sm:hidden px-4 py-6 bg-[#12202F] text-white rounded-tr-2xl -mt-6 relative z-20">
          <TextContent />
        </div>

        {/* Section: Who We Are */}
        <SectionWrapper reverse={false} imageUrl="/CPT(1)/1.png">
          <h2 className="mb-4 sm:mb-6 text-sm sm:text-2xl font-semibold tracking-wide">
            Who We Are:
          </h2>
          <div className="flex flex-col gap-6">
            <TextParagraph>
              We are builders, leaders, and problem-solvers. At City
              Professional Trades, construction isn't just our business — it's
              our craft, our responsibility, and our reputation on the line with
              every project we take on.
            </TextParagraph>
            <TextParagraph>
              For over a decade, we've earned the trust of clients by
              consistently delivering work that speaks for itself. We manage
              every job with precision, care, and a hands-on approach that
              ensures nothing is left to chance.
            </TextParagraph>
            <TextParagraph>
              Our strength lies in our people. A team of experienced
              professionals who take pride in their work, embrace challenges,
              and are committed to doing what's right — not what's easy. We
              value integrity, reliability, and a culture where accountability
              isn't optional, it's expected.
            </TextParagraph>
            <TextParagraph>
              City Professional Trades is a company built on strong
              relationships, clear leadership, and a results-driven mindset. We
              believe in showing up, standing behind our word, and exceeding
              expectations on every site we touch.
            </TextParagraph>
          </div>
        </SectionWrapper>

        {/* Section: Our Values */}
        <SectionWrapper reverse={true} imageUrl="/new-img/0627(6).png">
          <div className="lg:ml-8 xl:ml-12 2xl:ml-48">
            <h2 className="mb-4 sm:mb-6 text-sm sm:text-2xl font-semibold tracking-wide">
              Our Values
            </h2>
            <div className="flex flex-col gap-4">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <Point />
                  <div className="flex-1">
                    <p className="text-xs xs:text-sm sm:text-base font-semibold">
                      {value.title}
                    </p>
                    <p className="text-sm font-inter text-slate-300 leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </ReactLenis>
  );
}

function SectionWrapper({
  children,
  reverse = false,
  imageUrl,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  imageUrl: string;
}) {
  return (
    <div className="bg-background py-12 sm:py-14 lg:py-10 xl:py-8 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between items-center gap-8 lg:gap-16 xl:gap-20 2xl:gap-24`}
      >
        <div className="w-full lg:w-2/5 flex justify-center">
          <ProjectImage
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            alt="project image"
            url={imageUrl}
          />
        </div>
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          {children}
        </div>
      </div>
    </div>
  );
}

function TextParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed font-inter">
      {children}
    </p>
  );
}

function Point() {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      className="flex-shrink-0 mt-1"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2761 7.48362C15.2761 7.07285 15.0453 6.71193 14.6779 6.54301L10.8287 4.71714L9.05916 0.924219C8.88747 0.554065 8.52747 0.324219 8.11947 0.324219C7.71147 0.324219 7.35147 0.554065 7.17884 0.924219L5.35391 4.7716L1.56376 6.54116C1.19268 6.71193 0.961914 7.07285 0.961914 7.48362C0.961914 7.89347 1.19268 8.25439 1.56099 8.42331L5.40838 10.2482L7.17884 14.043C7.35147 14.4122 7.71147 14.6412 8.11947 14.6412C8.52655 14.6412 8.88747 14.4122 9.05916 14.0421L10.885 10.1956L14.6742 8.42516C15.0453 8.25439 15.2761 7.89347 15.2761 7.48362Z"
        fill="#ffffff"
      />
    </svg>
  );
}
