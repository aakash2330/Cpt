import Image from "next/image";

export function LogoMain() {
  return <Logo></Logo>;
}

function Logo() {
  return <Image src="/image 175.png" width={115} height={115} alt="CPT Logo" />;
}
