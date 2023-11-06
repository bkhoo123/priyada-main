"use client"
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserGlobalState } from '@/context/UserContext';



// *************************************************************************************



const AdminDashboard = () => {
  const { sessionUser } = UserGlobalState();

  const [inquiries, setInquiries] = useState([]);
  const [classRegistrations, setClassRegistrations] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [students, setStudents] = useState([])
  // const [isLoading, setIsLoading] = useState(false);


  // *************************************************************************************

// TESTIMONIALS AND INQUIRIES SHOW UP IN STATE BUT CAN'T RENDER!!!?!? *************

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/testimonials/');
        const fetchedTestimonies = response.data.testimonials;
        console.log("FETCHED TESTIMONIES", fetchedTestimonies)
        setTestimonials(fetchedTestimonies);
        console.log("THIS IS FETCHED TESTIMONIES", testimonials)


      } catch (error) {
        setError(error);
      }
    };

  const fetchInquiries = async () => {
    try {
      const inquiriesResponse = await axios.get('http://127.0.0.1:5000/api/serviceappointments/');
      setInquiries(inquiriesResponse.data.service_appointments);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const fetchRegistrations = async () => {
    try {
      const registrationsResponse = await axios.get('http://127.0.0.1:5000/api/danceclassregistrations/');
      setClassRegistrations(registrationsResponse.data.dance_class_registrations);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };



  const fetchStudents = async () => {
    try {
      const studentsResponse = await axios.get('http://127.0.0.1:5000/api/users/');
      setStudents(studentsResponse.data.users);
      console.log("THIS IS STUDENTS IN USEEFFECT", students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  fetchInquiries();
  fetchRegistrations();
  fetchTestimonials();
  fetchStudents();
}, []);


  console.log("THIS IS STUDENTS OUTSIDE OF USEFFECt", students)
 console.log("THIS IS testimonies OUTSIDE OF USEFFECt", testimonials)
  console.log("THIS IS class reg OUTSIDE OF USEFFECt", classRegistrations)
   console.log("THIS IS inquiries OUTSIDE OF USEFFECt", inquiries)

  // *************************************************************************************





  const renderInquiriesTab = () => {
    return (
      <div className="">

          <div className="h-full flex flex-col">


            {/* Display Pending Inquiries */}
            <div className="text-2xl font-sans font-bold mb-4">Pending Inquiries</div>
            <div className='font-sans flex flex-wrap justify-center'>

              {inquiries?.length > 0 ? inquiries
                .filter(inquiry => !inquiry?.is_approved)
                .map((pendingInquiry, index) => (
                  <div key={index} className="font-sans text-black bg-stone-50 rounded-lg shadow p-4 m-4">
                    <div className="font-sans grid gap-1">
                      <div className="font-sans font-bold">Inquiry From: {pendingInquiry?.user?.first_name} {pendingInquiry?.user?.last_name}</div>
                      <div>Type: {pendingInquiry?.service_id === 1 ? "Makeup" : pendingInquiry?.service_id === 2 ? "Emcee" : "Nattuvangam"}</div>
                      <div>Message: {pendingInquiry?.notes}</div>
                      <div>Requested Date: {pendingInquiry?.date.toLocaleString()}</div>

                      <div>Requested Location: {pendingInquiry?.location}</div>
                      <div>Contact Email: {pendingInquiry?.user?.email}</div>
                      <div>Contact Phone Number: {pendingInquiry?.user?.phone_number}</div>
                      <div>Contact Address: {pendingInquiry?.user?.address}</div>
                      {/* DISPLAY THE APPROVE/REMOVE INQUIRY BUTTONS HERE */}
                    </div>
                  </div>
                )) : <div>No Pending Inquiries</div>}
            </div>

            {/* Display Approved Inquiries */}
            <div className='flex font-sans flex-wrap justify-center"'>
              <div className="text-2xl font-bold font-sans  mb-4">Approved Inquiries</div>
              {inquiries?.length > 0 ? inquiries
                .filter(inquiry => inquiry?.is_approved)
                .map((approvedInquiry, index) => (
                  <div key={index} className="font-sans text-black bg-stone-50 rounded-lg shadow p-4 m-4">
                    <div className="font-sans grid gap-1">
                      <div className="font-sans font-bold">Inquiry From: {approvedInquiry?.user?.first_name} {approvedInquiry?.user?.last_name}</div>
                      <div>Type: {approvedInquiry?.service_id === 1 ? "Makeup" : approvedInquiry?.service_id === 2 ? "Emcee" : "Nattuvangam"}</div>
                      <div>Message: {approvedInquiry.notes}</div>
                      <div>Requested Date: {approvedInquiry?.date.toLocaleString()}</div>
                      <div>Requested Location: {approvedInquiry?.location}</div>
                      <div>Contact Email: {approvedInquiry?.user?.email}</div>
                      <div>Contact Phone Number: {approvedInquiry?.user?.phone_number}</div>
                      <div>Contact Address: {approvedInquiry?.user?.address}</div>
                      {/* DISPLAY REMOVE INQUIRY BUTTON HERE */}
                    </div>
                  </div>
                )) : <div>No Inquiries At This Time</div>}
            </div>
          </div>

      </div>
    );
  };


  // *************************************************************************************


  const renderClassRegistrationsTab = () => {
    return (
      <div className="">

          <div className="flex flex-col justify-center">

            {/* Display Pending Dance Class Registrations */}
            <div className='flex flex-wrap'>
              <div className="text-2xl font-bold mb-1">Pending Registrations</div>
              {classRegistrations?.length > 0 ? classRegistrations
                .filter(registration => !registration?.is_approved)
                .map((pendingRegistration, index) => (
                  <div key={index} className="rounded-xl shadow-lg p-6 m-4 bg-stone-100 text-black">
                    <div className="text-lg mb-1 font-semibold">Inquiry From: {pendingRegistration.inquiry?.user?.first_name} {pendingRegistration?.user?.last_name}</div>
                    <div className="font-semibold">Level: {pendingRegistration?.dance_class_id === 1 ? "Beginner" : pendingRegistration?.dance_class_id === 2 ? "Intermediate" : "Advanced/Senior"}</div>
                    <div className="font-semibold">Age: {pendingRegistration?.age}</div>
                    <div className="font-semibold">Requested Location: {pendingRegistration?.location}</div>
                    <div className="font-semibold">Message: {pendingRegistration?.notes}</div>
                    <div className="mt-2 font-semibold">Contact Info:</div>
                    <div className="font-semibold">Contact Email: {pendingRegistration?.user?.email}</div>
                    <div className="font-semibold">Contact Phone Number: {pendingRegistration?.user?.phone_number}</div>
                    <div className="font-semibold">Contact Address: {pendingRegistration?.user?.address}</div>
                    {/* INSERT APPROVE/REJECT REGISTRATION BUTTONS HERE */}
                  </div>
                )) : <div>No Pending Class Registrations</div>}
            </div>

            {/* Display Approved Dance Class Registrations */}
            <div>
              <div className="text-2xl text-black font-bold mb-2">Approved Registrations</div>
              {classRegistrations?.length > 0 ? classRegistrations
                .filter(registration => registration?.is_approved)
                .map((approvedRegistration, index) => (
                  <div key={index} className="rounded-xl shadow-lg p-6 mb-2 bg-stone-100 text-black">
                    <div className="text-lg mb-2 font-semibold">Inquiry From: {approvedRegistration?.inquiry?.user?.first_name} {approvedRegistration?.user?.last_name}</div>
                    <div className="font-semibold">Level: {approvedRegistration?.dance_class_id === 1 ? "Beginner" : approvedRegistration?.dance_class_id === 2 ? "Intermediate" : "Advanced/Senior"}</div>
                    <div className="font-semibold">Age: {approvedRegistration?.age}</div>
                    <div className="font-semibold">Requested Location: {approvedRegistration?.location}</div>
                    <div className="font-semibold">Message: {approvedRegistration?.notes}</div>
                    <div className="mt-4 font-semibold">Contact Info:</div>
                    <div className="font-semibold">Contact Email: {approvedRegistration?.user?.email}</div>
                    <div className="font-semibold">Contact Phone Number: {approvedRegistration?.user?.phone_number}</div>
                    <div className="font-semibold">Contact Address: {approvedRegistration?.user?.address}</div>
                    {/* INSERT DELETE REGISTRATION BUTTON HERE */}
                  </div>
                )) : <div>No Class Registrations At This Time</div>}
            </div>
          </div>

      </div>
    );
  };


  // *************************************************************************************
const renderTestimonialsTab = () => {
  const pendingTestimonials = testimonials.filter(testimonial => !testimonial.isApproved);
  const approvedTestimonials = testimonials.filter(testimonial => testimonial.isApproved);

  return (
    <div className='flex flex-wrap w-full '>
      {/* Display Pending Testimonials */}
      <div className="flex w-full h-auto">
        <div className="text-white font-sans text-xl font-bold mb-4 h-auto">New Testimonials</div>
        <div className="flex flex-wrap  w-full">
          {pendingTestimonials.map((pendingTestimonial, index) => (
            <div key={index} className="w-1/3 p-4">
              {/* Display pending testimonial details */}
              <div className="font-sans bg-white text-black rounded-lg shadow p-6 m-5">
                <p className="text-black font-semibold">Name: {pendingTestimonial.first_name} {pendingTestimonial.last_name}</p>
                <p className="text-black font-semibold">Role: {pendingTestimonial.role}</p>
                <p className="text-black font-semibold">Content: {pendingTestimonial.content}</p>
                {/* INSERT APPROVE/REJECT TESTIMONIAL BUTTONS HERE and change is_approved */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Approved Testimonials */}
      <div className="flex w-full h-auto">
        <div className="font-sans text-white text-xl font-bold mb-4">Approved Testimonials</div>
        <div className="flex flex-wrap  w-full">
          {approvedTestimonials.map((approvedTestimonial, index) => (
            <div key={index} className="w-1/3 p-4">
              {/* Display approved testimonial details */}
              <div className="font-sans bg-white text-black rounded-lg shadow p-6 m-5">
                <p className="text-black font-semibold">Name: {approvedTestimonial.first_name} {approvedTestimonial.last_name}</p>
                <p className="text-black font-semibold">Role: {approvedTestimonial.role}</p>
                <p className="text-black font-semibold">Content: {approvedTestimonial.content}</p>
                {/* INSERT DELETE A TESTIMONIAL BUTTON HERE */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


  // *************************************************************************************
const renderStudentsTab = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-screen-lg flex flex-col">

        {/* Display Students */}
        {students?.length > 0 ? (
          students.map((user, index) => (
            <div key={index} className="rounded-lg shadow-md p-4 mb-4 bg-stone-100">
              <p className="text-black mb-2 font-semibold">Name: {user?.first_name} {user?.last_name}</p>
              <p className="text-black font-semibold">Level: {user?.level}</p>
              <p className="text-black mb-2 font-semibold">Authorization: {user?.authorization}</p>
              <p className="text-black font-semibold">Phone Number: {user?.phone_number}</p>
              <p className="text-black font-semibold">Email: {user?.email}</p>
              <p className="text-black font-semibold">Address: {user?.address}</p>

              {/* INSERT form to change a student's level and/or authorization */}

            </div>
          ))
        ) : (
          <div className='text-black text-center flex justify-center font-2xl'>
            <h2>No Students At This Time</h2>
            </div>
        )}

      </div>
    </div>
  );
};



console.log("TESTIMONIALS IN ADMIN PORTAL", testimonials)
console.log("service inquries", inquiries)
console.log("class registrations",classRegistrations)
  // *************************************************************************************


  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="container font-sans mx-auto p-4 bg-black bg-opacity-50 text-white rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-sans font-semibold mb-4 py-6 text-center">
          Admin Dashboard
        </h1>

        <Tabs className="bg-black">
          <TabList className="flex font-sans justify-evenly border-b-2 border-white mb-4 rounded-t-xl">
            <Tab className="p-4 text-lg cursor-pointer hover:bg-gray-600">Inquiries</Tab>
            <Tab className="p-4 text-lg cursor-pointer hover:bg-gray-600">Class Registrations</Tab>
            <Tab className="p-4 text-lg cursor-pointer hover:bg-gray-600">Testimonials</Tab>
            <Tab className="p-4 text-lg cursor-pointer hover:bg-gray-600">Students</Tab>
          </TabList>

          {/* SERVICE ENQUIRIES TAB */}
          <TabPanel className="h-screen flex flex-col justify-start items-start">
            {renderInquiriesTab()}
          </TabPanel>

          {/* CLASS REGISTRATIONS TAB */}
          <TabPanel className="h-screen flex flex-col items-start justify-start">
            {renderClassRegistrationsTab()}
          </TabPanel>

          {/* TESTIMONIALS TAB */}
          <TabPanel className="h-screen flex flex-col items-start justify-start">
            {renderTestimonialsTab()}
          </TabPanel>

          {/* STUDENTS TAB */}
          <TabPanel className="h-screen flex flex-col items-start justify-start">
            {renderStudentsTab()}
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
