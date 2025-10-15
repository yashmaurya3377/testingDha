import React, { useEffect, useState } from 'react'
import { MoveUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';0
import GalleryCarousel from '../../components/carousel/GalleryCarousel';
import CarouselCard from './../../components/carousel/CarouselCard';
import MenuSection from './MenuSection';

const Service = () => {

    const images = [
        { src: "/roll.png", alt: "DHA Rolls" },
        { src: "/pau.png", alt: "Pav Bhaji" },
        { src: "/panjabi.png", alt: "Punjabi Paratha" },
    ];


    return (
        <div className='lg:mt-20 mt-5 '>
            <div className="relative w-full flex justify-center items-center h-[506px] md:h-[400px] sm:h-[300px] max-sm:h-[250px] overflow-hidden">
                {/* Background Image */}
                <motion.img
                    src="/food-header.png"
                    alt="food header"
                    className="w-[95%] md:w-[90%] lg:w-full h-full object-center rounded-2xl px-3 md:px-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 360 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Centered Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 ">
                    <h1 className="text-4xl lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-[22px] font-extrabold mb-2 leading-tight drop-shadow-lg my-29">
                        Our Service
                    </h1>
                    <p className="lg:text-lg md:text-base sm:text-sm max-sm:text-[10px] font-normal max-w-[600px] leading-snug">
                        Within a few clicks, find meals that are accessible near you
                    </p>
                </div>
            </div>


            <MenuSection />
            <div className="lg:absolute lg:mb-1 lg:mx-5 w-full ">
                <CarouselCard />
            </div>

            {/* Background section */}
            <div className='bg-[url("/DHAPopularBg.png")] bg-cover bg-no-repeat lg:h-[1420px] w-[100%] lg:pt-80 lg:mt-90 mt-20 flex justify-center '>
                <GalleryCarousel />
            </div>
        </div>
    )
}

export default Service
