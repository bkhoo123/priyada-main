"use client"

import axios from 'axios';
import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import DanceClassCard from '@/components/DanceClassCard';

import Link from 'next/link';

import { useRouter } from "next/navigation";
import { UserGlobalState } from "@/context/UserContext";

const DanceRegistration = () => {
  const { sessionUser, setSessionUser } = UserGlobalState();
  const router = useRouter();

  const danceLevels = {
    "Beginner": {
      "id": 1,
      "class_one": "Monday at 5:00 pm",
      "class_two": "Thursday at 6:00 pm",
      "level": "Beginner",
      "description": "Fundamentals & Basics: Adavus, Jathis, Mudras, Padha Bhedas and Theory",
      "imageUrl": "/dance_school/PXL_20231025_012124652.MP.jpg"
    },
    "Intermediate": {
      "id": 2,
      "class_one": "Monday at 6:00 pm",
      "class_two": "Friday at 6:00 pm",
      "level": "Intermediate",
      "description": "Fundamentals & Items: Pushpanjalis, Alarippus, Jathiswarams, Dance Theory, etc",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(7).jpg"
    },
    "Advanced": {
      "id": 3,
      "class_one": "Monday at 7:00 pm",
      "class_two": "Saturday 9:30 am",
      "level": "Advanced",
      "description": "Advanced Dance items: Padhams, Varnams, Javalis, etc",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(9).jpg"
    },
    "Senior": {
      "id": 4,
      "class_one": "Available on request",
      "class_two": "Available on request",
      "level": "Senior",
      "description": "One-on-One mentorship and training available for senior artists looking to sharpen their technique and performance skills",
      "imageUrl": "/dance_school/Photo from Priyanka Raghuraman(1).jpg"
    }
  };

  const renderDanceCards = () => {
    return Object.keys(danceLevels).map((level) => {
      const { class_one, class_two, description, imageUrl } = danceLevels[level];

      return (
        <DanceClassCard
          key={level}
          level={level}
          classOne={class_one}
          classTwo={class_two}
          description={description}
          imageUrl={imageUrl}
        />
      );
    });
  };


  const [formData, setFormData] = useState({
    danceClassId: 1,
    age: '',
    location: '',
    notes: '',
  });

  const { danceClassId, age, location, notes } = formData; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("THIS IS FORM DATA", formData)
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/danceclassregistrations/new', {
        dance_class_id: danceClassId,
        age: age,
        location: location,
        notes: notes,
      },
      { withCredentials: true },
      );

      console.log("THIS IS RESPONSE", response)
      if (response) {
        alert("Class Register Successfully");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("FAIL TO SUBMIT FORM");
    }
  };

  // if (!sessionUser) {
  //   router.push('/login');
  // }
  // else {
    return (
      <>
        <NavBar />
        {/* <section className='flex flex-col items-center h-screen'> */}
  <section className='flex flex-col items-center w-full h-full bg-cover bg-opacity-50 bg-center' style={{ backgroundImage: "url('/splash_page/Splash_pager.jpg')" }}>


            {/* <section className='flex flex-col items-center w-full h-auto bg-cover bg-center bg-opacity-50' style={{ backgroundImage: "url('/splash_page/093cbe78fdb53572a37e5ef20242660f.jpg')" }}> */}

          <div className='flex justify-center w-full h-1/2 '>
            {renderDanceCards()}
          </div>

          <div className='flex flex-col justify-center bg-black text-white w-[40%] border-none rounded-md shadow-xl p-8 m-20 border-2 '>
            <div className='flex justify-center'>
              <h1 className='text-3xl font-bold mb-4 text-white'>Register For Dance Lessons</h1>
            </div>
            <hr className='mx-[-2.5rem] my-[4rem]' />

            <form onSubmit={handleSubmit} 
              action=''
              className='flex flex-col justify-center items-start'>


              <label className='my-4'>
                <div className='my-5 font-bold text-lg'>How Many Years of Dance Experience do you have?</div>

                <select value={danceClassId} onChange={handleChange} name='danceClassId' className='rounded-md text-black text-lg p-2 bg-white shadow-xl'>
                  <option className="text-m" value={1}>Beginner: 0-3 years of experience</option>
                  <option className="text-m" value={2}>Intermediate: 3-6 years of experience</option>
                  <option className="text-m" value={3}>Advanced: 6-10 years of experience</option>
                  <option className="text-m" value={4}>Senior: 10+ years of experience</option>
                </select>
            </label>

              <label className='mt-5 mb-4'>
                <div className='font-bold mb-2 text-lg'>What is your age?</div>
                <div className='text-sm mb-2'>(Why we ask this: We want to place you in the most appropriate group for your age and skill level)</div>
                <input value={age} name='age' onChange={handleChange} className='rounded-md mt-2 mb-4 w-20 bg-white border-b-2 border-black outline-none shadow-xl p-2 text-black text-lg'
                  placeholder="Ex. 6" />
              </label>

              <label className='mb-4 mt-5'>
                <div className='font-semibold text-lg'>Where are you located? (We offer in-person and online classes)</div>
                <input value={location} name='location' onChange={handleChange} className="rounded-md mt-2 mb-4 w-full text-black font-semibold outline-none text-lg border-b-2 border-black shadow-xl p-2 bg-white"
                  placeholder='Fremont, CA'
                />
              </label>

              <label className='mt-5 mb-4'>
                <div className='font-bold text-lg mb-4'>Tell us more about your background, experience, dance aspirations or any specific requirements you have so we can get to know you better!</div>

                <div className='font-semibold mb-4 text-lg'>1. Do you practice any other dance styles or art forms?</div>
                <div className='font-semibold mb-4 text-lg'>2. How long have you been dancing?</div>
                <div className='font-semibold mb-4 text-lg'>3. What are you hoping to learn from your time at Priyada Arts?</div>
                <div className='font-semibold mb-4 text-lg'>4. When are you looking to start attending lessons?</div>

                <textarea
                value={notes} name='notes' onChange={handleChange}
                  className='flex justify-center outline-none text-black text-lg border-2 border-black p-4 focus-none resize-none mt-4 mb-4 rounded-md shadow-xl w-full bg-white'
                  placeholder='Ex. Hi! I have 10 years of experience in Bharathanatyam and have practiced a few other styles as well briefly. I am hoping to expand my performance skills and technique nuances under your mentorship.'
                  rows="10"
                  cols="70"
                ></textarea>

                <div className='mt-4 mb-4 font-semibold text-lg'>Whether you're looking to join regular classes or have a special request, we look forward to working with you!</div>
              </label>

              <div className='py-6 flex gap-4 w-full justify-center items-center text-lg font-semibold'>
                <button
                  className="bg-teal-800 hover:bg-stone-500 text-white rounded-md p-3 transition duration-700"
                  type="submit"
                >
                  Submit
                </button>

                <button
                  className="bg-teal-800 hover:bg-stone-500 text-white rounded-md p-3 transition duration-700"
                  onClick={() => router.push('/')}
                >
                  <Link href='/'>Cancel</Link>
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
        <ChatBot />
      </>
    )
  }
// }

export default DanceRegistration
