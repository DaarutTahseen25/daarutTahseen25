import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    description:
      "The platform is organized, and uploading lesson materials is so simple.",
    name: "Ustadh Abdulmuqaddim",
    thumbnail: "/test1.png",
    role: "Teacher",
  },
  {
    id: 2,
    description:
      "The curriculum is clear, well-organized, and i see students truly progressing every semester",
    name: "Ustadh Jafar",
    thumbnail: "/test2.png",
    role: "Teacher",
  },
  {
    id: 3,
    description:
      "The classes are flexible, interactive and spiritually uplifting. I have improved in tajwid, understanding and consistency.",
    name: "Jamiu",
    thumbnail: "/test3.png",
    role: "Student (Beginner)",
  },
  {
    id: 4,
    description:
      "I started from scratch, but now i can read the Qur’an fluently with tajwid. The teachers are so patient.",
    name: "Ahmad",
    thumbnail: "/test4.png",
    role: "Student (Intermediate)",
  },
  {
    id: 5,
    description:
      "The advanced courses are well-placed, detailed, and spiritually grounding. It’s more than an online school, it’s a community of serious seekers",
    name: "Maryam",
    thumbnail: "/test5.png",
    role: "Student (Advanced)",
  },
];

const Testimonial = () => {
  return (
    <section className=" bg-white h-[479px] flex justify-center items-center py-12 overflow-hidden">
      <div className="w-[90%] md:w-[85%] mx-auto text-center">
        <h1 className="font-clash text-accent font-[500] text-[32px] md:text-[40px] leading-[100%] tracking-[0%]">
          Testimonials
        </h1>
        <p className="text-[18px] md:text-[20px] font-bricolage text-black font-[400] leading-[140%] tracking-tight mt-6 max-w-[800px] mx-auto">
          Hear directly from our students and teachers about how DaarutTasheen
          has transformed their learning, faith and daily lives
        </p>

        <div className="flex  gap-4 w-full overflow-x-auto mt-10 no-scrollbar py-6 ">
          {testimonials.map(({ description, name, thumbnail, role, id }) => (
            <TestimonialCard
              key={id}
              description={description}
              name={name}
              thumbnail={thumbnail}
              role={role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
