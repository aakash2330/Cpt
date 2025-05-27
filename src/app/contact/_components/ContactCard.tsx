import Image from "next/image";

interface ContactCardProps {
    title: string;
    value: string;
}

export function ContactCard({ title, value }: ContactCardProps) {
    return (
        <div className="bg-[#FFF5EF] w-full h-auto min-h-[150px] flex flex-col justify-start px-4 md:px-6 rounded-xl border border-[#F16407] text-black py-4 md:py-6 gap-3 md:gap-4">
            <div className="flex gap-3 md:gap-4 items-center">
                <Image src="/email2.svg" alt="email-icon" height={24} width={24} />
                <h1 className="text-base md:text-lg font-semibold">{title}</h1>
            </div>
            <div className="flex items-start">
                <p className="text-sm md:text-base leading-tight">{value}</p>
            </div>
        </div>
    );
}