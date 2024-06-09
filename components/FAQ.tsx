import { FAQData } from "@/constants/data";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { staggerContainer, zoomIn } from "@/constants/motion";
import { Variants, motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="md:px-32">
      <h1 className="text-[#FF5555] uppercase">FAQ</h1>
      <Heading
        title="Frequently asked questions?"
        className="text-4xl md:max-w-[40%]"
      />
      <Image
        src="/star.svg"
        alt="blob"
        height={50}
        width={50}
        className="-z-40 hidden md:block absolute right-96 -mt-20"
      />
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 mt-4"
      >
        {FAQData.map((data, index) => (
          <motion.div
            variants={zoomIn(0.4, 1)}
            key={index}
            className={cn(
              "md:m-2 p-4 rounded-md",
              (index % 4 == 0 || index % 4 == 3) &&
                "md:bg-[#FF5555] md:text-white",
              (index % 4 == 1 || index % 4 == 2) && "md:bg-white md:text-black",
              index % 2 == 0 && "bg-[#FF5555] text-white"
            )}
          >
            <h1 className="text-3xl font-medium">{data.question}</h1>
            <p>{data.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
