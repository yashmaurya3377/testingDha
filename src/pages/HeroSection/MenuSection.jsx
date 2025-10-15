import { ArrowUpRight, MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
    const images = [
        { src: "/roll.png", alt: "DHA Rolls" },
        { src: "/pau.png", alt: "Pav Bhaji" },
        { src: "/panjabi.png", alt: "Punjabi Paratha" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    const handleMenuButton = () => {
        navigate('/menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWhatsappButton = (message) => {
        const phoneNumber = '919081571840';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex  justify-center  lg:mx-12 ">
            {/* -------------------- LARGE SCREENS -------------------- */}
            <div className="hidden lg:block p-10 lg:m-10 rounded-[40px] flex-col">
                <div className="flex gap-10">

                    <div className="h-[544px] w-[656px] md:w-[600px] lg:w-[550px] rounded-[24px] shadow-lg relative overflow-hidden bg-[url('foodLoverTextBg.png')] bg-cover bg-center">
                        {/* Top Label */}
                        <div className="absolute top-7 left-10">
                            <div className="border border-white rounded-full px-4 py-1 text-sm font-medium tracking-wide text-white">
                                BEST FOOD FOREVER
                            </div>
                        </div>

                        {/* Arrow Icon (Top Right) */}
                        <div onClick={handleMenuButton} className=" absolute top-6 right-6 bg-black rounded-full p-2 cursor-pointer">
                            <ArrowUpRight className="w-[70px] h-[70px] text-white" />
                        </div>

                        {/* Center Text */}
                        <div className="mt-20 ps-12">
                            <h1 className="text-[67px] font-bold leading-tight tracking-wide text-white font-Dongle" style={{ fontFamily: '"Playfair Display", serif' }}>
                                FOOD <br /> LOVER’S <br /> PARADISE
                            </h1>
                            <button onClick={handleMenuButton} className="cursor-pointer bg-black text-white font-medium px-9 py-4 text-2xl rounded-full mt-16 hover:bg-gray-800 transition">
                                View Menu
                            </button>
                        </div>
                    </div>

                    <div
                        className="h-[544px] w-[655px] bg-cover bg-center rounded-3xl flex items-end justify-start ps-10 relative overflow-hidden shadow-xl"
                        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
                    >
                        <h1 className="relative z-10 text-white text-3xl font-bold mb-8 ms-10">
                            Available On
                        </h1>
                        <img
                            src="partner.png"
                            alt=""
                            className="absolute bottom-10 left-10 w-[180px] z-10"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="flex flex-wrap gap-10 mt-10 justify-around">
                    {/* Birthday Card */}
                    <div className="h-[310px] w-[580px] bg-[rgba(197,226,254,1)] rounded-[40px] p-6 flex items-center justify-between shadow-md">
                        <div className="flex flex-col items-center">
                            <div className="bg-amber-400 rounded-full h-[220px] w-[220px] flex items-center justify-center shadow-lg">
                                <img
                                    src="/pau.png"
                                    alt="Birthday Celebration"
                                    className="h-[180px] w-[180px] rounded-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center text-left space-y-4 max-w-[300px]">
                            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                                Celebrate Birthdays &<br /> Kitties With Us
                            </h1>
                            <button
                                onClick={() => handleWhatsappButton(`Hello! I would like to book a birthday/kitties celebration at your venue. Could you please provide me with the available dates, packages, and pricing? Thank you!`)}
                                className="cursor-pointer bg-black text-white font-medium px-6 py-3 rounded-2xl w-fit hover:bg-gray-800 transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Franchise Card */}
                    <div className=" cursor-pointer ps-20 h-[310px] w-[596px] bg-[rgba(188,218,161,1)] rounded-[40px] p-6 flex flex-col justify-center items-start text-left shadow-md">
                        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                            Start Your <br />
                            Franchise Journey <br />
                            Today
                        </h1>
                        <div className="flex items-center gap-3 mt-5">
                            <button
                                onClick={() => handleWhatsappButton(`Hello! I am interested in starting a franchise with your brand. Could you please provide me with more details?`)}
                                className="cursor-pointer bg-black/90 text-white font-medium px-5 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300"
                            >
                                Contact Us
                            </button>
                            <button
                                className="cursor-pointer bg-black rounded-full text-white p-3"
                                onClick={() => handleWhatsappButton(`Hello! I am interested in starting a franchise with your brand. Could you please provide me with more details?`)}
                            >
                                <MoveUpRight className="w-[30px] h-[30px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------- MOBILE + TABLET SCREENS -------------------- */}
            <div className="block lg:hidden">
                {/* Top Image */}
                <div className="flex justify-center">
                    <div className="h-[300px] sm:h-[380px] md:h-[544px] w-[300px] sm:w-[450px] md:w-[656px] rounded-[24px] shadow-lg relative overflow-hidden bg-[url('foodLoverTextBg.png')] bg-cover bg-center">
                        {/* Top Label */}
                        <div className="absolute top-4 sm:top-5 md:top-7 left-4 sm:left-6 md:left-10">
                            <div className="border border-white rounded-full px-3 sm:px-4 py-1 text-sm font-medium tracking-wide text-white">
                                BEST FOOD FOREVER
                            </div>
                        </div>

                        {/* Arrow Icon (Top Right) */}
                        <div onClick={handleMenuButton} className=" cursor-pointer absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 bg-black rounded-full p-1.5 sm:p-2 md:p-2">
                            <ArrowUpRight className="w-10 sm:w-14 md:w-[70px] h-10 sm:h-14 md:h-[70px] text-white" />
                        </div>

                        {/* Center Text */}
                        <div className="mt-12 sm:mt-16 md:mt-20 ps-4 sm:ps-8 md:ps-12">
                            <h1 className="text-[30px] sm:text-[45px] md:text-[67px] font-bold leading-snug sm:leading-tight md:leading-tight tracking-wide text-white font-Dongle">
                                FOOD <br /> LOVER’S <br /> PARADISE
                            </h1>
                            <button onClick={handleMenuButton} className="cursor-pointer bg-black text-white font-medium px-4 sm:px-5 md:px-6 py-2 rounded-full mt-8 sm:mt-12 md:mt-16 hover:bg-gray-800 transition">
                                View Menu
                            </button>
                        </div>
                    </div>

                </div>

                {/* Available On + Franchise */}
                <div className="flex justify-center gap-2 my-4 flex-wrap">
                    {/* Available On card */}
                    <div
                        className="h-[260px] w-[203px] bg-cover bg-center rounded-3xl flex flex-col justify-end relative overflow-hidden shadow-xl p-2"
                        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
                    >
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-30 text-white top-5 left-2">
                            <h1 className="text-2xl font-bold">Available On</h1>
                            <img src="partner.png" alt="Partner logos" className="w-28" />
                        </div>
                    </div>

                    {/* Franchise Card */}
                    <div className="w-[160px] h-[260px] bg-[rgba(188,218,161,1)] rounded-4xl px-6 py-8 flex">
                        <div className="flex flex-col justify-between">
                            <h1 className="text-[20px] font-bold text-gray-800 text-start">
                                Start Your <br />
                                Franchise Journey <br />
                                Today
                            </h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleWhatsappButton(`Hello! I am interested in starting a franchise with your brand. Could you please provide me with more details?`)}
                                    className="cursor-pointer bg-black/90 text-white font-medium text-[10px] py-[5px] px-[10px] rounded-2xl hover:bg-gray-800 transition-all duration-300"
                                >
                                    Contact Us
                                </button>
                                <button
                                    className="cursor-pointer bg-black rounded-full text-white text-center p-1"
                                    onClick={() => handleWhatsappButton(`Hello! I am interested in starting a franchise with your brand. Could you please provide me with more details?`)}
                                >
                                    <MoveUpRight className="w-[25px] h-[25px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Birthday Card */}
                <div className="h-[191px] w-[396px] bg-[rgba(197,226,254,1)] rounded-4xl p-6 flex items-center justify-between shadow-md mx-auto my-4">
                    <div className="flex flex-col items-center">
                        <div className="bg-amber-400 rounded-full h-[120px] w-[120px] flex items-center ps-1 shadow-lg">
                            <img
                                src="/pau.png"
                                alt="Birthday Celebration"
                                className="h-[106px] w-[106px] rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-left space-y-4 w-[180px]">
                        <h1 className="text-[19px] font-bold text-gray-800 leading-5">
                            Celebrate <br />
                            Birthdays & <br />
                            Kitties With Us
                        </h1>
                        <button
                            onClick={() => handleWhatsappButton(`Hello! I would like to book a birthday/kitties celebration at your venue. Could you please provide me with the available dates, packages, and pricing? Thank you!`)}
                            className="cursor-pointer bg-black text-white font-medium px-4 py-2 rounded-2xl w-fit hover:bg-gray-800 transition-all duration-300"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSection;
