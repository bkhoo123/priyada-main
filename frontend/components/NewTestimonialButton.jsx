// Button.js
import React, { useState } from 'react';

function NewTestimonialButton({ onButtonClick }) {

  return (
    <div className="z-10 flex justify-center items-center max-h-72">
      <button onClick={onButtonClick} className="text-lightcream font-bold border-2 border-lightcream hover:bg-lightcream hover:text-black transition delay-200 ease-in  py-2 px-4 rounded-md cursor-pointer max-w-xs text-center sm:text-xl lg:text-2xl">
        Leave Your Testimonial
      </button>
    </div>
  );
}

export default NewTestimonialButton;
