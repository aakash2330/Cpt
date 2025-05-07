export function HeroVideoSection() {
  return (
    <div className="h-screen bg-background w-full flex flex-col gap-12 justify-center items-center">
      <video
        className="w-full h-full"
        autoPlay={true}
        preload="auto"
        muted
        loop
        playsInline
      >
        <source
          src="https://2cf0i1r2ez.ufs.sh/f/CUistsOk9f0In6eF4s0qH9cG4kJlRwMtVCQKijsoLYOD15ae"
          type="video/mp4"
        />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
