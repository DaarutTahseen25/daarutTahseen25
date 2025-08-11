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
    <section className='bg-secondary flex justify-center items-center py-10 px-4 sm:px-8'>
      <div className='w-full max-w-7xl text-center'>
        <h1 className='font-clash text-accent font-medium text-2xl sm:text-3xl md:text-4xl'>
          Featured Courses
        </h1>
        <p className='text-base sm:text-lg md:text-xl font-bricolage text-black font-normal mt-4 sm:mt-6 max-w-4xl mx-auto'>
          Discover our most impactful Islamic courses carefully selected to help
          you build a strong foundation in Qur’an, Arabic and essential Deen.
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center'>
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
