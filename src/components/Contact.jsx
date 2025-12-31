import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "+923082841437";

    // WhatsApp message format
    const whatsappMessage =
      `*New Portfolio Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-[#1a1d23] text-gray-100 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Text */}
        {/* Left Side: Text & Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I'm always open to discussing new projects and creative ideas.
          </p>

          <div className="space-y-6">
            {/* Email Section */}
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              {/* Icon Container with Slide-up Fill */}
              <div className="relative overflow-hidden size-14 rounded-full flex items-center justify-center border border-blue-500/20 bg-white/5 transition-all duration-300">
                {/* Fill Layer */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full"></span>

                {/* SVG Icon */}
                <svg
                  className="relative z-10 size-6 text-blue-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Text Details */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  Email Me
                </p>
                <a
                  href="mailto:Hasrat3701@gmail.com"
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  Hasrat3701@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-800/30 p-8 md:p-10 rounded-3xl border border-gray-700/50 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {" "}
            {/* Form ke main fields ke darmiyan gap barha diya */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input Group */}
              <div className="flex flex-col gap-3">
                {" "}
                {/* label aur input ke beech gap-3 add kiya */}
                <label className="text-sm font-semibold text-gray-300 ml-1 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900 transition-all shadow-inner"
                />
              </div>

              {/* Email Input Group */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-300 ml-1 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900 transition-all shadow-inner"
                />
              </div>
            </div>
            {/* Message Input Group */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-gray-300 ml-1 tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900 transition-all shadow-inner resize-none"
              ></textarea>
            </div>
            <div className="flex justify-start pt-4">
              <div className="flex justify-start pt-4">
                <button
                  type="submit"
                  className="relative overflow-hidden px-10 py-4 rounded-xl font-bold border border-white/20 bg-white/5 text-white transition-all duration-300 group cursor-pointer"
                >
                  {/* Slide-up Fill Layer */}
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-500 ease-out group-hover:h-full -z-10"></span>

                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <svg
                      className="size-5 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
