import Gradient from "./Gradient";
import Image from "next/image";
import Heading from "./Heading";
import { features } from "@/constants/data";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 hidden md:flex flex-col relative items-center">
        <Image
          src="/circle.svg"
          alt="circle"
          height={400}
          width={400}
          className="-z-30 absolute"
        />
        <Image
          src="/herophone1.svg"
          height={400}
          width={400}
          alt="phone"
          className="absolute rotate-[14deg] translate-x-12"
        />
        <Gradient />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-[#FF5555] uppercase">Features</h1>
        <Heading title="uifry premium" className="text-4xl" />
        <div className="my-6 space-y-5">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex space-x-2 mb-2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={20}
                  height={20}
                />
                <h1 className="font-semibold">{feature.title}</h1>
              </div>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        <Gradient className="translate-x-[500px]" />
      </div>
    </div>
  );
};

export default Features;
