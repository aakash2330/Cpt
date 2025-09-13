import { GlobeDemo } from "./globe";
import Link from "next/link";
import TrustSeals from "../TrustSeals";

export default function ExperienceSection() {
  return (
    <div className="min-h-[150dvh] pt-48 pb-24 bg-background z-50 px-12 w-full flex flex-col gap-12 justify-center items-center">
      <div className="bg-background flex flex-col gap-12 justify-center items-center">
        <div className="text-3xl font-semibold text-center ">
          BUILDING BETTER <br /> DELIVERING DIFFERENT
        </div>
        <div className="text-center font-semibold font-inter">
          At Division 9, construction isn't just a service — it's a seamless experience. With over
          <br />
          a decade of expertise in commercial and residential construction across Toronto and the GTA,
          <br />
          we bring precision, professionalism, and partnership to every project.
          <br />
          <Link href="/contact" className="text-blue-400 hover:text-blue-200">
            Let's Build Something Better →
          </Link>
        </div>
        <GlobeDemo></GlobeDemo>
      </div>
      <div className="w-full">
        <TrustSeals />
      </div>
    </div>
  );
}
