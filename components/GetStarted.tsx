import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./ui/button";
import Gradient from "./Gradient";

const GetStarted = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-32 bg-black md:pt-10 justify-around relative overflow-hidden">
      <Image
        src="/circlew.svg"
        alt="circle"
        fill
        className="-translate-x-44 translate-y-44 hidden md:block"
      />
      <div className="md:w-1/2 text-white md:pl-10 space-y-3 flex flex-col justify-center p-6 relative">
        <Heading title="ready to get started?" className="text-4xl" />
        <p className="text-md opacity-80">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <Button
          variant="outline"
          className="text-black font-medium md:max-w-[40%]"
        >
          Download Now
          <Image
            src="/apple.svg"
            alt="phone"
            width={20}
            height={20}
            className="ml-2"
          />
        </Button>
        <Image
          src="/starw.svg"
          alt="blob"
          height={50}
          width={50}
          className="z-5 hidden md:block absolute left-96 top-1"
        />
        <Image
          src="/starw.svg"
          alt="blob"
          height={50}
          width={50}
          className="z-5 hidden md:block absolute right-0 bottom-20"
        />
      </div>
      <div>
        <Gradient className="z-1" />
        <Image
          src="/phone.svg"
          alt="phone"
          width={400}
          height={400}
          className="mt-4 hidden md:block md:translate-x-9"
        />
      </div>
    </div>
  );
};

export default GetStarted;
