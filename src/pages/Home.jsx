import Hero from "../components/Hero";
import About from "../components/About";
import LatestWorks from "../components/LatestWorks";
import Contact from "../components/Contact"; // Naya import

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LatestWorks />
      <Contact /> 
    </>
  );
}