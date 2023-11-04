"use client";
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UserGlobalState } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ChatBot from '@/components/ChatBot';
import DanceClassCard from '@/components/DanceClassCard';


const YourAccount = () => {
  const router = useRouter();
  const { sessionUser } = UserGlobalState();

  const [danceClasses, setDanceClasses] = useState([]);

  const [activeTab, setActiveTab] = useState('classes'); // State to handle active tab


  const renderAccountInfo = () => (
    <div className="p-6 m-3 border rounded-md bg-white shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Username</div>
        <div>{sessionUser?.username}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Full Name</div>
        <div>{sessionUser?.first_name} {sessionUser?.last_name}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Email</div>
        <div>{sessionUser?.email}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Address</div>
        <div>{sessionUser?.address}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Phone Number</div>
        <div>{sessionUser?.phone_number}</div>
      </div>
    </div>
  );

  const renderBillingInfo = () => (
    <div className="p-6 m-3 border rounded-md bg-white shadow-2xl">
      <h2 className="text-2xl font-semibold  mb-4">Billing Information</h2>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Username</div>
        <div>{sessionUser?.username}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Full Name</div>
        <div>{sessionUser?.first_name} {sessionUser?.last_name}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Email</div>
        <div>{sessionUser?.email}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Address</div>
        <div>{sessionUser?.address}</div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">Phone Number</div>
        <div>{sessionUser?.phone_number}</div>
      </div>
    </div>
  );

  const renderClassInfo = () => (
    <div className="p-6 m-3 border rounded-md bg-white shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Registered Classes & Class Schedules</h2>

      <div className="text-lightcream flex flex-row mb-4">
        {renderDanceCards()}
      </div>
      <div>
        {currentReg?.length > 0 ? (
          currentReg?.map((danceReg, index) => (
            <div key={index} className="text-lightcream p-4 z-1">
              <h3>Classes You Are Currently Registered For</h3>
              <p>{danceLevels[danceReg.dance_class_id]?.level}</p>
              <p>Class One: {danceLevels[danceReg.dance_class_id]?.class_one}</p>
              <p>Class Two: {danceLevels[danceReg.dance_class_id]?.class_two}</p>
              <p>Your registration is {danceReg?.is_approved ? "Approved" : "Not Approved"}</p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );

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

  useEffect(() => {
    axios.get('http://localhost:5000/api/danceclassregistrations/')
      .then((response) => {
        console.log("THIS IS RESPONSE IN FETCH FOR ALL DANCE REG:", response);
        const fetchedClasses = response.data.dance_class_registrations;
        setDanceClasses(fetchedClasses);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  let currentReg = [];
  if (danceClasses.length > 0) {
    currentReg = danceClasses.filter(classItem => classItem?.user_id === sessionUser?.id);
    console.log("CURRENT Reg IS", currentReg);
  }

  useEffect(() => {
    if (!sessionUser) {
      router.push("/");
    }
  }, [sessionUser, router]);

  console.log("THIS IS CURRENT reg", currentReg);
  console.log("THIS IS DANCE CLASSES", danceClasses);

  return (
    <div>
      <NavBar />

      <div className='text-black mx-4 sm:mx-8 lg:mx-12 xl:mx-20'>
        {renderAccountInfo()}
        {renderBillingInfo()}
        {renderClassInfo()}
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default YourAccount;
