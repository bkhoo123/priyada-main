"use client"
import Link from "next/link"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import { UserGlobalState } from "@/context/UserContext";

const CreateTestimonial = ({ isOpen, onRequestClose }) => {
  const { sessionUser, setSessionUser, session, setSession } = UserGlobalState();

  console.log("SESSION USER IS", sessionUser)
    console.log("SESSION USER ID IS", sessionUser?.id)

  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    testimonial: '',
    role: 'Student at Priyada Arts', // Added 'role' to the initial state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { firstName, lastName, testimonial, role } = formData; // Changed 'content' to 'testimonial'

  const handleCloseModal = () => {
    onRequestClose();
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/testimonials/', {
          first_name: firstName,
          last_name: lastName,
          content: testimonial,
          role: role,},{ withCredentials: true });
        console.log("THIS IS RESPONSE",response)
        if (response) {
          alert("Thank You For Leaving a Testimonial!");
          handleCloseModal();
          router.push("/");
        }
      } catch (error) {
        console.error(error);
        alert("FAIL TO CREATE A TESTIMONIAL");
      }
    };


  if (!isOpen) {
    return null; // Do not render the modal if isOpen is false
  }
  else if (!sessionUser) {
    alert("Please Login First.");
    router.push('/login')
  }
  else {
    return (
      <div onClick={(e) => e.stopPropagation()} className="z-200 fixed left-1/3 mb-40 top-1/4 bg-white text-black w-full sm:w-1/2 md:w-1/3 p-7 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-2xl lg:text-2xl font-bold">Leave a Testimonial</h1>
          
          <button className="" onClick={() => handleCloseModal()}>X</button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:text-lg lg:text-xl"
          action=""
        >
          <label className="flex flex-col gap-2 my-2" htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="text-black border rounded-md p-2 border-gray-300 focus:border-gray-400"
            />
          </label>

          <label className="flex flex-col gap-2 my-2" htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="text-black border rounded-md p-2 border-gray-300 focus:border-gray-400"
            />
          </label>

          <label>
            <div>Who are you?</div>
            <select
              className="text-black mt-5 mb-5"
              name="role"
              value={role}
              onChange={handleChange}
            >
              <option value="Student at Priyada Arts">Student at Priyada Arts</option>
              <option value="Parent at Priyada Arts">Parent at Priyada Arts</option>
              <option value="Collaborator">Collaborator</option>
              <option value="Critic/Mentor/Other">Critic/Mentor/Other</option>
            </select>
          </label>

          <label className="flex flex-col gap-2" htmlFor="testimonial">
            Testimonial
            <textarea
              name="testimonial"
              value={testimonial}
              onChange={handleChange}
              placeholder="Leave your testimonial here"
              className="border-2 border-gray-300 rounded-md p-3"
              rows="5"
              cols="50"
            ></textarea>
          </label>

          <div className='py-6 flex gap-4 justify-center'>
            <button
              className="w-full sm:w-auto bg-gray-700 font-semibold text-white rounded-md p-2 transition duration-700 hover:bg-gray-400"
              type="submit"
            >
              Submit
            </button>

            <button className="w-full sm:w-auto bg-gray-700 font-semibold text-white rounded-md p-2 transition duration-500 hover:bg-gray-400 mt-2 sm:mt-0" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  };
}

export default CreateTestimonial;
