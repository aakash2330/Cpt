import { LogoMain } from "./Logo";
import { NavLinks } from "./Navlinks/Main";

export function Navbar() {
  return (
    <div className="absolute top-0 w-full py-6 px-12 flex justify-between z-50">
      <LogoMain />
      <NavLinks />
    </div>
  );
}
