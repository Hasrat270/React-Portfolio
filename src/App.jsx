import { BrowserRouter, Routes, Route } from "react-router";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop"; // Import karein

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      {/* Navbar fixed hai, isliye iske neeche ki space ko maintain karne ke liye wrapper chahiye */}
      <div className="min-h-screen selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        {/* Aap yahan Footer bhi add kar sakte hain baad mein */}
      </div>
    </BrowserRouter>
  );
}
