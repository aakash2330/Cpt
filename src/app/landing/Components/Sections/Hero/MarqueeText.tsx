"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import logo from "../../../../../../public/lgos/01.png";
import logo1 from "../../../../../../public/lgos/02.png";
import logo2 from "../../../../../../public/lgos/03.png";
import logo3 from "../../../../../../public/lgos/04.png";
import logo4 from "../../../../../../public/lgos/05.png";
import logo5 from "../../../../../../public/lgos/06.png";
import logo6 from "../../../../../../public/lgos/07.png";
import logo7 from "../../../../../../public/lgos/08.png";
import logo8 from "../../../../../../public/lgos/09.png";
import logo9 from "../../../../../../public/lgos/10.png";
import logo10 from "../../../../../../public/lgos/11.png";
import logo11 from "../../../../../../public/lgos/12.png";
import logo12 from "../../../../../../public/lgos/13.png";
import logo13 from "../../../../../../public/lgos/14.png";
import logo14 from "../../../../../../public/lgos/15.png";
import logo15 from "../../../../../../public/lgos/16.png";
import { useMediaQuery } from "../../../../Hooks/useMediaQuery";

export const logosTickers: LogoTicker[] = [
  { id: "1", src: logo, alt: "Logo" },
  { id: "2", src: logo1, alt: "Logo 1" },
  { id: "3", src: logo2, alt: "Logo 2" },
  { id: "4", src: logo3, alt: "Logo 3" },
  { id: "5", src: logo4, alt: "Logo 4" },
  { id: "6", src: logo5, alt: "Logo 5" },
  { id: "7", src: logo6, alt: "Logo 6" },
  { id: "8", src: logo7, alt: "Logo 7" },
  { id: "9", src: logo8, alt: "Logo 8" },
  { id: "10", src: logo9, alt: "Logo 9" },
  { id: "11", src: logo10, alt: "Logo 10" },
  { id: "12", src: logo11, alt: "Logo 11" },
  { id: "13", src: logo12, alt: "Logo 12" },
  { id: "14", src: logo13, alt: "Logo 13" },
  { id: "15", src: logo14, alt: "Logo 14" },
  { id: "16", src: logo15, alt: "Logo 15" },
];

type LogoTicker = { id: string; src: StaticImageData; alt: string };

export function LogoTicker() {
  const { isMobile } = useMediaQuery();

  return (
    <div className="py-8 text-white">
      <div className="container">
        <div className="relative mt-9 flex overflow-hidden before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#121212,rgba(0,0,0,0))] after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#121212,rgba(0,0,0,0))] sm:before:absolute sm:before:content-[''] sm:after:absolute sm:after:content-['']">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="grid grid-cols-2 items-start justify-items-center bg-transparent gap-x-4 gap-y-4 sm:flex sm:flex-none sm:justify-center sm:gap-16 sm:pr-16"
            initial={isMobile ? {} : { translateX: 0 }}
            animate={isMobile ? {} : { translateX: "-50%" }}
          >
            {Array.from({ length: 2 }).map(() =>
              logosTickers.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto flex-none"
                />
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
