/* eslint-disable no-unused-vars */
import { Eye, Goal } from "lucide-react";
import React from "react";

const dataVisionMission = [
  {
    title: "Mission",
    description:
      "DaarutTahseen aims to educate and empower Muslims by offering structured, flexible, and affordable Islamic studies through an online platform.",
    icon: Goal,
  },
  {
    title: "Vision",
    description:
      "To be a globally recognized Islamic institution providing accessible and high-quality Quranic education and Islamic education.",
    icon: Eye,
  },
];

export default function OurMission() {
  return (
    <section className="w-full bg-[#FFFCE1] py-12 sm:py-16">
      <div className="w-[90%] max-w-5xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#360400] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-10">
          Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataVisionMission.map(({ title, description, icon: Icon }, i) => (
            <div
              key={title}
              className="relative bg-white rounded-xl border-l-8 border-[#009688]  px-7 py-8 flex flex-col items-start h-full"
            >
              <div className="absolute hidden md:flex -left-7 top-7  items-center justify-center w-12 h-12 rounded-full bg-[#009688]/90 shadow-md">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-clash font-semibold text-[#009688] text-xl sm:text-2xl mb-3 pl-8">
                {title}
              </h3>
              <p className="font-clash text-gray-700 text-base sm:text-lg md:text-[1.08rem] leading-relaxed pl-8">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
