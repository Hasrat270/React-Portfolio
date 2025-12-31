import { useParams, useNavigate } from "react-router";
import { projects } from "../data/projects"; // Path check karlein sahi ho

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // URL wali ID ko projects data mein dhundna
  const project = projects.find((p) => p.id === id);

  // Agar project nahi milta toh error message dikhao
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
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
        </button>

        {/* Hero Section of Details Page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover" 
            />
          </div>

          <div>
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.longDescription || project.description}
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 cursor-pointer">
                Live Demo
              </button>
              <button className="border border-gray-700 hover:border-gray-500 text-white px-8 py-3 rounded-xl font-bold transition-all cursor-pointer">
                View Code
              </button>
            </div>
          </div>
        </div>

        {/* Extra Space for project features or process */}
        <div className="mt-20 border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            This section can describe how you built the project, the challenges you faced, 
            and the tech stack you used. (Aap apne project object mein mazeed fields 
            add kar ke yahan dikha sakte hain).
          </p>
        </div>
      </div>
    </main>
  );
}