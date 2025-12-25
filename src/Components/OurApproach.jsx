/* eslint-disable no-unused-vars */
import React from "react";
import {
  Rocket,
  Library,
  BookOpenCheck,
  Users,
  Globe,
  LayoutDashboard,
} from "lucide-react";

const approach = [
  {
    title: "Structured Curriculum",
    description:
      "We offer a program catalog of courses designed to provide a comprehensive and progressive learning path in Quranic and Islamic sciences.",
    icon: BookOpenCheck,
  },
  {
    title: "Dedicated Tutors",
    description:
      "Our tutors are carefully selected and compensated to ensure the highest teaching standards, providing expert guidance and mentorship.",
    icon: Users,
  },
  {
    title: "Accessible online Platform",
    description:
      "Our online madrasah ensures that quality education is available regardless of geographical location, providing flexibility for learners.",
    icon: Globe,
  },
  {
    title: "Seamless Experience",
    description:
      "From student and teacher registration with NIN-based verification to a personalized dashboard for managing courses and payments, our platform is designed for ease of use.",
    icon: LayoutDashboard,
  },
  {
    title: "Student Empowerment",
    description:
      "Students receive stipends to motivate their dedication and commitment to their studies, fostering a sense of value and encouragement.",
    icon: Rocket,
  },
  {
    title: "Valuable Resources",
    description:
      "Students and teachers have access to a rich library of PDFs, audio, and video recordings to enhance their learning and teaching experience.",
    icon: Library,
  },
];

export default function OurApproach() {
  return (
    <section className="w-full   py-12 sm:py-16">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#009688] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-10">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
          {approach.map(({ title, description, icon }, i) => (
            <div
              key={title}
              className=" rounded-2xl border border-[#e0e0e0] flex flex-col items-center px-5 py-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#009688]/10 mb-5">
                {icon &&
                  React.createElement(icon, {
                    className: "w-8 h-8 text-[#009688]",
                  })}
              </div>
              <h3 className="font-clash font-semibold text-[#360400] text-lg sm:text-xl md:text-2xl mb-3">
                {title}
              </h3>
              <p className="font-clash text-gray-700 text-base sm:text-lg md:text-[1.1rem] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
