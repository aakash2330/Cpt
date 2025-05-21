import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <div className="h-[150dvh] z-50 bg-background w-full flex flex-col gap-12 justify-center items-center">
      <div className="flex py-36 justify-center items-center gap-4">
        <HeroNumbers count={16} title="Year xperience"></HeroNumbers>
        <Separator orientation="vertical" className="bg-white/50"></Separator>
        <HeroNumbers count={528} title="Completed Projects"></HeroNumbers>
      </div>

      <div className="h-full space-y-3 px-24 w-full">
        <div className="h-1/2 space-x-3 flex w-full">
          <ProjectImage
            className="w-1/2"
            alt="project"
            url="/958ea0c2a5ec62b21d8c31254959f814c6c2a5dd.png"
          ></ProjectImage>
          <ProjectImage
            className="w-1/4"
            alt="project"
            url="/1c00dec44743a70fd4aca77e66f8576c329befb4.png"
          ></ProjectImage>
          <ProjectImage
            className="w-1/4"
            alt="project"
            url="/ab0a9969067707e11e676971443433197974e0d0.png"
          ></ProjectImage>
        </div>
        <div className="h-1/2 space-x-3 flex w-full">
          <ProjectImage
            alt="project"
            url="/2005cb1422bc9325dbb3051189d840bec42f391b.png"
          ></ProjectImage>
          <ProjectImage
            alt="project"
            url="/0570608cdae20e14061115471361f8bd5a6de1bd.png"
          ></ProjectImage>
        </div>
      </div>
    </div>
  );
}

function HeroNumbers({ count, title }: { count: number; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-bold">{count}+</div>
      <div className="text-2xl font-normal">{title}</div>
    </div>
  );
}
function ProjectImage({
  url,
  alt,
  className,
}: {
  url: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={url}
        alt={alt}
        fill
        className="object-cover rounded-xl"
        priority
      />
    </div>
  );
}
