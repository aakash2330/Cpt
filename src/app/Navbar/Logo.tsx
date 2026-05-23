import Image from "next/image";

export function LogoMain() {
  return <Logo></Logo>;
}

function Logo() {
  return (
    <div className="relative h-12 w-20 sm:h-14 sm:w-24">
      <Image
        src="/Newlogoupdate/CPT_PS Version.png"
        alt="CPT Construction"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}
