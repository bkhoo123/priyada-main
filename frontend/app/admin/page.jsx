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
  const [isLoading, setIsLoading] = useState(true);

  // *************************************************************************************



  useEffect(() => {
    const fetchData = async () => {
      try {
        const inquiriesResponse = await axios.get('http://127.0.0.1:5000/api/serviceappointments/');
        setInquiries(inquiriesResponse.data.service_appointments);

        const registrationsResponse = await axios.get('http://127.0.0:5000/api/danceclassregistrations/');
        setClassRegistrations(registrationsResponse.data.dance_class_resigrations);

        const testimonialsResponse = await axios.get('http://127.0.0.1:5000/api/testimonials/');
        setTestimonials(testimonialsResponse.data.testimonials);


        const studentsResponse = await axios.get('http://127.0.0.1:5000/api/users/');
        setStudents(studentsResponse.data.users);


        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  // *************************************************************************************





  const renderInquiriesTab = () => {
    return (
      <div className="h-full flex items-center justify-center text-black">
        {isLoading ? (
          <div className="text-xl">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">


            {/* Display Pending Inquiries */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Pending Inquiries</h2>
              {inquiries.length > 0 ? inquiries
                .filter(inquiry => !inquiry?.is_approved)
                .map((pendingInquiry, index) => (
                  <div key={index} className="text-black bg-stone-50 rounded-lg shadow p-4 mb-4">
                    <div className="grid gap-1">
                      <div className="font-bold">Inquiry From: {pendingInquiry?.user?.first_name} {pendingInquiry?.user?.last_name}</div>
                      <div>Type: {pendingInquiry?.service_id === 1 ? "Makeup" : pendingInquiry?.service_id === 2 ? "Emcee" : "Nattuvangam"}</div>
                      <div>Message: {pendingInquiry?.notes}</div>
                      <div>Requested Date: {pendingInquiry?.date}</div>
                      <div>Requested Location: {pendingInquiry?.location}</div>
                      <div>Contact Email: {pendingInquiry?.user?.email}</div>
                      <div>Contact Phone Number: {pendingInquiry?.user?.phone_number}</div>
                      <div>Contact Address: {pendingInquiry?.user?.address}</div>
                      {/* DISPLAY THE APPROVE/REMOVE INQUIRY BUTTONS HERE */}
                    </div>
                  </div>
                )) : <h2>No Pending Inquiries</h2>}
            </div>

            {/* Display Approved Inquiries */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Approved Inquiries</h2>
              {inquiries.length > 0 ? inquiries
                .filter(inquiry => inquiry.is_approved)
                .map((approvedInquiry, index) => (
                  <div key={index} className="text-black bg-stone-50 rounded-lg shadow p-4 mb-4">
                    <div className="grid gap-1">
                      <div className="font-bold">Inquiry From: {approvedInquiry?.user?.first_name} {approvedInquiry?.user?.last_name}</div>
                      <div>Type: {approvedInquiry?.service_id === 1 ? "Makeup" : approvedInquiry?.service_id === 2 ? "Emcee" : "Nattuvangam"}</div>
                      <div>Message: {approvedInquiry.notes}</div>
                      <div>Requested Date: {approvedInquiry?.date}</div>
                      <div>Requested Location: {approvedInquiry?.location}</div>
                      <div>Contact Email: {approvedInquiry?.user?.email}</div>
                      <div>Contact Phone Number: {approvedInquiry?.user?.phone_number}</div>
                      <div>Contact Address: {approvedInquiry?.user?.address}</div>
                      {/* DISPLAY REMOVE INQUIRY BUTTON HERE */}
                    </div>
                  </div>
                )) : <h2>No Inquiries At This Time</h2>}
            </div>
          </div>
        )}
      </div>
    );
  };


  // *************************************************************************************


  const renderClassRegistrationsTab = () => {
    return (
      <div className="h-full flex items-center justify-center">
        {isLoading ? (
          <div className="text-xl">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">

            {/* Display Pending Dance Class Registrations */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Pending Registrations</h2>
              {classRegistrations?.length > 0 ? classRegistrations
                .filter(registration => !registration?.is_approved)
                .map((pendingRegistration, index) => (
                  <div key={index} className="rounded-xl shadow-lg p-6 mb-6 bg-stone-100 text-black">
                    <div className="text-lg mb-4 font-semibold">Inquiry From: {pendingRegistration.inquiry?.user?.first_name} {pendingRegistration?.user?.last_name}</div>
                    <div className="font-semibold">Level: {pendingRegistration?.dance_class_id === 1 ? "Beginner" : pendingRegistration?.dance_class_id === 2 ? "Intermediate" : "Advanced/Senior"}</div>
                    <div className="font-semibold">Age: {pendingRegistration?.age}</div>
                    <div className="font-semibold">Requested Location: {pendingRegistration?.location}</div>
                    <div className="font-semibold">Message: {pendingRegistration?.notes}</div>
                    <div className="mt-4 font-semibold">Contact Info:</div>
                    <div className="font-semibold">Contact Email: {pendingRegistration?.user?.email}</div>
                    <div className="font-semibold">Contact Phone Number: {pendingRegistration?.user?.phone_number}</div>
                    <div className="font-semibold">Contact Address: {pendingRegistration?.user?.address}</div>
                    {/* INSERT APPROVE/REJECT REGISTRATION BUTTONS HERE */}
                  </div>
                )) : <h2>No Pending Class Registrations</h2>}
            </div>

            {/* Display Approved Dance Class Registrations */}
            <div>
              <h2 className="text-2xl text-black font-bold mb-4">Approved Registrations</h2>
              {classRegistrations?.length > 0 ? classRegistrations
                .filter(registration => registration?.is_approved)
                .map((approvedRegistration, index) => (
                  <div key={index} className="rounded-xl shadow-lg p-6 mb-6 bg-stone-100 text-black">
                    <div className="text-lg mb-4 font-semibold">Inquiry From: {approvedRegistration?.inquiry?.user?.first_name} {approvedRegistration?.user?.last_name}</div>
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
                )) : <h2>No Class Registrations At This Time</h2>}
            </div>
          </div>
        )}
      </div>
    );
  };


  // *************************************************************************************



  const renderTestimonialsTab = () => {
    return (
      <div className="h-full  flex items-center justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">


            {/* Display Pending Testimonials */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Pending Testimonials</h2>
              {testimonials?.length > 0 ? testimonials
                .filter(testimonial => !testimonial?.is_approved)
                .map((pendingTestimonial, index) => (
                  <div key={index} className="rounded-lg shadow-md p-4 mb-4 bg-stone-100">
                    <p className="text-black mb-2 font-semibold">Name: {pendingTestimonial?.first_name} {pendingTestimonial?.last_name}</p>
                    <p className="text-black mb-2 font-semibold">Role: {pendingTestimonial?.role}</p>
                    <p className="text-black font-semibold">Content: {pendingTestimonial?.content}</p>

                    {/* INSERT APPROVE/REJECT TESTIMONIAL BUTTONS HERE and change is_approved*/}


                  </div>
                )) : <h2>No Pending Testimonials</h2>}
            </div>

            {/* Display Approved Testimonials */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Approved Testimonials</h2>
              {testimonials.length > 0 ? testimonials
                .filter(testimonial => testimonial.is_approved)
                .map((approvedTestimonial, index) => (
                  <div key={index} className="rounded-lg shadow-md p-4 mb-4 bg-stone-100">
                    <p className="text-black mb-2 font-semibold">Name: {approvedTestimonial.first_name} {approvedTestimonial.last_name}</p>
                    <p className="text-black mb-2 font-semibold">Role: {approvedTestimonial.role}</p>
                    <p className="text-black font-semibold">Content: {approvedTestimonial.content}</p>

                    {/* INSERT DELETE A TESTIMONIAL BUTTON HERE */}

                  </div>
                )) : <h2>No Approved Testimonials</h2>}
            </div>
          </div>
        )}
      </div>
    );
  };


  // *************************************************************************************

  // const renderStudentsTab = () => {
  //   return (
  //     <div className="h-full  flex items-center justify-center">
  //       {/* ADD CONTENT FOR STUDENTS */}
  //       {users?.length > 0 ? users
  //         .map((user, index) => (
  //           <div key={index} className="rounded-lg shadow-md p-4 mb-4 bg-stone-100">
  //             <p className="text-black mb-2 font-semibold">Name: {user?.first_name} {user?.last_name}</p>
  //             <p className="text-black font-semibold">Level: {user?.level}</p>
  //             <p className="text-black mb-2 font-semibold">Authorization: {user?.authorization}</p>
  //             <p className="text-black font-semibold">Phone Number: {user?.phone_number}</p>
  //             <p className="text-black font-semibold">Email: {user?.email}</p>
  //             <p className="text-black font-semibold">Address: {user?.address}</p>
  //             {/* INSERT form to change a students level and/or authorization */}

  //           </div>
  //         )) : <h2>No Users At This Time</h2>}

  //     </div>
  //   );
  // };






  // *************************************************************************************


  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="font-sans container mx-auto p-4 bg-black bg-opacity-50 text-lightcream rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-sans font-semibold mb-4 py-6 text-center">
          Admin Dashboard
        </h1>

        <Tabs className="font-sans rounded-md bg-stone-200">
          <TabList className="flex justify-evenly border-stone-900 mb-4 gap-4 rounded-b-2xl overflow-hidden">
            <Tab className="p-4 text-lg cursor-pointer bg-stone-900 focus-none outline-none text-lightcream rounded-b-md hover:bg-stone-300 ">Inquiries</Tab>
            <Tab className="p-4 text-lg cursor-pointer bg-stone-900 focus-none outline-none text-lightcream rounded-b-md hover:bg-stone-300">Class Registrations</Tab>
            <Tab className="p-4 text-lg cursor-pointer bg-stone-900 focus-none outline-none text-lightcream rounded-b-md hover:bg-stone-300">Testimonials</Tab>
            <Tab className="p-4 text-lg cursor-pointer bg-stone-900 focus-none outline-none text-lightcream selected-rounded-md rounded-b-md hover:bg-stone-300">Students</Tab>
          </TabList>

          {/* SERVICE ENQUIRIES TAB */}
          <TabPanel className="h-full min-h-screen flex items-center justify-center">
            {renderInquiriesTab()}
          </TabPanel>

          {/* CLASS REGISTRATIONS TAB */}
          <TabPanel className="h-full flex items-center justify-center">
            {renderClassRegistrationsTab()}
          </TabPanel>

          {/* TESTIMONIALS TAB */}
          <TabPanel className="h-full flex items-center justify-center">
            {renderTestimonialsTab()}
          </TabPanel>

          <TabPanel className="h-full flex items-center justify-center">
            {renderStudentsTab()}
          </TabPanel>

        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
