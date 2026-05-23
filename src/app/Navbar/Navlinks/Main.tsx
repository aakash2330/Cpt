"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        <div className="fixed inset-0 z-[80] bg-black lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="text-sm uppercase tracking-[0.2em] text-white/50">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex h-[calc(100svh-80px)] flex-col justify-between overflow-y-auto px-5 py-8">
            <div className="space-y-8">
              <MobileLink href="/" active={isActive("/")}>
                Home
              </MobileLink>
              <MobileGroup title="About" links={aboutLinks} pathname={pathname} />
              <MobileLink href="/services" active={isActive("/services")}>
                Services
              </MobileLink>
              <MobileGroup
                title="Industries"
                links={industryLinks}
                pathname={pathname}
              />
              <MobileLink href="/portfolio" active={isActive("/portfolio")}>
                Portfolio
              </MobileLink>
              <MobileLink href="/contact" active={isActive("/contact")}>
                Contact
              </MobileLink>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--gold)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black"
            >
              Start a Conversation
              <ArrowUpRight aria-hidden="true" className="ml-2" size={16} />
            </Link>
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
      <div className="invisible absolute left-0 top-full min-w-72 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="border border-white/10 bg-black/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/10 px-4 py-3 text-sm text-white/66 transition last:border-b-0 hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
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
        "block text-3xl text-white/80",
        active && "text-[var(--gold)]",
      )}
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  title,
  links,
  pathname,
}: {
  title: string;
  links: { label: string; href: string }[];
  pathname: string;
}) {
  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
        {title}
      </p>
      <div className="space-y-3 border-l border-white/10 pl-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block text-xl text-white/70",
              pathname.startsWith(link.href) && "text-[var(--gold)]",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
