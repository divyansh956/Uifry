import { cn } from "@/lib/utils";

type props = {
  title: string;
  className: string;
};

const Heading = ({ title, className }: props) => {
  return <h1 className={cn("font-bold", className)}>{title}</h1>;
};

export default Heading;
