import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroGallery = () => {
  const imageClass =
    "w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] object-cover rounded-md shadow-md";

  const images = [
    { src: "/her1.png", alt: "Hero Image 1" },
    { src: "/cal1.png", alt: "Hero Image 2" },
    { src: "/cal2.png", alt: "Hero Image 3" },
    { src: "/her2.png", alt: "Hero Image 4" },
  ];

  return (
    <div className='flex-1 hidden lg:flex gap-6 justify-center lg:justify-end'>
      <div className='flex flex-col gap-6'>
        {images.slice(0, 2).map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img.src}
            alt={img.alt}
            className={imageClass}
            width='220'
            height='220'
            effect='blur'
            decoding='async'
          />
        ))}
      </div>

      <div className='flex flex-col gap-6 mt-12'>
        {images.slice(2).map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img.src}
            alt={img.alt}
            className={imageClass}
            width='220'
            height='220'
            effect='blur'
            decoding='async'
          />
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
