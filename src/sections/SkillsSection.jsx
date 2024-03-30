import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const SkillsSection = () => {
  return (
    <section className="flex flex-col items-center mt-36" id="skillsSection">
      <h2 className="md:text-4xl text-3xl font-bold">Skills</h2>
      <h2 className="md:text-3xl text-2xl text-gray-700 font-bold opacity-60 relative md:-top-12 -top-11 -z-40 text-center">
        Skills
      </h2>

      <ul className="flex flex-wrap justify-center gap-5">
        <li className="flex flex-col items-center">
          HTML
          <SiHtml5 size={30} />
        </li>

        <li className="flex flex-col items-center">
          CSS
          <SiCss3 size={30} />
        </li>
        <li className="flex flex-col items-center">
          Javascript
          <SiJavascript size={30} />
        </li>
        <li className="flex flex-col items-center">
          React
          <SiReact size={30} />
        </li>
        <li className="flex flex-col items-center">
          Tailwind
          <SiTailwindcss size={30} />
        </li>
        <li className="flex flex-col items-center">
          Git
          <SiGit size={30} />
        </li>
      </ul>
    </section>
  );
};

export default SkillsSection;
