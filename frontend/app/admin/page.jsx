"use client"
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserGlobalState } from '@/context/UserContext';

const AdminDashboard = () => {
  const { sessionUser } = UserGlobalState();

  const [inquiries, setInquiries] = useState([]);
  const [classRegistrations, setClassRegistrations] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  // FOR SERVICE ENQUIRIES
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const inquiriesResponse = await axios.get('http://127.0.0.1:5000/api/serviceappointments/');
        setInquiries(inquiriesResponse.data);
        setIsLoading(false)
        console.log("THIS IS INQUIRIES", inquiries)
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);




// FOR DANCE CLASS REGISTRATIONS
  useEffect(() => {
    const fetchClassRegistrations = async () => {
      try {
        const registrationsResponse = await axios.get('http://127.0.0.1:5000/api/danceclassregistrations/');
        setClassRegistrations(registrationsResponse.data);
          setIsLoading(false)
      } catch (error) {
        console.error('Error fetching class registrations:', error);
      }
    };

    fetchClassRegistrations();
  }, []);




// FOR TESTIMONIALS
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialsResponse = await axios.get('http://127.0.0.1:5000/api/testimonials/');
        const fetchedTestimonials = testimonialsResponse.data.testimonials;
        setTestimonials(fetchedTestimonials);
          setIsLoading(false)
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);


  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="container mx-auto p-4 bg-stone-500 text-lightcream rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-semibold mb-4 py-6 text-center">
          Admin Dashboard
        </h1>

        <Tabs className="rounded-md bg-stone-200">
          <TabList className="flex justify-evenly border-stone-900 mb-4 gap-4 rounded-b-2xl overflow-hidden">
            <Tab className="p-4 text-lg cursor-pointer bg-stone-500 text-lightcream rounded-b-md hover:bg-stone-700">Inquiries</Tab>
            <Tab className="p-4 text-lg cursor-pointer bg-stone-500 text-lightcream rounded-b-md hover:bg-stone-700">Class Registrations</Tab>
            <Tab className="p-4 text-lg cursor-pointer bg-stone-500 text-lightcream rounded-b-md hover:bg-stone-700">Testimonials</Tab>
          </TabList>



          {/* SERVICE ENQUIRIES TAB */}

          <TabPanel className="h-full min-h-screen flex items-center justify-center">
            <div className="h-fullflex items-center justify-center text-black ">
              {isLoading ? (
                <p>Loading...</p>
              ) : inquiries.length > 0 ? (
                inquiries.map((inquiry, index) => (
                  <div key={index} className=" text-black bg-stone-50 rounded-lg shadow p-4 mb-4">
                    <p><strong>Inquiry From:</strong> {inquiry?.user?.first_name} {inquiry?.user?.last_name}</p>
                    <p><strong>Type:</strong> {inquiry.service_id === 1 ? "Makeup" : inquiry.service_id === 2 ? "Emcee" : "Nattuvangam"}</p>
                    <p><strong>Message:</strong> {inquiry.notes}</p>
                    <p><strong>Requested Date:</strong> {inquiry.date}</p>
                    <p><strong>Requested Location:</strong> {inquiry.location}</p>
                    <p><strong>Contact Email:</strong> {inquiry?.user?.email}</p>
                    <p><strong>Contact Phone Number:</strong> {inquiry?.user?.phone_number}</p>
                    <p><strong>Contact Address:</strong> {inquiry?.user?.address}</p>

                    {/* INSERT APPROVE/REJECT SERVICE ENQUIRY BUTTONS HERE--- "UPDATE IS_APPROVED" */}

                  </div>
                ))
              ) : <div>No Inquiries</div>}
            </div>
          </TabPanel>




          {/* CLASS REGISTRATIONS TAB */}


          <TabPanel className="h-full flex items-center justify-center">
            <div className="h-full  flex items-center justify-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : classRegistrations.length > 0 ? (
                classRegistrations.map((registration, index) => (
                  <div key={index} className="rounded-lg shadow p-4 mb-4 bg-white">
                    <p><strong>Inquiry From:</strong> {registration.inquiry?.user?.first_name} {registration?.user?.last_name}</p>
                    <p><strong>Level:</strong> {registration.dance_class_id === 1 ? "Beginner" : registration.dance_class_id === 2 ? "Intermediate" : "Advanced/Senior"}</p>
                    <p><strong>Message:</strong> {registration.notes}</p>
                    <p><strong>Age:</strong> {registration.age}</p>
                    <p><strong>Requested Location:</strong> {registration.location}</p>
                    <p><strong>Contact Email:</strong> {registration?.user?.email}</p>
                    <p><strong>Contact Phone Number:</strong> {registration?.user?.phone_number}</p>
                    <p><strong>Contact Address:</strong> {registration?.user?.address}</p>

                    {/* INSERT APPROVE/REJECT DANCE CLASS REGISTRATIONS BUTTONS HERE--- UPDATE "IS_APPROVED"  */}

                  </div>
                ))
              ) : <div className='text-black'>No Registrations at this time</div>}
            </div>
          </TabPanel>



                  {/* TESTIMONIALS TAB */}


          <TabPanel className="h-full flex items-center justify-center">
            <div className="h-full  flex items-center justify-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (

                  <div className="rounded-lg shadow p-4 mb-4 bg-lightcream">
                    <p className="text-stone-700 mb-2"><strong>Name:</strong> {testimonial.first_name} {testimonial.last_name}</p>
                    <p className="text-stone-700 mb-2"><strong>Role:</strong> {testimonial.role}</p>
                    <p className="text-stone-700"><strong>Content:</strong> {testimonial.content}</p>
                    {/* INSERT DELETE A TESTIMONIAL BUTTON HERE */}
                  </div>

                ))
              ) : <div>No Testimonials at this time</div>}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
