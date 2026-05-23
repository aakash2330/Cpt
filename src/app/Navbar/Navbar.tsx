import { LogoMain } from "./Logo";
import { NavLinks } from "./Navlinks/Main";

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/92 shadow-[0_1px_28px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <div className="mx-auto flex h-20 w-full max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <LogoMain />
        <NavLinks />
      </div>
    </header>
  );
}
