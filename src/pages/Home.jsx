import Hero from "../components/Hero";
import About from "../components/About";
import LatestWorks from "../components/LatestWorks";
import Contact from "../components/Contact"; // Naya import
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <LatestWorks />
      <Contact />
      <Footer />
    </>
  );
}
