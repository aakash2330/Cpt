import Image from "next/image";

interface ServiceCardProps {
    image: string;
    heading: string;
    description: string;
}

export function ServiceCard({ image, heading, description }: ServiceCardProps) {
    return (
        <div className="w-full my-8">
            <div className="relative w-full h-[400px]">
                <Image
                    src={image}
                    alt="card-image"
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className="text-white flex items-center justify-between py-4 ">
                <h3 className="text-xl font-semibold mb-2">{heading}</h3>
                <p className="text-sm max-w-md">{description}</p>
            </div>
        </div>
    );
}
