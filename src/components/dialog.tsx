import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ImageDialog({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[80dvh] w-auto min-w-[60vw] bg-transparent p-4 sm:p-6 md:p-8 aspect-video">
        <DialogTitle className="hidden" />
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageSrc ? "Enlarged project image" : "Image placeholder"}
            className="object-contain"
            fill
            sizes="100vw"
            priority
            loading="eager"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
