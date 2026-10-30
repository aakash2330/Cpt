"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type ProjectPhotoProject = {
  name: string;
  images: string[];
};

export function ProjectPhotoGallery({
  project,
  className,
}: {
  project: ProjectPhotoProject;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const coverImage = project.images[0]!;
  const activeImage = project.images[activeIndex]!;
  const photoCount = project.images.length;

  return (
    <Dialog>
      <DialogTrigger asChild onClick={() => setActiveIndex(0)}>
        <button
          type="button"
          aria-label={`Open ${project.name} project photos`}
          className={`group relative aspect-[3/2] w-full cursor-pointer overflow-hidden bg-white/[0.04] text-left ${className ?? ""} focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]`}
        >
          <Image
            src={coverImage}
            alt={`${project.name} project`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale-[45%] saturate-[0.82] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-[12%] group-hover:saturate-100"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <span className="pointer-events-none absolute inset-3 border border-transparent transition duration-300 group-hover:border-[var(--gold)]/45" />
          <span className="pointer-events-none absolute left-3 top-3 h-px w-12 bg-[var(--gold)]/45 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-4 pt-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
              View photos
              <ArrowUpRight aria-hidden="true" size={14} />
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-white/70">
              {photoCount} {photoCount === 1 ? "photo" : "photos"}
            </span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-none border-white/15 bg-[#090909] p-5 text-white sm:max-w-5xl sm:p-7"
        onKeyDown={(event) => {
          if (photoCount < 2) return;
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setActiveIndex((index) => (index + photoCount - 1) % photoCount);
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            setActiveIndex((index) => (index + 1) % photoCount);
          }
        }}
      >
        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close project photos"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center border border-white/15 bg-black text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
          >
            <X size={18} />
          </button>
        </DialogClose>
        <div className="border-b border-white/10 pb-4 pr-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
            Project photos
          </p>
          <DialogTitle className="mt-2 text-3xl leading-tight text-white sm:text-4xl">
            {project.name}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-6 text-white/55">
            {photoCount === 1
              ? "One project photo."
              : `Use the arrows to browse ${photoCount} project photos.`}
          </DialogDescription>
        </div>
        <div
          className="relative aspect-[4/3] max-h-[62dvh] w-full overflow-hidden bg-black sm:aspect-[16/10]"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.name} project photos`}
        >
          <Image
            src={activeImage}
            alt={`${project.name} project photo ${activeIndex + 1}`}
            fill
            priority
            sizes="(min-width: 1280px) 86vw, 94vw"
            className="object-contain"
          />
        </div>
        <div
          className={`flex items-center gap-4 ${photoCount > 1 ? "justify-between" : "justify-center"}`}
        >
          {photoCount > 1 && (
            <button
              type="button"
              aria-label={`Previous ${project.name} photo`}
              onClick={() =>
                setActiveIndex((index) => (index + photoCount - 1) % photoCount)
              }
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
          )}
          <span
            aria-live="polite"
            className="text-xs uppercase tracking-[0.16em] text-white/55"
          >
            <span className="text-[var(--gold)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/35">/</span>
            {String(photoCount).padStart(2, "0")}
          </span>
          {photoCount > 1 && (
            <button
              type="button"
              aria-label={`Next ${project.name} photo`}
              onClick={() =>
                setActiveIndex((index) => (index + 1) % photoCount)
              }
              className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              Next
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
