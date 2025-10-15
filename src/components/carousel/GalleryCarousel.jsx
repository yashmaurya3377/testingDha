import React, { useEffect, useState } from 'react'

const GalleryCarousel = () => {
    const images = [
        { src: "/roll.png", alt: "DHA Rolls" },
        { src: "/pau.png", alt: "Pav Bhaji" },
        { src: "/panjabi.png", alt: "Punjabi Paratha" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='flex flex-col py-'>
            <h1 className='lg:text-[60px] text-[34px] ms-7 text-white font-sans font-bold lg:ms-9  lg:my-1 my-1'>Our gallery</h1>
            <div className='  flex p-12 gap-2  '>
                <div className='w-1/2'>
                    <img src="hotdog.png" alt="" className="w-full sm:w-[201px] md:w-[424px] lg:w-[703px] h-[180px] sm:h-[300px] md:h-[450px] lg:h-[637px] object-cover rounded-xl" />
                    <img src="momos.png" alt="Momos" className="w-full sm:w-[201px] md:w-[424px] lg:w-[703px] object-center rounded-xl" />
                </div>

                <div className='w-1/2'>
                    <img src="momos.png" alt="Momos" className="w-full sm:w-[201px] md:w-[424px] lg:w-[703px] object-center rounded-xl" />
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full sm:w-[201px] md:w-[424px] lg:w-[660px] h-[180px] sm:h-[300px] md:h-[450px] lg:h-[627px] object-cover rounded-xl lg:ms-6 lg:mt-" />
                </div>
            </div>
        </div >
    )
}

export default GalleryCarousel
