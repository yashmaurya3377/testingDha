import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/roll.png", alt: "DHA Rolls" },
  { src: "/pau.png", alt: "Pav Bhaji" },
  { src: "/panjabi.png", alt: "Punjabi Paratha" },
  { src: "/roll.png", alt: "DHA Rolls" },
  { src: "/pau.png", alt: "Pav Bhaji" },
  { src: "/panjabi.png", alt: "Punjabi Paratha" },
];

const CarouselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden py-10">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 z-20 p-2 rounded-full bg-white/70 hover:bg-white shadow-md transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>

      {/* Carousel Images */}
      <div className="flex items-center justify-center relative gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {images.map((img, idx) => {
          const diff = idx - currentIndex;

          let scale = 0.8;
          let zIndex = 10;
          let xOffset = diff * 80;

          if (diff === 0) {
            scale = 1.2;
            zIndex = 20;
            xOffset = 0;
          } else if (diff === 1 || diff === -1) {
            scale = 0.9;
            zIndex = 15;
          }

          return (
            <motion.img
              key={idx}
              src={img.src}
              alt={img.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale, x: xOffset, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-2xl shadow-lg object-cover 
              sm:w-[270px] sm:h-[405px]
              md:w-[270px] md:h-[405px]
              lg:w-72 lg:h-80
              xl:w-80 xl:h-96
              transition-all duration-300 hover:scale-105"
            />
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 z-20 p-2 rounded-full bg-white/70 hover:bg-white shadow-md transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default CarouselImg;
