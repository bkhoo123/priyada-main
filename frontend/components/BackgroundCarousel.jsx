"use client"
import React, { useEffect } from 'react';
import Slider from "react-slick";

const BackgroundCarousel = ({images}) => {



  useEffect(() => {
    const slickScript = document.createElement('script');
    slickScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    document.body.appendChild(slickScript);
    return () => {
      document.body.removeChild(slickScript);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Change this value for the duration of image transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Change this value for the duration between transitions
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Background Image ${index + 1}`} objectFit="cover" height={1000}
            width={600} />
        </div>
      ))}
    </Slider>
  );
};

export default BackgroundCarousel;
