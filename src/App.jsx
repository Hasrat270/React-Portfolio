import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar fixed hai, isliye iske neeche ki space ko maintain karne ke liye wrapper chahiye */}
      <div className="min-h-screen bg-[#1a1d23] selection:bg-blue-500/30">
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