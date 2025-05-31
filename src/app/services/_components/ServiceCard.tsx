import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ServiceCardProps {
  image: string;
  heading: string;
  description: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export function ServiceCard({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-start py-20 justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[100%] rounded-md p-10 origin-top`}
      >
        <div className="w-full my-6 sm:my-8">
          <div className="relative w-full h-56 xs:h-64 sm:h-72 md:h-96 lg:h-[400px]">
            <Image
              src={url}
              alt="card-image"
              fill
              className="object-cover rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="text-white flex bg-background mt-6 flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base xs:text-lg sm:text-3xl self-start font-semibold">
              {title}
            </h3>
            <p className="text-sm font-inter xs:text-base sm:text-lg max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
