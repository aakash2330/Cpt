import Image from "next/image";

export function LogoMain() {
  return <Logo></Logo>;
}

function Logo() {
  return <div className="w-20 sm:w-24 md:w-28 relative aspect-square">
    <Image
      src="/image 175.png"
      alt="CPT Logo"
      fill
      className="object-contain"
    />
  </div>
}
