import Image from "next/image";
import { ServiceCard } from "./_components/ServiceCard";

export default function ServicePage() {
    return (
        <div className="w-full">
            <div className="relative h-[60vh] xs:h-[70vh] sm:h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20">
                    <Image
                        src="/service_bg.jpg"
                        alt="Construction workers at site"
                        fill
                        className="object-cover -z-1"
                        priority
                    />
                </div>

                <div className="relative z-10 flex h-full items-end">
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-1/3 bg-[#121212] py-8 px-4 xs:px-6 sm:px-12 md:px-16 text-white rounded-tr-3xl">
                        <h2 className="mb-2 text-sm sm:text-base font-semibold tracking-wide">
                            WHAT WE DO
                        </h2>
                        <p className="text-xs xs:text-sm sm:text-base max-w-sm">
                            At City Professional Trades, we offer a comprehensive range of
                            construction services tailored to meet the unique needs of each
                            project. Our expertise spans:
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 pt-12">
                <ServiceCard
                    image="/design_and_build.jpg"
                    heading="DESIGN AND BUILD"
                    description="From concept to completion, we provide integrated solutions that bring your vision to life with precision and efficiency.​"
                />
            </div>

            {[
                {
                    image: "/construction_management.jpg",
                    heading: "CONSTRUCTION MANAGEMENT",
                    description:
                        "Overseeing all phases of construction, we coordinate teams and resources to achieve seamless project execution.​​",
                },
                {
                    image: "/general_contracting.jpg",
                    heading: "GENERAL CONTRACTING",
                    description:
                        "Managing every aspect of the construction process, we ensure projects are delivered on time, within budget, and to the highest standards.​",
                },
                {
                    image: "/residential.jpg",
                    heading: "RESIDENTIAL",
                    description:
                        "Turn your dream home into a reality with our help. We offer comprehensive residential construction services to cater to your every need.",
                },
                {
                    image: "/commercial.jpg",
                    heading: "COMMERCIAL",
                    description:
                        "Achieve your ideal look and function for your commercial space with our assistance. We can provide you with exemplary construction solutions to meet your specific needs.",
                },
                {
                    image: "/hospitality.jpg",
                    heading: "HOSPITALITY",
                    description:
                        "See your envisioned property design for your hotel or hospitality space come to life with our aid. At City Professional Trades, we offer full-service construction services for this type of real estate.",
                },
                {
                    image: "/industrial.jpg",
                    heading: "INDUSTRIAL",
                    description:
                        "Build a durable and safe facility for the specific needs of your industrial operations with City Professional Trades. We can provide you with a wide range of building services to help you achieve your construction goals.",
                },
                {
                    image: "/custom_construction_solution.jpg",
                    heading: "CUSTOM CONSTRUCTION SOLUTIONS",
                    description:
                        "Tailoring our services to your specific requirements, we deliver bespoke solutions that align with your goals and expectations.",
                },
            ].map((card, index) => (
                <div key={index} className="py-6 sm:py-8 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
                    <ServiceCard {...card} />
                </div>
            ))}
        </div>
    );
}
