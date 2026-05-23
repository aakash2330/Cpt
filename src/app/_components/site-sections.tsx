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

const heroFacts = [
  "Self-performed Division 9",
  "Directly employed crews",
  "Single accountable lead",
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

const closingProofs = [
  "2027 onward delivery windows",
  "Prequalification documents available",
  "Bonding available for qualifying projects",
];

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
              <span className="rounded-full border border-[var(--gold)]/45 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                {project.sector}
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/58">
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
              <h1 className="break-words text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-8xl">
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
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
          <div>
            <SectionIntro
              eyebrow="Who We Are"
              title="One accountable interior contractor."
              body="Most Division 9 scopes are split across independent trades. CPT replaces that structure with one contract, one in-house sequence, and one accountable team."
            />
            <div className="mt-8 space-y-7 text-lg leading-8 text-white/70">
              <p>
                Most Division 9 scopes are split across multiple independent
                trades. Each trade has its own contract, its own supervision,
                and its own accountability limit. When something goes wrong, the
                GC resolves it.
              </p>
              <p>
                CPT replaces that structure. One contract covers every trade in
                the interior scope. The same organisation that frames the walls
                tapes, paints, and installs the floors. There is no handoff
                point where accountability transfers. Or disappears.
              </p>
              <p>
                Developers and GCs who award a Division 9 scope to CPT do not
                manage it. CPT does.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <ImageFrame
              src="/CPT(1)/new_image.png"
              alt="Interior construction in progress"
              priority
            />
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
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3 xl:grid-cols-1">
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
    <section className="site-section border-t border-white/10">
      <div className="site-container">
        <SectionIntro
          eyebrow="How We Work"
          title="Five Principles. No Exceptions."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group relative bg-black p-6 transition duration-300 hover:bg-[var(--surface)]"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl text-white">{principle.title}</h3>
              <p className="mt-5 text-sm leading-6 text-white/62">
                {principle.body}
              </p>
              <div className="mt-8 h-px w-10 bg-[var(--gold)]/50 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
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
        intro="Every name below is reachable and accountable. There is no management layer between this team and the work."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {team.map((person, index) => (
              <article
                key={person.name}
                className="group relative overflow-hidden bg-black p-6 transition duration-300 hover:bg-[var(--surface)]"
              >
                <div className="pointer-events-none absolute right-6 top-6 text-xs uppercase tracking-[0.18em] text-white/24">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative aspect-square overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#090909,#11100e_48%,#050505)]">
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
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-7xl text-white/78 transition duration-300 group-hover:text-white">
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
                  {person.bio && (
                    <p className="mt-6 text-sm leading-6 text-white/58">
                      {person.bio}
                    </p>
                  )}
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
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            <RecordBlock index="01" title="Safety">
              <p>Lost-Time Incident Frequency Rate: 0.00.</p>
              <p>Zero lost-time incidents, four consecutive years.</p>
              <p>Zero WSIB claims, all operating years.</p>
              <p>The record holds across every environment in the portfolio.</p>
            </RecordBlock>
            <RecordBlock index="02" title="Insurance & Bonding">
              <p>
                General liability insurance in place. Certificate available on
                request.
              </p>
              <p>
                Performance bonds and labour and material payment bonds available
                for qualifying projects. Bond documentation available on request.
              </p>
            </RecordBlock>
            <RecordBlock index="03" title="WSIB">
              <p>Active and in good standing. Clearance certificate available on request.</p>
            </RecordBlock>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-black py-10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <DossierItem label="Documents" value="Insurance / WSIB / Bonding" />
            <DossierItem label="Audience" value="GCs / Developers / Procurement" />
            <DossierItem label="Availability" value="On Request" />
          </div>
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
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="group relative bg-black p-7 transition duration-300 hover:bg-[var(--surface)] md:p-8">
      <div className="mb-8 flex items-center justify-between border-t border-[var(--gold)] pt-5">
        <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
          {index}
        </span>
        <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
      </div>
      <h2 className="text-3xl text-white">{title}</h2>
      <div className="mt-6 space-y-4 text-base leading-7 text-white/64">
        {children}
      </div>
    </article>
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
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-12 xl:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <p className="section-label">Complete Scope</p>
            <h2 className="text-4xl leading-[1.05] text-white md:text-5xl">
              Built as one controlled sequence.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/62">
              Each trade hands off to the next inside the same organisation, so
              layout, substrate, finish, and closeout stay coordinated.
            </p>
            <div className="mt-8 space-y-3 border-l border-white/10 pl-5">
              {services.map((service, index) => (
                <p
                  key={service.title}
                  className="text-xs uppercase tracking-[0.16em] text-white/45"
                >
                  {String(index + 1).padStart(2, "0")} / {service.title}
                </p>
              ))}
            </div>
          </aside>
          <div className="min-w-0">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group grid gap-8 py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.68fr)] lg:items-center"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-4xl leading-tight text-white md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
                      {service.body}
                    </p>
                    <div className="mt-8 h-px w-12 bg-white/18 transition duration-300 group-hover:w-20 group-hover:bg-[var(--gold)]" />
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
      <SectorOverview />
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
      {page.groups.map((group) => (
        <section key={group.title} className="site-section border-t border-white/10">
          <div className="site-container">
            <SectionIntro
              eyebrow={group.title}
              title={
                group.title === page.eyebrow ? "Selected Deliveries." : group.title
              }
              body={group.intro || undefined}
            />
            <ProjectRows projects={group.projects} />
          </div>
        </section>
      ))}
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
      {projects.map((project, index) => (
        <article
          key={`${project.name}-${project.location}`}
          className="group grid overflow-hidden border border-white/10 bg-black transition duration-300 hover:border-white/20 lg:grid-cols-[0.44fr_minmax(0,1fr)]"
        >
          <ImageFrame src={project.image} alt={`${project.name} interior`} />
          <div className="relative p-6 md:p-8 lg:p-10">
            <span className="absolute right-6 top-6 text-xs uppercase tracking-[0.18em] text-white/22 md:right-8 md:top-8">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-3xl text-white md:text-4xl">
                {project.name}
              </h2>
              {project.location && (
                <p className="text-sm uppercase tracking-[0.14em] text-white/45">
                  {project.location}
                </p>
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
      ))}
    </div>
  );
}

export function PortfolioContent() {
  const [featuredProject, ...indexProjects] = portfolioProjects;
  const sectorsRepresented = new Set(
    portfolioProjects.map((project) => project.sector),
  ).size;

  if (!featuredProject) {
    return null;
  }

  return (
    <div className="site-page">
      <PageHero
        eyebrow="Portfolio"
        title="Delivered Across Ontario."
        intro="Selected interior scopes delivered across hospitality, healthcare, multi-residential, and commercial environments. Each project is shown by sector, scale, location, and delivery status."
        image="/portfolio.jpg"
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <article className="group relative min-h-[560px] overflow-hidden border border-white/10 bg-black">
            <Image
              src={featuredProject.image}
              alt={`${featuredProject.name} project`}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover grayscale-[35%] saturate-[0.9] transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 space-y-6 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--gold)]/50 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--gold)]">
                  Featured
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70">
                  {featuredProject.status}
                </span>
              </div>
              <div>
                <h2 className="max-w-3xl text-5xl leading-[1.02] text-white md:text-7xl">
                  {featuredProject.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/55">
                  {featuredProject.location}
                </p>
              </div>
            </div>
          </article>

          <div className="flex flex-col justify-between border-y border-white/10 py-8 lg:py-10">
            <div>
              <p className="section-label">Selected Scope</p>
              <h2 className="max-w-xl text-4xl leading-[1.05] text-white md:text-6xl">
                Brand inspection. Interior execution. One accountable crew.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                {featuredProject.summary}
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              <PortfolioFact label="Sector" value={featuredProject.sector} />
              <PortfolioFact label="Scale" value={featuredProject.scale} />
              <PortfolioFact label="Status" value={featuredProject.status} />
              <PortfolioFact label="Location" value={featuredProject.location} />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
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
        </div>
      </section>

      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro eyebrow="Project Index" title="Selected Deliveries." />
            <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-white/45 md:text-right">
              Delivered records prepared for GC and developer review.
            </p>
          </div>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {[featuredProject, ...indexProjects].map((project, index) => (
              <article
                key={`${project.name}-${project.location}`}
                className="grid gap-8 py-10 lg:grid-cols-[96px_1fr_0.8fr] lg:items-center"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--gold)]/45 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                      {project.sector}
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/58">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/45">
                    {project.location}
                  </p>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
                    {project.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium text-white/82">
                    {project.scale}
                  </p>
                </div>
                <ImageFrame src={project.image} alt={`${project.name} project`} />
              </article>
            ))}
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
