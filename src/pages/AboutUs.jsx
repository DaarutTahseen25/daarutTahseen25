import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import OurMission from "../Components/OurMission";
import OurApproach from "../Components/OurApproach";
import OurFounder from "../Components/OurFounder";
import Leaders from "../Components/Leaders";
import Donate from "../Components/Donate";

const AboutUs = () => {
  usePageTitle("About Us");
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className=" bg-primary">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto py-10">
          <h1 className="text-center font-clash font-semibold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 mt-0 ">
            About Us
          </h1>
          <div className="text-white w-full max-w-[90vw] sm:max-w-[48rem] lg:max-w-[70rem] xl:max-w-[90rem] 2xl:max-w-[110rem] text-base sm:text-lg md:text-xl leading-relaxed text-center font-clash mx-auto">
            <p>
              At DaarutTahseen, we are dedicated to providing structured,
              flexible, and high-quality Islamic education for all. Our platform
              was born from a deep desire to eliminate barriers that prevent
              people—young and old—from accessing meaningful Islamic knowledge.
              We believe education should meet you where you are: at home, at
              work, on your phone, or in your masjid.
            </p>
            <p className="mt-6">
              We&apos;ve combined traditional Islamic scholarship with modern
              learning tools to create an experience that is not only effective
              but deeply transformative. Through well-structured courses,
              qualified tutors, and interactive learning, we aim to nurture a
              generation grounded in Qur&apos;an, Sunnah, and character.
              It&apos;s not just a school. It&apos;s a movement. A movement to
              revive purposeful learning, to reconnect hearts to divine
              guidance, and to empower every Muslim with the knowledge needed to
              thrive spiritually and intellectually.
            </p>
          </div>
        </div>
      </div>
      <OurMission />
      <OurApproach />
      <OurFounder />
      <Leaders />
      <Donate />
    </main>
  );
};

export default AboutUs;
