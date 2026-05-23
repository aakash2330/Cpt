"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { contactDetails } from "../../_data/site";
import { LogoMain } from "../Logo";

const aboutLinks = [
  { label: "Company", href: "/about/company" },
  { label: "Team", href: "/about/team" },
  { label: "Credentials & Safety", href: "/about/credentials-safety" },
];

const industryLinks = [
  { label: "Hospitality", href: "/industries/hospitality" },
  {
    label: "Long-Term Care & Healthcare",
    href: "/industries/long-term-care-healthcare",
  },
  { label: "Multi-Residential", href: "/industries/multi-residential" },
  {
    label: "Commercial & Institutional",
    href: "/industries/commercial-institutional",
  },
];

const mobilePrimaryLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <NavItem href="/" active={isActive("/")}>
          Home
        </NavItem>
        <Dropdown
          label="About"
          active={pathname.startsWith("/about") || pathname === "/company"}
          links={aboutLinks}
        />
        <NavItem href="/services" active={isActive("/services")}>
          Services
        </NavItem>
        <Dropdown
          label="Industries"
          active={pathname.startsWith("/industries")}
          links={industryLinks}
        />
        <NavItem href="/portfolio" active={isActive("/portfolio")}>
          Portfolio
        </NavItem>
        <NavItem href="/contact" active={isActive("/contact")}>
          Contact
        </NavItem>
      </nav>

      <Link
        href="/contact"
        className="hidden items-center border-l border-white/15 pl-7 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gold)] transition hover:text-white lg:flex"
      >
        Start a Conversation
        <ArrowUpRight aria-hidden="true" className="ml-2" size={16} />
      </Link>

      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[80] overflow-hidden bg-black lg:hidden">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),radial-gradient(circle_at_80%_0%,rgba(199,164,107,0.18),transparent_34%)] bg-[length:96px_96px,100%_100%] opacity-45" />
          <div className="relative flex h-20 items-center justify-between border-b border-white/10 px-5">
            <LogoMain />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>
          <div className="relative flex h-[calc(100svh-80px)] flex-col justify-between overflow-y-auto px-5 py-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                City Professional Trades
              </p>
              <h2 className="mt-4 max-w-sm text-4xl leading-[1.04] text-white">
                One Contract. Complete Scope.
              </h2>
              <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                {mobilePrimaryLinks.map((link, index) => (
                  <MobileLink
                    key={link.href}
                    href={link.href}
                    active={isActive(link.href)}
                    index={String(index + 1).padStart(2, "0")}
                  >
                    {link.label}
                  </MobileLink>
                ))}
              </div>
              <MobileGroup
                title="About"
                links={aboutLinks}
                pathname={pathname}
                className="mt-8"
              />
              <MobileGroup
                title="Industries"
                links={industryLinks}
                pathname={pathname}
                className="mt-6"
              />
            </div>
            <div className="mt-10 space-y-5 border-t border-white/10 pt-6">
              <div className="grid gap-3 text-sm leading-6 text-white/58">
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                <a href="tel:4168383970">{contactDetails.phone}</a>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center bg-[var(--gold)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black"
              >
                Start a Conversation
                <ArrowUpRight aria-hidden="true" className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium uppercase tracking-[0.16em] text-white/68 transition hover:text-white",
        active && "text-white",
      )}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  active,
  links,
}: {
  label: string;
  active: boolean;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 text-sm font-medium uppercase tracking-[0.16em] text-white/68 transition hover:text-white",
          active && "text-white",
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          size={14}
          className="transition group-hover:rotate-180"
        />
      </button>
      <div className="invisible absolute left-0 top-full min-w-[21rem] translate-y-2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="overflow-hidden border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="border-t border-[var(--gold)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">
              {label}
            </p>
          </div>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/link flex items-center justify-between gap-4 border-t border-white/10 px-4 py-4 text-sm text-white/66 transition hover:bg-white/[0.04] hover:text-white"
            >
              <span>
                <span className="mr-3 text-[11px] uppercase tracking-[0.18em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={14}
                className="text-[var(--gold)] opacity-0 transition group-hover/link:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  active,
  index,
  children,
}: {
  href: string;
  active: boolean;
  index: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between bg-black px-4 py-4 text-2xl text-white/80",
        active && "text-[var(--gold)]",
      )}
    >
      <span>{children}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-white/30">
        {index}
      </span>
    </Link>
  );
}

function MobileGroup({
  title,
  links,
  pathname,
  className,
}: {
  title: string;
  links: { label: string; href: string }[];
  pathname: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
        {title}
      </p>
      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center justify-between bg-black px-4 py-3 text-base text-white/70",
              pathname.startsWith(link.href) && "text-[var(--gold)]",
            )}
          >
            <span>{link.label}</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/28">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
