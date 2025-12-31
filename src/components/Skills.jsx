import { useState, useEffect } from "react";
import skillsMasterImg from "../../src/assets/images/skillsmaster.png";

// Icons imports
import htmlIcon from "../assets/icons/HTML5.svg";
import cssIcon from "../assets/icons/CSS3.svg";
import jsIcon from "../assets/icons/JavaScript.svg";
import reactIcon from "../assets/icons/React.svg";
import nodeIcon from "../assets/icons/Node.js.svg";
import mongodbIcon from "../assets/icons/MongoDB.svg";
import tailwindIcon from "../assets/icons/Tailwind CSS.svg";
import nextIcon from "../assets/icons/Next.js.svg";
import typescriptIcon from "../assets/icons/TypeScript.svg";
import gitIcon from "../assets/icons/Git.svg";
import figmaIcon from "../assets/icons/Figma.svg";
import dockerIcon from "../assets/icons/Docker.svg";
import mongoose from "../assets/icons/Mongoose.js.svg";
import npm from "../assets/icons/NPM.svg";
import nodemon from "../assets/icons/Nodemon.svg";
import postman from "../assets/icons/Postman.svg";
import redux from "../assets/icons/Redux.svg";
import vuejs from "../assets/icons/Vue.js.svg";
import ubuntu from "../assets/icons/Ubuntu.svg";
import vscode from "../assets/icons/vscode.svg";
import kali from "../assets/icons/Linux.svg";
import json from "../assets/icons/JSON.svg";

const skillIcons = [
  { img: htmlIcon, name: "HTML5" },
  { img: cssIcon, name: "CSS3" },
  { img: jsIcon, name: "JavaScript" },
  { img: reactIcon, name: "React" },
  { img: nodeIcon, name: "Node.js" },
  { img: mongodbIcon, name: "MongoDB" },
  { img: tailwindIcon, name: "Tailwind" },
  { img: nextIcon, name: "Next.js" },
  { img: typescriptIcon, name: "TypeScript" },
  { img: gitIcon, name: "Git" },
  { img: figmaIcon, name: "Figma" },
  { img: dockerIcon, name: "Docker" },
  { img: mongoose, name: "Mongoose" },
  { img: npm, name: "NPM" },
  { img: nodemon, name: "Nodemon" },
  { img: postman, name: "Postman" },
  { img: redux, name: "Redux" },
  { img: vuejs, name: "Vuejs" },
  { img: ubuntu, name: "Ubuntu" },
  { img: vscode, name: "Visual Studio Code" },
  { img: kali, name: "Kali Linux" },
  { img: json, name: "Json" },
];

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isModalOpen]);

  return (
    <section
      id="skills"
      className="bg-[#1a1d23] py-24 overflow-hidden scroll-mt-2"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* 1. Header Section */}
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            A specialized look at my technical stack and the tools I use to
            bring ideas to life.
          </p>
        </div>

        {/* 2. Skills Display Area */}
        <div className="relative flex flex-col items-center justify-center py-10">
          {/* Character + Button Container */}
          <div className="relative z-0 group">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-blue-600/15 blur-[120px] rounded-full group-hover:bg-blue-600/25 transition-all duration-500"></div>

            <img
              src={skillsMasterImg}
              alt="Skills Master"
              className="relative w-full max-w-md md:max-w-xl h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />

            {/* VIEW ALL BUTTON - Positioned near the character's hand */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute underline top-[20%] left-112.5 md:right-0 z-30 px-6 py-2.5 text-white text-sm font-bold transition-all duration-300  cursor-pointer transform hover:scale-110 active:scale-95 whitespace-nowrap"
            >
              Click to View All Skills
            </button>
          </div>

          {/* Marquee Icons (Foreground) */}
          <div className="absolute w-full flex top-80 z-10 pointer-events-none">
            <div className="flex whitespace-nowrap animate-marquee gap-16 md:gap-28 items-center py-10">
              {[...skillIcons, ...skillIcons, ...skillIcons].map(
                (skill, index) => (
                  <img
                    key={index}
                    src={skill.img}
                    alt="skill"
                    className="h-14 md:h-20 w-auto opacity-80 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* 3. Popup Modal */}
        {/* POPUP MODAL */}
        {/* POPUP MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal Content Box */}
            <div className="relative bg-[#1a1d23] border border-white/10 w-full max-w-4xl rounded-[40px] shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide">
              {/* 1. STICKY HEADER FOR CLOSE BUTTON */}
              <div className="sticky top-0 z-110 flex justify-end p-6 pointer-events-none">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="pointer-events-auto text-gray-500 hover:text-white text-3xl cursor-pointer transition-colors bg-[#1a1d23]/80 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full border border-white/5"
                >
                  ✕
                </button>
              </div>

              <style
                dangerouslySetInnerHTML={{
                  __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `,
                }}
              />

              {/* 2. CONTENT AREA (Paddings adjust kiye hain) */}
              <div className="px-10 pb-16 md:px-16 md:pb-20 -mt-12">
                <h3 className="text-4xl font-black text-white mb-16 text-center tracking-tight">
                  MY <span className="text-blue-500">EXPERTISE</span>
                </h3>

                {/* Grid (No Cards) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-12">
                  {skillIcons.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-5"
                    >
                      <div className="relative">
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-20 h-20 md:w-24 md:h-24 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_0_0px_rgba(59,130,246,0)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        />
                      </div>
                      <span className="text-gray-500 group-hover:text-blue-400 text-sm font-bold tracking-widest uppercase transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
