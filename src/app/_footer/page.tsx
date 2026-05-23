import Image from "next/image";
import Link from "next/link";
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
  { label: "Scope", value: "Division 9 Interiors" },
  { label: "Region", value: "Ontario" },
  { label: "Model", value: "Self-Performed" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/70 bg-black text-white">
      <div className="site-container py-12 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <LogoMain />
            <h2 className="mt-8 text-5xl leading-none text-white md:text-6xl">
              Finish Strong.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/58">
              Complete interior scopes delivered by one accountable team.
            </p>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 w-11 items-center justify-center border border-white/15 transition hover:border-[var(--gold)]"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedIn.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
          </div>
          <div className="space-y-8">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              {footerHighlights.map((item) => (
                <div key={item.label} className="bg-black p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.16em] text-white/58 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="grid gap-6 pt-8 text-sm leading-6 text-white/58 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-2">
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition hover:text-white"
              >
                {contactDetails.email}
              </a>{" "}
              /{" "}
              <a href="tel:4168383970" className="transition hover:text-white">
                {contactDetails.phone}
              </a>
            </p>
            <p>{contactDetails.address}</p>
          </div>
          <p className="md:text-right">
            City Professional Trades &copy; 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
