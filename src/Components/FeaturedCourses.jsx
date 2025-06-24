import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Tajwid Mastery & Qur’an Recitation",
    description:
      "Master proper Qur’anic pronunciation with certified teachers using classical Tajwid techniques",
    thumbnail: "/quran recitation indonesia.png",
  },
  {
    id: 2,
    title: "Arabic Language Program (Nahw & Sarf)",
    description:
      "Build a strong foundation in Arabic grammar and morphology for understanding classical texts.",
    thumbnail: "/arabic Language.png",
  },
  {
    id: 3,
    title: "Islamic Aqeedah & Creed Studies",
    description:
      "Explore core Islamic beliefs, Names of Allah, and refutations of modern ideological deviations.",
    thumbnail: "/Islamic Aqeedah.png",
  },
];

function FeaturedCourses() {
  return (
    <section className=" bg-secondary flex justify-center items-center py-12">
      <div className="w-[90%] md:w-[85%] mx-auto text-center">
        <h1 className="font-clash text-accent font-[500] text-[32px] md:text-[40px] leading-[100%] tracking-[0%]">
          Featured Courses
        </h1>
        <p className="text-[18px] md:text-[20px] font-bricolage text-black font-[400] leading-[140%] tracking-tight mt-6 max-w-[900px] mx-auto">
          Discover our most impactful Islamic courses carefully selected to help
          you build a strong foundation in Qur’an, Arabic and essential Deen.
        </p>
        {/*  */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {courses.map(({ id, title, description, thumbnail }) => (
            <CourseCard
              key={id}
              id={id}
              title={title}
              description={description}
              thumbnail={thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
