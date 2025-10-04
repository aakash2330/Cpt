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
          When it comes to Division 9 construction, we go beyond the build. With
          over a decade of
          <br />
          experience in commercial and residential projects across Toronto and
          the GTA, our focus is
          <br />
          on precision, professionalism, and lasting results.
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
