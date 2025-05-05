import Image from "next/image";

interface ServiceCardProps {
    image: string;
    heading: string;
    description: string;
}

export function ServiceCard({ image, heading, description }: ServiceCardProps) {
    return (
        <div className="w-full my-6 sm:my-8">
            <div className="relative w-full h-56 xs:h-64 sm:h-72 md:h-96 lg:h-[400px]">
                <Image
                    src={image}
                    alt="card-image"
                    fill
                    className="object-cover rounded-xl sm:rounded-2xl"
                    loading="lazy"
                />
            </div>
            <div className="text-white flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold">{heading}</h3>
                <p className="text-sm xs:text-base sm:text-sm max-w-md">{description}</p>
            </div>
        </div>
    );
}
