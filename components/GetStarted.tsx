import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./ui/button";

const GetStarted = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-32 bg-black md:pt-10 justify-around relative overflow-hidden">
      <Image
        src="/circlew.svg"
        alt="circle"
        fill
        className="-translate-x-44 translate-y-44 hidden md:block"
      />
      <div className="md:w-1/2 text-white md:pl-10 space-y-3 flex flex-col justify-center p-6">
        <Heading title="ready to get started?" className="text-4xl" />
        <p className="text-md opacity-80">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <Button
          variant="outline"
          className="text-black font-medium md:max-w-[32%]"
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
      </div>
      <div>
        <Image
          src="/phone.svg"
          alt="phone"
          width={400}
          height={400}
          className="mt-4 md:translate-x-9"
        />
      </div>
    </div>
  );
};

export default GetStarted;
