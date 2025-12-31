import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function LatestWorks() {
  // Data se unique categories nikalne ka asan tarika
  const categories = ["All Categories", ...new Set(projects.map((p) => p.category))];
  
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredProjects =
    activeCategory === "All Categories"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="bg-[#1a1d23] text-gray-100 py-24 px-6 sm:px-12 lg:px-24 scroll-mt-2">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Latest <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mx-auto">
            Explore my latest works, ranging from full-stack applications to sleek UI/UX designs. 
            Each project tells a story of problem-solving and clean code.
          </p>
        </div>

        {/* Filter Buttons (Ab ye automatic data se categories uthayenge) */}
        <div className="flex flex-wrap gap-4 mb-20 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-full border-2 cursor-pointer uppercase tracking-wider
                ${
                  activeCategory === category
                    ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                    : "bg-transparent border-gray-700 text-gray-500 hover:border-blue-500/50 hover:text-blue-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
               <p className="text-gray-500 text-xl italic">Koyi project nahi mila is category mein... 😅</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}