"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import ChatBot from '@/components/ChatBot'
import CreateTestimonial from '@/components/CreateTestimonial'
import NewTestimonialButton from '@/components/NewTestimonialButton'
import AboutArtist from '@/components/AboutArtist'
import AboutStudio from '@/components/AboutStudio'
import './homepage.css'
import CreateSpecialityEnquiry from '@/components/ServiceEnquiryForm'
import { UserGlobalState } from '@/context/UserContext'
import SplashPagePicture from '@/components/SplashPagePicture'
import BackgroundCarousel from '@/components/BackgroundCarousel'

import axios from "axios"
import DanceRegistrationButton from '@/components/DanceRegistrationButton'


export default function Home() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sessionUser, setSessionUser, authenticated, setAuthenticated} = UserGlobalState()
  const [isLoading, setIsLoading] = useState(true);  // Add a loading state

   const images = [ "/splash_pic.JPG","/splash_page/Splash page.jpg", "/artist_pictures/Artist_Picture (39).jpg", "/splash_page/Splash page.jpg", "/splash_page/Splash Page(3).jpg"];


  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    if (user) {
      setSessionUser(user);
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      setSessionUser(null);
    }

    setIsLoading(false);  // Set loading to false after checking user
  }, [setSessionUser, setAuthenticated]);

  if (isLoading) {
    // Render a loading indicator or return null to render nothing
    return <div>Loading...</div>; // Or a custom loader/spinner
  }




  return (
    <main className="bg-black flex w-full h-full relative min-h-screen flex-col justify-between">
      <NavBar />

      <SplashPagePicture />
      <AboutArtist/>
      <AboutStudio/>
      <Testimonial />
      <NewTestimonialButton onButtonClick={openModal} />
      <CreateTestimonial isOpen={isModalOpen} onRequestClose={closeModal} />
      <Footer />
      <ChatBot />
    </main>
  )
}
