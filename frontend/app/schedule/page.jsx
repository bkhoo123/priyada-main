"use client";
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import DanceRegistrationButton from '@/components/DanceRegistrationButton';
import Background from "./ClassesBackground.jpg"
import DanceClassCard from '@/components/DanceClassCard';

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

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


    return (
        <>
            <div className="relative min-h-screen">
                <NavBar/>
                <div className="absolute inset-0 bg-center bg-contain opacity-50 z-0" style={{ backgroundImage: `url(https://i.imgur.com/16Qo4hh.jpg)` }}></div>
                <div className="relative z-10">
                    <div className="text-[#fef3c7] h-auto text-center py-12">
                        <h1 className="sm:text-2xl lg:text-4xl">CLASSES</h1>
                    </div>
                       <div className='flex flex-row justify-center'>
                        {renderDanceCards()}
                        </div>


                    <DanceRegistrationButton/>
                </div>
            </div>
            <Footer/>
            <ChatBot />
        </>
    );
};

export default Classes;
