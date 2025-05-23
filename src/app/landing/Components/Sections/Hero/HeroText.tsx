"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function HeroTextMain() {
  return (
    <div className="flex mt-56 flex-col gap-6">
      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="YOUR" />
        <HeroVideo className="w-32" url=""></HeroVideo>
        <HeroText title="VISION" />
      </div>

      <div className="flex justify-center items-center text-center gap-5">
        <HeroText title="OUR" />
        <HeroText title="BLUEPRINT" />
        {/* <HeroVideo className="w-32" url=""></HeroVideo> */}
      </div>

      <div className="flex mt-8 justify-center  items-center text-center gap-5">
        <Button className="px-10" variant="cta">
          Our Portfolio
        </Button>
        <Button className="px-10" variant="cta-outline">
          Free Quotation
        </Button>
      </div>
    </div>
  );
}

export function HeroVideo({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 70]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 6000]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [isHidden, setIsHidden] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Initial set
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (viewportHeight > 0) {
      if (latest >= 4.5 * viewportHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    }
  });

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, y, x }}
      className={cn(
        " h-[58px] rounded-full z-20 w-24",
        className,
        isHidden ? "hidden" : "",
      )}
    >
      <HeroVideoSection></HeroVideoSection>
    </motion.div>
  );
}

export function HeroText({ title }: { title: string }) {
  return <div className="text-7xl text-white">{title}</div>;
}

export function HeroVideoSection() {
  return (
    <video
      className="w-full rounded-full"
      autoPlay={true}
      preload="auto"
      muted
      loop
      playsInline
    >
      <source
        src="https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0In6eF4s0qH9cG4kJlRwMtVCQKijsoLYOD15ae"
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
  );
}
