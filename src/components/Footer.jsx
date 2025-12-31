import { Github, Linkedin, Twitter, Mail, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  // --- REUSABLE STYLE VARIABLES ---
  const styles = {
    sectionBg: "bg-[#1a1d23] border-t border-white/5 pt-16 pb-8 px-6",
    container: "max-w-7xl mx-auto",
    heading: "text-white font-bold uppercase tracking-widest text-sm mb-4",
    link: "text-gray-400 hover:text-blue-500 transition-colors duration-300 font-medium",
    socialBtn: "p-3 bg-gray-800/50 rounded-xl border border-white/5 text-gray-400 hover:text-blue-500 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300",
    divider: "h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { Icon: Github, link: "https://github.com/hasrat-afridi" },
    { Icon: Linkedin, link: "#" },
    { Icon: Twitter, link: "#" },
    { Icon: Instagram, link: "#" }
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className={styles.sectionBg}>
      <div className={styles.container}>
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center md:items-start">
          
          {/* 1. Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">
              Hasrat <span className="text-blue-500">Afridi</span>
            </h2>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Building digital experiences that combine performance with aesthetics.
            </p>
          </div>

          {/* 2. Quick Links (Reused styles.link) */}
          <div className="flex flex-col items-center gap-2">
            <h3 className={styles.heading}>Explore</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((item) => (
                <a key={item.name} href={item.href} className={styles.link}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Social Presence (Reused styles.socialBtn) */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className={styles.heading}>Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className={styles.socialBtn} target="_blank" rel="noreferrer">
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hasrat Afridi.
          </p>

          <button onClick={scrollToTop} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-all">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}