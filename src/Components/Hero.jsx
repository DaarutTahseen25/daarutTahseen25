// import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
// import Button from "./Button";

export default function Hero() {
  const { isAuthenticated } = useAuth();
  return (
    <section className="h-screen bg-secondary flex justify-center items-center py-12">
      <div className="w-[90%] md:w-[85%] flex flex-col sm:flex-row justify-between mx-auto">
        <div className="grid grid-cols-1 items-start basis-1/2 lg:gap-6 md:gap-4 mb-4 sm:mb-0 pt-[8rem] sm:pt-0 ">
          <p className="text-2xl md:text-2xl lg:text-4xl lg:w-[80%] lg:space-x-2 text-primary font-medium lg:leading-12 text-center sm:text-start mx-auto sm:mx-0 mb-4 sm:mb-0">DaarutTahseen Institution <span className="text-accent"> brings Authentic </span>
            Islamic Education
            <span className="text-accent"> to Every Home, Digitally</span>
          </p>
          <p className="lg:w-[68%] md:text-[13px] text-center sm:text-start text-lg lg:text-base sm:leading-5 font-bricolage">DaarutTahseen Institution is a trusted online madrassah where students across Nigeria and beyond receive structured Islamic education, anywhere, anytime</p>
          {!isAuthenticated ?
            <button className="bg-[#009485cc] mt-2 lg:mt-3 cursor-pointer w-[7rem] py-2 px-3.5 sm:w-[9.5rem] sm:py-[0.8rem] sm:px-[1.75rem] text-sm sm:text-base rounded-lg border border-[#FFF9C4] text-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#009485b2] font-clash flex place-self-center sm:place-self-start ">Get Started</button>
          :
          <button className="bg-[#009485cc] mt-2 lg:mt-3 cursor-pointer w-[9rem] py-2 px-3.5 sm:w-[12rem] sm:py-[0.8rem] sm:px-[1.75rem] text-sm sm:text-base rounded-lg border border-[#FFF9C4] text-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#009485b2] font-clash flex place-self-center sm:place-self-start ">Go to Dashboard</button>
          }
        </div>
        <div className="flex gap-2 basis-1/2 ">
            <div className=" grid-cols-1 gap-y-7 h-[90%] lg:h-[86%] hidden sm:grid ">
                <img src="/her1.png" alt="" className="w-[90%] md:ml-4 lg:ml-6 object-cover " />
                <p className="calli1 border-[0.81px] border-white bg-accent rounded-sm rounded-bl-[1.5rem] h-[3.2rem]">
                    {/* <img src="/" alt="" /> */}
                </p>
            </div>
            <div className="flex flex-col gap-y-7 sm:pt-7 lg:pt-14 ">
                <p className="calli2 border-[0.81px] border-white rounded-sm rounded-tr-[1.5rem] h-[3.2rem] hidden sm:block "></p>
                <img src="/her2.png" alt="" className="object-cover sm:w-[90%] hidden sm:block" />
                <img src="/her3.jpg" alt="" className="object-cover w-full h-[80%] rounded-md block sm:hidden" />
            </div>
        </div>
      </div>
    </section>
  );
}
