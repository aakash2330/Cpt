import Image from "next/image";

interface ContactCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export function ContactCard({ title, value, icon }: ContactCardProps) {
  return (
    <div className="bg-[#FFF5EF] w-full h-auto min-h-[150px] flex flex-col justify-start px-4 md:px-6 rounded-[12px] border border-[#F16407] text-black py-4 md:py-6 gap-3 md:gap-4">
      <div className="flex gap-3 md:gap-4 items-center">
        {icon}
        <h1 className="text-base md:text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-start">
        <p className="text-sm md:text-base leading-normal break-all">{value}</p>
      </div>
    </div>
  );
}

