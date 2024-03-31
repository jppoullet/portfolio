import React from "react";
import bkinremodeling from "../assets/bkinremodeling.gif";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const ProjectsSection = () => {
  return (
    <section className="flex flex-col items-center mt-36" id="projectsSection">
      <h2 className="md:text-4xl text-3xl font-bold">Projects</h2>
      <h2 className="md:text-3xl text-2xl text-gray-700 font-bold opacity-60 relative md:-top-12 -top-11 -z-40 text-center">
        Projects
      </h2>

      <section className="flex flex-col items-center">
        {/* Project 1 */}
        <div className="flex flex-col items-center text-center mt-5 mb-10">
          <img src={bkinremodeling} alt="" />
          <h3>B & Kin Remodeling</h3>
          <p>
            Fully functional Client website. Built using React.js and Tailwind.
          </p>
          <ul className="flex gap-5 mt-5">
            <li className="flex flex-col items-center">
              <SiReact size={30} />
            </li>
            <li className="flex flex-col items-center">
              <SiTailwindcss size={30} />
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div>
          <h3>Todo App</h3>
        </div>

        {/* Project 3 */}
        <div>
          <h3>Job Board</h3>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
