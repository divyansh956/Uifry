type props = {
  title: string;
};

const Heading = ({ title }: props) => {
  return <h1 className="text-6xl font-bold mt-20">{title}</h1>;
};

export default Heading;
