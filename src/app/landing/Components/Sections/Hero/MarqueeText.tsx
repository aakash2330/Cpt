"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
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
  const [visibleLogos, setVisibleLogos] = useState(5);

  const handleLoadMore = () => {
    setVisibleLogos((prev) => Math.min(prev + 5, logosTickers.length));
  };

  const showLoadMore = isMobile && visibleLogos < logosTickers.length;

  if (isMobile) {
    return (
      <div className="text-white pt-2 pb-8">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-6"
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-4 w-full"
              layout
            >
              {logosTickers.slice(0, visibleLogos).map((logo, index) => (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: index >= 5 ? (index - 5) * 0.05 : index * 0.1,
                    duration: 0.3,
                  }}
                  layout
                  className="flex justify-center w-full"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-auto"
                  />
                </motion.div>
              ))}
            </motion.div>

            {showLoadMore && (
              <motion.button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-white font-medium transition-colors mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                Load More
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop layout (existing horizontal ticker)
  return (
    <div className="py-8 text-white">
      <div className="container">
        <div className="relative mt-9 flex overflow-hidden before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#12202F,rgba(0,0,0,0))] after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#12202F,rgba(0,0,0,0))] before:absolute before:content-[''] after:absolute after:content-['']">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none justify-center gap-16 pr-16"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
          >
            {Array.from({ length: 2 }).map((_, arrayIndex) =>
              logosTickers.map((logo) => (
                <Image
                  key={`${logo.id}-${arrayIndex}`}
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

