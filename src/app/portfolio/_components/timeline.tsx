import Image from "next/image";
import { projects } from "./data";

export default function ProjectTimeline() {
  return (
    <div className="text-white min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 w-px h-full bg-[#FFFFFF] hidden lg:block"></div>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative mb-24 md:mb-36 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} mb-4 md:mb-0 mt-[100px] lg:mt-[350px]`}
              >
                <div className="h-80">
                  <div className="grid grid-cols-6 gap-1 h-[calc(50%-2px)]">
                    <div className="overflow-hidden col-span-4 h-full relative rounded-tl-xl rounded-bl-xl">
                      <Image
                        src={project.images[0]?.src}
                        alt={project.images[0]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="overflow-hidden col-span-2 h-full relative rounded-tr-xl rounded-br-xl">
                      <Image
                        src={project.images[1]?.src}
                        alt={project.images[1]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 16vw"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-8 gap-1 h-[calc(50%+2px)]">
                    <div className="overflow-hidden col-span-2 h-full relative rounded-bl-xl">
                      <Image
                        src={project.images[2]?.src}
                        alt={project.images[2]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 12vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden col-span-4 h-full relative">
                      <Image
                        src={project.images[3]?.src}
                        alt={project.images[3]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden col-span-2 h-full relative rounded-br-xl">
                      <Image
                        src={project.images[4]?.src}
                        alt={project.images[4]?.alt || "Project image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 12vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-48" : "md:pl-12"} lg:mt-[400px]`}
              >
                <div className="p-4 pl-16 md:pl-4">
                  <h2 className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
                    {project.title}
                  </h2>
                  <p className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
                    {project.location}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs max-w-sm">
                        {detail.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
