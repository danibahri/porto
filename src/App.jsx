import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import BlobCursor from "./components/BlobCursor";
import CurvedLoop from "./components/CurvedLoop";
import TechCloud from "./components/TechCloud";
import Chatbot from "./components/Chatbot";
import ScrollVelocity from "./components/ScrollVelocity";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500/30 cursor-none">
      <BlobCursor />
      <Chatbot />
      <Navbar />
      <main>
        <Hero />
        <ScrollVelocity />
        <Experience />
        <CurvedLoop />
        <Projects />
        <TechCloud />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
