import React from "react";
import DonationForm from "./DonationForm";

export default function Donate() {
  return (
    <section className="w-full bg-[#FFFCE1] py-16">
      <div className="w-[95%] max-w-5xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#360400] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          Support Our Mission
        </h2>
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-10 items-center md:items-start w-full">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <img
              src="/donation.png"
              alt=""
              className="w-full max-w-xs md:max-w-sm lg:max-w-md mb-4 object-contain"
            />
            <p className="text-center md:text-left text-base md:text-lg text-[#360400] font-clash">
              Every contribution you make allows us to develop our online
              programs, strengthen our infrastructure and make Qur’anic learning
              more accessible to all.
            </p>
          </div>
          <DonationForm />
        </div>
      </div>
    </section>
  );
}
