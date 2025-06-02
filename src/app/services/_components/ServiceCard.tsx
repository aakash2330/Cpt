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
  progress: MotionValue;
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
      className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8 min-[1440px]:mb-24 min-[1440px]:mt-[-200px]"
    >
      <motion.div
        style={{ scale }}
        className="flex flex-col lg:flex-row relative bg-black rounded-[25px] shadow-xl 
                   w-full max-w-7xl mx-auto overflow-hidden
                   min-h-[500px] sm:min-h-[600px] lg:min-h-[500px]
                   p-4 sm:p-6 lg:p-8"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto relative mb-4 lg:mb-0 lg:mr-8">
          <Image
            src={url}
            alt={title}
            fill
            className="object-cover rounded-[20px]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}