"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from 'next/image';

const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navigationLinks = [
    { href: "/home", label: "Home" },
    { href: "/abv-dilution", label: "ABV Dilution Calculator" },
    { href: "/dme", label: "DME Calculator" },
    { href: "/yeast", label: "Yeast Starter Calculator" },
    { href: "/about", label: "About" },
  ];
  const isActive = (path: string): string => {
    return pathname === path ? "bg-gray-900" : "";
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <div className="h-8 w-8 mr-2 rounded-full flex justify-center items-center">
          <Link href="/">
            {/* <span className="text-white font-semibold">C</span> */}
            <Image
              src="/logo1.png"
              width={40}
              height={40}
              alt="Platform logo"
            />
          </Link>
        </div>

        <span className="text-white text-lg font-bold">Cat Lab System</span>
      </div>
      <div className="flex">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${isActive(
              link.href
            )}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
