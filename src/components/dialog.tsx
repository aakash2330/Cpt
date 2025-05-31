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
      <DialogTrigger>
        <Image
          src={imageSrc}
          alt={imageSrc}
          className="object-cover rounded-[12px]"
          fill
          sizes="(max-width: 640px) 66vw, 50vw"
          priority={true}
          loading={"eager"}
        />
      </DialogTrigger>
      <DialogContent className="min-h-[80dvh] rounded-[12px] min-w-[100dvh]">
        <DialogTitle />
        {children}
      </DialogContent>
    </Dialog>
  );
}
