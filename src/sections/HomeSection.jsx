import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section className="flex flex-col my-36 items-center" id="homeSection">
      <img
        className=""
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown"
      />
      <h1 className="text-center mt-5 mb-3">
        Hey there!
        <br />
        <span className="text-2xl">
          I'm <span className="text-yellow-500">Jean-Paul</span>
        </span>
      </h1>
      <div className="flex m-auto gap-4">
        <a href="https://github.com/jppoullet">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jeanpaulpoullet/">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
