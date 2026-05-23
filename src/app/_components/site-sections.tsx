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
    text: "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--gold)] transition hover:text-white",
    solid:
      "inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-white",
    outline:
      "inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]",
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
          <h1>In-House. Coordinated. Accountable.</h1>
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
      <div className="site-container grid gap-px overflow-hidden border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-black px-5 py-7 sm:px-7">
            <div className="text-4xl font-semibold leading-none text-white md:text-5xl">
              {item.value}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PositioningBlock() {
  return (
    <section className="site-section">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionIntro
          eyebrow="One Contract. Complete Scope."
          title="The Interior Scope, From First Stud to Final Inspection."
        />
        <div className="space-y-6 text-lg leading-8 text-white/70">
          <p>
            CPT self-performs every Division 9 trade: metal framing, drywall,
            insulation, acoustic ceilings, taping, painting, and flooring. One
            contract. Directly employed crews. No work passed to outside labour.
          </p>
          <p>
            From mobilisation to handover, one person is accountable. No
            handoffs, no confusion.
          </p>
          <ArrowLink href="/contact">Discuss Your Scope</ArrowLink>
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
              className="group bg-[var(--surface)]"
            >
              <ImageFrame src={sector.image} alt={`${sector.title} interior`} />
              <div className="space-y-4 p-6">
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
        <article key={`${project.name}-${project.location}`} className="bg-black">
          <ImageFrame src={project.image} alt={`${project.name} project`} />
          <div className="space-y-5 p-6">
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
    <section className="site-section border-t border-white/10">
      <div className="site-container">
        <SectionIntro eyebrow="In Practice" title="What Clients Say." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.attribution}
              className="border-t border-[var(--gold)] pt-6"
            >
              <blockquote className="text-lg leading-8 text-white/82">
                "{testimonial.quote}"
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
      <div className="site-container">
        <SectionIntro eyebrow="Standing" title="The Record Behind the Work." />
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {credentials.map((item) => (
            <div key={item} className="bg-[var(--surface)] p-6">
              <p className="text-sm font-medium leading-6 text-white">{item}</p>
            </div>
          ))}
        </div>
        <AssociationStrip />
      </div>
    </section>
  );
}

export function AssociationStrip() {
  return (
    <div className="mt-10 grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {associations.map((association) => (
        <div
          key={association.name}
          className="flex h-20 items-center justify-center border border-white/10 bg-white/[0.03] px-5"
        >
          {association.logo ? (
            <Image
              src={association.logo}
              alt={association.name}
              width={180}
              height={40}
              className="max-h-10 w-auto object-contain brightness-0 invert"
            />
          ) : association.mark ? (
            <span
              aria-label={association.name}
              className="text-center text-4xl font-semibold leading-none text-white"
            >
              {association.mark}
            </span>
          ) : (
            <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
              {association.name}
            </span>
          )}
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
            sign-off. CPT is currently accepting project discussions for 2027
            onward delivery windows.
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
      <section className="site-section pb-16 pt-40 md:pt-48">
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
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/65" />
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
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-7 text-lg leading-8 text-white/70">
            <p>
              Most Division 9 scopes are split across multiple independent
              trades. Each trade has its own contract, its own supervision, and
              its own accountability limit. When something goes wrong, the GC
              resolves it.
            </p>
            <p>
              CPT replaces that structure. One contract covers every trade in
              the interior scope. The same organisation that frames the walls
              tapes, paints, and installs the floors. There is no handoff point
              where accountability transfers. Or disappears.
            </p>
            <p>
              Developers and GCs who award a Division 9 scope to CPT do not
              manage it. CPT does.
            </p>
          </div>
          <ImageFrame
            src="/CPT(1)/new_image.png"
            alt="Interior construction in progress"
            priority
          />
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
        intro="Every name below is reachable and accountable. There is no management layer between this team and the work."
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
                {person.bio && (
                  <p className="mt-6 text-sm leading-6 text-white/58">
                    {person.bio}
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
        noPhoto
        eyebrow="About / Credentials & Safety"
        title="The Record Behind the Relationship."
        intro="Available to any GC, developer, or institutional procurement team on request."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          <RecordBlock title="Safety">
            <p>Lost-Time Incident Frequency Rate: 0.00.</p>
            <p>Zero lost-time incidents, four consecutive years.</p>
            <p>Zero WSIB claims, all operating years.</p>
            <p>The record holds across every environment in the portfolio.</p>
          </RecordBlock>
          <RecordBlock title="Insurance & Bonding">
            <p>
              General liability insurance in place. Certificate available on
              request.
            </p>
            <p>
              Performance bonds and labour and material payment bonds available
              for qualifying projects. Bond documentation available on request.
            </p>
          </RecordBlock>
          <RecordBlock title="WSIB">
            <p>Active and in good standing. Clearance certificate available on request.</p>
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
        title="Division 9. Every Trade. One Contract."
        intro="Metal framing through flooring: every trade self-performed, no portion passed to outside labour."
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
              title={group.title}
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
    <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
      {projects.map((project) => (
        <article
          key={`${project.name}-${project.location}`}
          className="grid gap-8 py-10 lg:grid-cols-[0.5fr_1fr] lg:items-center"
        >
          <ImageFrame src={project.image} alt={`${project.name} interior`} />
          <div>
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
          </div>
        </article>
      ))}
    </div>
  );
}

export function PortfolioContent() {
  return (
    <div className="site-page">
      <PageHero
        eyebrow="Portfolio"
        title="Delivered Across Ontario."
        intro="Project cards include name, location, sector, scale, and delivery status without dollar values."
        image="/portfolio.jpg"
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <PortfolioGrid />
        </div>
      </section>
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
    <div className="relative aspect-[3/2] overflow-hidden bg-white/[0.04]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale-[70%] saturate-[0.7] transition duration-500 hover:grayscale-0 hover:saturate-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}
