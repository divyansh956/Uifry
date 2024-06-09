import Image from "next/image";
import Heading from "./Heading";

const Advantages = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:px-32 md:pt-20">
        <div className="md:w-1/2 flex flex-col md:ml-6 mt-10 justify-center">
          <h1 className="text-[#FF5555] uppercase">Advantages</h1>
          <Heading title="why choose Uifry?" className="text-4xl" />
          <div className="flex items-center mt-6">
            <Image src="/notification.svg" height={30} width={30} alt="image" />
            <p className="font-bold ml-3">clever notifications</p>
          </div>
          <p className="font-thin mt-4 text-sm">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="md:w-1/2 hidden md:flex flex-col items-center">
          <Image
            src="/advantages.svg"
            alt="circle"
            height={500}
            width={500}
            className="-z-30"
          />
          <Image
            src="/OnHold.svg"
            alt="circle"
            height={200}
            width={200}
            className="-z-20 absolute translate-x-11 translate-y-52"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:-mt-10 lg:-mt-16">
        <div className="md:w-1/2 flex flex-col md:ml-6 mt-10">
          <div className="flex items-center md:mt-32">
            <Image src="/notification.svg" height={30} width={30} alt="image" />
            <p className="font-bold ml-3">fully customizable</p>
          </div>
          <p className="font-thin mt-4 text-sm md:w-[75%]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="md:w-1/2 hidden md:flex flex-col relative items-center">
          <Image
            src="/advantages2.svg"
            alt="circle"
            height={500}
            width={500}
            className="-z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
