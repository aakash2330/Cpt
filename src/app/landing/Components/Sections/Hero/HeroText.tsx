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
    <div className="flex mt-48 flex-col gap-6">
      <div className="flex justify-center items-center text-center gap-3 md:gap-5">
        <HeroText title="YOUR" />
        <HeroVideo className="w-32 hidden md:block" url=""></HeroVideo>
        <HeroText title="VISION" />
      </div>

      <div className="flex justify-center items-center text-center gap-3 md:gap-5">
        <HeroText title="OUR" />
        <HeroText title="BLUEPRINT" />
        <div className={cn("relative hidden md:flex w-64 h-full")}>
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
    <div className="text-4xl md:text-7xl text-white z-40 font-bold tracking-wide leading-tight">
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
          "https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0In6eF4s0qH9cG4kJlRwMtVCQKijsoLYOD15ae"
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
