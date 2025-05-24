"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetail {
  text: string;
}

interface Project {
  id: string;
  title: string;
  location: string;
  images: ProjectImage[];
  details: ProjectDetail[];
  year: string;
}

export const Timeline = ({ projects }: { projects: Project[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full px-12 bg-background font-sans" ref={containerRef}>
      <div ref={ref} className="relative w-full pb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-row-reverse justify-center pt-10 md:pt-40 ",
              index % 2 == 0 && "flex-row",
            )}
          >
            <div className="relative pl-20 my-[200px] w-full pr-4 md:pl-4">
              <div className={`w-full`}>
                <div className="h-80">
                  <div className="grid grid-cols-6 gap-1 h-[calc(50%-2px)]">
                    <div className="overflow-hidden col-span-4 h-full relative rounded-tl-xl rounded-bl-xl">
                      <Image
                        src={project.images[0]?.src}
                        alt={project.images[0]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="overflow-hidden col-span-2 h-full relative rounded-tr-xl rounded-br-xl">
                      <Image
                        src={project.images[1]?.src}
                        alt={project.images[1]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 16vw"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-8 gap-1 h-[calc(50%+2px)]">
                    <div className="overflow-hidden col-span-2 h-full relative rounded-bl-xl">
                      <Image
                        src={project.images[2]?.src}
                        alt={project.images[2]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 12vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden col-span-4 h-full relative">
                      <Image
                        src={project.images[3]?.src}
                        alt={project.images[3]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden col-span-2 h-full relative rounded-br-xl">
                      <Image
                        src={project.images[4]?.src}
                        alt={project.images[4]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 12vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-1/2">
              <h3
                className={cn(
                  "hidden md:block text-xl w-full md:text-3xl font-bold text-neutral-500 dark:text-neutral-500",
                  index % 2 !== 0 ? "text-left" : "text-right",
                )}
              >
                {project.year}
              </h3>
            </div>
            <div className="relative flex justify-center items-center pl-20 my-[200px] w-full pr-4 md:pl-4">
              <div className={`w-full`}>
                <div className={cn("px-20", index % 2 !== 0 && "text-right")}>
                  <h2 className="mb-0 text-sm sm:text-base font-semibold tracking-wide">
                    {project.title}
                  </h2>
                  <p className="mb-0 text-sm sm:text-base font-semibold tracking-wide">
                    {project.location}
                  </p>
                  <ul
                    className={cn(
                      "list-disc flex flex-col pt-4  pl-5 space-y-2",
                      index % 2 !== 0 && "items-end",
                    )}
                  >
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs max-w-sm">
                        {detail.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 left-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-white-500 via-white to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
