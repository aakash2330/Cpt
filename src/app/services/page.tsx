import Image from "next/image";
import { ServiceCard } from "./_components/ServiceCard";

export default function ServicePage() {
    return (
        <div className="w-full">
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/service_bg.jpg"
                        alt="Construction workers at site"
                        fill
                        className="object-cover -z-1"
                    />
                </div>

                <div className="relative z-10 flex h-full items-end">
                    <div className="w-1/2 h-1/3 bg-[#121212] py-16 p-12 sm:px-24 text-white rounded-tr-4xl">
                        <h2 className="mb-2 text-base font-semibold tracking-wide">WHAT WE DO</h2>
                        <p className="text-sm max-w-sm">
                            At City Professional Trades, we offer a comprehensive range of
                            construction services tailored to meet the unique needs of each
                            project. Our expertise spans:
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8 px-8">
                <ServiceCard
                    image="/design_and_build.jpg"
                    heading="DESIGN AND BUILD"
                    description="From concept to completion, we provide integrated solutions that bring your vision to life with precision and efficiency.​"
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/construction_management.jpg"
                    heading="CONSTRUCTION MANAGEMENT"
                    description="Overseeing all phases of construction, we coordinate teams and resources to achieve seamless project execution.​​"
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/general_contracting.jpg"
                    heading="GENERAL CONTRACTING"
                    description="Managing every aspect of the construction process, we ensure projects are delivered on time, within budget, and to the highest standards.​"
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/residential.jpg"
                    heading="RESIDENTIAL"
                    description="Turn your dream home into a reality with our help. We offer comprehensive residential construction services to cater to your every need."
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/commercial.jpg"
                    heading="COMMERCIAL"
                    description="Achieve your ideal look and function for your commercial space with our assistance. We can provide you with exemplary construction solutions to meet your specific needs."
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/hospitality.jpg"
                    heading="HOSPITALITY"
                    description="See your envisioned property design for your hotel or hospitality space come to life with our aid. At City Professional Trades, we offer full-service construction services for this type of real estate."
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/industrial.jpg"
                    heading="INDUSTRIAL"
                    description="Build a durable and safe facility for the specific needs of your industrial operations with City Professional Trades. We can provide you with a wide range of building services to help you achieve your construction goals."
                />
            </div>
            <div className="p-8">
                <ServiceCard
                    image="/custom_construction_solution.jpg"
                    heading="CUSTOM CONSTRUCTION SOLUTIONS"
                    description="Tailoring our services to your specific requirements, we deliver bespoke solutions that align with your goals and expectations."
                />
            </div>
        </div>
    );
}
