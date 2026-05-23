import { LogoMain } from "./Logo";
import { NavLinks } from "./Navlinks/Main";

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/92">
      <div className="mx-auto flex h-20 w-full max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <LogoMain />
        <NavLinks />
      </div>
    </header>
  );
}
