import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TestimonialCard = ({ description, name, thumbnail, role }) => {
  return (
    <div className='min-w-[338px] h-[177px] text-left  bg-white rounded-[10px] px-[12px] py-[10px] flex flex-col justify-between shadow-lg'>
      <p className='font-montserrat text-[14px]  text-black line-clamp-3'>
        {description}
      </p>
      <div className='flex items-center gap-[8px] mt-[8px]'>
        <LazyLoadImage
          src={thumbnail}
          alt={name}
          height='auto'
          effect='blur'
          className='w-[32px] h-[32px] rounded-full object-cover'
          decoding='async'
        />
        <div className=''>
          <h2 className='font-bricolage text-[16px] font-medium text-black'>
            {name}
          </h2>
          <p className='font-montserrat text-[12px] text-gray-600'>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
