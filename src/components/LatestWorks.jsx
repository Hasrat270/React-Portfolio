import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function LatestWorks() {
  const categories = ["All Categories", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // --- REUSABLE STYLES ---
  const styles = {
    section: "bg-[#1a1d23] text-gray-100 px-6 sm:px-12 lg:px-24 scroll-mt-20",
    container: "max-w-7xl mx-auto",
    // Mobile par scrollable, PC par grid/flex
    filterContainer: "flex md:justify-center items-center gap-4 mb-20 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar whitespace-nowrap",
    btnBase: "px-6 py-2.5 text-xs md:text-sm font-bold transition-all duration-300 rounded-full border-2 cursor-pointer uppercase tracking-wider shrink-0",
    btnActive: "bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105",
    btnInactive: "bg-transparent border-gray-700 text-gray-500 hover:border-blue-500/50 hover:text-blue-400"
  };

  const filteredProjects =
    activeCategory === "All Categories"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        
        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Latest <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mx-auto">
            Explore my latest works, ranging from full-stack applications to sleek UI/UX designs.
          </p>
        </div>

        {/* Filter Buttons Group */}
        {/* 'no-scrollbar' class humne CSS mein pehle hi modal ke liye banayi thi, wahi yahan kaam ayegi */}
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.btnBase} ${
                activeCategory === category ? styles.btnActive : styles.btnInactive
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
               <p className="text-gray-500 text-xl italic">No projects found in this category... 😅</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}