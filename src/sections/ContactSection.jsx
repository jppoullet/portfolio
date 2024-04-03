import React from "react";
import ContactCard from "../components/ContactCard";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import contactMe from "../assets/contactMe1.webp";

const ContactSection = () => {
  return (
    <section className="my-32" id="contactSection">
      <div className="text-center mb-10">
        <h2 className="md:text-3xl text-2xl font-bold">Contact Me</h2>
        <h2 className="md:text-3xl text-2xl text-gray-700 font-bold opacity-60 relative md:-top-12 -top-10 -z-40 text-center">
          Contact
        </h2>

        <p>
          <a
            href="tel:6143906882"
            aria-label="Phone Number"
            className="hover:font-bold flex justify-center items-center gap-4"
          >
            <HiOutlinePhone />
            614-961-0509
          </a>
        </p>
        <p>
          <a
            href="mailto:"
            aria-label="Email Address"
            className="hover:font-bold flex justify-center items-center gap-4"
          >
            <HiOutlineMail />
            poulletjp@gmail.com
          </a>
        </p>
      </div>
      <div className="">
        {/* <img src={contactMe} alt="" /> */}

        <ContactCard />
      </div>
    </section>
  );
};

export default ContactSection;
