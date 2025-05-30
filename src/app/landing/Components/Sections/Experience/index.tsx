import { GlobeDemo } from "./globe";

export default function ExperienceSection() {
  return (
    <div className="h-[150dvh] pt-48 pb-24 bg-background z-50 px-12 w-full flex flex-col gap-12 justify-center items-center">
      <div className="bg-background flex flex-col gap-12 justify-center items-center">
        <div className="text-3xl font-semibold text-center ">
          WE PROVIDE YOU <br /> THE BEST EXPERIENCE
        </div>
        <div className="text-center font-semibold font-inter">
          Trust one of the most experienced general contracting teams for your
          next project. City Professional Trades has been helping <br /> homes
          and businesses in Toronto, Ontario, and surrounding areas plan,
          organize, and execute seamless construction and <br /> remodeling
          projects for more than a decade.
        </div>
        <GlobeDemo></GlobeDemo>
      </div>
    </div>
  );
}
