import { cn } from "@/lib/utils";
import Image from "next/image";

type props = {
  className?: string;
};

const Gradient = ({ className }: props) => {
  return (
    <Image
      src="/gradient.svg"
      alt="gradient"
      height={500}
      width={500}
      className={cn("-z-50 absolute", className)}
    />
  );
};

export default Gradient;
