import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contactDetails } from "../_data/site";
import { PageHero } from "../_components/site-sections";
import { ContactForm } from "./_components/ContactForm";

const inquiryRoutes = [
  {
    index: "01",
    title: "New Project Discussion",
    body: "Use this path when there is an active scope, upcoming tender, schedule pressure, or a Division 9 package to price.",
  },
  {
    index: "02",
    title: "Prequalification & Documentation",
    body: "Use this path when procurement needs WSIB clearance, insurance, bonding information, or a formal qualification package.",
  },
];

const contactPrep = [
  { label: "Response Path", value: "Project or documentation" },
  { label: "Audience", value: "GCs / Developers / Procurement" },
  { label: "Coverage", value: "Ontario interior scopes" },
];

export default function ContactPage() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="Contact"
        title="Start the Right Conversation."
        intro="Route project scopes and procurement requests directly to the team responsible for CPT's interior delivery."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="mb-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {contactPrep.map((item) => (
              <ContactPrep
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <div className="grid gap-10 min-[1180px]:grid-cols-[360px_minmax(0,1fr)] min-[1180px]:items-start xl:gap-12">
            <aside className="self-start border-y border-white/10 py-8 min-[1180px]:sticky min-[1180px]:top-28">
              <p className="section-label">Inquiry Routing</p>
              <h2 className="max-w-xl text-4xl leading-[1.04] text-white">
                Two paths. Same accountable team.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/62">
                CPT separates project conversations from procurement
                documentation so each request reaches the right internal lead
                without handoffs.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                {inquiryRoutes.map((route) => (
                  <article key={route.title} className="group bg-black p-6">
                    <div className="flex items-center justify-between border-t border-[var(--gold)]/70 pt-5">
                      <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                        {route.index}
                      </span>
                      <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
                    </div>
                    <h3 className="mt-8 text-2xl leading-tight text-white">
                      {route.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">
                      {route.body}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Direct Coordinates</p>
              <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl">
                Reach the office without a routing layer.
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-[0.16em] text-white/45 md:text-right">
              Email, phone, and office address for active scopes and
              documentation requests.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <ContactPoint
              icon={<Mail size={20} />}
              label="Email"
              value={contactDetails.email}
              href={`mailto:${contactDetails.email}`}
            />
            <ContactPoint
              icon={<Phone size={20} />}
              label="Phone"
              value={contactDetails.phone}
              href="tel:4168383970"
            />
            <ContactPoint
              icon={<MapPin size={20} />}
              label="Address"
              value={contactDetails.address}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPrep({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p className="mt-3 text-xl leading-tight text-white">{value}</p>
    </div>
  );
}

function ContactPoint({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-5 border-t border-white/10 pt-5">
        <div className="text-[var(--gold)]">{icon}</div>
        {href && (
          <ArrowUpRight
            aria-hidden="true"
            size={18}
            className="text-white/35 transition group-hover:text-[var(--gold)]"
          />
        )}
      </div>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-white/42">
        {label}
      </p>
      <p className="mt-3 text-xl leading-7 text-white">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group bg-black p-6 transition hover:bg-white/[0.04] md:p-8"
      >
        {content}
      </a>
    );
  }

  return <div className="bg-black p-6 md:p-8">{content}</div>;
}
