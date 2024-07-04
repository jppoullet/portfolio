import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";

function App() {
  const [homeRef, homeInView] = useInView({
    triggerOnce: true,
  });
  const [projectRef, projectsInView] = useInView({
    triggerOnce: true,
  });
  // const [aboutRef, aboutInView] = useInView({
  //   triggerOnce: true,
  // });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      {/* <div className="mx-auto max-w-[1110px] px-6 text-white font-poppins"> */}
      <header className="mx-auto max-w-[1110px] px-6 text-white font-poppins">
        <NavBar />
      </header>
      <main
        className="mx-auto max-w-[1110px] px-6 text-white font-poppins"
        id="mainSection"
      >
        <section
          ref={homeRef}
          className={`transition-all duration-1000 ${
            homeInView ? "showInView" : "hiddenInView"
          }
          `}
        >
          {homeInView ? <HomeSection /> : ""}
        </section>

        {/* <section
          ref={aboutRef}
          className={`transition-all duration-1000 ${
            aboutInView ? "showInView2" : "hiddenInView2"
          }
          `}
        >
          {aboutInView ? <AboutSection /> : ""}
        </section> */}
        <AboutSection />

        <SkillsSection />

        <section
          ref={projectRef}
          className={`transition-all duration-1000 ${
            projectsInView ? "showInView2" : "hiddenInView2"
          }
          `}
        >
          {projectsInView ? <ProjectsSection /> : ""}
        </section>

        <ContactSection />
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
