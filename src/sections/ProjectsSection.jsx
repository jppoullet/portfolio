import React from "react";
import bkinremodeling from "../assets/bkinremodeling.png";
import todoAppReact from "../assets/todo-app-react.png";
import joblistings from "../assets/joblistingswithfilter.png";
import jpStore from "../assets/jpstore.png";
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log("intersecting");
      }
    });
  });

  const hiddenElements = document.querySelectorAll("#project");
  hiddenElements.forEach((el) => observer.observe(el));
  console.log(hiddenElements);

  return (
    <section className="flex flex-col items-center mt-36" id="projectsSection">
      <h2 className="md:text-4xl text-3xl font-bold">Projects</h2>
      <h2 className="md:text-3xl text-2xl text-gray-700 font-bold opacity-60 relative md:-top-12 -top-11 -z-40 text-center">
        Projects
      </h2>

      <section className="flex flex-col items-center">
        {/* Project 1 */}
        <div
          id="project"
          className="flex flex-col items-center text-center mt-16 mb-10"
        >
          <img
            src={bkinremodeling}
            alt="bkinremodeling"
            className="md:max-w-[850px]"
          />
          <h3 className="mt-4 mb-2 text-2xl text-yellow-500">
            B & Kin Remodeling
          </h3>
          <p>
            Fully functional Client website. Built using React.js and Tailwind.
          </p>
          <div className="flex items-center justify-center mt-7 gap-16">
            <ul className="flex items-center gap-3">
              <a
                className="border py-1 px-2"
                href="https://www.bkinremodeling.com/"
              >
                Live
              </a>
              <a
                className="border py-1 px-2"
                href="https://github.com/jppoullet/b-and-kin-remodeling"
              >
                Source
              </a>
            </ul>

            <ul className="flex items-center gap-5">
              <li>
                <SiReact size={30} />
              </li>
              <li>
                <SiTailwindcss size={30} />
              </li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div
          id="project"
          className="flex flex-col items-center text-center mt-16 mb-10"
        >
          <img
            src={jpStore}
            alt="fake-ecommerce-page"
            className="md:max-w-[850px]"
          />
          <h3 className="mt-4 mb-2 text-2xl text-yellow-500">
            JP's Store - Fake E-commerce Page
          </h3>
          <p>
            A personal project utilizing API data to create a mock store front
            with shopping cart functionalities. Built using React.js and
            Tailwind.
          </p>
          <div className="flex items-center justify-center mt-7 gap-16">
            <ul className="flex items-center gap-3">
              <a
                className="border py-1 px-2"
                href="https://fake-ecommerce-page.vercel.app/"
              >
                Live
              </a>
              <a
                className="border py-1 px-2"
                href="https://github.com/jppoullet/fake-ecommerce-page"
              >
                Source
              </a>
            </ul>

            <ul className="flex items-center gap-5">
              <li>
                <SiReact size={30} />
              </li>
              <li>
                <SiTailwindcss size={30} />
              </li>
            </ul>
          </div>
        </div>

        {/* Project 3 */}
        <div
          id="project"
          className="flex flex-col items-center text-center mt-16 mb-10"
        >
          <img src={todoAppReact} alt="" className="md:max-w-[850px]" />
          <h3 className="mt-4 mb-2 text-2xl text-yellow-500">Todo App</h3>
          <p>
            Filter by task status, task count, and a clear completed tasks
            button. Features light/dark mode, Checkmark and strike-through for a
            completed task. Built using React.js and Sass.
          </p>
          <div className="flex items-center justify-center mt-7 gap-16">
            <ul className="flex items-center gap-3">
              <a
                className="border py-1 px-2"
                href="https://todo-app-react-ten-murex.vercel.app/"
              >
                Live
              </a>
              <a
                className="border py-1 px-2"
                href="https://github.com/jppoullet/todo-app-react"
              >
                Source
              </a>
            </ul>

            <ul className="flex items-center gap-5">
              <li>
                <SiReact size={30} />
              </li>
              <li>
                <SiSass size={30} />
              </li>
            </ul>
          </div>
        </div>

        {/* Project 4 */}
        <div
          id="project"
          className="flex flex-col items-center text-center mt-16 mb-10"
        >
          <img src={joblistings} alt="" className="md:max-w-[850px]" />
          <h3 className="mt-4 mb-2 text-2xl text-yellow-500">Job Board</h3>
          <p>
            Listing of available jobs. Click on keywords to filter by selected
            keywords. Built using Javascript and Sass
          </p>
          <div className="flex items-center justify-center mt-7 gap-16">
            <ul className="flex items-center gap-3">
              <a
                className="border py-1 px-2"
                href="https://jppoullet.github.io/job-listings-with-filtering/"
              >
                Live
              </a>
              <a
                className="border py-1 px-2"
                href="https://github.com/jppoullet/job-listings-with-filtering"
              >
                Source
              </a>
            </ul>

            <ul className="flex items-center gap-5">
              <li>
                <SiJavascript size={30} />
              </li>
              <li>
                <SiSass size={30} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
