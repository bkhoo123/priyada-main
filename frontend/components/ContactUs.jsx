import { useState } from "react";

const ContactUs = ({ toggleModal, setToggleModal }) => {
  const handleCloseModal = () => {
    setToggleModal(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="z-200 fixed left-1/3 mb-40 top-1/4 bg-white text-black w-full sm:w-1/2 md:w-1/3 p-7 rounded-md shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-2xl font-bold mb-2">Contact Us</h1>
        <button className="text-black" onClick={() => handleCloseModal()}>
          X
        </button>
      </div>
      <span className="text-black">We would love to hear from you!</span>

      <hr className="my-4" />

      <form action="">
        <label className="flex flex-col gap-2 my-2" htmlFor="">
          Name
          <input
            type="text"
            placeholder="Enter your name"
            className="text-black border rounded-md p-2 border-gray-300 focus:border-gray-400"
          />
        </label>

        <label className="flex flex-col gap-2 my-2" htmlFor="">
          Email
          <input
            type="email"
            placeholder="Enter your email"
            className="text-black border rounded-md p-2 border-gray-300 focus:border-gray-400"
          />
        </label>

        <label className="flex text-black flex-col gap-2 my-2" htmlFor="">
          Subject Line
          <input
            type="text"
            placeholder="Enter subject"
            className="text-black border rounded-md p-2 border-gray-300 focus:border-gray-400"
          />
        </label>

        <label className="flex flex-col gap-2" htmlFor="">
          Message to Priyada
          <textarea
            placeholder="Type your message to Priyada here"
            className="text-black border resize-none rounded-md p-3 border-gray-300 focus:border-gray-400"
            rows="5"
            cols="50"
          ></textarea>
        </label>

        <div className="py-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="w-full sm:w-auto bg-gray-700 font-semibold text-white rounded-md p-2 transition duration-700 hover:bg-gray-400">
            Submit
          </button>

          <button className="w-full sm:w-auto bg-gray-700 font-semibold text-white rounded-md p-2 transition duration-500 hover:bg-gray-400 mt-2 sm:mt-0">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
