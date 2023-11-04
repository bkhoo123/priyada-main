"use client"

import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'; // Import Axios or another HTTP library

const Testimonial = () => {
  const [testimonies, setTestimonies] = useState([]);

  const handleTestimonialDelete = (deletedTestId) => {
    // Update the testimonies state by filtering out the deleted testimonial
    setTestimonies((prevTestimonies) =>
      prevTestimonies.filter((testimony) => testimony.id !== deletedTestId)
    );
  };

  useEffect(() => {
    // Make an HTTP request to get testimonials from the backend
    axios.get('http://127.0.0.1:5000/api/testimonials/')
      .then((response) => {
        const fetchedTestimonies = response.data.testimonials;
        setTestimonies(fetchedTestimonies);
        console.log('this is fetchedTestimonies',fetchedTestimonies)
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);
 return (
    <div className="bg-black text-lightcream p-4 rounded-lg shadow-md my-4">
      <h2 className="text-3xl text-center mb-4 relative z-10">Testimonials</h2>
      <div className="mx-auto w-full max-w-screen-lg">
        <Carousel
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={100}
          autoPlay={true}
          infiniteLoop={true}
          interval={6000}
          transitionTime={1000}
        >
          {testimonies.map((testimony, index) => (
            <div key={index} className="p-4 z-1">
              <TestimonialCard testimony={testimony} onTestimonialDelete={handleTestimonialDelete} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
