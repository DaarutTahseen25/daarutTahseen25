import React from "react";
import Button from "./Button";
import HeroGallery from "./HeroGallery";
import HeroInfo from "./HeroInfo";

export default function Hero() {
  // const user = "";
  return (
    <section className="bg-secondary py-16 sm:py-20 md:py-24">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col-reverse lg:flex-row items-center md:items-start justify-between gap-10  ">
        {/* Left Content */}
        <HeroInfo />
        {/* Right Content */}
        <HeroGallery />
        {/* fallback mobile devices imagejjjjjjjjk */}
        <img
          src="/her3.jpg"
          alt=""
          className="w-full lg:hidden block rounded-lg"
        />
      </div>
    </section>
  );
}
