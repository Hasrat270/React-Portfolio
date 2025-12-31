import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // 1. Scroll Effect (DOM sync)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Outside Click Logic
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && 
          menuRef.current && !menuRef.current.contains(e.target) && 
          btnRef.current && !btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // --- HOME SCROLL LOGIC ---
  const handleHomeClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const linkClasses = "hover:text-blue-500 cursor-pointer transition-colors duration-300 list-none font-medium text-gray-300";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-[#1a1d23]/80 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10" : "bg-transparent py-6 border-b border-transparent"
    }`}>
      <nav className="relative flex items-center max-w-[96%] mx-auto justify-between px-8">
        
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick}>
          <img src={logoImg} alt="Logo" className="h-10 w-auto invert" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          ref={btnRef}
          className="md:hidden text-gray-300 cursor-pointer p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link to="/" onClick={handleHomeClick} className={linkClasses}>Home</Link></li>
          <li><a href="#about" className={linkClasses}>About</a></li>
          <li><a href="#skills" className={linkClasses}>Skills</a></li>
          <li><a href="#projects" className={linkClasses}>Projects</a></li>
          {/* <li><a href="#contact" className={linkClasses}>Contact</a></li> */}
          
          {/* Hire Me Button (CTA) */}
          <li>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden absolute right-4 top-full mt-2 w-64 rounded-xl bg-[#1a1d23] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col">
              <li>
                <Link to="/" onClick={handleHomeClick} className="block px-6 py-4 hover:bg-white/5 border-b border-white/5 text-gray-300">
                  Home
                </Link>
              </li>
              <li><a href="#about" onClick={() => setIsOpen(false)} className="block px-6 py-4 hover:bg-white/5 border-b border-white/5 text-gray-300">About</a></li>
              <li><a href="#skills" onClick={() => setIsOpen(false)} className="block px-6 py-4 hover:bg-white/5 border-b border-white/5 text-gray-300">Skills</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)} className="block px-6 py-4 hover:bg-white/5 border-b border-white/5 text-gray-300">Projects</a></li>
              {/* <li><a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-4 hover:bg-white/5 font-bold text-blue-500 uppercase tracking-widest">Hire Me</a></li> */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}