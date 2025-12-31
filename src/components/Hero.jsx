import Button from "./Button";
import heroImage from "../assets/pc.svg";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[96%] mx-auto px-4 flex flex-col md:flex-row items-center justify-evenly w-full">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Hasrat <span className="text-blue-500">Afridi</span>
          </h1>
          <p className="text-gray-400 text-xl mt-4 font-medium">
            MERN Stack Developer
          </p>
          <div className="mt-8">
             <Button text="Let's Talk" />
          </div>
        </div>
        
        <div className="relative mt-12 md:mt-0 group cursor-pointer">
          {/* Background Glow Effect - Ye hover par thora aur bright hoga */}
          <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
          
          <img
            className="relative size-72 md:size-96 object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            src={heroImage}
            alt="Coding Illustration"
          />
        </div>
      </div>
    </section>
  );
}