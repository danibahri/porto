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
import MusicPlayer from "./components/MusicPlayer";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-purple-500/30 cursor-none noise-overlay">
      <BlobCursor />
      <Chatbot />
      <MusicPlayer />
      <Navbar />
      <main className="relative">
        {/* Background grid pattern */}
        <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none z-0" />

        <div className="relative z-10">
          <Hero />
          <div className="section-divider" />
          <ScrollVelocity />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <CurvedLoop />
          <div className="section-divider" />
          <TechCloud />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
