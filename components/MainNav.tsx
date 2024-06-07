import { navLinks } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="inline-flex">
        <Image
          src="/logo.png"
          alt="logo"
          height={117}
          width={117}
          className="mr-10"
        />
        <nav className="space-x-6 flex items-center font-medium">
          {navLinks.map((link) => (
            <Link href={link.link} key={link.name}>
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
