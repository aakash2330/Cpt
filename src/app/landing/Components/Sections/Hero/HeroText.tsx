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
import Image from "next/image";

export function HeroTextMain() {
  return (
    <div className="flex mt-[200px] flex-col gap-8 items-center">
      {/* First line with video */}
      <div className="flex justify-center items-center text-center gap-4 md:gap-6 flex-wrap">
        <HeroText title="DIVISION" />
        <HeroText title="9" />
        <HeroVideo className="w-24 md:w-32 hidden md:block" url=""></HeroVideo>
        <HeroText title="CONSTRUCTION" />
      </div>

      {/* Second line */}
      <div className="flex justify-center items-center text-center gap-4 md:gap-6 flex-wrap">
        <HeroText title="WHERE" />
        <HeroText title="FINISHES" />
      </div>

      {/* Third line with image */}
      <div className="flex justify-center items-center text-center gap-4 md:gap-6 flex-wrap">
        <HeroText title="DEFINE" />
        <HeroText title="THE" />
        <HeroText title="BUILD" />
        <div className={cn("relative hidden md:flex w-48 md:w-64 h-full")}>
          <Image
            src="/WhatsApp Image 2025-05-22 at 2.09.52 AM.jpeg"
            alt="/1c00dec44743a70fd4aca77e66f8576c329befb4.png"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
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

  return (
    <motion.div
      ref={targetRef}
      style={{
        willChange: "transform",
      }}
      className={cn(" h-[58px] rounded-full z-20 w-24", className)}
    >
      <HeroVideoSection url={url}></HeroVideoSection>
    </motion.div>
  );
}

export function HeroText({ title }: { title: string }) {
  return (
    <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white z-40 font-bold tracking-wide leading-tight">
      {title}
    </div>
  );
}

export function HeroVideoSection({ url }: { url: string }) {
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
        src={
          url ||
          "https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0If97Ylhs3QC5L7BNJrZvHfX2TuRSwhGcVDMK8"
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
  );
}
