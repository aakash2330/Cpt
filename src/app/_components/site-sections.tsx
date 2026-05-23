import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import {
  associations,
  credentials,
  homeHeroVideo,
  industryPages,
  portfolioProjects,
  principles,
  sectors,
  services,
  stats,
  team,
  testimonials,
} from "../_data/site";

type IndustryPage = (typeof industryPages)[keyof typeof industryPages];
type IndustryProject = IndustryPage["groups"][number]["projects"][number];
type PortfolioProject = (typeof portfolioProjects)[number];

const heroFacts = [
  "Self-performed Division 9",
  "Directly employed crews",
  "Single accountable lead",
];

const homeHeroSignals = [
  {
    label: "Founded",
    value: "2009",
  },
  {
    label: "Delivery Region",
    value: "Ontario",
  },
  {
    label: "Scope Model",
    value: "Self-performed Division 9",
  },
];

const deliverySequence = [
  {
    label: "Mobilize",
    body: "Interior scope, supervision, and labour are aligned before the first stud goes in.",
  },
  {
    label: "Execute",
    body: "Metal framing through flooring stays inside one coordinated production sequence.",
  },
  {
    label: "Closeout",
    body: "Deficiencies, documentation, and final inspection remain with one accountable team.",
  },
];

const serviceSignals = [
  {
    label: "Contract Model",
    value: "One Division 9 scope",
  },
  {
    label: "Trade Coverage",
    value: "7 self-performed trades",
  },
  {
    label: "Crew Structure",
    value: "Directly employed labour",
  },
  {
    label: "Accountability",
    value: "One responsible lead",
  },
];

const serviceControls = [
  {
    title: "Sequence Control",
    body: "Framing, boarding, finishing, paint, and floors are scheduled as one production path instead of separate trade packages.",
  },
  {
    title: "Specification Discipline",
    body: "Fire-rated assemblies, acoustic requirements, finish schedules, and brand standards stay tied to the same accountable team.",
  },
  {
    title: "Closeout Ownership",
    body: "Deficiencies, documentation, and final inspection are resolved by the crews that executed the work.",
  },
];

const companySignals = [
  {
    label: "Founded",
    value: "2009",
  },
  {
    label: "Operating Model",
    value: "One contract",
  },
  {
    label: "Labour",
    value: "Direct crews",
  },
  {
    label: "Accountability",
    value: "No handoff point",
  },
];

const companyContrasts = [
  {
    label: "Split Trade Scope",
    points: [
      "Multiple independent contracts",
      "Separate supervision by trade",
      "Coordination pressure left with the GC",
    ],
  },
  {
    label: "CPT Model",
    points: [
      "One Division 9 contract",
      "Directly employed interior crews",
      "Schedule, quality, and closeout stay with CPT",
    ],
  },
];

const industryDossiers = [
  {
    title: "Hospitality",
    standard: "Brand inspection discipline",
    pressure: "Flag requirements, corridor repetition, guest-facing finishes.",
  },
  {
    title: "Long-Term Care & Healthcare",
    standard: "Regulated environment control",
    pressure: "Acoustic performance, clinical adjacency, deficiency sensitivity.",
  },
  {
    title: "Multi-Residential",
    standard: "Floor-cycle consistency",
    pressure: "Occupied access, repeatable throughput, resident coordination.",
  },
  {
    title: "Commercial & Institutional",
    standard: "Documentation-led execution",
    pressure: "Fit-out changes, public-use durability, procurement requirements.",
  },
];

const industryStandards = [
  {
    label: "Documentation",
    body: "Scope, specification, and closeout expectations are managed before the crew sequence starts.",
  },
  {
    label: "Crew Control",
    body: "Directly employed trades keep production aligned without multiple subcontractor handoffs.",
  },
  {
    label: "Finish Standard",
    body: "Brand, institutional, and residential expectations are carried through to final inspection.",
  },
];

const credentialProofs = [
  {
    label: "LTIFR",
    value: "0.00",
    note: "Lost-Time Incident Frequency Rate",
  },
  {
    label: "Lost-Time Incidents",
    value: "0",
    note: "Four consecutive years",
  },
  {
    label: "WSIB Claims",
    value: "0",
    note: "All operating years",
  },
];

const credentialRecords = [
  {
    index: "01",
    title: "Safety Record",
    measure: "0.00 LTIFR",
    proof: "Zero lost-time incidents, four consecutive years.",
    body: "The safety record holds across every operating environment in the portfolio, including regulated healthcare work, occupied residential scopes, and brand-inspected hospitality delivery.",
  },
  {
    index: "02",
    title: "Insurance & Bonding",
    measure: "Certificates on request",
    proof: "General liability insurance is in place.",
    body: "Performance bonds and labour and material payment bonds are available for qualifying projects, with bond documentation prepared for procurement review when required.",
  },
  {
    index: "03",
    title: "WSIB Standing",
    measure: "Active / in good standing",
    proof: "Clearance certificate available on request.",
    body: "WSIB status is maintained for GC, developer, and institutional procurement teams that require formal clearance before award or mobilisation.",
  },
];

const credentialPacket = [
  "General liability certificate",
  "WSIB clearance certificate",
  "Bonding documentation for qualifying scopes",
  "Membership and association standing",
];

const closingProofs = [
  "2027 onward delivery windows",
  "Prequalification documents available",
  "Bonding available for qualifying projects",
];

const portfolioReviewStandards = [
  {
    label: "Scope",
    title: "Division 9 Delivered as One Package",
    body: "Each record keeps framing, drywall, ceilings, finishing, paint, and flooring tied to one accountable production path.",
  },
  {
    label: "Review",
    title: "Built for Procurement Scanning",
    body: "Sector, location, scale, status, and scope notes are separated so GCs and owners can review the work quickly.",
  },
  {
    label: "Proof",
    title: "References Available on Request",
    body: "Detailed project references and documentation can be supplied to qualified teams during prequalification.",
  },
];

