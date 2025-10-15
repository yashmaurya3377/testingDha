import React from 'react';
import CarouselImg from './../components/carousel/Carouselimg';

const About = () => {
  const cardItem = [
    { name: "DHA Rolls - Vegetarian", type: "Rolls", img: "/roll.png", price: "₹70" },
    { name: "Pau Bhaji", type: "Classic Pav Bhaji", img: "/pau.png", price: "₹90" },
    { name: "Punjabi Parathas", type: "Single/Double", img: "/panjabi.png", price: "₹100" },
    { name: "Pau Bhaji", type: "Classic Pav Bhaji", img: "/pau.png", price: "₹90" },
  ];

  return (
    <div className='bg-amber-50 pt-10 sm:px-0 lg:pt-43  '>
      <h1 className='bg-[rgba(255,138,50,0.2)]  rounded-lg text-4xl sm:text-[32px] lg:text-[46px] font-bold text-center mb-8'>
        ABOUT US
      </h1>

      {/* About Text Section */}
      <div className=" mx-10 lg:max-w-1/2 lg:mx-20 text-left lg:text-left mb-12 sm:px-6">
        <h2 className="sm:mx-10 text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] leading-snug md:leading-tight lg:leading-relaxed font-semibold text-gray-900">
          Premium <span className="text-orange-500 font-bold">quality</span><br />
          Food for your <span className="text-orange-500 font-bold">health daily life</span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:px-6">
          At Desi Hotdog, we've reimagined the world’s favorite street food with
          a desi twist that speaks to every Indian heart. Our journey started
          with one simple idea — to blend the bold, spicy, and soulful flavors
          of India with the classic charm of a hotdog. From the first bite to
          the last, every hotdog is a perfect fusion of juicy fillings, fresh
          buns, and authentic Indian seasonings that bring comfort and
          excitement to your taste buds.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center lg:justify-center ">
        <CarouselImg />
      </div>
    </div>
  );
};

export default About;
