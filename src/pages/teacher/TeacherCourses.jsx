import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";

const TeacherCourses = () => {
  usePageTitle("My Courses");
  return (
    <section className='md:p-6 lg:p-8'>
      <div className='max-w-7xl  mb-8 md:mb-12'>
        <div className='text-center md:text-left'>
          <div className='inline-block px-4 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4'>
            Courses
          </div>
          <h1 className='font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4'>
            My Courses
            <span className='block text-[#009688] text-2xl md:text-3xl lg:text-4xl mt-2 capitalize'>
              your teaching portfolio
            </span>
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto md:mx-0 rounded-full'></div>
        </div>
      </div>
    </section>
  );
};

export default TeacherCourses;
