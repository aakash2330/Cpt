import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contactDetails } from "../_data/site";
import { PageHero } from "../_components/site-sections";
import { ContactForm } from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="site-page">
      <PageHero
        noPhoto
        eyebrow="Contact"
        title="Start the Right Conversation."
      />
      <section className="site-section border-t border-white/10">
        <div className="site-container">
          <div className="mb-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <ContactPrep label="Response Path" value="Project or documentation" />
            <ContactPrep label="Audience" value="GCs, developers, procurement" />
            <ContactPrep label="Coverage" value="Ontario interior scopes" />
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="site-section border-t border-white/10">
        <div className="site-container">
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
    <div className="bg-black p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p className="mt-2 text-base text-white">{value}</p>
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
      <div className="mb-5 text-[var(--gold)]">{icon}</div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/42">
        {label}
      </p>
      <p className="mt-3 text-base leading-6 text-white">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="bg-black p-6 transition hover:bg-white/[0.04]"
      >
        {content}
      </a>
    );
  }

  return <div className="bg-black p-6">{content}</div>;
}
