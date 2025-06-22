import React from "react";

import Button from "./Button";

function CourseCard({ title, description, thumbnail }) {
  return (
    <div className="bg-white w-full max-w-[328px] rounded-[20px] shadow-lg p-6 flex flex-col justify-between h-[500px]">
      <div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[200px] object-cover rounded-lg mb-4"
        />
        <h2 className="text-[20px] text-black text-left font-[400] font-bricolage leading-[100%] tracking-[0%] mb-2">
          {title}
        </h2>
        <p className="text-black font-[400] font-montserrat text-left text-[14px] leading-[130%] line-clamp-3">
          {description}
        </p>
      </div>

      <Button className="w-full h-[55px] mx-auto rounded-[10px] py-[15px] px-[30px] mt-4 hover:bg-buttonhover">
        Learn more
      </Button>
    </div>
  );
}

export default CourseCard;
