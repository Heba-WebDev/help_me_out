import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}
