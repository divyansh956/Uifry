import { cn } from "@/lib/utils";

type props = {
  title: string;
  className: string;
};

const Heading = ({ title, className }: props) => {
  return <div className={cn("font-bold", className)}>{title}</div>;
};

export default Heading;
