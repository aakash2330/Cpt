import Link from "next/link";

const NavOptions: { label: string; url: string }[] = [
  { label: "Home", url: "/home" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Services", url: "/services" },
  { label: "Company", url: "/company" },
  { label: "Sales", url: "/sales" },
  { label: "FAQ", url: "/faq" },
  { label: "Contact", url: "/contact" },
];

export function NavLinks() {
  return (
    <div className="flex justify-center items-center gap-4">
      {NavOptions.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
