import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import CodingHighlights from "@/components/CodingHighlights";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Badges from "@/components/Badges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <CodingHighlights />
        <Experience />
        <Education />
        <Badges />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
