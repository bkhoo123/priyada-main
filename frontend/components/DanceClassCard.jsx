import React from 'react';

const DanceClassCard = ({ level, classOne, classTwo, description, imageUrl }) => {
  const renderLevel = (level) => {
    if (level === 'Beginner' || level === 'Intermediate' || level === 'Advanced') {
      return <h2 className="sm:text-xl lg:text-2xl font-semibold text-cream">{level}</h2>;
    } else {
      return <h2 className="sm:text-xl lg:text-2xl font-semibold text-cream">Senior</h2>;
    }
  };


  console.log("LEVEL FOR CLASS", renderLevel(level))

  return (
  <div className="text-cream flex flex-row flex-wrap w-25% hover:scale-110 transition delay-100 ease-in">
    <div className="bg-black rounded-lg p-4 my-4 shadow-xl text-cream w-80 h-auto mr-5 ml-5">
      {imageUrl && <img src={imageUrl} alt={`Image for ${level}`} className="rounded-md mb-2 w-full h-32 object-cover" />}
      <div className="mb-3 sm:text-md lg:text-lg text-cream">
        {renderLevel(level)}
        <p className=" mt-1"><strong>Class 1:</strong> {classOne}</p>
        <p className=""><strong>Class 2:</strong> {classTwo}</p>
      </div>
      <p className="sm:text-md lg:text-lg text-cream">{description}</p>
    </div>
  </div>
);


};

export default DanceClassCard;
