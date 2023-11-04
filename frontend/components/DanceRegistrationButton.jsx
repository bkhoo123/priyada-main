// DanceRegistrationButton.jsx
import React, { useState } from 'react';
import Link from 'next/link';

function DanceRegistrationButton({ onButtonClick }) {

    return (
        <div className='flex justify-center items-center max-h-72'>
        <button onClick={onButtonClick} className='text-lightcream font-bold border-2 border-lightcream hover:bg-lightcream hover:text-black transition delay-200 ease-in  py-2 px-4 rounded-md cursor-pointer max-w-xs text-center sm:text-xl lg:text-2xl'>
            <Link href="/registration">Register for a Class</Link>
        </button>
        </div>
    );
}

export default DanceRegistrationButton;
