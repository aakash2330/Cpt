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
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    hexBinResolution: 3,
    hexMargin: 0.2,
    hexAltitude: ({ sumWeight }: { sumWeight: number }) => sumWeight * 0.04,
    hexTopColor: () => colors[Math.floor(Math.random() * colors.length)],
    hexSideColor: () => "rgba(255, 255, 255, 0.5)",
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const hexData = [
    { lat: 22.3193, lng: 114.1694, weight: Math.random() * 20 },
    { lat: 34.0522, lng: -118.2437, weight: Math.random() * 20 },
    { lat: 40.7128, lng: -74.006, weight: Math.random() * 20 },
    { lat: 51.5074, lng: -0.1278, weight: Math.random() * 20 },
    { lat: 48.8566, lng: 2.3522, weight: Math.random() * 20 },
    { lat: 35.6895, lng: 139.6917, weight: Math.random() * 20 },
    { lat: -33.8688, lng: 151.2093, weight: Math.random() * 20 },
    { lat: -22.9068, lng: -43.1729, weight: Math.random() * 20 },
    { lat: 28.6139, lng: 77.209, weight: Math.random() * 20 },
    { lat: 30.0444, lng: 31.2357, weight: Math.random() * 20 },
    { lat: 1.3521, lng: 103.8198, weight: Math.random() * 20 },
    { lat: 55.7558, lng: 37.6173, weight: Math.random() * 20 },
    { lat: 39.9042, lng: 116.4074, weight: Math.random() * 20 },
    { lat: -34.6037, lng: -58.3816, weight: Math.random() * 20 },
    { lat: 19.4326, lng: -99.1332, weight: Math.random() * 20 },
    { lat: 4.711, lng: -74.0721, weight: Math.random() * 20 },
    { lat: 6.5244, lng: 3.3792, weight: Math.random() * 20 },
    { lat: -26.2041, lng: 28.0473, weight: Math.random() * 20 },
    { lat: 37.7749, lng: -122.4194, weight: Math.random() * 20 },
    { lat: 41.9028, lng: 12.4964, weight: Math.random() * 20 },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-8 h-screen md:h-auto dark:bg-background bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
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
        <div className="absolute w-full  h-72 md:h-full z-10">
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
