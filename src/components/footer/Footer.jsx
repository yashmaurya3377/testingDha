import React, { useState } from "react";
import { Star, BadgePercent, Instagram, Youtube, Facebook } from "lucide-react";
import DHAlogo from "../../assets/Chef.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const [email, setEmail] = useState("");

    const handleWhatsappButton = () => {
        if (!email) {
            alert("Please enter an email address");
            return;
        }

        const phoneNumber = "919081571840";
        const message = `Hello! My email is: ${email}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-white w-full overflow-hidden">
            <div className="bg-black  text-white lg:py-7 lg:px-12 px-3 py-5 flex flex-col lg:flex-row items-center justify-between gap-6 ">
                {/* Left - Image */}
                <div className="flex-shrink-0">
                    <img
                        src="shop.png"
                        alt="Shop"
                        className="w-[260px] sm:w-[300px] md:w-[320px] h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
                    />
                </div>

                {/* Middle - Info */}
                <div className="flex flex-col flex-1 justify-center lg:ml-8 text-center lg:text-left">
                    <h1 className="text-xl sm:text-2xl font-bold mb-1">
                        DHA Special HotDog
                    </h1>
                    <p className="text-gray-400 text-sm mb-3">12 varieties</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        {/* Ratings */}
                        <div>
                            <div className="flex items-center justify-center lg:justify-start gap-1">
                                <Star className="text-green-500 fill-green-500 w-4 h-4" />
                                <span className="font-semibold text-sm">4.0</span>
                            </div>
                            <p className="text-gray-400 text-sm text-center lg:text-left">
                                100+ ratings
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-[1px] h-10 bg-gray-600"></div>

                        {/* Price Info */}
                        <div className="text-center lg:text-left">
                            <p className="text-sm text-gray-300">
                                Starting at{" "}
                                <span className="font-semibold text-white">₹30</span> — up to{" "}
                                <span className="font-semibold text-white">₹120</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Try our mouth-watering dishes today
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right - Offers */}
                <div className="border-2 border-dashed border-orange-500 rounded-xl p-4 w-full sm:w-[300px] text-center lg:text-left">
                    <h2 className="text-orange-500 font-semibold mb-2">Offers</h2>
                    <div className="flex items-start justify-center lg:justify-start gap-2">
                        <BadgePercent className="text-orange-500 w-5 h-5 mt-0.5" />
                        <p className="text-sm text-gray-300 leading-snug">
                            Free Home Delivery on Bills Above ₹200
                            <br />
                            <span className="text-gray-400">[within 1km]</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔸 Location Section */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 text-center py-5">
                {/* Location 1 */}
                <div className="flex flex-col items-center pt-3">
                    <img
                        src="/pinicon.png"
                        alt="Pin Icon"
                        className="h-[70px] w-[50px] sm:h-[90px] sm:w-[65px] mb-2"
                    />
                    <h1 className="font-extrabold text-gray-700 text-lg">
                        Husariya Chauraha
                    </h1>
                </div>

                {/* Location 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src="/pinicon.png"
                        alt="Pin Icon"
                        className="h-[70px] w-[50px] sm:h-[96px] sm:w-[65px] my-2"
                    />
                    <h1 className="font-extrabold text-gray-700 text-lg">
                        Husariya Chauraha
                    </h1>
                    <p className="text-gray-500 text-sm mt-1 leading-tight">
                        3/320, Viram Khand, Near Ram Bhawan,
                        <br />
                        Gomti Nagar, Lucknow
                    </p>
                </div>

                {/* Location 3 */}
                <div className="flex flex-col items-center pt-3">
                    <img
                        src="/pinicon.png"
                        alt="Pin Icon"
                        className="h-[70px] w-[50px] sm:h-[90px] sm:w-[65px] mb-2"
                    />
                    <h1 className="font-extrabold text-gray-700 text-lg">Ptrakar Puram</h1>
                    <p className="text-gray-500 text-sm mt-1 leading-tight">
                        Ptrakar Puram, Opposite Subway
                    </p>
                </div>
            </div>

            <div className="h-[100px] sm:h-[130px] lg:h-[154px] w-full bg-[linear-gradient(90deg,rgba(255,153,0,1)_0%,rgba(255,115,0,1)_100%)]"></div>

            {/* 🔸 Main Footer */}
            <footer className="bg-white text-center lg:text-left w-full">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-10 border-b border-gray-200 gap-8">
                    {/* Left */}
                    <div className="flex flex-col items-center text-center lg:w-1/3 border-gray-200 lg:border-r pb-6 lg:pb-0">
                        <img
                            src={DHAlogo}
                            alt="DHA Logo"
                            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mb-3"
                        />
                        <h2 className="text-gray-700 font-medium text-sm sm:text-base">
                            Desi Bhi Tasty Bhi
                        </h2>
                        <p className="text-gray-500 text-sm">
                            3/320 Viram Khand, Gomti Nagar, Lucknow
                        </p>
                    </div>

                    {/* Center */}
                    <div className="flex flex-col items-center lg:w-1/3 text-center border-gray-200 lg:border-r py-6 lg:py-0 px-2">
                        <h1 className="text-lg sm:text-2xl font-bold text-[#532B00] mb-1">
                            Join us or celebrate with us
                        </h1>
                        <p className="text-gray-500 text-sm mb-4">
                            Franchise growth & joyful bookings await.
                        </p>
                        <h3 className="text-[#532B00] font-semibold mb-1 text-sm sm:text-base">
                            CONTACT US
                        </h3>
                        <p className="text-gray-700 font-medium mb-4 text-sm sm:text-base">
                            9081571840
                        </p>

                        <div className="flex border border-gray-900 rounded-md overflow-hidden w-[220px] sm:w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="flex-grow lg:px-3 py-2 text-sm text-gray-700 focus:outline-none"
                            />
                            <button onClick={handleWhatsappButton} className="cursor-pointer bg-orange-500 text-white lg:px-3  lg:text-sm text-[10px] font-semibold hover:bg-orange-600">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-center   lg:w-1/3">
                        <h3 className="text-[#532B00] font-semibold mb-3 text-sm sm:text-base">
                            SOCIAL NETWORKS
                        </h3>
                        <div className="flex gap-4 text-[#532B00]">
                            <button>
                                <img
                                    src="ri_whatsapp-fill.png"
                                    className="h-[22px] w-[22px] sm:h-[24px] sm:w-[24px] hover:cursor-pointer"
                                    alt="WhatsApp"
                                />
                            </button>
                            <Instagram className="w-5 h-5 cursor-pointer" />
                            <Youtube className="w-5 h-5 cursor-pointer" />
                            <Facebook className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="text-[rgba(98,29,0,1)] flex flex-wrap justify-center sm:justify-start ps-6 gap-6 sm:gap-10 py-4 text-sm font-medium">
                    <button className="hover:cursor-pointer hover:bg-orange-400/50 rounded-2xl px-1" onClick={() => handleNavigation("/")}>Home</button>
                    <button className="hover:cursor-pointer hover:bg-orange-400/50 rounded-2xl px-1" onClick={() => handleNavigation("/menu")}>Menu</button>
                    <button className="hover:cursor-pointer hover:bg-orange-400/50 rounded-2xl px-1" onClick={() => handleNavigation("/gallery")}>Gallery</button>
                    <button className="hover:cursor-pointer hover:bg-orange-400/50 rounded-2xl px-1" onClick={() => handleNavigation("/about")}>About Us</button>
                </div>

                {/* Bottom Bar */}
                <div className="bg-orange-500 text-center py-3 text-sm text-white font-medium">
                    © 2025 <span className="font-semibold">VirtuGrow Digital </span> — All
                    Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
