import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactCard = () => {
  const [result, setResult] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "96c8992f-ca51-48c7-9f69-73c8fb2912e6");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // setResult(res.message);
    } else {
      console.log("Error", res);
      // setResult(res.message);
    }

    document.getElementById("form").reset();

    toast.success(`${res.message} We will contact you soon, Thank you.`, {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const formatPhone = (e) => {
    let value = e.target.value;
    setPhoneNumber(value);
    let phoneNumber = value.replace(/\D/g, "");

    const size = phoneNumber.length;
    if (size > 0) {
      phoneNumber = `(${phoneNumber}`;
    }
    if (size > 3) {
      phoneNumber = phoneNumber.slice(0, 4) + ") " + phoneNumber.slice(4, 11);
    }
    if (size > 6) {
      phoneNumber = phoneNumber.slice(0, 9) + "-" + phoneNumber.slice(9);
    }
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
  };

  return (
    <div>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="w-full p-4 rounded-sm shadow-xl max-w-full bg-gray-100"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <input
            className="w-full bg-white text-gray-900 mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
            name="first name"
            required
          />
          <input
            className="w-full bg-white text-gray-900 mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
            name="last name"
            required
          />
          <input
            className="w-full bg-white text-gray-900 mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
            name="email"
            required
          />
          <input
            className="w-full bg-white text-gray-900 mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="Phone*"
            name="phone"
            value={phoneNumber}
            onChange={formatPhone}
            required
          />
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Message*"
            name="message"
            className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4 mx-auto">
          <button
            type="submit"
            className="uppercase tracking-wide bg-yellow-500 text-black p-3 rounded-full border border-gray-300 w-full 
              focus:outline-none focus:shadow-outline hover:bg-secondary transition duration-500"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ContactCard;
