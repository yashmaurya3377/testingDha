import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DHAlogo from '../../assets/Chef.png';
import { LuPhoneCall } from "react-icons/lu";
import { X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Menu', path: '/menu' },
    { id: 3, name: 'Gallery', path: '/gallery' },
    { id: 4, name: 'About us', path: '/about' },
  ];

  return (
    <div className="relative w-full">
      {/* ---------------------- Large Navbar ---------------------- */}
      <div className="hidden lg:flex justify-center items-center w-full absolute top-0 z-50">
        <nav className="bg-[rgba(255,138,50,1)] rounded-full py-5 px-16 mt-12 w-[90%] max-w-[800px] h-[85px] flex justify-between items-center shadow-lg">
          {/* Left Items */}
          <div className="flex space-x-16">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-black hover:text-red-600  transition-colors  text-md font-bold hover:cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Items */}
          <div className="flex space-x-16">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-black hover:text-red-600 transition-colors text-md font-bold hover:cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Center Logo */}
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center">
          <img
            src={DHAlogo}
            alt="DHA Logo"
            className="h-[117px] w-[117px] rounded-full shadow-lg mx-auto bg-amber-200 p-2"
          />
          <h1 className="font-bold text-lg leading-[150%] text-center text-[rgba(236,31,36,1)] whitespace-nowrap">
            Desi Bhi Tasty Bhi
          </h1>
        </div>
      </div>

      {/* ---------------------- Mobile Navbar ---------------------- */}
      <div className="block lg:hidden relative bg-amber-50 w-full py-4">
        {/* Logo Centered */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={DHAlogo}
            alt="DHA Logo"
            className="h-[77px] w-[77px] rounded-full shadow-lg bg-amber-200 p-2"
          />
          <h1 className="font-bold text-lg text-[rgba(236,31,36,1)]">
            Desi Bhi Tasty Bhi
          </h1>
        </div>

        {/* Hamburger / X Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="absolute top-[45px] right-4 z-50 hover:cursor-pointer "
        >
          {open ? <X className="h-10 w-10 text-white" /> : <img src="/menu-icons.png" alt="menu" className="h-[40px] w-[40px]" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-screen w-[300px] 
                         bg-[linear-gradient(180deg,rgba(179,6,6,1)_0%,rgba(194,34,34,1)_30%,rgba(142,15,15,1)_70%,rgba(153,16,16,1)_100%)] 
                         rounded-ss-[80px] p-6 shadow-lg z-40 flex flex-col justify-between border-2 border-amber-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Links */}
              <ul className="flex flex-col gap-6 mt-20 hover:cursor-pointer">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-white hover:text-red-600 font-medium text-lg hover:cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Phone + Offer */}
              <div className="mb-10 flex flex-col items-start gap-2 text-white font-medium">
                <div className="flex items-center gap-2">
                  <LuPhoneCall className="text-xl" />
                  <span className="text-lg">+91 9619399499</span>
                </div>
                <p className="text-sm mt-1">Get 25% OFF on Bridal Jewelry</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click outside to close */}
        {open && (
          <div
            className="fixed inset-0 z-30 hover:cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
