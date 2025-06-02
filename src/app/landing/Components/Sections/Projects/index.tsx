import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function HeroNumbers({ count, title }: { count: number; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl md:text-3xl font-bold">{count}+</div>
      <div className="text-xl md:text-2xl font-normal">{title}</div>
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
    <div className={cn("relative w-full rounded-t-[16px] h-48 md:h-full", className)}>
      <Link
        className={cn(!isClickable && "pointer-events-none")}
        href={href || "/portfolio"}
      >
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover rounded-t-[16px]"
          priority
        />
      </Link>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <div className="h-full z-50 bg-background w-full flex flex-col gap-12 justify-center items-center px-10">
      <div className="flex py-20 px-12 justify-center items-center gap-4">
        <HeroNumbers count={16} title="Year experience" />
        <Separator orientation="vertical" className="bg-white/50" />
        <HeroNumbers count={328} title="Completed Projects" />
      </div>

      <BentoGrid className="w-full px-4 md:px-0">
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
        alt="Hyatt Place Toronto project"
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
        alt="Sherway Tower Toronto project"
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
        alt="Hampton Inn and Suites Mono project"
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
        alt="Comfort Inn Bradford project"
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
        alt="Align Wellness Centre Stoney Creek project"
      />
    ),
  },
];