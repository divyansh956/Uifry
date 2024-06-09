import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="container space-y-10">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQ />
    </div>
  );
}
