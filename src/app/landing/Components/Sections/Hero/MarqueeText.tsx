"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import acmeLogo from "../../../../../../public/acme.svg";
import apexLogo from "../../../../../../public/apex.svg";
import celestiaLogo from "../../../../../../public/celestia.svg";
import echoLogo from "../../../../../../public/echo.svg";
import pulseLogo from "../../../../../../public/pulse.svg";
import quantumLogo from "../../../../../../public/quantum.svg";
import { useMediaQuery } from "@/app/Hooks/useMediaQuery";

export const logosTickers: LogoTicker[] = [
  {
    id: "1",
    src: acmeLogo,
    alt: "Acme Logo",
  },
  {
    id: "2",
    src: quantumLogo,
    alt: "Quantum Logo",
  },
  {
    id: "3",
    src: echoLogo,
    alt: "Echo Logo",
  },
  {
    id: "4",
    src: celestiaLogo,
    alt: "Celestia Logo",
  },
  {
    id: "5",
    src: pulseLogo,
    alt: "Pulse Logo",
  },
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
