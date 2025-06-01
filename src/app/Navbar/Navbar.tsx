import { LogoMain } from "./Logo";
import { NavLinks } from "./Navlinks/Main";

export function Navbar() {
  return (
    <div className="absolute top-0 w-full px-12 flex justify-between items-center z-50">
      <LogoMain />
      <NavLinks />
    </div>
  );
}
