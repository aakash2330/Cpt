"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavOptions = [
  { label: "Home", url: "/landing" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Services", url: "/services" },
  { label: "Company", url: "/company" },
  { label: "Subcontractor", url: "/subcontractor" },
  // { label: "Subcontracter", url: "/resource" },
  { label: "Contact", url: "/contact" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative">
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 h-screen w-64 bg-black text-white z-50 md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-6 p-8 h-full relative">
          {NavOptions.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={cn(
                "text-lg hover:text-gray-400",
                pathname == item.url && "text-hero-orange",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
      </motion.div>

      <div className="hidden md:flex justify-center items-center gap-4">
        {NavOptions.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={cn(
              "text-lg hover:text-gray-400",
              pathname == item.url && "text-hero-orange",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
