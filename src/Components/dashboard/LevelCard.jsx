import React from "react";
import Button from "./../../Components/Button";

const LevelCard = ({ title, color, description }) => {
  return (
    <div className="bg-white mt-4 px-6 py-3 rounded-lg shadow-md">
      <div className="flex items-center gap-[10px] mb-4">
        <div className={`w-[34px] h-[34px] rounded-full bg-${color}`}></div>
        <h3 className="font-clash font-[500] text-[20px]  text-black  uppercase">
          {title}
        </h3>
      </div>
      <div className="w-full">
        <p className="font-montserrat font-[400] text-[14px]   text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey">
          {description}
        </p>
      </div>
      <Button className="bg-accent text-white px-[25.5px] py-[11.5px] rounded-[10px] hover:bg-accent-dark hover:bg-buttonhover">
        Register Now
      </Button>
    </div>
  );
};

export default LevelCard;
