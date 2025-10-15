import React from "react";
import { motion } from "framer-motion";

const menuData = [
    {
        category: "ROLLS",
        items: [
            { name: "Aloo Tikki Roll", normalprice: 79 },
            { name: "Veg Roll", normalprice: 79 },
            { name: "Paneer Tikka Roll", normalprice: 109 },
            { name: "Paneer Bhurji Roll", normalprice: 109 },
            { name: "Chicken Roll Regular", normalprice: 109 },
        ],
    },
    {
        category: "THALI",
        items: [
            { name: "Aloo Thali", normalprice: 89 },
            { name: "Paneer Thali", normalprice: 139 },
            { name: "Shahi Paneer Thali", normalprice: 159 },
            { name: "Kadhai Paneer Thali", normalprice: 159 },
            { name: "Chole Bhature Thali", normalprice: 99 },
        ],
    },
    {
        category: "SNACK ITEMS",
        items: [
            { name: "Samosa", normalprice: 15, cheezyprice: 102 },
            { name: "Vada Pav", normalprice: 30, cheezyprice: 102 },
            { name: "Kachori", normalprice: 20, cheezyprice: 102 },
        ],
    },
    {
        category: "COLD COFFEE",
        items: [
            { name: "Classic Cold Coffee", normalprice: 89 },
            { name: "Chocolate Cold Coffee", normalprice: 99 },
        ],
    },
    {
        category: "SHAKES",
        items: [
            { name: "Strawberry Shake", normalprice: 109 },
            { name: "Vanilla Shake", normalprice: 99 },
            { name: "Chocolate Shake", normalprice: 119 },
        ],
    },
    {
        category: "BEVERAGES",
        items: [
            { name: "Water Bottle", normalprice: 20 },
            { name: "Coke", normalprice: 40 },
        ],
    },
];

const MenuList = () => {
    return (
        <div className="min-h-screen">
            {/* <div className="max-w-screen px-20 mx-auto space-y-16">
                {menuData.map((section, index) => (
                    <div >
                        <div className="flex justify-center mb-8">
                            <div className="relative w-fit px-10 py-3 rounded-md overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/TextBg.png')] bg-cover bg-center "></div>
                                <h2 className="relative text-3xl font-bold text-white ">
                                    {section.category}
                                </h2>
                            </div>
                        </div>

                        <ul className=" rounded-xl overflow-hidden">
                            {section.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex justify-between items-center px-6 py-4"
                                >
                                    <span className="text-lg font-medium text-white" >{item.name}</span>

                                    <div className="flex gap-6">

                                        <span className="text-lg font-semibold text-white">
                                            ₹{item.normalprice}
                                        </span>
                                        {item.cheezyprice && (
                                            <span className="text-lg font-semibold text-white">
                                                ₹{item.cheezyprice}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div> */}
            {/* Mobile Section */}
            <div className="block lg:hidden bg-[linear-gradient(180deg,rgba(255,208,109,1)_0%,rgba(255,184,74,1)_100%)]">
                <img
                    src="/mobileMenuList.png"
                    alt="Mobile Menu"
                    className="w-full h-auto py-5 px-4"
                />
            </div>

            {/* Desktop Section */}
            <div className="hidden lg:block bg-[linear-gradient(180deg,rgba(221,66,66,1)_0%,rgba(119,35,35,1)_100%)] pt-10">
                <img
                    src="/menuList.png"
                    alt="Desktop Menu"
                    className="w-full h-auto py-5 px-4"
                />
            </div>
        </div>
    );
};

export default MenuList;
