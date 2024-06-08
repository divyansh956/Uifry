import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="md:hidden flex justify-between">
        <Image src="/logo.png" alt="logo" height={117} width={117} />
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </>
  );
};

export default Navbar;
