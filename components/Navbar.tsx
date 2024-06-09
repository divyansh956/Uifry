import { motion } from "framer-motion";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { navbarVariants } from "@/constants/motion";

const Navbar = () => {
  return (
    <div>
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
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        whileInView="show"
        className="hidden md:block"
      >
        <MainNav />
      </motion.div>
      <Image
        src="/star.svg"
        alt="blob"
        height={50}
        width={50}
        className="absolute z-40 right-10"
      />
    </div>
  );
};

export default Navbar;