const portfolioRegisterNotes = [
  "Delivered interior scopes only; no conceptual or aspirational work mixed into the register.",
  "Sector grouping mirrors how project teams evaluate risk, access, inspection, and finish expectations.",
  "No project values are published; procurement teams can request formal documentation directly.",
];

function isRequestOnlyProject(project: IndustryProject) {
  return (
    "status" in project &&
    typeof project.status === "string" &&
    project.status === "Records available on request"
  );
}

function getSectorHref(sector: string) {
  return sectors.find((item) => item.title === sector)?.href ?? "/industries";
}

export function ArrowLink({
  href,
  children,
  variant = "text",
}: {
  href: string;
  children: ReactNode;
  variant?: "text" | "solid" | "outline";
}) {
  const classes = {
    text: "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--gold)] transition duration-300 hover:-translate-y-0.5 hover:text-white",
    solid:
      "inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white",
    outline:
      "inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:text-[var(--gold)]",
  };

  return (
    <Link href={href} className={classes[variant]}>
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`section-intro ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="section-copy">{body}</p>}
    </div>
  );
}

export function HomePageContent() {
  return (
    <div className="site-page">
      <section className="hero-shell min-h-[100svh]">
        <Image
          src="/portfolio.jpg"
          alt="CPT interior construction portfolio"
          fill
          priority
          className="object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/portfolio.jpg"
        >
          <source src={homeHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
        <div className="hero-content">
          <p className="section-label">City Professional Trades</p>
          <h1>
            <span className="block">In-House.</span>
            <span className="block">Coordinated.</span>
            <span className="block">Accountable.</span>
          </h1>
          <p>
            The complete interior scope, self-performed by dedicated crews. One
            point of contact from first stud to final inspection.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ArrowLink href="/portfolio" variant="solid">
              View Our Portfolio
            </ArrowLink>
            <ArrowLink href="/contact" variant="outline">
              Start a Conversation
            </ArrowLink>
          </div>
          <aside
            data-hero-rail
            className="mt-10 grid max-w-4xl gap-px border border-white/12 bg-white/10 sm:grid-cols-3"
          >
            {homeHeroSignals.map((signal) => (
              <div
                key={signal.label}
                className="bg-black/55 px-4 py-4 backdrop-blur-md sm:px-5"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                  {signal.label}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-white">
                  {signal.value}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <StatBar />
      <PositioningBlock />
      <SectorOverview />
      <PortfolioPreview />
      <TestimonialsSection />
      <CredentialsStrip />
      <ClosingCta />
    </div>
  );
}

export function StatBar() {
  return (
    <section className="site-band py-8">
      <div className="grid gap-px overflow-hidden border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-black px-5 py-7 sm:px-7 lg:px-10">
            <div className="mx-auto w-full max-w-[320px]">
              <div className="text-4xl font-semibold leading-none text-white md:text-5xl">
                {item.value}
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PositioningBlock() {
  return (
    <section className="site-section relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:120px_120px] opacity-35" />
      <div className="site-container relative grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div className="xl:sticky xl:top-28">
          <SectionIntro
            eyebrow="One Contract. Complete Scope."
            title="The Interior Scope, From First Stud to Final Inspection."
            body="CPT self-performs every Division 9 trade under one contract and one accountable operating model."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ArrowLink href="/contact" variant="solid">
              Discuss Your Scope
            </ArrowLink>
            <ArrowLink href="/services" variant="outline">
              View Services
            </ArrowLink>
          </div>
        </div>
        <div className="border border-white/10 bg-black">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-black p-6 md:p-8">
              <p className="section-label">Self-Performed Scope</p>
              <div className="space-y-6 text-lg leading-8 text-white/68">
                <p>
                  Metal framing, drywall, insulation, acoustic ceilings, taping,
                  painting, and flooring are delivered by directly employed
                  crews. No work passed to outside labour.
                </p>
                <p>
                  From mobilisation to handover, one person is accountable. No
                  handoffs, no confusion.
                </p>
              </div>
            </div>
            <div className="bg-[var(--surface)]">
              {deliverySequence.map((item, index) => (
                <div
                  key={item.label}
                  className="group border-b border-white/10 p-6 transition duration-300 last:border-b-0 hover:bg-white/[0.03] md:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="min-w-10 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-3xl leading-none text-white">
                        {item.label}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/62">
                        {item.body}
                      </p>
                      <div className="mt-6 h-px w-12 bg-[var(--gold)]/50 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectorOverview() {
  return (
    <section className="site-section border-t border-white/10">
      <div className="site-container">
        <SectionIntro
          eyebrow="Where CPT Operates"
          title="Four Sectors. One Operating Standard."
          body="The specification requirements change by sector. The crew discipline does not."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group bg-[var(--surface)] transition duration-300 hover:bg-[var(--surface-2)]"
            >
              <ImageFrame src={sector.image} alt={`${sector.title} interior`} />
              <div className="space-y-4 border-t border-transparent p-6 transition duration-300 group-hover:border-[var(--gold)]/50">
                <h3 className="text-2xl text-white">{sector.title}</h3>
                <p className="min-h-28 text-sm leading-6 text-white/62">
                  {sector.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                  {sector.cta}
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioPreview() {
  return (
    <section className="site-section border-t border-white/10">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Portfolio" title="Delivered Across Ontario." />
          <ArrowLink href="/portfolio">View Our Portfolio</ArrowLink>
        </div>
        <PortfolioGrid projects={portfolioProjects.slice(0, 6)} />
      </div>
    </section>
  );
}

export function PortfolioGrid({
  projects = portfolioProjects,
}: {
  projects?: typeof portfolioProjects;
}) {
  return (
    <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={`${project.name}-${project.location}`}
          className="group bg-black transition duration-300 hover:bg-[var(--surface)]"
        >
          <ImageFrame src={project.image} alt={`${project.name} project`} />
          <div className="space-y-5 border-t border-transparent p-6 transition duration-300 group-hover:border-[var(--gold)]/50">
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-[var(--gold)]/45 bg-[var(--gold)]/8 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                {project.sector}
              </span>
              <span className="border border-white/15 bg-white/[0.025] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/58">
                {project.status}
              </span>
            </div>
            <div>
              <h3 className="text-2xl text-white">{project.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/45">
                {project.location}
              </p>
            </div>
            <p className="text-sm font-medium text-white/82">{project.scale}</p>
            <p className="text-sm leading-6 text-white/58">{project.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="site-section relative overflow-hidden border-t border-white/10 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionIntro
            eyebrow="In Practice"
            title="What Clients Say."
            body="The operating model matters most when project demands change, deadlines compress, and occupied environments need disciplined coordination."
          />
          <p className="max-w-2xl text-sm uppercase tracking-[0.16em] text-white/45 lg:justify-self-end lg:text-right">
            Client references available to qualified GCs, developers, and
            procurement teams.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.attribution}
              className="group relative bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:p-8"
            >
              <div className="mb-8 flex items-center justify-between border-t border-[var(--gold)] pt-5">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
              </div>
              <blockquote className="text-xl leading-8 text-white/82">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.16em] text-white/45">
                {testimonial.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CredentialsStrip() {
  return (
    <section className="site-section border-t border-white/10">
      <div className="site-container grid gap-12 xl:grid-cols-[0.62fr_1.38fr] xl:items-start">
        <div className="xl:sticky xl:top-28">
          <SectionIntro
            eyebrow="Standing"
            title="The Record Behind the Work."
            body="Insurance, safety, association standing, and bonding readiness are kept visible for procurement review."
          />
          <div className="mt-8">
            <ArrowLink href="/about/credentials-safety" variant="outline">
              View Credentials
            </ArrowLink>
          </div>
        </div>
        <div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {credentials.map((item, index) => (
              <div
                key={item}
                className="group bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:p-7"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-lg leading-7 text-white">{item}</p>
                <div className="mt-6 h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
              </div>
            ))}
          </div>
          <AssociationStrip />
        </div>
      </div>
    </section>
  );
}

export function AssociationStrip() {
  return (
    <div className="mt-10 grid items-stretch gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
      {associations.map((association) => (
        <div
          key={association.name}
          className="group flex min-h-28 flex-col items-center justify-center bg-black px-5 py-5 text-center transition duration-300 hover:bg-[var(--surface)]"
        >
          <div className="flex h-10 items-center justify-center">
            {association.logo ? (
              <Image
                src={association.logo}
                alt=""
                width={180}
                height={40}
                className="max-h-10 w-auto object-contain brightness-0 invert"
              />
            ) : association.mark ? (
              <span className="text-center text-3xl font-semibold leading-none text-white">
                {association.mark}
              </span>
            ) : (
              <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                {association.name}
              </span>
            )}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-white/40 transition duration-300 group-hover:text-white/62">
            {association.name}
          </p>
          <div className="mt-4 h-px w-8 bg-[var(--gold)]/40 transition duration-300 group-hover:w-12 group-hover:bg-[var(--gold)]" />
        </div>
      ))}
    </div>
  );
}

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--gold)]/80 bg-black py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(199,164,107,0.18),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_100%,120px_120px]" />
      <div className="site-container relative">
        <div className="grid gap-10 border border-white/10 bg-black/70 p-6 backdrop-blur md:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="section-label">Start the Right Conversation</p>
            <h2 className="max-w-4xl text-5xl leading-[1.02] text-white md:text-7xl">
              Your Project. Delivered On Schedule.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
              One contract. One crew. One standard, from the first stud to the
              sign-off. CPT is currently accepting project discussions for 2027
              onward delivery windows.
            </p>
          </div>
          <div>
            <div className="mb-8 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {closingProofs.map((proof) => (
                <div key={proof} className="bg-black p-4">
                  <p className="text-sm leading-6 text-white/72">{proof}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ArrowLink href="/contact" variant="solid">
                Start a Conversation
              </ArrowLink>
              <ArrowLink href="/about/credentials-safety" variant="outline">
                View Credentials
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  noPhoto = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  noPhoto?: boolean;
}) {
  if (noPhoto || !image) {
    return (
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(199,164,107,0.09),transparent_36%)] bg-[length:120px_120px,100%_100%] opacity-35" />
        <div className="site-container relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="max-w-5xl">
              {eyebrow && <p className="section-label">{eyebrow}</p>}
              <h1 className="max-w-[980px] text-balance text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl">
                {title}
              </h1>
              {intro && (
                <p className="mt-7 max-w-3xl text-xl leading-9 text-white/66">
                  {intro}
                </p>
              )}
            </div>
            <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                Delivery Standard
              </p>
              <div className="mt-6 space-y-4">
                {heroFacts.map((fact, index) => (
                  <div
                    key={fact}
                    className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs uppercase tracking-[0.18em] text-white/32">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-white/72">
                      {fact}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-shell min-h-[78svh]">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-30" />
      <div className="hero-content">
        {eyebrow && <p className="section-label">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}

export function CompanyContent() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="About / Company"
        title="Sixteen Years. One Operating Model."
        intro="CPT Construction has been delivering Division 9 interior scopes across Ontario since 2009. The operating model has not changed."
      />
      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {companySignals.map((item) => (
              <DossierItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="site-section relative overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-35" />
        <div className="site-container relative grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <aside className="self-start border-y border-white/10 py-8 xl:sticky xl:top-28">
            <p className="section-label">Who We Are</p>
            <h2 className="max-w-xl text-4xl leading-[1.04] text-white sm:text-5xl md:text-6xl">
              One accountable interior contractor.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/64">
              Most Division 9 scopes are split across independent trades. CPT
              replaces that structure with one contract, one in-house sequence,
              and one accountable team.
            </p>
            <div className="mt-10 border-t border-[var(--gold)]/65 pt-6">
              <p className="text-sm uppercase tracking-[0.16em] text-white/46">
                Developers and GCs who award a Division 9 scope to CPT do not
                manage it. CPT does.
              </p>
            </div>
          </aside>

          <div className="grid gap-8">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[460px] overflow-hidden bg-black">
                <Image
                  src="/CPT(1)/new_image.png"
                  alt="CPT operating model reference"
                  fill
                  priority
                  sizes="(min-width: 1280px) 38vw, 100vw"
                  className="object-cover grayscale-[42%] saturate-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/16 to-transparent" />
                <div className="pointer-events-none absolute inset-5 border border-white/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    Operating Model
                  </p>
                  <p className="mt-3 max-w-md text-lg leading-7 text-white/76">
                    The same organisation that frames the walls tapes, paints,
                    and installs the floors.
                  </p>
                </div>
              </div>

              <div className="bg-black p-6 md:p-8 lg:p-10">
                <p className="section-label">Accountability Transfer</p>
                <h3 className="max-w-2xl text-4xl leading-[1.04] text-white md:text-6xl">
                  The handoff point is where quality disappears.
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                  CPT removes that handoff. The crew that establishes the
                  substrate stays accountable through the finish standard and
                  final inspection.
                </p>
                <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                  {companyContrasts.map((item, index) => (
                    <article key={item.label} className="bg-black p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                        {String(index + 1).padStart(2, "0")} / {item.label}
                      </p>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-white/62">
                        {item.points.map((point) => (
                          <li key={point} className="border-t border-white/10 pt-3">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <OperatingModelPanel />
          </div>
        </div>
      </section>
      <PrinciplesSection />
      <section className="site-section border-t border-white/10">
        <div className="site-container flex flex-col gap-3 sm:flex-row">
          <ArrowLink href="/contact" variant="solid">
            Discuss Your Scope
          </ArrowLink>
          <ArrowLink href="/portfolio" variant="outline">
            View Our Portfolio
          </ArrowLink>
        </div>
      </section>
    </div>
  );
}

function OperatingModelPanel() {
  const operatingModel = [
    {
      label: "One Contract",
      body: "Every Division 9 trade sits under one CPT scope.",
    },
    {
      label: "Direct Crews",
      body: "Framing, drywall, ceilings, finishing, painting, and flooring stay in-house.",
    },
    {
      label: "Clear Accountability",
      body: "Schedule, quality, and closeout stay with one responsible team.",
    },
  ];

  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
      {operatingModel.map((item, index) => (
        <div key={item.label} className="bg-black p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
            {String(index + 1).padStart(2, "0")} / {item.label}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/66">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function PrinciplesSection() {
  return (
    <section className="site-section border-t border-white/10 bg-black">
      <div className="site-container grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="self-start border-y border-white/10 py-8 lg:sticky lg:top-28">
          <p className="section-label">How We Work</p>
          <h2 className="text-4xl leading-[1.04] text-white">
            Five principles. No exceptions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            The company model only works when the field standard is consistent:
            direct communication, early ownership, and safe execution.
          </p>
        </aside>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group grid bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:grid-cols-[160px_minmax(0,1fr)] md:p-8"
            >
              <div className="border-t border-[var(--gold)]/60 pt-5">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 border-t border-white/10 pt-5 md:border-[var(--gold)]/60">
                <h3 className="text-3xl leading-tight text-white md:text-4xl">
                  {principle.title}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/62">
                  {principle.body}
                </p>
                <div className="mt-8 h-px w-10 bg-[var(--gold)]/50 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamContent() {
  const [principal, ...teamRoster] = team;
  const teamSignals = [
    { label: "Listed Leads", value: `${team.length}` },
    { label: "Management Layer", value: "Direct access" },
    { label: "Accountability", value: "Named ownership" },
  ];

  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="About / Team"
        title="The People Responsible for Your Project."
        intro="Every name below is reachable and accountable. There is no management layer between this team and the work."
      />
      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {teamSignals.map((item) => (
              <div key={item.label} className="bg-black p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl leading-tight text-white md:text-3xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {principal && (
        <section className="site-section border-t border-white/10">
          <div className="site-container">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.9fr_1.1fr]">
              <article
                className="group relative min-h-[420px] overflow-hidden bg-black"
              >
                {principal.image ? (
                  <>
                    <Image
                      src={principal.image}
                      alt={principal.name}
                      fill
                      className="object-cover grayscale-[55%] transition duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#080808,#12110f_48%,#030303)]" />
                )}
                <div className="pointer-events-none absolute inset-6 border border-white/10" />
                <div className="absolute inset-x-8 top-8 h-px bg-[var(--gold)]/60" />
                <div className="relative flex min-h-[420px] flex-col justify-between p-8 md:p-10">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                      Principal
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                      01
                    </p>
                  </div>
                  <div>
                    {!principal.image && (
                      <p className="mb-10 text-8xl leading-none text-white/16 md:text-9xl">
                        {principal.initials}
                      </p>
                    )}
                    <h2 className="text-5xl leading-[1.02] text-white md:text-7xl">
                      {principal.name}
                    </h2>
                    <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--gold)]">
                      {principal.role}
                    </p>
                  </div>
                </div>
              </article>
              <div className="bg-black p-6 md:p-9">
                <p className="section-label">Accountability Lead</p>
                <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl">
                  Senior responsibility stays close to the work.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                  CPT keeps leadership, project execution, estimating, business
                  development, finance, and documentation tied to named people
                  instead of anonymous departments.
                </p>
                <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                  <DossierItem label="Role" value={principal.role} />
                  <DossierItem label="Focus" value={principal.focus} />
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ArrowLink href="/contact" variant="solid">
                    Start a Conversation
                  </ArrowLink>
                  <ArrowLink href="/about/credentials-safety" variant="outline">
                    View Credentials
                  </ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="self-start border-y border-white/10 py-8 lg:sticky lg:top-28">
            <p className="section-label">Team Directory</p>
            <h2 className="text-4xl leading-[1.04] text-white">
              Direct roles for the conversations that matter.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              The roster identifies who owns the major workstreams around a CPT
              scope, from the first project discussion through documentation
              and closeout.
            </p>
          </aside>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {teamRoster.map((person, index) => (
              <article
                key={person.name}
                className="group grid bg-black transition duration-300 hover:bg-[var(--surface)] md:grid-cols-[220px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[220px] overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#090909,#11100e_48%,#050505)] md:border-b-0 md:border-r">
                  <div className="pointer-events-none absolute inset-5 border border-white/10" />
                  <div className="pointer-events-none absolute inset-x-5 top-5 h-px bg-[var(--gold)]/50" />
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover grayscale-[55%]"
                    />
                  ) : (
                    <div className="flex h-full min-h-[220px] w-full items-center justify-center">
                      <span className="text-6xl text-white/72 transition duration-300 group-hover:text-white">
                        {person.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                        {String(index + 2).padStart(2, "0")}
                      </p>
                      <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                    </div>
                    <h3 className="mt-7 text-3xl leading-tight text-white md:text-4xl">
                      {person.name}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[var(--gold)]">
                      {person.role}
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
                      {person.focus}
                    </p>
                  </div>
                  <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                    <DossierItem label="Status" value="Reachable" />
                    <DossierItem label="Accountability" value="Named role" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CredentialsContent() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="About / Credentials & Safety"
        title="The Record Behind the Relationship."
        intro="Available to any GC, developer, or institutional procurement team on request."
      />
      <section className="site-section relative overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-35" />
        <div className="site-container relative grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch">
          <article className="flex min-h-[520px] flex-col justify-between border border-white/10 bg-black p-6 md:p-10">
            <div>
              <p className="section-label">Safety Ledger</p>
              <h2 className="mt-8 max-w-4xl text-5xl leading-[1.02] text-white md:text-7xl">
                Zero is the standard that matters.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                CPT keeps safety, insurance, WSIB, and bonding documentation in
                a procurement-ready state for teams that need evidence before
                award, mobilisation, or closeout.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {credentialProofs.map((item) => (
                <div key={item.label} className="bg-black p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-4 text-5xl leading-none text-white md:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {credentialRecords.map((record) => (
              <article
                key={record.title}
                className="group bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-6 border-t border-[var(--gold)]/70 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                      {record.index}
                    </p>
                    <h2 className="mt-8 text-3xl leading-tight text-white md:text-4xl">
                      {record.title}
                    </h2>
                  </div>
                  <p className="max-w-56 text-right text-sm uppercase tracking-[0.16em] text-white/42">
                    {record.measure}
                  </p>
                </div>
                <p className="mt-8 text-lg font-medium text-[var(--gold)]">
                  {record.proof}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/64">
                  {record.body}
                </p>
                <div className="mt-8 h-px w-12 bg-white/18 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10 bg-black">
        <div className="site-container grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="self-start border-y border-white/10 py-8 lg:sticky lg:top-28">
            <p className="section-label">Prequalification Packet</p>
            <h2 className="text-4xl leading-[1.04] text-white">
              The documents procurement teams ask for first.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Certificates and formal package material are available directly to
              GCs, developers, asset owners, and institutional procurement
              teams reviewing a CPT scope.
            </p>
            <div className="mt-8">
              <ArrowLink href="/contact" variant="solid">
                Request Documents
              </ArrowLink>
            </div>
          </aside>

          <div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {credentialPacket.map((item, index) => (
                <article
                  key={item}
                  className="group bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:p-7"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-6 text-2xl leading-tight text-white">
                    {item}
                  </p>
                  <div className="mt-8 h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                </article>
              ))}
            </div>
            <div className="mt-12">
              <SectionIntro
                eyebrow="Memberships & Associations"
                title="Recognized by the Industry."
                body="Association standing is presented as part of the same prequalification review surface, so credentials and documentation stay together."
              />
              <AssociationStrip />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DossierItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p className="mt-3 text-lg text-white">{value}</p>
    </div>
  );
}

export function ServicesContent() {
  return (
    <div className="site-page">
      <PageHero
        eyebrow="Services"
        title="Division 9. Every Trade. One Contract."
        intro="Metal framing through flooring: every trade self-performed, no portion passed to outside labour."
        image="/service_bg.jpg"
      />
      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {serviceSignals.map((signal) => (
              <div key={signal.label} className="bg-black p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  {signal.label}
                </p>
                <p className="mt-4 text-2xl leading-tight text-white md:text-3xl">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <p className="section-label">Complete Scope</p>
            <h2 className="max-w-2xl text-5xl leading-[1.02] text-white md:text-7xl">
              Built as one controlled interior sequence.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
              Each trade hands off to the next inside the same organisation, so
              layout, substrate, finish, and closeout stay coordinated from the
              first layout line to the last deficiency item.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {serviceControls.map((control, index) => (
                <article key={control.title} className="group bg-black p-6">
                  <div className="flex items-start gap-5">
                    <span className="min-w-9 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl text-white">{control.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">
                        {control.body}
                      </p>
                      <div className="mt-5 h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group grid bg-black transition duration-300 hover:bg-[var(--surface)] lg:grid-cols-[minmax(0,0.84fr)_minmax(360px,0.66fr)]"
                >
                  <div className="flex min-w-0 flex-col justify-between p-6 md:p-8 lg:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-5 border-t border-white/10 pt-5">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                          Trade {String(index + 1).padStart(2, "0")}
                        </p>
                        <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                      </div>
                      <h2 className="mt-8 text-3xl leading-tight text-white md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
                        {service.body}
                      </p>
                    </div>
                    <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                      <DossierItem label="Delivery" value="Self-performed" />
                      <DossierItem label="Accountability" value="CPT crew" />
                    </div>
                  </div>
                  <div className="min-h-[320px] border-t border-white/10 lg:border-l lg:border-t-0">
                    <ImageFrame
                      src={service.image}
                      alt={`${service.title} on-site trade work`}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10 bg-black">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {deliverySequence.map((item, index) => (
              <article key={item.label} className="group bg-black p-7 md:p-9">
                <div className="flex items-center justify-between border-t border-[var(--gold)]/70 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    Phase {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                </div>
                <h2 className="mt-10 text-4xl leading-tight text-white">
                  {item.label}
                </h2>
                <p className="mt-5 text-base leading-7 text-white/62">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-[var(--gold)]/65 pt-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-label">Next Step</p>
                <h2 className="max-w-3xl text-5xl leading-[1.02] text-white md:text-7xl">
                  One party. One call.
                </h2>
              </div>
              <ArrowLink href="/contact" variant="solid">
                Discuss Your Scope
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function IndustriesOverviewContent() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="Industries"
        title="Four Sectors. One Operating Standard."
        intro="Hospitality, healthcare, multi-residential, commercial, and institutional environments all receive the same documentation, crew accountability, and finish standard."
      />
      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <DossierItem
              label="Sectors"
              value={`${sectors.length} operating environments`}
            />
            <DossierItem
              label="Delivery Model"
              value="Self-performed Division 9"
            />
            <DossierItem label="Standard" value="One accountable sequence" />
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 lg:grid-cols-[380px_minmax(0,1fr)]">
          <aside className="self-start border-y border-white/10 py-8 lg:sticky lg:top-28">
            <p className="section-label">Sector Dossier</p>
            <h2 className="text-4xl leading-[1.04] text-white">
              Different environments. Same operating control.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              CPT separates sector requirements by inspection pressure, access
              constraints, and finish standard, then runs the same accountable
              interior sequence through each one.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {industryStandards.map((item, index) => (
                <article key={item.label} className="group bg-black p-6">
                  <div className="flex items-start gap-5">
                    <span className="min-w-9 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl text-white">{item.label}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">
                        {item.body}
                      </p>
                      <div className="mt-5 h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {sectors.map((sector, index) => {
              const dossier = industryDossiers.find(
                (item) => item.title === sector.title,
              );

              return (
                <Link
                  key={sector.title}
                  href={sector.href}
                  className="group grid bg-black transition duration-300 hover:bg-[var(--surface)] xl:grid-cols-[0.72fr_1.28fr]"
                >
                  <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 xl:border-b-0 xl:border-r">
                    <Image
                      src={sector.image}
                      alt={`${sector.title} interior`}
                      fill
                      sizes="(min-width: 1280px) 34vw, 100vw"
                      className="object-cover grayscale-[42%] saturate-[0.82] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-[14%] group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col justify-between p-6 md:p-8 lg:p-10">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                          Operating Environment
                        </p>
                        <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                      </div>
                      <h3 className="mt-8 text-4xl leading-tight text-white md:text-5xl">
                        {sector.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/66">
                        {sector.description}
                      </p>
                    </div>
                    <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
                      <DossierItem
                        label="Standard"
                        value={dossier?.standard || "Same operating standard"}
                      />
                      <DossierItem
                        label="Pressure"
                        value={
                          dossier?.pressure || "Sector-specific requirements"
                        }
                      />
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)] transition duration-300 group-hover:text-white">
                      {sector.cta}
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10 bg-black">
        <div className="site-container">
          <div className="border-t border-[var(--gold)]/65 pt-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-label">Project Fit</p>
                <h2 className="max-w-4xl text-4xl leading-[1.04] text-white sm:text-5xl md:text-7xl">
                  Match the environment. Keep the standard.
                </h2>
              </div>
              <ArrowLink href="/contact" variant="solid">
                Discuss Your Sector
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function IndustryContent({ page }: { page: IndustryPage }) {
  return (
    <div className="site-page">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        image={page.image}
      />
      {page.groups.map((group) => {
        const hasPublishedProjects = group.projects.some(
          (project) => !isRequestOnlyProject(project),
        );

        return (
          <section
            key={group.title}
            className="site-section border-t border-white/10"
          >
            <div className="site-container">
              <SectionIntro
                eyebrow={group.title}
                title={
                  group.title === page.eyebrow
                    ? hasPublishedProjects
                      ? "Selected Deliveries."
                      : "Project Register."
                    : group.title
                }
                body={group.intro || undefined}
              />
              <ProjectRows projects={group.projects} />
            </div>
          </section>
        );
      })}
      <section className="site-section border-t border-white/10">
        <div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">
            References available on request.
          </p>
          <ArrowLink href="/contact" variant="solid">
            {page.cta}
          </ArrowLink>
        </div>
      </section>
    </div>
  );
}

function ProjectRows({
  projects,
}: {
  projects: IndustryPage["groups"][number]["projects"];
}) {
  return (
    <div className="mt-12 grid gap-6">
      {projects.map((project, index) => {
        const projectStatus =
          "status" in project && typeof project.status === "string"
            ? project.status
            : null;

        if (isRequestOnlyProject(project)) {
          return (
            <RequestOnlyProjectRecord
              key={`${project.name}-${project.location}`}
              project={project}
              index={index}
            />
          );
        }

        return (
          <article
            key={`${project.name}-${project.location}`}
            className="group grid overflow-hidden border border-white/10 bg-black transition duration-300 hover:border-white/20 lg:grid-cols-[0.44fr_minmax(0,1fr)]"
          >
            <ImageFrame src={project.image} alt={`${project.name} interior`} />
            <div className="relative p-6 md:p-8 lg:p-10">
              <span className="absolute right-6 top-6 text-xs uppercase tracking-[0.18em] text-white/22 md:right-8 md:top-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-3xl text-white md:text-4xl">
                    {project.name}
                  </h2>
                  {project.location && (
                    <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/45">
                      {project.location}
                    </p>
                  )}
                </div>
                {projectStatus && (
                  <span className="w-fit border border-[var(--gold)]/45 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                    {projectStatus}
                  </span>
                )}
              </div>
              <p className="mt-5 text-base font-medium text-[var(--gold)]">
                {project.meta}
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/66">
                {project.body}
              </p>
              <div className="mt-8 h-px w-12 bg-[var(--gold)]/55 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

function RequestOnlyProjectRecord({
  project,
  index,
}: {
  project: IndustryProject;
  index: number;
}) {
  return (
    <article className="group grid overflow-hidden border border-white/10 bg-black transition duration-300 hover:border-white/20 lg:grid-cols-[0.56fr_1fr]">
      <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
        <Image
          src={project.image}
          alt={`${project.name} register reference`}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover grayscale-[55%] saturate-[0.72] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-[28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/28 to-black/10" />
        <div className="pointer-events-none absolute inset-5 border border-white/10 transition duration-300 group-hover:border-[var(--gold)]/45" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
            Controlled Access Record
          </p>
          <p className="mt-3 text-sm leading-6 text-white/62">
            Full details released through qualified project discussions.
          </p>
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-between p-6 md:p-8 lg:p-10">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-5 border-t border-[var(--gold)]/65 pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
              {String(index + 1).padStart(2, "0")} / Register
            </p>
            <span className="max-w-64 border border-[var(--gold)]/40 px-3 py-1 text-right text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
              Records available on request
            </span>
          </div>
          <h2 className="mt-8 max-w-4xl text-4xl leading-tight text-white md:text-5xl">
            {project.name}
          </h2>
          {project.location && (
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/45">
              {project.location}
            </p>
          )}
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[var(--gold)]">
            {project.meta}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/66">
            {project.body}
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          <DossierItem label="Access" value="Qualified review" />
          <DossierItem label="Release" value="Client controlled" />
          <DossierItem label="Next Step" value="Discuss scope fit" />
        </div>
      </div>
    </article>
  );
}

export function PortfolioContent() {
  const [featuredProject] = portfolioProjects;
  const sectorsRepresented = new Set(
    portfolioProjects.map((project) => project.sector),
  ).size;
  const sectorGroups = portfolioProjects.reduce<
    { sector: string; projects: PortfolioProject[] }[]
  >((groups, project) => {
    const existingGroup = groups.find((group) => group.sector === project.sector);

    if (existingGroup) {
      existingGroup.projects.push(project);
      return groups;
    }

    return [...groups, { sector: project.sector, projects: [project] }];
  }, []);

  if (!featuredProject) {
    return null;
  }

  return (
    <div className="site-page">
      <PageHero
        eyebrow="Portfolio"
        title="Delivered Work, Organized for Review."
        intro="A dedicated project register for GCs, developers, and procurement teams reviewing CPT's self-performed Division 9 record across Ontario."
        image="/portfolio.jpg"
      />
      <section className="site-section relative overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
            <article className="group relative min-h-[520px] overflow-hidden bg-black">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.name} project`}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover grayscale-[38%] saturate-[0.86] transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/44 to-black/10" />
              <div className="pointer-events-none absolute inset-5 border border-white/10" />
              <div className="absolute left-6 top-6 flex items-center gap-3 border border-white/15 bg-black/70 px-4 py-2 backdrop-blur md:left-8 md:top-8">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  Record
                </span>
                <span className="h-px w-8 bg-white/25" />
                <span className="text-xs uppercase tracking-[0.18em] text-white/64">
                  01
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  Featured Dossier
                </p>
                <h2 className="mt-4 max-w-3xl text-5xl leading-[1.02] text-white md:text-7xl">
                  {featuredProject.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/55">
                  {featuredProject.location}
                </p>
              </div>
            </article>

            <aside className="flex min-w-0 flex-col justify-between bg-black p-6 md:p-9 lg:p-10">
              <div>
                <p className="section-label">Why This Page Exists</p>
                <h2 className="max-w-2xl text-4xl leading-[1.05] text-white md:text-6xl">
                  A register, not another gallery.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                  The home page shows a quick visual sample. This page is
                  structured for shortlist review, with each project organized
                  by sector, scale, status, location, and scope narrative.
                </p>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                <PortfolioFact label="Sector" value={featuredProject.sector} />
                <PortfolioFact label="Scale" value={featuredProject.scale} />
                <PortfolioFact label="Status" value={featuredProject.status} />
                <PortfolioFact
                  label="Location"
                  value={featuredProject.location}
                />
              </div>
              <div className="mt-8 border-t border-[var(--gold)]/60 pt-6">
                <p className="text-lg leading-8 text-white/74">
                  {featuredProject.summary}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {portfolioReviewStandards.map((standard, index) => (
              <article
                key={standard.title}
                className="group bg-black p-6 transition duration-300 hover:bg-[var(--surface)] md:p-8"
              >
                <div className="flex items-center justify-between border-t border-[var(--gold)]/55 pt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    {standard.label}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/32">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-8 text-3xl leading-tight text-white">
                  {standard.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-white/62">
                  {standard.body}
                </p>
                <div className="mt-8 h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 xl:grid-cols-[1.05fr_0.5fr_0.45fr]">
            <div className="bg-black p-6 md:p-9 lg:p-10">
              <p className="section-label">Portfolio Register</p>
              <h2 className="max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl">
                Project information formatted for serious review.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/64">
                The portfolio page now behaves like a procurement register:
                project records are grouped by operating environment, then
                broken into consistent evidence fields for faster evaluation.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3 xl:grid-cols-1">
              <PortfolioFact
                label="Project Entries"
                value={`${portfolioProjects.length}`}
                large
              />
              <PortfolioFact
                label="Sectors Represented"
                value={`${sectorsRepresented}`}
                large
              />
              <PortfolioFact label="Delivery Region" value="Ontario" large />
            </div>

            <aside className="bg-[var(--surface)] p-6 md:p-8">
              <p className="section-label">Review Notes</p>
              <div className="mt-7 space-y-5">
                {portfolioRegisterNotes.map((note, index) => (
                  <div
                    key={note}
                    className="border-t border-white/10 pt-5 first:border-[var(--gold)]/55"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]/85">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="site-section relative overflow-hidden border-t border-white/10 bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-25" />
        <div className="site-container relative grid gap-12 xl:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="self-start border-y border-white/10 py-8 xl:sticky xl:top-28">
            <p className="section-label">Project Directory</p>
            <h2 className="text-4xl leading-[1.04] text-white">
              Selected deliveries by operating environment.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              The record format changes the page from a visual repeat into a
              working index: image, scope, scale, and sector context sit in the
              same line of sight.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {sectorGroups.map((group) => (
                <div key={group.sector} className="bg-black p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {group.sector}
                  </p>
                  <p className="mt-3 text-2xl leading-none text-white">
                    {group.projects.length}{" "}
                    {group.projects.length === 1 ? "record" : "records"}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-14">
            {sectorGroups.map((group, groupIndex) => {
              const sectorHref = getSectorHref(group.sector);

              return (
                <div key={group.sector} className="border-t border-white/10 pt-8">
                  <div className="mb-6 flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="section-label">
                        Sector {String(groupIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-4xl leading-tight text-white md:text-6xl">
                        {group.sector}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-end">
                      <p className="text-sm uppercase tracking-[0.16em] text-white/45">
                        {group.projects.length}{" "}
                        {group.projects.length === 1 ? "record" : "records"}
                      </p>
                      <ArrowLink href={sectorHref}>View Sector Context</ArrowLink>
                    </div>
                  </div>

                  <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
                    {group.projects.map((project) => {
                      const projectIndex = portfolioProjects.indexOf(project) + 1;

                      return (
                        <article
                          key={`${project.name}-${project.location}`}
                          className="group bg-black transition duration-300 hover:bg-[var(--surface)]"
                        >
                          <div className="grid lg:grid-cols-[330px_minmax(0,1fr)_280px]">
                            <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                              <Image
                                src={project.image}
                                alt={`${project.name} project`}
                                fill
                                sizes="(min-width: 1280px) 330px, 100vw"
                                className="object-cover grayscale-[36%] saturate-[0.88] transition duration-700 group-hover:scale-[1.025]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
                              <span className="absolute left-5 top-5 border border-white/20 bg-black/72 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/65">
                                {String(projectIndex).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="min-w-0 p-6 md:p-8">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="border border-[var(--gold)]/45 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                                  {project.status}
                                </span>
                                <span className="border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/55">
                                  {project.location}
                                </span>
                              </div>
                              <h4 className="mt-6 text-3xl leading-tight text-white md:text-5xl">
                                {project.name}
                              </h4>
                              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/66">
                                {project.summary}
                              </p>
                              <div className="mt-8 h-px w-12 bg-[var(--gold)]/55 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
                            </div>

                            <aside className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0">
                              <PortfolioFact label="Sector" value={project.sector} />
                              <PortfolioFact label="Scale" value={project.scale} />
                              <div className="bg-black p-6">
                                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                                  Next Review
                                </p>
                                <div className="mt-4">
                                  <ArrowLink href={sectorHref}>
                                    Sector Details
                                  </ArrowLink>
                                </div>
                              </div>
                            </aside>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function PortfolioFact({
  label,
  value,
  large = false,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div className="bg-black p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
        {label}
      </p>
      <p
        className={`mt-3 text-white ${
          large ? "text-4xl leading-none md:text-5xl" : "text-lg leading-7"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export function ImageFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative aspect-[3/2] overflow-hidden bg-white/[0.04]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale-[45%] saturate-[0.82] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-[12%] group-hover:saturate-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
      <div className="pointer-events-none absolute inset-3 border border-white/10 transition duration-300 group-hover:border-[var(--gold)]/45" />
      <div className="pointer-events-none absolute left-3 top-3 h-px w-12 bg-[var(--gold)]/45 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
    </div>
  );
}
