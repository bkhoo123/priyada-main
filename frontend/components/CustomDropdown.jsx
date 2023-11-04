"use client"
import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-950 p-4 border-2 rounded-md shadow-2xl bg-inherit">
        {selected}
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 border rounded-md shadow-2xl bg-inherit">
          {options.map((option, index) => (
            <div key={index} className="p-4 hover:bg-teal-700 cursor-pointer" onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
