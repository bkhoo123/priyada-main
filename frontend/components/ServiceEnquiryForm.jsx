// ServiceEnquiryForm.jsx
"use client"

import React, { useState } from 'react';
// import Datepicker from 'react-tailwindcss-datepicker';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { UserGlobalState } from '@/context/UserContext';
import axios from 'axios';

const CreateServiceEnquiry = () => {
  const { sessionUser, setSessionUser } = UserGlobalState()
  const router = useRouter()

  const [date, setDate] = useState(null);


  const [formData, setFormData] = useState({
    serviceId: 1,
    date: '',
    location: '',
    notes: '',
  });

  const { serviceId, appointmentDate, location, notes } = formData;

  const handleDateChange = (newDate) => {
   let newFormattedDate= setDate(convertToYYYYMMDD(newDate));
    setFormData({
      ...formData,
      date: newFormattedDate
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function convertToYYYYMMDD(dateString) {
    const inputDate = new Date(dateString);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = convertToYYYYMMDD(date);
    setFormData({
      ...formData,
      date: formattedDate,
    });
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/serviceappointments/new/', {
        service_id: serviceId,
        date: formattedDate,
        location: location,
        notes: notes,
      },
      { withCredentials: true },
      );

      console.log("THIS IS RESPONSE", response)
      if (response) {
        alert("Services Appointment Created Successfully");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("FAIL TO SUBMIT FORM");
    }
  };

  if (!sessionUser) {
    alert("Please Login First.");
    router.push('/login')
  }
  else {
     return (
  <div
    className="h-screen bg-black w-screen bg-fill bg-center relative"
    style={{
      backgroundImage: `url('/artist_pictures/Artist_Picture (38).jpg')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
    }}
  >
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg w-full p-8 rounded-xl bg-black bg-opacity-20 shadow-lg ">
        <h1 className="text-3xl font-bold text-white mb-6 text-center ">Get In Touch</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6" action="">
          <label>
            <div className="text-white text-bold bg-black bg-opacity-5 p-1">Please select the type of appointment you are interested in.</div>
            <select
              className="rounded-md text-black p-2 border bg-white shadow-md"
              value={serviceId}
              onChange={handleChange}
              name="serviceId"
            >
              <option value={1}>Makeup (Shows, Arangetrams, Photoshoots, Workshops)</option>
              <option value={2}>Emcee/Hosting (Events, Shows, Television, etc)</option>
              <option value={3}>Other/Nattuvangam</option>
            </select>
          </label>
          <label>
            <div className="text-white text-bold bg-black bg-opacity-5 p-1">When do you require our services?</div>
            <DatePicker
              className="rounded-md text-black p-2 border bg-white shadow-md"
              onChange={handleDateChange}
              value={date}
              name="date"
            />
          </label>
          <label>
            <div className="text-white text-bold bg-black bg-opacity-5 p-1">Where do you require this service?</div>
            <input
              name="location"
              className="w-full text-black bg-white border rounded-md shadow-md p-2"
              placeholder="Cubberly Theatre, Palo Alto, CA"
              onChange={handleChange}
              value={location}
            />
          </label>
          <label>
            <div className="text-white text-bold bg-black bg-opacity-5">Please provide any particular details or preferences regarding your appointment or event.</div>
            <textarea
              placeholder="Hello, I am looking for a makeup artist for my dance showcase next month..."
              className="w-full h-40 text-black bg-white border rounded-md shadow-md p-3 resize-none"
              onChange={handleChange}
              name="notes"
              value={notes}
            ></textarea>
          </label>
          <div className="py-6 flex gap-4 justify-center m-15">
            <button
              className="bg-teal-700 font-semibold hover:bg-stone-500 text-white rounded-sm p-2 transition duration-700"
              type="submit"
            >
              Submit
            </button>
            <button className="bg-teal-700 font-semibold text-white rounded-sm p-2 hover:bg-stone-500 transition duration-700">
              <Link href="/">Return to Home Page</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

  }
};

export default CreateServiceEnquiry;
