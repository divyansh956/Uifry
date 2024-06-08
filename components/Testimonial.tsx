import Heading from "./Heading";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="md:mx-32">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="uppercase">Testimonial</h1>
        <Heading
          title="what our users say about us?"
          className="text-4xl pl-4 md:max-w-[30%]"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Image src="/test.svg" height={500} width={500} alt="image" />
        <div className="flex flex-col justify-center mt-6 w-full md:w-1/2 md:max-w-[40%] md:ml-10 space-y-4">
          <p className="font-semibold text-2xl">
            the best financial accounting app ever!
          </p>
          <p className="font-thin mt-4 text-sm">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image src="/profile.svg" height={150} width={150} alt="image" />
          <h2 className="font-bold">Nick Jonas</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
