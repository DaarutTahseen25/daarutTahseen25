import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HeroInfo = () => {
  const { user } = useAuth();
  const role = user?.role;
  const isLoggedIn = !!user;

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto items-center text-center">
      <h1 className="text-white font-clash text-[28px] sm:text-[36px] md:text-[41px] font-normal w-full">
        DaarutTahseen Institution{" "}
        <span className="text-secondary">brings Authentic </span>
        Islamic Education
        <span className="text-secondary"> to Every Home, Digitally</span>
      </h1>

      <p className="text-secondary font-bricolage text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl w-full">
        DaarutTahseen Institution is a trusted online madrassah where students
        across Nigeria and beyond receive structured Islamic education,
        anywhere, anytime.
      </p>

      <div>
        {isLoggedIn ? (
          <Link to={`/${role}`}>
            <Button className="bg-primary hover:bg-buttonhover transition-colors duration-300 py-4 px-6 w-[200px] md:w-[219px] h-[60px] md:h-[71px] text-white text-[18px] font-medium rounded-[10px] border-2 border-cream shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] font-clash">
              Go to Dashboard
            </Button>
          </Link>
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
