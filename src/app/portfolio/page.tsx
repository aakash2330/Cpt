import Image from "next/image";
import ProjectTimeline from "./_components/page";

export default function ServicePage() {
    return (
        <div className="w-full">
            <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20">
                    <Image
                        src="/portfolio.jpg"
                        alt="Building"
                        fill
                        className="object-cover -z-1"
                        priority
                    />
                </div>

                <div className="relative z-10 flex h-full items-end">
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-1/3 bg-[#121212] py-8 px-4 xs:px-6 sm:px-12 md:px-16 text-white rounded-tr-3xl">
                        <h2 className="mb-2 text-sm sm:text-lg font-semibold tracking-wide">
                            OUR WORK SPEAKS FOR ITSELF
                        </h2>
                        <p className="text-xs sm:text-sm max-w-sm">
                            Explore our portfolio of residential and commercial projects, showcasing our commitment to quality, craftsmanship, and client satisfaction.
                        </p>
                    </div>
                </div>
            </div>
            <ProjectTimeline/>
        </div>
    );
}
