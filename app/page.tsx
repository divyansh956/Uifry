import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container space-y-10">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
