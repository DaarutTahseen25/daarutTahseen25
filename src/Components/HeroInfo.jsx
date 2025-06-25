import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const HeroInfo = () => {
  // user variable to check if a user is logged in
  // This can be replaced with actual user state management logic
  const user = "";
  return (
    <div className="flex-1 flex flex-col gap-6 w-full lg:w-auto max-w-full ">
      <h1 className="text-primary font-poppins text-[28px] sm:text-[36px] md:text-[41px] font-normal   text-center lg:text-left w-full">
        DaarutTahseen Institution{" "}
        <span className="text-accent">brings Authentic </span>
        Islamic Education
        <span className="text-accent"> to Every Home, Digitally</span>
      </h1>
      <p className="text-accent font-bricolage text-[16px] sm:text-[18px] md:text-[20px] max-w-full sm:max-w-[534px] text-center w-full sm:mx-auto lg:mx-0 lg:text-left  ">
        DaarutTahseen Institution is a trusted online madrassah where students
        across Nigeria and beyond receive structured Islamic education,
        anywhere, anytime.
      </p>

      {/* Shows get started when there's no logged in user and go to dashboard if a user is logged in */}
      <div className="self-center lg:self-start">
        {user ? (
          <Button className="bg-primary hover:bg-buttonhover transition-colors duration-300 py-4 px-6 w-[219px] h-[71px] text-white text-[18px] font-medium rounded-[10px] border-2 border-cream shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] font-clash">
            Go to Dashboard
          </Button>
        ) : (
          <Link to="/create">
            <Button className="bg-primary hover:bg-buttonhover transition-colors duration-300 py-4 px-6 w-[169px] h-[71px] text-white text-[18px] font-medium rounded-[10px] border-2 border-cream shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] font-clash">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroInfo;
