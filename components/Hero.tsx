import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./ui/button";
import { CirclePlay, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col mt-8 md:mt-20">
        <Heading
          title="make the best financial decisions"
          className="text-6xl"
        />
        <p className="py-6">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex items-center">
          <Button>
            Get Started <MoveRight className="ml-2" />
          </Button>
          <Button variant={"outline"}>
            <CirclePlay className="mr-2" /> Watch Video
          </Button>
        </div>
        <Image src="/advertise.svg" alt="hero" height={450} width={450} />
      </div>
      <div className="md:w-1/2 flex flex-col relative items-center overflow-hidden">
        <Image src="/circle.svg" alt="circle" fill className="-z-30 absolute" />
        <Image src="/herophone1.svg" alt="phone" fill className="absolute" />
        <Image
          src="/herophone2.svg"
          alt="phone"
          fill
          className="-z-10 absolute translate-x-20 translate-y-20"
        />
        <Image
          src="/herophone3.svg"
          alt="phone"
          fill
          className="-z-20 absolute translate-x-28 translate-y-28"
        />
      </div>
    </div>
  );
};

export default Hero;
