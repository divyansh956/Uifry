import { FAQData } from "@/constants/data";
import Heading from "./Heading";
import { cn } from "@/lib/utils";

const FAQ = () => {
  return (
    <div className="md:px-32">
      <h1 className="text-[#FF5555] uppercase">FAQ</h1>
      <Heading
        title="Frequently asked questions?"
        className="text-4xl md:max-w-[40%]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        {FAQData.map((data, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
