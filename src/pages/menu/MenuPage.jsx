import React from 'react'
import { motion } from 'framer-motion';
import MenuList from './MenuList';

const MenuPage = () => {
    return (
        <div className='bg-amber-50 lg:pt-15  '>
            {/* Heading */}
            <h1 className='text-black bg-orange-400/20 lg:text-black text-center lg:text-[50px] sm:text-[32px] text-[28px] lg:mt-30  mt- font-bold'>
                MENU
            </h1>

            {/* Header Image */}
            <motion.img
                src="/food-header.png"
                alt="food header"
                className="block mx-auto w-full max-w-[1200px] 
               h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] 
               object-cover rounded-2xl px-4 sm:px-0 lg:px-10 my-4"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.06 }}
            />

            {/* Menu List */}
            <div>
                <MenuList />
            </div>
        </div>
    )
}

export default MenuPage;
