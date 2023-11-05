"use client"
import React from 'react';

const ServiceCard = () => {
  return (
    <div className="container font-sans gap-20 text-cream mx-auto p-6 flex justify-end items-center h-full bg-cover bg-center" style={{ backgroundImage: 'url("/splash_page/Splash page.jpg")' }}>
      <div className="flex flex-col font-sans items-start">
        <h1 className="text-4xl font-extrabold font-sans text-cream my-8">Artistic Beyond Dance</h1>

        <div className="flex font-sans flex-col gap-8">
          <div className="flex font-sans items-center ">
            <div className="rounded-full overflow-hidden  w-40 h-40 flex-shrink-0 mr-4">
              <img src="/Services/Makeup/Makeup-Main.jpg" alt="Makeup" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-cream bg-black bg-opacity-25 p-3">
              <h2 className="sm:text-lg lg:text-xl font-sans font-semibold mb-2">Makeup</h2>
              <p className="sm:text-sm lg:text-lg">Indulge in the art of makeup!</p>
            <p className="sm:text-sm lg:text-lg">From Arangetrams to workshops and photoshoots, Priyanka specializes in dance & theatre makeup.</p>

            </div>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full overflow-hidden bg-gray-200 w-40 h-40 flex-shrink-0 mr-4">
              <img src="/dance_school/ABOUT US MAIN TEACHER PIC.jpg" alt="Nattuvangam" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-cream bg-black bg-opacity-25 p-3">
              <h2 className="sm:text-lg lg:text-xl font-semibold mb-2">Nattuvangam</h2>
              <p className="sm:text-sm lg:text-lg">Experience the rhythmic magic!</p>
                       <p className="sm:text-sm lg:text-lg">Priyanka offers Nattuvangam services for live performances and audio recordings.</p>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full overflow-hidden bg-gray-200 w-40 h-40 flex-shrink-0 mr-4">
              <img src="/Services/Hosting/Hosting.jpg" alt="Emcee/Hosting" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-cream bg-black bg-opacity-25 p-3">
              <h2 className="sm:text-lg lg:text-xl font-semibold mb-2">Emcee/Hosting</h2>
              <p className="sm:text-sm lg:text-lg">Priyanka engages and captivates!</p>
            <p className="sm:text-sm lg:text-lg">She provides hosting and emceeing for various shows and events.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
