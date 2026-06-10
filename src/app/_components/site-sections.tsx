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

const portfolioReviewStandards = [
  {
    label: "Scope",
    title: "Division 9 Delivered as One Package",
    body: "Each record keeps framing, drywall, ceilings, finishing, paint, and flooring tied to one accountable production path.",
  },
  {
    label: "Review",
    title: "Built for Procurement Scanning",
    body: "Sector, location, scale, and scope notes are separated so developers, general contractors, construction managers and owners can review the work quickly.",
  },
  {
    label: "Proof",
    title: "References Available on Request",
    body: "Detailed project references and documentation can be supplied to qualified teams during prequalification.",
  },
];

const portfolioRegisterNotes = [
  "Full Division 9 interior scopes for delivered and awarded projects.",
  "Sector grouping mirrors how project teams evaluate risk, access, inspection, and finish expectations.",
  "Project values remain private; procurement teams can request formal documentation directly.",
];

const portfolioReferenceItems = [
  "Project references",
  "Prequalification documents",
  "CCDC 11",
  "Sector-specific scope review",
];

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
          <p className="section-label">CPT Construction</p>
          <h1>
            <span className="block">One team.</span>
            <span className="block">One Standard.</span>
            <span className="block">Complete scope.</span>
          </h1>
          <p>
            The complete Division 9, under one roof. One point of contact from
            first stud to final inspection.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ArrowLink href="/portfolio" variant="solid">
              View Our Portfolio
            </ArrowLink>
            <ArrowLink href="/contact" variant="outline">
              Start a Conversation
            </ArrowLink>
          </div>
        </div>
      </section>

      <StatBar />
      <PositioningBlock />
      <SectorOverview />
      <PortfolioPreview />
      <TestimonialsSection />
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
    <section className="site-section border-t border-white/10">
      <div className="site-container grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div>
          <SectionIntro
            eyebrow="One Contract. Complete Scope."
            title="The Complete Interior Scope From First Stud to Final Inspection."
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
        <div className="space-y-10">
          <div className="space-y-6 border-t border-[var(--gold)]/65 pt-7 text-lg leading-8 text-white/70">
            <p>
              CPT delivers every Division 9 trade: metal framing, drywall,
              insulation, acoustic ceilings, taping, painting, and flooring.
              One contract. Directly employed crews. No work passed to outside
              labour.
            </p>
            <p>
              From mobilisation to handover, one point of contact. No handoffs,
              no confusion.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {deliverySequence.map((item, index) => (
              <article
                key={item.label}
                className="group bg-black p-6 transition duration-300 hover:bg-[var(--surface)]"
              >
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                </div>
                <h3 className="mt-8 text-3xl leading-none text-white">
                  {item.label}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/62">
                  {item.body}
                </p>
              </article>
            ))}
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
              className="group flex min-h-full flex-col bg-[var(--surface)] transition duration-300 hover:bg-[var(--surface-2)]"
            >
              <ImageFrame src={sector.image} alt={`${sector.title} interior`} />
              <div className="flex flex-1 flex-col border-t border-transparent p-6 transition duration-300 group-hover:border-[var(--gold)]/50">
                <h3 className="text-2xl text-white">{sector.title}</h3>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
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
          <SectionIntro eyebrow="Portfolio" title="Delivered Across Canada." />
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
          <div className="border-t border-transparent p-6 transition duration-300 group-hover:border-[var(--gold)]/50">
            <h3 className="text-2xl text-white">{project.name}</h3>
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
        <div>
          <SectionIntro
            eyebrow="In Practice"
            title="What Clients Say."
            body="The operating model matters most when project demands change, deadlines compress, and occupied environments need disciplined coordination."
          />
          <p className="mt-7 max-w-2xl text-sm uppercase tracking-[0.16em] text-white/45">
            Client references available to qualified GCs, developers,
            construction managers, and procurement teams.
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
    <section className="site-section border-t border-[var(--gold)]">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-5xl leading-[1.02] text-white md:text-7xl">
            Your Project. Delivered On Schedule.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
            One contract. One crew. One standard, from the first stud to the
            sign-off.
          </p>
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
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  videoSrc,
  poster,
  noPhoto = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  videoSrc?: string;
  poster?: string;
  noPhoto?: boolean;
}) {
  if (!videoSrc && (noPhoto || !image)) {
    return (
      <section className="site-section border-b border-white/10 pb-16 pt-40 md:pt-48">
        <div className="site-container">
          <div className="max-w-5xl">
            {eyebrow && <p className="section-label">{eyebrow}</p>}
            <h1 className="break-words text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-7 max-w-3xl text-xl leading-9 text-white/66">
                {intro}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-shell min-h-[78svh]">
      {image && (
        <Image src={image} alt={title} fill priority className="object-cover" />
      )}
      {videoSrc && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster ?? image}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
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
        eyebrow="About / Company"
        title="Sixteen Years. One Operating Model."
        intro="CPT Construction has spent over a decade building a reputation on a single principle: we do what we say we will do. That means showing up on schedule, delivering to specification, and handing over finishes that last."
        videoSrc="/comment-assets/company-background.mp4"
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-7 text-lg leading-8 text-white/70">
            <p>
              Most Division 9 scopes are split across multiple independent
              trades. Each trade has its own contract, its own supervision, and
              its own accountability limit. When something goes wrong, the GC
              resolves it.
            </p>
            <p>
              CPT replaces that structure. We self-perform every division 9
              scope - metal framing, drywall, insulation, acoustic ceilings,
              taping, painting and flooring - under a single contract. There
              is no handoff period where accountability transfers. Or
              disappears.
            </p>
            <p>
              Developers, General Contractors and Construction management firms
              who award a Division 9 scope to CPT do not manage it. CPT does.
            </p>
          </div>
          <ImageFrame
            src="/CPT(1)/new_image.png"
            alt="Interior construction in progress"
            priority
          />
        </div>
      </section>
      <section className="border-t border-white/10 bg-black py-12">
        <div className="site-container grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          <article className="bg-black p-6 md:p-8">
            <p className="section-label">Operating Model</p>
            <h2 className="max-w-2xl text-4xl leading-[1.04] text-white md:text-5xl">
              One accountable interior contractor.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/64">
              One contract covers the interior scope. Schedule, quality, and
              closeout stay with the same responsible team.
            </p>
          </article>
          <article className="bg-black p-6 md:p-8">
            <p className="section-label">Accountability Transfer</p>
            <h2 className="max-w-2xl text-4xl leading-[1.04] text-white md:text-5xl">
              The handoff point is where quality disappears.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/64">
              CPT removes that handoff. The crew that establishes the substrate
              stays accountable through finish standard and final inspection.
            </p>
          </article>
        </div>
      </section>
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {companyContrasts.map((item, index) => (
            <article key={item.label} className="bg-black p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                {String(index + 1).padStart(2, "0")} / {item.label}
              </p>
              <ul className="mt-6 space-y-4 text-base leading-7 text-white/64">
                {item.points.map((point) => (
                  <li key={point} className="border-t border-white/10 pt-4">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
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

export function PrinciplesSection() {
  return (
    <section className="site-section border-t border-white/10">
      <div className="site-container">
        <SectionIntro
          eyebrow="How We Work"
          title="Five Principles. No Exceptions."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
          {principles.map((principle) => (
            <article key={principle.title} className="bg-[var(--surface)] p-6">
              <h3 className="text-2xl text-white">{principle.title}</h3>
              <p className="mt-5 text-sm leading-6 text-white/62">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamContent() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="About / Team"
        title="The People Responsible for Your Project."
        intro="Large enough to deliver. Flat enough to reach."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="bg-black p-6">
              <div className="relative aspect-square overflow-hidden bg-[var(--surface)]">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale-[55%]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(199,164,107,0.18),transparent_42%),#080807]">
                    <span className="text-7xl text-white/82">
                      {person.initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-white/10 pt-6">
                <h2 className="text-3xl text-white">{person.name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[var(--gold)]">
                  {person.role}
                </p>
                {person.focus && (
                  <p className="mt-6 text-sm leading-6 text-white/58">
                    {person.focus}
                  </p>
                )}
              </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}

export function CredentialsContent() {
  return (
    <div className="site-page">
      <PageHero
        eyebrow="About / Credentials & Safety"
        title="The Record Behind the Relationship."
        intro="Available to Developers, General Contractors, Construction management firms and institutional procurement teams on request."
        videoSrc="/comment-assets/credentials-safety-background.mp4"
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          <RecordBlock title="Safety">
            <p>0 Lost-Time Incident Frequency Rate</p>
            <p>0 Fatalities</p>
            <p>0 WSIB claims</p>
          </RecordBlock>
          <RecordBlock title="Insurance & Bonding">
            <p>
              General liability insurance in place. Certificate available on
              request.
            </p>
            <p>
              Performance and payment bonds available upon request for
              qualifying projects.
            </p>
          </RecordBlock>
          <RecordBlock title="WSIB">
            <p>
              Active and in good standing. Clearance certificate available on
              request.
            </p>
          </RecordBlock>
        </div>
      </section>
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <SectionIntro
            eyebrow="Memberships & Associations"
            title="Recognized by the Industry."
          />
          <AssociationStrip />
          <div className="mt-12">
            <ArrowLink href="/contact" variant="solid">
              Request Prequalification Documents
            </ArrowLink>
          </div>
        </div>
      </section>
    </div>
  );
}

function RecordBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-[var(--surface)] p-7">
      <h2 className="text-3xl text-white">{title}</h2>
      <div className="mt-6 space-y-4 text-base leading-7 text-white/64">
        {children}
      </div>
    </article>
  );
}

export function ServicesContent() {
  return (
    <div className="site-page">
      <PageHero
        eyebrow="Services"
        title="Full Division 9 scope. One contract."
        intro="From first stud to final inspection."
        image="/service_bg.jpg"
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-8 py-12 lg:grid-cols-[0.55fr_1fr] lg:items-center"
              >
                <div className="order-2 lg:order-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-4xl leading-tight text-white md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
                    {service.body}
                  </p>
                  {"detail" in service && service.detail && (
                    <p className="mt-4 max-w-3xl text-base leading-7 text-white/56">
                      {service.detail}
                    </p>
                  )}
                </div>
                <ImageFrame
                  src={service.image}
                  alt={`${service.title} on-site trade work`}
                />
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-4xl text-white">One party. One call.</h2>
            <ArrowLink href="/contact" variant="solid">
              Discuss Your Scope
            </ArrowLink>
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
        eyebrow="Where CPT Operates"
        title="Different Environments. Same Operating Control."
        intro="The specification requirements change by sector. The crew discipline does not."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group flex min-h-full flex-col bg-[var(--surface)] transition duration-300 hover:bg-[var(--surface-2)]"
              >
                <ImageFrame
                  src={sector.image}
                  alt={`${sector.title} interior`}
                />
                <div className="flex flex-1 flex-col border-t border-transparent p-6 transition duration-300 group-hover:border-[var(--gold)]/50">
                  <h3 className="text-2xl text-white">{sector.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                    {sector.cta}
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
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
                    ? "Selected Deliveries."
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
        intro="A dedicated project register for developers, General Contractors, Construction managers and procurement teams reviewing CPT's Division 9 record across Canada."
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
                <p className="section-label">Register Method</p>
                <h2 className="max-w-2xl text-4xl leading-[1.05] text-white md:text-6xl">
                  Built for shortlist review.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                  The home page carries the visual sample. This register gives
                  procurement teams a consistent read of sector, location,
                  scale, and scope for each project.
                </p>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                <PortfolioFact label="Sector" value={featuredProject.sector} />
                <PortfolioFact label="Scale" value={featuredProject.scale} />
                <div className="sm:col-span-2">
                  <PortfolioFact
                    label="Location"
                    value={featuredProject.location}
                  />
                </div>
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
                Project records are grouped by operating environment, then
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
              <PortfolioFact label="Delivery Region" value="Canada" large />
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
        <div className="site-container relative">
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
                          <div className="grid xl:grid-cols-[minmax(360px,0.44fr)_minmax(0,1fr)_280px]">
                            <div className="relative aspect-[3/2] overflow-hidden border-b border-white/10 xl:aspect-auto xl:h-[390px] xl:border-b-0 xl:border-r">
                              <Image
                                src={project.image}
                                alt={`${project.name} project`}
                                fill
                                sizes="(min-width: 1280px) 30vw, 100vw"
                                className="object-cover grayscale-[36%] saturate-[0.88] transition duration-700 group-hover:scale-[1.025]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
                              <span className="absolute left-5 top-5 border border-white/20 bg-black/72 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/65">
                                {String(projectIndex).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="flex min-w-0 flex-col justify-center p-6 md:p-8 xl:h-[390px]">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/55">
                                  {project.location}
                                </span>
                              </div>
                              <h4 className="mt-6 text-3xl leading-tight text-white md:text-4xl xl:text-5xl">
                                {project.name}
                              </h4>
                              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/66">
                                {project.summary}
                              </p>
                              <div className="mt-8 h-px w-12 bg-[var(--gold)]/55 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
                            </div>

                            <aside className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3 xl:h-[390px] xl:grid-cols-1 xl:border-l xl:border-t-0">
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

      <section className="relative overflow-hidden border-t border-[var(--gold)]/70 bg-black py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/80 to-transparent" />
        <div className="site-container">
          <div className="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.5fr)] lg:items-end">
            <div>
              <p className="section-label">Formal Review</p>
              <h2 className="max-w-4xl text-5xl leading-[1.02] text-white md:text-7xl">
                References and documents available on request.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                Qualified developers, general contractors, construction
                managers, asset owners and procurement teams can request
                references, credentials, further documentation and CCDC 11 for
                active pursuits.
              </p>
            </div>
            <div>
              <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
                {portfolioReferenceItems.map((item, index) => (
                  <div key={item} className="bg-black p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-lg leading-7 text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ArrowLink href="/contact" variant="solid">
                  Request References
                </ArrowLink>
                <ArrowLink href="/about/credentials-safety" variant="outline">
                  View Credentials
                </ArrowLink>
              </div>
            </div>
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
