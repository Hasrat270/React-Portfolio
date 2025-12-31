import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function LatestWorks() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "React Projects",
    "Vanilla JS Projects",
    "MERN Stack Projects",
  ];

  // Logic: Agar "All Categories" select hai to sab dikhao, warna filter karo
  const filteredProjects = activeCategory === "All Categories" 
    ? projects 
    : projects.filter(proj => proj.category === activeCategory);

  return (
    <section className="bg-[#1a1d23] text-gray-100 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
            Latest <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            I’m grateful for every opportunity to build and create — and I’m
            excited to share some of that work with you here.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full border cursor-pointer
                ${activeCategory === category 
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20" 
                  : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))
          ) : (
            <p className="text-gray-500 italic col-span-full text-center py-10">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}