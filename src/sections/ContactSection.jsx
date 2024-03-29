import React from "react";
import ContactCard from "../components/ContactCard";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const ContactSection = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold">Contact Me</h2>

        <p className="mt-8">
          <a
            href="tel:6143906882"
            aria-label="Phone Number"
            className="hover:font-bold flex justify-center items-center gap-3"
          >
            <HiOutlinePhone />
            614-961-0509
          </a>
        </p>
        <p>
          <a
            href="mailto:"
            aria-label="Email Address"
            className="hover:font-bold flex justify-center items-center gap-3"
          >
            <HiOutlineMail />
            poulletjp@gmail.com
          </a>
        </p>
      </div>

      <ContactCard />
    </section>
  );
};

export default ContactSection;
