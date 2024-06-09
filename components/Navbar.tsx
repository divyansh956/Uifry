import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Image
        src="/star.svg"
        alt="blob"
        height={50}
        width={50}
        className="md:block hidden absolute -z-40 -ml-12 mt-20"
      />
      <div className="md:hidden flex justify-between">
        <Image src="/logo.png" alt="logo" height={117} width={117} />
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
      <Image
        src="/star.svg"
        alt="blob"
        height={50}
        width={50}
        className="absolute z-40 right-10"
      />
    </>
  );
};

export default Navbar;
