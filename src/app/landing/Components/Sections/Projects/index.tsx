import { cn } from "@/lib/utils";
import Image from "next/image";

function HeroNumbers({ count, title }: { count: number; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl md:text-3xl font-bold">{count}+</div>
      <div className="text-xl  md:text-2xl font-normal">{title}</div>
    </div>
  );
}
export function ProjectImage({
  url,
  alt,
  className,
  isClickable = false,
  href,
}: {
  url: string;
  alt: string;
  className?: string;
  isClickable?: boolean;
  href?: string;
}) {
  return (
    <div className={cn("relative w-full rounded-[16px] h-full", className)}>
      <Link
        className={cn(!isClickable && "pointer-events-none")}
        href={"/portfolio"}
      >
        <Image
          src={url}
          alt={alt}
          fill
          className="object-fill rounded-t-[16px]"
          priority
        />
      </Link>
    </div>
  );
}

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <div className="h-[150dvh] md:h-[130dvh] z-50 bg-background w-full flex flex-col gap-12 justify-center items-center">
      <div className="flex py-20 px-12 justify-center items-center gap-4">
        <HeroNumbers count={16} title="Year experience"></HeroNumbers>
        <Separator orientation="vertical" className="bg-white/50"></Separator>
        <HeroNumbers count={328} title="Completed Projects"></HeroNumbers>
      </div>
      <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const items = [
  {
    title: "Hyatt Place-33 Carlson Ct, Toronto, ON",
    header: (
      <ProjectImage
        href="/portfolio"
        isClickable={true}
        url="/proj/1.png"
        alt="/958ea0c2a5ec62b21d8c31254959f814c6c2a5dd.png"
      />
    ),
  },
  {
    title: "Sherway Tower-205, Sherway Gardens, Toronto",
    header: (
      <ProjectImage
        href="/portfolio"
        isClickable={true}
        url="/proj/7.png"
        alt="/0570608cdae20e14061115471361f8bd5a6de1bd.png"
      />
    ),
  },
  {
    title: "Hampton INN and Suites - 201, Mono ON",
    header: (
      <ProjectImage
        href="/portfolio"
        isClickable={true}
        url="/proj/4.png"
        alt="/ab0a9969067707e11e676971443433197974e0d0.png"
      />
    ),
  },
  {
    title: "Comfort Inn & Suits - Bradford, ON",
    header: (
      <ProjectImage
        href="/portfolio"
        isClickable={true}
        url="/proj/Screenshot 2025-05-31 at 10.23.24 AM.png"
        alt="/2005cb1422bc9325dbb3051189d840bec42f391b.png"
      />
    ),
  },
  {
    title: "Align Wellness Centre – Stoney Creek, ON",
    header: (
      <ProjectImage
        href="/portfolio"
        isClickable={true}
        url="/proj/2.png"
        alt="/1c00dec44743a70fd4aca77e66f8576c329befb4.png"
      />
    ),
  },
];
