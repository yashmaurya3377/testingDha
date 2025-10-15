import React from 'react'
import CarouselImg from '../../components/carousel/Carouselimg'
import GalleryCarousel from '../../components/carousel/GalleryCarousel'

const GalleryPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-white pt-10 sm:pt-12 md:pt-20 lg:pt-50 lg:pb-6 px-4'>
        <h1 className='bg-[rgba(255,138,50,0.2)] p-3 sm:p-4 rounded-lg 
                 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] 
                 font-bold text-center mb-6 sm:mb-8 lg:mb-8'>
          GALLERY
        </h1>
        <p className="overflow-hidden text-center font-poppins 
                text-[18px] sm:text-[20px] md:text-[23px] lg:text-[28px] 
                font-semibold leading-snug sm:leading-snug md:leading-tight lg:leading-tight px-2 sm:px-4">
          Celebrate <span className="text-orange-500">Birthdays</span> & <span className="text-orange-500">Kitties</span> With Us
        </p>
      </div>

      <div className='flex justify-center lg:mt-10 mx-5 '>
        <CarouselImg />
      </div>
      <div>
        <GalleryCarousel />
      </div>
    </div>
  )
}

export default GalleryPage
