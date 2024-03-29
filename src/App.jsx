import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      {/* <div className="mx-auto max-w-[1110px] px-6 text-white font-poppins"> */}
      <header className="mx-auto max-w-[1110px] px-6 text-white font-poppins">
        <NavBar />
      </header>
      <main className="mx-auto max-w-[1110px] px-6 text-white font-poppins">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
