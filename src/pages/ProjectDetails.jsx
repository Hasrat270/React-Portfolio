import { useParams, useNavigate } from "react-router";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a1d23] text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold mb-4">Project Not Found!</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 px-6 py-2 rounded-lg cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a1d23] text-gray-100 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Max width thori barha di balance ke liye */}
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Projects
        </button>
        {/* Hero Section - Added items-stretch for equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT SIDE: Image Container - Set to h-full */}
          <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-2xl h-full min-h-75 md:min-h-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE: Content Section */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              {" "}
              {/* mt-auto buttons ko hamesha bottom par rakhega */}
              {/* 1. VIEW DEMO BUTTON */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden px-8 py-3.5 rounded-xl font-bold border border-blue-500 bg-blue-600/10 text-white transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-500/10"
              >
                <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full -z-10"></span>
                <span className="relative z-10 flex items-center gap-2">
                  View Demo
                  <svg
                    className="size-4 group-hover:translate-x-1 transition-transform"
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
              </a>
              {/* 2. VIEW CODE BUTTON */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden px-8 py-3.5 rounded-xl font-bold border border-white/20 bg-gray-800/30 text-white transition-all duration-300 group cursor-pointer"
              >
                <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full -z-10"></span>
                <span className="relative z-10 flex items-center gap-2">
                  View Code
                  <svg
                    className="size-4 group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>
        </div>
        {/* Extra Space */}
        <div className="mt-20 border-t border-gray-800 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Detailed Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Project Journey
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.journey ||
                "This project was built to solve [X] problem. I focused on clean code and high performance."}
            </p>

            <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) || <li>Fully responsive UI with modern animations.</li>}
            </ul>
          </div>

          {/* Right: Tech Stack Column */}
          <div className="bg-gray-800/20 p-6 rounded-2xl border border-white/5 h-fit">
            <h2 className="text-xl font-bold mb-6 text-white">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              )) || <span className="text-gray-500 italic">MERN Stack</span>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
