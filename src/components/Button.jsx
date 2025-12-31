export default function Button({ text = "Let's Talk", type = "button", onClick }) {
  // Agar onClick nahi diya gaya (Contact form ke bahar), toh default WhatsApp wala kaam karega
  const defaultWhatsApp = () => {
    const phoneNumber = "+923082841437";
    const message = "Hello Hasrat! I just visited your portfolio and I'm interested in discussing a project with you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button 
      type={type}
      onClick={onClick || (type === "button" ? defaultWhatsApp : undefined)}
      className="relative overflow-hidden w-fit px-10 bg-white/5 border border-white/10 rounded-full py-3 
                 text-center text-white font-medium transition-all cursor-pointer group block mx-auto md:mx-0"
    >
      <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full -z-10"></span>
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg className="size-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </span>
    </button>
  );
}