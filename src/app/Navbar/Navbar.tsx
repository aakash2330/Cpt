import { LogoMain } from "./Logo";
import { NavLinks } from "./Navlinks/Main";

export function Navbar() {
  return (
    <div className="w-full px-12 flex justify-between">
      <LogoMain></LogoMain>
      <NavLinks></NavLinks>
    </div>
  );
}
