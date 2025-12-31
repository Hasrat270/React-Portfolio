import { useEffect } from "react";
import aboutImg from "../assets/svgs/boy-coding-in-laptop.svg"; 

export default function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // py-24 ko py-12 kiya taake section ki height kam ho jaye
    <section id="about" className="bg-[#1a1d23] py-12 md:py-16 px-6 flex items-center scroll-mt-5">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* 1. HEADING SECTION (Margins kam kar diye) */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mx-auto">
            I am a passionate developer with a focus on creating functional and 
            aesthetically pleasing digital experiences.
          </p>
        </div>

        {/* 2. CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: Image (Size chota kiya max-w-sm se) */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <img 
                src={aboutImg} 
                alt="About Hasrat" 
                className="relative z-10 w-full max-w-75 md:max-w-sm h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT: Main Text Content (Sizes thore adjust kiye) */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Turning Complex <br className="hidden md:block" /> 
              Ideas into <span className="text-blue-500">Elegant Solutions</span>
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I specialize in building high-quality web applications using the MERN stack. 
              My goal is to provide clean, efficient, and scalable code that solves real-world problems.
            </p>
            
            {/* Stats Section */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              <div className="text-center lg:text-left">
                <h4 className="text-4xl font-bold text-white mb-0">02+</h4>
                <p className="text-blue-500 font-medium tracking-wide uppercase text-[10px]">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-4xl font-bold text-white mb-0">20+</h4>
                <p className="text-blue-500 font-medium tracking-wide uppercase text-[10px]">Projects Completed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}