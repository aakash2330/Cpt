import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

export function ImageDialog({
  images,
  initialIndex,
  children,
}: {
    images: ProjectImage[];
    initialIndex: number;
  children: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(false);

  // Reset to initial index when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Touch/swipe support for mobile
  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!isOpen) return;

      const difference = startX - endX;
      const threshold = 50; // minimum swipe distance

      if (Math.abs(difference) > threshold) {
        if (difference > 0) {
          // Swiped left - go to next
          goToNext();
        } else {
          // Swiped right - go to previous
          goToPrevious();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[80dvh] w-[95vw] sm:w-auto min-w-[60vw] max-w-[95vw] bg-transparent p-2 sm:p-4 md:p-6 lg:p-8 aspect-video border-none">
        <DialogTitle className="sr-only">
          Image {currentIndex + 1} of {images.length}
        </DialogTitle>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-manipulation"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-black/50 text-white text-xs sm:text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 lg:left-[-100px] z-40 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-manipulation"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full mx-8 sm:mx-12 lg:mx-0">
            <Image
              src={currentImage?.src || ""}
              alt={currentImage?.alt || `Image ${currentIndex + 1}`}
              className="object-contain"
              fill
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 60vw"
              priority
              loading="eager"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 lg:right-[-100px] z-40 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-manipulation"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </div>

        {/* Image Dots/Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe instruction (shows briefly) */}
        <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-xs sm:text-sm text-center sm:hidden">
          Swipe left or right to navigate
        </div>
      </DialogContent>
    </Dialog>
  );
}