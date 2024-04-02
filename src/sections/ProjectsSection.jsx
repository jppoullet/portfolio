import React from "react";
import bkinremodeling from "../assets/bkinremodeling.gif";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiSass,
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
          <img src={bkinremodeling} alt="bkinremodeling" />
          <h3 className="mt-4 mb-2">B & Kin Remodeling</h3>
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
        <div className="flex flex-col items-center text-center mt-5 mb-10">
          <img src="" alt="" />
          <h3 className="mt-4 mb-2">Todo App</h3>
          <p>
            Filter by task status, task count, and a clear completed tasks
            button. Features light/dark mode, Checkmark and strike-through for a
            completed task. Built using React.js and Sass.
          </p>
          <ul className="flex gap-5 mt-5">
            <li className="flex flex-col items-center">
              <SiReact size={30} />
            </li>
            <li className="flex flex-col items-center">
              <SiSass size={30} />
            </li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col items-center text-center mt-5 mb-10">
          <img src="" alt="" />
          <h3 className="mt-4 mb-2">Job Board</h3>
          <p></p>
          <ul className="flex gap-5 mt-5">
            <li className="flex flex-col items-center">
              <SiReact size={30} />
            </li>
            <li className="flex flex-col items-center">
              <SiSass size={30} />
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
