import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuHandler = () => {
    console.log("menu pressed");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-16 py-6 bg-black">
        <a
          className="text-white font-extrabold text-xl uppercase"
          href="index.html"
        >
          Jean-Paul
        </a>
        <button
          className="md:hidden flex items-center text-gray-400"
          onClick={MenuHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <p className="uppercase tracking-wider text-lg">Menu</p>
        </button>

        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-10 text-lg">
          <li>
            <a
              className="hover:text-yellow-500 after:block after:h-0.5 after:bg-yellow-500 after:scale-x-0
              after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
              href="#mainSection"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-500 after:block after:h-0.5 after:bg-yellow-500 after:scale-x-0
              after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
              href="#aboutSection"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-500 after:block after:h-0.5 after:bg-yellow-500 after:scale-x-0
              after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
              href="#skillsSection"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-500 after:block after:h-0.5 after:bg-yellow-500 after:scale-x-0
              after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
              href="#projectsSection"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-500 after:block after:h-0.5 after:bg-yellow-500 after:scale-x-0
              after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
              href="#contactSection"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed font-normal text-lg flex flex-col justify-center items-center gap-8 overflow-hidden bg-black top-16 w-full left-0 z-50 transition-all ease-in duration-200 ${
            isOpen ? "h-1/2" : "h-0"
          }`}
        >
          <li>
            <a href="#mainSection" onClick={MenuHandler}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutSection" onClick={MenuHandler}>
              About
            </a>
          </li>
          <li>
            <a href="#skillsSection" onClick={MenuHandler}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projectsSection" onClick={MenuHandler}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contactSection" onClick={MenuHandler}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
