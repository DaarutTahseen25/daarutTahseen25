import React from "react";

import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CourseCard({ title, description, thumbnail }) {
  return (
    <div className='bg-white w-full max-w-[328px] rounded-[20px] shadow-lg p-6 flex flex-col justify-between h-[500px]'>
      <div>
        <LazyLoadImage
          src={thumbnail}
          alt={title}
          width='100%'
          height='auto'
          effect='blur'
          className='rounded-lg shadow-md object-cover'
          decoding='async'
        />
        <h2 className='text-[20px] text-black text-left font-[400] font-bricolage  mb-2'>
          {title}
        </h2>
        <p className='text-black font-[400] font-montserrat text-left text-[14px]  line-clamp-3'>
          {description}
        </p>
      </div>

      <Button className='w-full h-[55px] mx-auto rounded-[10px] py-[15px] px-[30px] mt-4 hover:bg-buttonhover'>
        Learn more
      </Button>
    </div>
  );
}

export default CourseCard;
