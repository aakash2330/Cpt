import Image from "next/image";

// Define TypeScript interfaces
interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetail {
  text: string;
}

interface Project {
  id: string;
  title: string;
  location: string;
  images: ProjectImage[];
  details: ProjectDetail[];
}

export default function ProjectTimeline() {
  const projects: Project[] = [
    {
      id: "hampton-inn",
      title: "HAMPTON INN AND SUITES - 201,",
      location: "MONORA PARK DR, MONO ON",
      images: [
        { src: "/hampton1.jpg", alt: "Modern architecture" },
        { src: "/hampton2.jpg", alt: "Interior design" },
        { src: "/hampton3.jpg", alt: "Building exterior" },
        { src: "/hampton4.jpg", alt: "Hotel entrance" },
        { src: "/hampton5.jpg", alt: "Garden" },
      ],
      details: [
        {
          text: "Provided expert Metal Stud Framing and Drywall Installation services",
        },
        { text: "Worked on 84 rooms across 4 levels" },
        {
          text: "Ensured precision and attention to detail to meet hospitality industrystandards",
        },
        {
          text: "Delivered a high-quality, functional, and visually appealing space",
        },
      ],
    },
    {
      id: "comfort-inn",
      title: "COMFORT INN & SUITES -",
      location: "BRADFORD, ON",
      images: [
        { src: "/comfort1.jpg", alt: "Hotel exterior" },
        { src: "/comfort2.jpg", alt: "Modern interior" },
        { src: "/comfort3.jpg", alt: "Architectural detail" },
        { src: "/comfort4.jpg", alt: "Lobby design" },
        { src: "/comfort5.jpg", alt: "Room view" },
      ],
      details: [
        {
          text: "Provided Steel Stud framing, Drywall installation, and rough carpentry for",
        },
        { text: "Completed work on 91 rooms across 4 floors" },
      ],
    },
    {
      id: "hyatt-place",
      title: "HYATT PLACE - 33 CARLSON CT,",
      location: "TORONTO, ON",
      images: [
        { src: "/hyatt1.jpg", alt: "Hyatt exterior" },
        { src: "/hyatt2.jpg", alt: "Hyatt interior" },
        { src: "/hyatt3.jpg", alt: "Architectural detail" },
        { src: "/hyatt4.jpg", alt: "Lobby view" },
        { src: "/hyatt5.jpg", alt: "Room design" },
      ],
      details: [
        {
          text: "Provided expert Steel Stud Framing, Drywall Installation, Insulation, and Acoustic solutions",
        },
        { text: "Worked on an 8-floor, 196-room project" },
      ],
    },
    {
      id: "arcavia",
      title: "ARCAVIA LONG TERM CARE -",
      location: "ORILLIA, ON",
      images: [
        { src: "/arcavia1.jpg", alt: "Arcavia exterior" },
        { src: "/arcavia2.jpg", alt: "Arcavia interior" },
        { src: "/arcavia3.jpg", alt: "Architectural detail" },
        { src: "/arcavia4.jpg", alt: "Structure view" },
        { src: "/arcavia5.jpg", alt: "Building design" },
      ],
      details: [
        {
          text: "Provided Steel Stud Framing, Drywall Installation, and Acoustic Solutions",
        },
        { text: "Worked on 196 rooms across 3 floor" },
      ],
    },
    {
      id: "hullabaloo-autism-centre",
      title: "HULLABALOO AUTISM CENTRE -",
      location: "MISSISSAUGA, ON",
      images: [
        { src: "/hullabaloo1.jpg", alt: "Modern architecture" },
        { src: "/hullabaloo2.jpg", alt: "Interior design" },
        { src: "/hullabaloo3.jpg", alt: "Building exterior" },
        { src: "/hullabaloo4.jpg", alt: "Centre entrance" },
        { src: "/hullabaloo5.jpg", alt: "Centre entrance" },
      ],
      details: [
        {
          text: "Served as the General Contractor for the Hullabaloo Autism Centre project in Mississauga, ON",
        },
        {
          text: "Handled Interior Demolition, Steel Stud Framing, and Drywall Construction",
        },
        { text: "Supplied and Installed Glass Door Panels" },
        { text: "Managed painting and LVT Flooring Installation" },
      ],
    },
    {
      id: "align-wellness-centre",
      title: "ALIGN WELLNESS CENTRE -",
      location: "STONEY CREEK, ON",
      images: [
        { src: "/align1.jpg", alt: "Wellness center exterior" },
        { src: "/align2.jpg", alt: "Treatment room" },
        { src: "/align3.jpg", alt: "Reception area" },
        { src: "/align4.jpg", alt: "Facility design" },
        { src: "/align5.jpg", alt: "Facility design" },
      ],
      details: [
        { text: "Served as the General Contractor for the project" },
        {
          text: "Supplied and Installed Steel Stud Framing, Drywall Construction, and Insulation",
        },
        { text: "Supplied and Installed Drywall and Acoustic Ceiling Tiles" },
        {
          text: "Supplied and installed LVT Flooring, Wooden Doors, Trims, and Baseboards",
        },
        {
          text: "Coordinated with service trades for Electrical, HVAC, Plumbing, and Sprinkler System Installations",
        },
      ],
    },
    {
      id: "sherway-tower",
      title: "SHERWAY TOWER - 205 SHERWAY ",
      location: "GARDENS ROAD, TORONTO, ON",
      images: [
        { src: "/sherway1.jpg", alt: "Tower exterior" },
        { src: "/sherway2.jpg", alt: "Living space" },
        { src: "/sherway3.jpg", alt: "Building features" },
        { src: "/sherway4.jpg", alt: "Architecture details" },
        { src: "/sherway5.jpg", alt: "Architecture details" },
      ],
      details: [
        {
          text: "Supplied and installed 70,000 square feet of flooring across 24 floors",
        },
        {
          text: "Supplied and Installed Wallpaper in the hallways on all 24 floors",
        },
      ],
    },
    {
      id: "rathburn-rd",
      title: "350 RATHBURN ROAD WEST,",
      location: "TORONTO, ON",
      images: [
        { src: "/rathburn1.jpg", alt: "Building exterior" },
        { src: "/rathburn2.jpg", alt: "Interior spaces" },
        { src: "/rathburn3.jpg", alt: "Construction details" },
        { src: "/rathburn4.jpg", alt: "Modern design" },
        { src: "/rathburn5.jpg", alt: "Modern design" },
      ],
      details: [
        { text: "Executed demolition work as part of the renovation process" },
        { text: "Supplied and applied high-quality painting finishes" },
        {
          text: "Supplied and Installed Wallpaper throughout the renovated spaces",
        },
      ],
    },
    {
      id: "medical-building",
      title: "MEDICAL BUILDING - MONO, ON",
      location: "",
      images: [
        { src: "/medical1.jpg", alt: "Medical building exterior" },
        { src: "/medical2.jpg", alt: "Interior design" },
        { src: "/medical3.jpg", alt: "Treatment room" },
        { src: "/medical4.jpg", alt: "Building entrance" },
        { src: "/medical5.jpg", alt: "Building entrance" },
      ],
      details: [
        {
          text: "Efficiently executed Steel Stud Framing, Drywall Construction, and Insulation",
        },
        { text: "Work at the Medical Building in Mono" },
      ],
    }
  ];

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
                className="absolute left-8 md:left-1/2 w-32 h-px bg-[#FFFFFF] transform -translate-y-1/2 hidden lg:block mt-[157px]"
                style={{
                  top: "350px",
                  left: index % 2 === 0 ? "50%" : "calc(50% - 32px)",
                  width: index % 2 === 0 ? "100px" : "32px",
                }}
              ></div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 z-10 mt-[500px] hidden lg:block"></div>

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

                  {/* 4px spacing between rows */}
                  <div className="h-1"></div>

                  {/* Bottom row - 3 images side by side with equal height but 4px taller */}
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
