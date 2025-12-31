import heroImage from "../assets/svgs/pc.svg";

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
            <button
              onClick={() => {
                const url = `https://wa.me/+923082841437?text=${encodeURIComponent(
                  "Hello Hasrat! I'm interested in working with you."
                )}`;
                window.open(url, "_blank");
              }}
              className="relative overflow-hidden px-10 py-4 rounded-xl font-bold border border-white/20 bg-white/5 text-white transition-all duration-300 group cursor-pointer block mx-auto md:mx-0"
            >
              {/* Slide-up Fill Layer */}
              <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full -z-10"></span>

              <span className="relative z-10 flex items-center gap-3">
                Let's Talk
                <svg
                  className="size-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>{" "}
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