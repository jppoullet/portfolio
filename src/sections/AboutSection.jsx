import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="flex flex-col mb-10" id="aboutSection">
      <img
        className="h-56"
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
          <FaGithub size={27} />
        </a>
        <a href="https://www.linkedin.com/in/jeanpaulpoullet/">
          <FaLinkedin size={27} />
        </a>
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-bold">About Me</h2>
        <h2 className="text-3xl text-gray-700 font-bold opacity-60 relative -top-6 -left-2 -z-40">
          About
        </h2>
      </div>
      <p>
        A front-end developer with a passion for creating engaging and
        user-friendly web experiences. Away from the screen, I enjoy spending
        time with my family, golfing, disc golfing, the outdoors and staying as
        active as possible.
      </p>
    </section>
  );
};

export default AboutSection;
