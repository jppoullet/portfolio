import React from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
  });

  return (
    // <section
    //       ref={aboutRef}
    //       className={`transition-all duration-1000 ${
    //         aboutInView ? "showInView2" : "hiddenInView2"
    //       }
    //       `}
    //     >
    //       {aboutInView ? <AboutSection /> : ""}
    //     </section>
    <section ref={aboutRef}>
      <section className="flex flex-col mb-36" id="aboutSection">
        <h2 className="md:text-3xl text-2xl font-bold">About Me</h2>
        <h2 className="text-3xl text-gray-700 font-bold opacity-60 relative -top-6 -left-2 -z-40">
          About
        </h2>

        <p>
          A front-end developer with a passion for creating engaging and
          user-friendly web experiences. Away from the screen, I enjoy spending
          time with my family, golfing, disc golfing, the outdoors and staying
          as active as possible.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;
