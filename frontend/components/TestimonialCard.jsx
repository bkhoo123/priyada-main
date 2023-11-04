// "use client"
// import React from 'react'
// import { motion } from 'framer-motion';

// const TestimonialCard = ({testimony}) => {
//   const user_id = 1
//   return (
//     <div className={`z-5 bg-black bg-opacity-80 text-didactGothic bg-inherit  flex flex-col justify-center items-center gap-2 p-6 mx-auto w-full md:max-w-xl border-stone-300 rounded-md shadow-lg
//      text-m transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
//     `}>
//       <div className="text-lightcream text-center" >"{testimony.content}"</div>
//       <div className="text-center my-10">
//         <div className="text-rose-200 text-xl text-center">{testimony.first_name}</div>
//         <div className="text-rose-200 text-xl text-center">{testimony.last_name}</div>

//         <div className="text-lightcream text-center text-m italic">{testimony.role}</div>

//         {user_id && (
//           <div className="text-red-500 text-center text-m italic">
//             <button className="bg-teal-700 tracking-wider hover:bg-stone-500 text-lightcream rounded-md p-3 transition duration-700"
//                 type="submit">
//               Delete
//             </button>
//           </div>
// )}


//       </div>
//     </div>
//   )
// }

// export default TestimonialCard
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const TestimonialCard = ({ testimony, onTestimonialDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  // const user_id = 1

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      // Make a DELETE request to your backend API to delete the testimonial
      await axios.delete(`http://127.0.0.1:5000/api/testimonials/${testimony.id}`);

      // Call the onTestimonialDelete callback to remove the testimonial from the UI
      onTestimonialDelete(testimony.id);
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={`z-5 bg-black bg-opacity-30 text-didactGothic flex flex-col justify-center items-center gap-2 p-6 mx-auto w-full md:max-w-xl border-stone-300 rounded-md shadow-lg text-m transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
      <div className="text-lightcream text-center">"{testimony.content}"</div>
      <div className="text-center my-10">
        <div className="text-rose-200 text-xl text-center">{testimony.first_name}</div>
        <div className="text-rose-200 text-xl text-center">{testimony.last_name}</div>
        <div className="text-lightcream text-center text-m italic">{testimony.role}</div>

        {/* {user_id && ( */}
          <div className="text-red-500 text-center text-m italic">
            <button
              className="bg-teal-900 border-lightcream font-bold tracking-wider hover:bg-stone-500 text-lightcream rounded-md p-3 m-3 transition duration-700"
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default TestimonialCard;
