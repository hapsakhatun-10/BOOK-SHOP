import Animation from "@/components/AnimatedCard";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Marquee />
        <Featured />
        <Animation />
        <Hero />

      </div>
    </>
  );
}



