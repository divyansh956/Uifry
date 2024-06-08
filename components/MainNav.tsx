"use client";
import { navLinks } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const path = usePathname();
  return (
    <div className="flex items-center justify-between">
      <div className="inline-flex">
        <Image
          src="/logo.png"
          alt="logo"
          height={117}
          width={117}
          className="mr-16"
        />
        <nav className="space-x-6 flex items-center font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              className={cn(link.link === path && "text-[#FF5555] font-bold")}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <Button>Download</Button>
    </div>
  );
};

export default MainNav;
