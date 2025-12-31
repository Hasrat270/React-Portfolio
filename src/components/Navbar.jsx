import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logoImg from "../assets/images/logo.png";

const NavItem = ({ to, label, location, linkClasses }) => {
  const isHomePage = location.pathname === "/";

  return (
    <li>
      {isHomePage ? (
        // Home page par hain toh smooth scroll link (#)
        <a href={to} className={linkClasses}>
          {label}
        </a>
      ) : (
        // Kisi aur page (Details) par hain toh home page par wapis bhej kar hash par le jao
        <Link to={`/${to}`} className={linkClasses}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses =
    "hover:text-blue-500 cursor-pointer transition-colors duration-300 list-none";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a1d23]/80 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <nav className="flex items-center max-w-[96%] mx-auto justify-between px-8">
        <Link to="/">
          <img src={logoImg} alt="Logo" className="h-10 w-auto invert" />
        </Link>

        <ul className="flex gap-8 text-gray-300 font-medium">
          <li>
            {location.pathname === "/" ? (
              <a href="#" className={linkClasses}>Home</a>
            ) : (
              <Link className={linkClasses} to="/">Home</Link>
            )}
          </li>

          <NavItem
            to="#about"
            label="About"
            location={location}
            linkClasses={linkClasses}
          />

          <NavItem
            to="#skills"
            label="Skills"
            location={location}
            linkClasses={linkClasses}
          />

          {/* Syncing: Label 'Latest Projects' hai toh 'to' prop '#projects' hona chahiye */}
          <NavItem
            to="#projects" 
            label="Latest Projects"
            location={location}
            linkClasses={linkClasses}
          />

          <NavItem
            to="#contact"
            label="Contact"
            location={location}
            linkClasses={linkClasses}
          />
        </ul>
      </nav>
    </header>
  );
}