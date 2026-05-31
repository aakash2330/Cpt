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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="site-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <LogoMain />
            <h2 className="mt-8 text-5xl leading-none text-white md:text-6xl">
              Finish Strong.
            </h2>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 w-11 items-center justify-center border border-white/15 transition hover:border-[var(--gold)]"
              aria-label="LinkedIn"
            >
              <Image src="/linkedIn.svg" alt="" width={18} height={18} />
            </a>
          </div>
          <div className="space-y-8 lg:text-right">
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
            <div className="space-y-2 text-sm leading-6 text-white/58">
              <p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition hover:text-white"
                >
                  {contactDetails.email}
                </a>{" "}
                /{" "}
                <a
                  href="tel:4168383970"
                  className="transition hover:text-white"
                >
                  {contactDetails.phone}
                </a>
              </p>
              <p>{contactDetails.address}</p>
              <p>CPT Construction &copy; 2026. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
