import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "../_data/site";
import { LogoMain } from "../Navbar/Logo";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/company" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const footerHighlights = [
  { label: "Scope", value: "Division 9 interiors" },
  { label: "Region", value: "Ontario delivery" },
  { label: "Model", value: "Self-performed crews" },
  { label: "Point of Contact", value: "One accountable lead" },
];

const footerContacts = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: "tel:4168383970",
    icon: Phone,
  },
  {
    label: "Office",
    value: contactDetails.address,
    href: null,
    icon: MapPin,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--gold)]/75 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/80 to-transparent" />

      <div className="site-container relative py-16 md:py-20">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {footerHighlights.map((item) => (
            <div key={item.label} className="bg-black p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                {item.label}
              </p>
              <p className="mt-3 text-lg text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <LogoMain />
            <p className="section-label mt-10">City Professional Trades</p>
            <h2 className="mt-5 text-5xl leading-[1.02] text-white md:text-7xl">
              Finish Strong.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              Complete interior scopes delivered by one accountable team, from
              first stud to final sign-off.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Start a Conversation
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
              </Link>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                LinkedIn
                <Image
                  src="/linkedIn.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {footerContacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[var(--gold)]">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-white">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-5 bg-black p-6 transition duration-300 hover:bg-[var(--surface)]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-start gap-5 bg-black p-6"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 pt-8 xl:grid-cols-[1fr_auto] xl:items-end">
          <nav className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-black px-5 py-4 transition duration-300 hover:bg-[var(--surface)]"
              >
                <span className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-white/58 transition group-hover:text-white">
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={14}
                    strokeWidth={1.8}
                    className="text-[var(--gold)]"
                  />
                </span>
              </Link>
            ))}
          </nav>

          <div className="text-sm leading-6 text-white/50 xl:text-right">
            <p>City Professional Trades &copy; 2026. All rights reserved.</p>
            <p className="mt-2 uppercase tracking-[0.16em] text-white/35">
              Ontario / Division 9 / Self-performed interiors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
