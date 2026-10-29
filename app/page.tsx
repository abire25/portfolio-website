import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CallFlowExplorer from "@/components/CallFlowExplorer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-background text-ink flex flex-col selection:bg-sage selection:text-background overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <CallFlowExplorer />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
