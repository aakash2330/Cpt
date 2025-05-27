import { cn } from "@/lib/utils";
import Image from "next/image";

function HeroNumbers({ count, title }: { count: number; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-bold">{count}+</div>
      <div className="text-2xl font-normal">{title}</div>
    </div>
  );
}
export function ProjectImage({
  url,
  alt,
  className,
}: {
  url: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full rounded-[16px] h-full", className)}>
      <Image
        src={url}
        alt={alt}
        fill
        className="object-cover rounded-t-[16px]"
        priority
      />
    </div>
  );
}

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Separator } from "@/components/ui/separator";

export function ProjectsSection() {
  return (
    <div className="h-[150dvh] z-50 bg-background w-full flex flex-col gap-12 justify-center items-center">
      <div className="flex py-36 justify-center items-center gap-4">
        <HeroNumbers count={16} title="Year experience"></HeroNumbers>
        <Separator orientation="vertical" className="bg-white/50"></Separator>
        <HeroNumbers count={528} title="Completed Projects"></HeroNumbers>
      </div>
      <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
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
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <ProjectImage
        url="/958ea0c2a5ec62b21d8c31254959f814c6c2a5dd.png"
        alt="/958ea0c2a5ec62b21d8c31254959f814c6c2a5dd.png"
      />
    ),
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <ProjectImage
        url="/1c00dec44743a70fd4aca77e66f8576c329befb4.png"
        alt="/1c00dec44743a70fd4aca77e66f8576c329befb4.png"
      />
    ),
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <ProjectImage
        url="/ab0a9969067707e11e676971443433197974e0d0.png"
        alt="/ab0a9969067707e11e676971443433197974e0d0.png"
      />
    ),
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <ProjectImage
        url="/2005cb1422bc9325dbb3051189d840bec42f391b.png"
        alt="/2005cb1422bc9325dbb3051189d840bec42f391b.png"
      />
    ),
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <ProjectImage
        url="/0570608cdae20e14061115471361f8bd5a6de1bd.png"
        alt="/0570608cdae20e14061115471361f8bd5a6de1bd.png"
      />
    ),
  },
];
