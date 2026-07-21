import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { keywords } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <div className="border-y border-line py-6">
          <Marquee items={keywords} />
        </div>
        <About />
        <Highlights />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
