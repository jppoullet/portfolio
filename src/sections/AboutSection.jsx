import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col" id="aboutSection">
      <img
        className="h-56"
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown"
      />
      <h2>About Me</h2>
      <p>
        Hey there! I'm Jean-Paul, a front-end developer with a passion for
        creating engaging and user-friendly web experiences. Away from the
        screen, I enjoy spending time with my family, golfing, disc golfing, the
        outdoors and staying as active as possible.
      </p>
    </div>
  );
};

export default AboutSection;
