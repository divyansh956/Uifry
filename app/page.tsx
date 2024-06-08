import Advantages from "@/components/Advantages";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container space-y-8">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
    </div>
  );
}
