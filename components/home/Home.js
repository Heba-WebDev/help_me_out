import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
