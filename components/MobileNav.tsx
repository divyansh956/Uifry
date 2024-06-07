import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-black" />
      </SheetTrigger>
      <SheetContent>
        {navLinks.map((link) => (
          <SheetDescription key={link.link} className="text-lg">
            <Link href={link.link}>{link.name}</Link>
          </SheetDescription>
        ))}
        <Separator />
        <Button className="mt-4">Download</Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
