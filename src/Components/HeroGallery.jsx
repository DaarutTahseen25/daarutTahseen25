import React from "react";

const HeroGallery = () => {
  const imageClass =
    "w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] object-cover rounded-md shadow-md";

  return (
    <div className='flex-1 hidden lg:flex gap-6 justify-center lg:justify-end'>
      <div className='flex flex-col gap-6'>
        <img
          src='/her1.png'
          alt='Hero Image 1'
          className={imageClass}
          loading='lazy'
          width='220'
          height='220'
        />
        <img
          src='/cal1.png'
          alt='Hero Image 2'
          className={imageClass}
          loading='lazy'
          width='220'
          height='220'
        />
      </div>

      <div className='flex flex-col gap-6 mt-12'>
        <img
          src='/cal2.png'
          alt='Hero Image 3'
          className={imageClass}
          loading='lazy'
          width='220'
          height='220'
        />
        <img
          src='/her2.png'
          alt='Hero Image 4'
          className={imageClass}
          loading='lazy'
          width='220'
          height='220'
        />
      </div>
    </div>
  );
};

export default HeroGallery;
