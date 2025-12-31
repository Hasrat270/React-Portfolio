import aboutSvg from "../assets/boy-coding-in-laptop.svg";

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-[#1a1d23] text-gray-100 min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: SVG */}
        <div className="relative group flex justify-center items-center">
          <div className="absolute bg-blue-500/5 rounded-full blur-3xl w-80 h-80 group-hover:bg-blue-500/15 transition-all duration-700"></div>
          
          <img 
            src={aboutSvg} 
            alt="About Illustration"
            className="relative w-full max-w-112.5 lg:max-w-125 h-auto grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer drop-shadow-2xl"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium w-fit mb-6">
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
            Turning Complex Ideas into <br />
            <span className="text-blue-500">Elegant Solutions</span>
          </h2>
          
          <div className="space-y-4 text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
            <p>
              I'm a MERN Stack Developer based in Pakistan, specialized in building 
              high-performance web applications using React 19 and Tailwind v4.
            </p>
            <p>
              My focus is on creating seamless user experiences and robust architectures 
              that solve real-world problems through clean and efficient code.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col">
              <span className="text-4xl text-white">2+</span>
              <span className="text-gray-500 font-normal mt-1">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-gray-800"></div>
            <div className="flex flex-col">
              <span className="text-4xl text-white">20+</span>
              <span className="text-gray-500 font-normal mt-1">Projects Done</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}