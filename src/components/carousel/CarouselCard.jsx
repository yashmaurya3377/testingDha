import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";

const CarouselCard = () => {
    const carouselRef = useRef(null);
    const FOOD = [
        { src: "/roll.png", title: "DHA Rolls - Vegetarian", desc: "Rolls", price: "₹70" },
        { src: "/panjabi.png", title: "Punjabi Parathas", desc: "Single/Double", price: "₹100" },
        { src: "/roll.png", title: "DHA Rolls - Vegetarian", desc: "Rolls", price: "₹70" },
        { src: "/pau.png", title: "Pau Bhaji", desc: "Classic Pav Bhaji", price: "₹90" },
    ]
    return (
        <div className="lg:my-10 max-w-full sm:justify-center flex flex-col ">
            {/* Heading */}
            <div className="mb-6 lg:ms-10 flex flex-col justify-center items-center lg:items-start lg:text-left text-center p-4">
                <h1 className="text-white font-sans font-bold lg:text-[42px] text-[28px]">
                    DHA Popular
                </h1>
                <p className="text-white text-sm sm:text-base">
                    Taste that everyone loves
                </p>
            </div>

            {/* ---------- Large Screen ---------- */}
            <div className="px-8 hidden lg:flex justify-center">
                <div
                    ref={carouselRef}
                    className="flex flex-wrap gap-4 justify-center  scroll-smooth py-4 px-2"
                >
                    {FOOD.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[10px] p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center w-[280px]"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="rounded-[10px] object-cover w-[250px] h-[200px]"
                            />
                            <h3 className="text-lg font-semibold my-2 text-center">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 text-center">{item.desc}</p>
                            <p className="text-lg font-bold mt-2 text-center">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------- Small / Medium Screens ---------- */}
            <div className="block lg:hidden px-4">
                <div className="flex flex-wrap justify-center gap-4 ">
                    {FOOD.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[10px] p-3 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center w-[45%] max-[400px]:w-[80%]"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="rounded-[10px] object-cover w-full h-[120px] sm:h-[160px]"
                            />
                            <div>

                                <h3 className="text-sm sm:text-base font-semibold my-2 ">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-900 ">
                                    {item.desc}
                                </p>
                                <p className="text-sm sm:text-lg font-bold mt-1 text-center flex">
                                    <Tag size={15} className="text-yellow-400 text-bold" /> {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
