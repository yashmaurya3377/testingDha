import React from 'react'
import textimg from '../../assets/text-img.jpeg'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Star } from 'lucide-react';


const Section1 = () => {
  const footerimg = [
    "/Frame (1).png",
    "/Frame (2).png",
    "/Frame (3).png",
    "/Frame (4).png",
    "/Frame (5).png",
  ];
  return (
    <div className='bg-white lg:py-20 lg:w-[97vw] lg:pt-35 px-10  lg:ms-3 rounded-[50px]'>
      <div className="mt-5 mx-2.5 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 m-5 rounded-2xl flex items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-[325px] lg:max-w-md h-auto pt-10 lg:px-0 mx-auto">
            {/* Gradient Text */}
            <span
              className="bg-clip-text text-transparent text-[33px] lg:text-6xl font-extrabold"
              style={{
                backgroundImage: `url(${textimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'inline-block',
              }}
            >
              Fresh Food
            </span>

            {/* "WITH" Text */}
            <span className="text-[20px] lg:text-xl font-bold text-green-700 italic" style={{ fontFamily: '"Playfair Display", serif' }}>
              WITH
            </span>


            {/* Main Text */}
            <span className="text-[29px] lg:text-5xl font-bold text-black ml-2">
              GREAT TASTE
            </span>

            {/* Description */}
            <div className="mt-10">
              <p className="text-gray-400 text-start text-[18px] lg:text-[20px] leading-9 lg:leading-10 font-sans tracking-tight w-11/12">
                Overall Creating Delicious Dishes is an essential resource for anyone
                looking to start a food business or take their culinary skills to the next
                level.
              </p>

              {/* Search Bar */}
              <motion.div
                className="flex items-center w-full max-w-[440px] h-14 mt-5 bg-white rounded-full shadow-md px-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <input
                  type="text"
                  placeholder="Find Great Food"
                  className=" w-full flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none text-lg font-dm-sans"
                />
                <button className="bg-black text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300">
                  <Search size={24} />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-1 m-5 rounded-2xl flex flex-col items-center relative overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src='sec1img.png'
            alt=""
            className="rounded-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Ratings Section */}
          <motion.div
            className="bg-black text-white py-4 rounded-full flex items-center lg:gap-10 mt-10 w-full justify-around max-sm:w-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <span className="lg:text-lg sm:text-[17px] max-sm:text-[15px] font-semibold sm:px-10 ">4000 + Ratings</span>
            <div className="flex text-yellow-400 gap-3 max-sm:gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fill="currentColor" className="lg:text-lg sm:text-[1px] text-[1px]" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* footer */}
      <motion.div
        className="flex  lg:flex-row lg:gap-6 gap-1 px-3 items-center py-2"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Icons */}
        <motion.div
          className="grid grid-cols-3 lg:grid-cols-5 lg:gap-4 gap-1 w-full lg:w-full justify-items-center "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {footerimg.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`footer-${i}`}
              className="h-[100px]  w-[60px] lg:h-[148px] lg:w-[82px]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:mt-0 mt-5 w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src="/DHAspeacail.png"
            alt=""
            className="w-[90%] sm:w-[600px] md:w-[800px] lg:w-[509px] h-auto lg:h-[200px] object-contain mb-2 lg:mb-0"
          />
          <img
            src="/DHAspeacail.png"
            alt=""
            className="w-[90%] sm:w-[600px] md:w-[800px] lg:w-[509px] h-auto lg:h-[200px] object-contain"
          />
        </motion.div>

      </motion.div>

    </div>
  )
}

export default Section1