"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageDialog } from "./dialog";

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
    <div
      className="w-full px-4 sm:px-6 md:px-12 bg-background"
      ref={containerRef}
    >
      <div ref={ref} className="relative w-full pb-20">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="block md:hidden">
              <div className="flex flex-col items-center pt-8 sm:pt-12">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-500 dark:text-neutral-500 text-center">
                    {project.year}
                  </h3>
                </div>

                <div className="w-full px-4 mb-8">
                  <div className="h-48 sm:h-64 space-y-2">
                    <div className="grid grid-cols-3 gap-2 h-[60%]">
                      <div className="overflow-hidden col-span-2 h-full relative rounded-lg">
                        <Image
                          src={project.images[0]?.src}
                          alt={project.images[0]?.alt || "Project image"}
                          className="object-cover"
                          fill
                          sizes="(max-width: 640px) 66vw, 50vw"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="overflow-hidden col-span-1 h-full relative rounded-lg">
                        <Image
                          src={project.images[1]?.src}
                          alt={project.images[1]?.alt || "Project image"}
                          className="object-cover"
                          fill
                          sizes="(max-width: 640px) 33vw, 25vw"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-[35%]">
                      <div className="overflow-hidden col-span-1 h-full relative rounded-lg">
                        <Image
                          src={project.images[2]?.src}
                          alt={project.images[2]?.alt || "Project image"}
                          className="object-cover"
                          fill
                          sizes="(max-width: 640px) 25vw, 20vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="overflow-hidden col-span-2 h-full relative rounded-lg">
                        <Image
                          src={project.images[3]?.src}
                          alt={project.images[3]?.alt || "Project image"}
                          className="object-cover"
                          fill
                          sizes="(max-width: 640px) 50vw, 40vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="overflow-hidden col-span-1 h-full relative rounded-lg">
                        <Image
                          src={project.images[4]?.src}
                          alt={project.images[4]?.alt || "Project image"}
                          className="object-cover"
                          fill
                          sizes="(max-width: 640px) 25vw, 20vw"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 mb-16">
                  <div className="text-center">
                    <h2 className="mb-2 text-base sm:text-lg font-semibold tracking-wide">
                      {project.title}
                    </h2>
                    <p className="mb-4 text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-400 tracking-wide">
                      {project.location}
                    </p>
                    <div className="flex flex-col pt-2 sm:pt-4 space-y-2 sm:space-y-3">
                      {project.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                        >
                          • {detail.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original with Animations */}
            <div
              className={cn(
                "hidden md:flex flex-row-reverse justify-center pt-10 md:pt-40",
                index % 2 == 0 && "flex-row",
              )}
            >
              <div className="relative pl-20 my-[50px] w-full pr-4 md:pl-4">
                <div className={`w-full`}>
                  <div className="h-80">
                    <div className="grid grid-cols-6 gap-3 h-[calc(50%-2px)]">
                      <div className="overflow-hidden col-span-4 h-full relative rounded-tl-xl rounded-bl-xl">
                        <ImageDialog images={project.images} initialIndex={0}>
                          <Image
                            src={project.images[0]?.src}
                            alt={project.images[0]?.alt || "Project image"}
                            className="object-cover rounded-[12px]"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </ImageDialog>
                      </div>
                      <div className="overflow-hidden col-span-2 h-full relative rounded-tr-xl rounded-br-xl">
                        <ImageDialog images={project.images} initialIndex={1}>
                          <Image
                            src={project.images[1]?.src}
                            alt={project.images[1]?.alt || "Project image"}
                            className="object-cover rounded-[12px]"
                            fill
                            sizes="(max-width: 768px) 100vw, 16vw"
                            loading="lazy"
                          />
                        </ImageDialog>
                      </div>
                    </div>

                    <div className="h-3"></div>

                    <div className="grid grid-cols-8 gap-3 h-[calc(50%+2px)]">
                      <div className="overflow-hidden col-span-2 h-full relative rounded-bl-xl">
                        <ImageDialog images={project.images} initialIndex={2}>
                          <Image
                            src={project.images[2]?.src}
                            alt={project.images[2]?.alt || "Project image"}
                            className="object-cover rounded-[12px]"
                            fill
                            sizes="(max-width: 768px) 100vw, 12vw"
                            loading="lazy"
                          />
                        </ImageDialog>
                      </div>
                      <div className="overflow-hidden col-span-4 h-full relative">
                        <ImageDialog images={project.images} initialIndex={3}>
                          <Image
                            src={project.images[3]?.src}
                            alt={project.images[3]?.alt || "Project image"}
                            className="object-cover rounded-[12px]"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            loading="lazy"
                          />
                        </ImageDialog>
                      </div>
                      <div className="overflow-hidden col-span-2 h-full relative rounded-br-xl">
                        <ImageDialog images={project.images} initialIndex={4}>
                          <Image
                            src={project.images[4]?.src}
                            alt={project.images[4]?.alt || "Project image"}
                            className="object-cover rounded-[12px]"
                            fill
                            sizes="(max-width: 768px) 100vw, 12vw"
                            loading="lazy"
                          />
                        </ImageDialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky flex flex-col md:flex-row justify-center z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[40%]">
                <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-white border border-neutral-300 dark:border-neutral-700 p-2" />
                {/* <h3 */}
                {/*   className={cn( */}
                {/*     "hidden md:block text-xl w-full md:text-3xl font-bold text-neutral-500 dark:text-neutral-500", */}
                {/*     index % 2 !== 0 ? "text-left" : "text-right", */}
                {/*   )} */}
                {/* > */}
                {/*   {project.year} */}
                {/* </h3> */}
              </div>
              <div className="relative flex justify-center items-center pl-20 my-[50px] w-full pr-4 md:pl-4">
                <div className={`w-full`}>
                  <div className={cn("px-20")}>
                    <h2 className="mb-0 text-sm sm:text-4xl font-semibold tracking-wide">
                      {project.title}
                    </h2>
                    <p className="mb-0 text-sm sm:text-4xl font-semibold tracking-wide">
                      {project.location}
                    </p>
                    <ul
                      className={cn(
                        "list-disc flex flex-col pt-4  pl-5 space-y-2",
                      )}
                    >
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-white max-w-sm">
                          {detail.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute md:left-1/2 left-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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
