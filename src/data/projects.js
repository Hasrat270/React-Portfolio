// 1. Pehle sab images ko import karein taake Vite inhein pehchan sakay
import p1 from "../assets/projects-images/1.png";
import p2 from "../assets/projects-images/2.png";
import p3 from "../assets/projects-images/3.png";
import p4 from "../assets/projects-images/4.png";
import p5 from "../assets/projects-images/5.png";
import p6 from "../assets/projects-images/6.png"; 

export const projects = [
  {
    id: "1",
    title: "Modern React Portfolio",
    category: "Web Development",
    image: p1, // Ab variable use karein, string nahi
    description: "A high-performance portfolio built with the latest React 19.",
    longDescription: "A sleek, dark-themed portfolio designed for developers. It features smooth transitions, optimized asset loading, and a fully responsive layout.",
    stack: ["React 19", "Tailwind CSS v4", "Framer Motion"],
    features: ["Dynamic Routing", "WhatsApp Integration", "Custom Hover Effects"],
    journey: "Building this was a challenge because of the complex animations, but I mastered Framer Motion during the process.",
    demoLink: "https://your-demo-link.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/portfolio"
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    category: "Full Stack",
    image: p2,
    description: "Admin panel for managing products, orders, and customers.",
    longDescription: "A comprehensive dashboard for online store owners. Includes real-time sales charts, inventory management, and order tracking systems.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Role-based Access", "Data Visualization", "CSV Export"],
    journey: "Integrating complex charts with real-time data from MongoDB was the toughest part, but it improved my backend logic significantly.",
    demoLink: "https://admin-shop-demo.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/shop-admin"
  },
  {
    id: "3",
    title: "Real-time Chat App",
    category: "MERN Stack",
    image: p3,
    description: "Instant messaging app with room-based chatting features.",
    longDescription: "A real-time communication platform where users can join rooms and chat instantly. Built with Socket.io for low-latency messaging.",
    stack: ["Socket.io", "React", "Node.js", "Express"],
    features: ["Typing Indicators", "Online Status", "Message History"],
    journey: "Handling race conditions in Socket.io events was a great learning experience for building scalable real-time systems.",
    demoLink: "https://chat-mern-demo.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/chat-app"
  },
  {
    id: "4",
    title: "Food Delivery UI",
    category: "UI/UX Design",
    image: p4,
    description: "Modern mobile-first design for a food ordering platform.",
    longDescription: "Focusing on user experience, this project mimics a food delivery service with category filters, cart management, and a checkout flow.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit"],
    features: ["Cart Persistence", "Category Filtering", "Search Functionality"],
    journey: "Managing the global state for the shopping cart using Redux Toolkit helped me understand complex state management.",
    demoLink: "https://food-ui-demo.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/food-delivery"
  },
  {
    id: "5",
    title: "Job Portal API",
    category: "Backend",
    image: p5,
    description: "RESTful API for a job seeking and posting platform.",
    longDescription: "A secure and scalable backend for job portals. Supports user authentication, job filtering, and resume upload functionality.",
    stack: ["Node.js", "Express", "JWT", "Cloudinary"],
    features: ["Secure Auth", "File Uploads", "Advanced Querying"],
    journey: "Learning how to secure routes with JWT and handling image uploads on Cloudinary were the highlights of this project.",
    demoLink: "https://job-api-demo.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/job-api"
  },
  {
    id: "6",
    title: "AI Image Generator",
    category: "AI Integration",
    image: p6,
    description: "Web app that generates images from text prompts using OpenAI.",
    longDescription: "An interactive tool where users can enter a description and get high-quality images generated via the DALL-E API.",
    stack: ["OpenAI API", "React", "Node.js", "Tailwind"],
    features: ["Prompt Optimization", "Image Sharing", "Community Feed"],
    journey: "Connecting with the OpenAI API and handling API rate limits taught me a lot about working with third-party services.",
    demoLink: "https://ai-gen-demo.netlify.app",
    githubLink: "https://github.com/hasrat-afridi/ai-generator"
  }
];