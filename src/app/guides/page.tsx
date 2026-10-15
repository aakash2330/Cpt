import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "The Interior Finishes Guide 2026 | CPT Construction",
  description:
    "Download CPT Construction's practical field guide to Division 9, with guidance on cost drivers, specifications, assemblies and sequencing.",
};

const guideFile = "/guides/cpt-interior-finishes-guide-2026-landscape.pdf";

export default function GuidesPage() {
  return (
    <div className="site-page">
      <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(199,164,107,0.16),transparent_38%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:96px_96px] opacity-25"
        />
        <div className="site-container relative z-10">
          <p className="section-label">
            CPT Field Guide <span className="mx-2 text-white/35">/</span> 2026 Edition
          </p>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
            <div>
              <p className="mb-5 max-w-xl text-sm uppercase leading-6 tracking-[0.13em] text-white/55">
                For developers, construction managers and general contractors
              </p>
              <h1 className="max-w-[720px] text-5xl leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                The Interior
                <span className="block text-[var(--gold)]">Finishes Guide.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                A practical field guide to Division 9 - cost drivers,
                specifications, sequence and scope.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={guideFile}
                  download="CPT-Interior-Finishes-Guide-2026.pdf"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--gold)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
                >
                  <Download aria-hidden="true" size={18} strokeWidth={1.8} />
                  Download the guide
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-white/50">
                <span>Canada</span>
                <span>2026 edition</span>
                <span>Division 9</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] px-3 pb-10 sm:px-6">
              <figure className="relative z-10 overflow-hidden border border-white/15 bg-white p-2 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-3">
                <Image
                  src="/guides/interior-finishes-guide-cover.jpg"
                  alt="Cover of The Interior Finishes Guide 2026, featuring a Hyatt Place interior"
                  width={1400}
                  height={1082}
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="h-auto w-full"
                />
              </figure>
              <p className="absolute bottom-0 left-6 z-20 border border-white/10 bg-[#0b0b0a] px-4 py-3 text-[0.65rem] uppercase tracking-[0.17em] text-white/65 sm:left-8">
                14-page PDF <span className="mx-2 text-[var(--gold)]">/</span> 2026 edition
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
