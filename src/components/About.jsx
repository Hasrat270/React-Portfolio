import { useEffect } from "react";
import boyCoding from "../../src/assets/svgs/boy-coding-in-laptop.svg"; 

export default function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 1. h-screen ki jagah min-h-screen taake content squeeze na ho
    // 2. px-6 aur lg:px-24 se PC par side spacing maintain hogi
    <section id="about" className="bg-[#1a1d23] min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 sm:px-12 lg:px-24 py-20 scroll-mt-2">
  
      {/* 1. Content Div */}
      {/* md:text-left se PC par text left aligned rahega aur mobile par center */}
      <div className="order-2 md:order-1 flex-1 text-center md:text-left max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          About <span className="text-blue-500">Me</span>
        </h2>
        
        {/* Underline for consistency */}
        <div className="w-16 h-1 bg-blue-500 mt-4 mb-6 mx-auto md:mx-0"></div>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Your go-to MERN Stack Developer with 2+ years of experience crafting dynamic web applications. 
          Proficient in MongoDB, Express.js, React, and Node.js, I specialize in building scalable and 
          efficient solutions.
        </p>

        {/* --- MOBILE IMAGE (md:hidden se PC par gayab) --- */}
        <div className="md:hidden my-10 flex justify-center">
           <img src={boyCoding} alt="Coding Boy" className="w-64 h-auto drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]" />
        </div>

        {/* Stats Section */}
        <div className="text-white flex justify-center md:justify-start gap-12 mt-10">
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-4xl font-black">02+</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Years Experience</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-4xl font-black">20+</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Projects Done</p>
          </div>
        </div>
      </div>

      {/* 2. Desktop Image Div (PC par right side par nazar aayega) */}
      <div className="hidden md:block order-1 md:order-2 flex-1 animate-pulse-slow">
        <img 
          src={boyCoding} 
          alt="Coding Boy" 
          className="w-full max-w-lg mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
        />
      </div>

    </section>
  );
}