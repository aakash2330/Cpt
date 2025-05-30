"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("../../../../../components/globe").then((m) => m.World),
  {
    ssr: false,
  },
);

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 56.1304, lng: -106.3468 },
    autoRotate: false,
    autoRotateSpeed: 0,
    hexBinResolution: 3,
    hexMargin: 0.2,
    hexAltitude: ({ sumWeight }: { sumWeight: number }) => sumWeight * 0.04,
    hexTopColor: () => colors[Math.floor(Math.random() * colors.length)],
    hexSideColor: () => "rgba(255, 255, 255, 0.5)",
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const hexData = [
    { lat: 45.4215, lng: -75.6972, weight: Math.random() * 20 }, // Ottawa
    { lat: 43.6532, lng: -79.3832, weight: Math.random() * 20 }, // Toronto
    { lat: 49.2827, lng: -123.1207, weight: Math.random() * 20 }, // Vancouver
    { lat: 45.5017, lng: -73.5673, weight: Math.random() * 20 }, // Montreal
    { lat: 53.5461, lng: -113.4938, weight: Math.random() * 20 }, // Edmonton
    { lat: 52.1332, lng: -106.67, weight: Math.random() * 20 }, // Saskatoon
    { lat: 49.8951, lng: -97.1384, weight: Math.random() * 20 }, // Winnipeg
    { lat: 51.0447, lng: -114.0719, weight: Math.random() * 20 }, // Calgary
    { lat: 46.8139, lng: -71.208, weight: Math.random() * 20 }, // Quebec City
    { lat: 44.6488, lng: -63.5752, weight: Math.random() * 20 }, // Halifax
    { lat: 62.454, lng: -114.3718, weight: Math.random() * 20 }, // Yellowknife
    { lat: 60.7212, lng: -135.0568, weight: Math.random() * 20 }, // Whitehorse
    { lat: 47.5615, lng: -52.7126, weight: Math.random() * 20 }, // St. John's
    { lat: 50.4452, lng: -104.6189, weight: Math.random() * 20 }, // Regina
    { lat: 46.2382, lng: -63.1311, weight: Math.random() * 20 }, // Charlottetown
    { lat: 47.5605, lng: -52.7139, weight: Math.random() * 20 }, // Random Newfoundland
    { lat: 58.7634, lng: -94.1529, weight: Math.random() * 20 }, // Random Nunavut/Manitoba border area
    { lat: 70.4643, lng: -94.8281, weight: Math.random() * 20 }, // Random Nunavut
    { lat: 55.9167, lng: -120.0167, weight: Math.random() * 20 }, // Random British Columbia
    { lat: 54.0, lng: -68.0, weight: Math.random() * 20 }, // Random Quebec/Labrador
  ];

  return (
    <div className="flex flex-row items-center justify-center py-8 h-[60dvh] md:h-screen md:h-auto dark:bg-background bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[20rem] md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        ></motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World
            hexBinPointsData={hexData}
            globeConfig={globeConfig}
            data={[]}
          />
        </div>
      </div>
    </div>
  );
}
