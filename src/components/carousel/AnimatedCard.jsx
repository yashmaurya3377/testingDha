import React, { useState, useEffect } from "react";

const AnimatedCard = () => {
    const images = [
        { src: "/roll.png", alt: "DHA Rolls" },
        { src: "/pau.png", alt: "Pav Bhaji" },
        { src: "/panjabi.png", alt: "Punjabi Paratha" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 500);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center items-center p-6 ">
            {/* Card Container */}
            <div className='relative bg-[url("/pau.png")] bg-cover bg-center h-[544px] w-[655px] rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-end items-center'>

                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                {/* Title */}
                <h1 className="relative z-10 text-white text-4xl font-bold mb-6 drop-shadow-lg">
                    Available On
                </h1>

                {/* Rotating Image */}
                <div className="relative z-10 w-[300px] h-[300px] flex justify-center items-center">
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-contain transition-all duration-300 ease-in-out scale-100 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default AnimatedCard;
