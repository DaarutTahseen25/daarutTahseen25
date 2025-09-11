import React, { useState } from "react";
import { VscStarFull } from "react-icons/vsc";
import { BiSolidBook } from "react-icons/bi";
import { FcOk, FcOrganization } from "react-icons/fc";
import Button from "../Components/Button";
import { usePageTitle } from "../hooks/usePageTitle";

// Course data for all levels
const courseData = {
  beginner: {
    1: {
      title: "Beginner Class 1",
      items: [
        "Qur'an Recitation & Tajweed",
        "Basic Islamic Manners (Adab)",
        "Stories of the Prophets",
        "Short Surahs Memorization",
        "Arabic Alphabet & Phonetics",
      ],
    },
    2: {
      title: "Beginner Class 2",
      items: [
        "Introduction to Nahw (Grammar)",
        "Basic Aqeedah (Belief)",
        "Qur'an Memorization (juz 'Amma)",
        "Expanded Arabic Vocabulary",
        "Simple Islamic History",
      ],
    },
    3: {
      title: "Beginner Class 3",
      items: [
        "Life of Prophet Muhammad (Seerah)",
        "Tajwid Rules (Madd Ghunnah)",
        "Introduction to Sarf (Morphology)",
        "Arabic Sentence Formation",
        "Prayer and Worship Basics (Fiqh)",
      ],
    },
    4: {
      title: "Beginner Class 4",
      items: [
        "Revision & Preparation for intermediate",
        "Qur'an Application (Basic Tafsir)",
        "Intermediate Arabic Conversations",
        "Daily Islamic Practices",
        "Simple Hadith Studies",
      ],
    },
  },
  intermediate: {
    1: {
      title: "Intermediate Class 1",
      items: [
        "Islamic Fiqh (Purification and Prayer)",
        "Introduction to Hadith Sciences",
        "Aqeedah (Names and Attributes)",
        "Nahw (Intermediate Level)",
        "Tafsir Selected Surahs",
      ],
    },
    2: {
      title: "Intermediate Class 2",
      items: [
        "Qur'an Recitation with Tajwid Perfection",
        "Islamic Manners (Advanced)",
        "Sarf (Verb Forms and Patterns)",
        "Arabic Speaking Practice",
        "Comparative Aqeedah Studies",
      ],
    },
    3: {
      title: "Intermediate Class 3",
      items: [
        "Research and Report Writing Skills",
        "Tafsir of Medium-Length Surahs",
        "Seerah (Post-Prophethood Battles)",
        "Deep Study of Sarf Rules",
        "Islamic Jurisprudence Transactions",
      ],
    },
  },
  advanced: {
    1: {
      title: "Advanced Class 1",
      items: [
        "Advanced Tajwid and Recitation Practice",
        "Islamic Civilization and History",
        "Qur'an Memorization Nahw Parsing",
        "Aqeedah (Refutation of Deviations)",
      ],
    },
    2: {
      title: "Advanced Class 2",
      items: [
        "Tafsir Deep Dive (e.g, Surah Yusuf)",
        "Advanced Hadith Studies",
        "Fiqh of Worship and Family Life",
        "Arabic Essay Writing",
      ],
    },
    3: {
      title: "Advanced Class 3",
      items: [
        "Detailed Study of Aqeedah and Deviant Sects",
        "Qur'an Memorization Completion",
        "Research Thesis on Islamic Topics",
        "Hadith Authentication Studies",
        "Public Speaking and Da'wah Skills",
      ],
    },
  },
};

// Semester data for all levels
const semesterData = {
  beginner: [
    {
      title: "First Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Focus on core foundation",
        "Midterm test after 2 months",
        "Final exams at the end of semester",
      ],
    },
    {
      title: "Second Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"],
    },
    {
      title: "Assessments Include:",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Written exams",
        "Oral exmas (Qur'an, Hadith, Arabic)",
        "Research Projects or assignments",
      ],
    },
  ],
  intermediate: [
    {
      title: "First Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Focus on core foundation",
        "Midterm test after 2 months",
        "Final exams at the end of semester",
      ],
    },
    {
      title: "Second Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"],
    },
    {
      title: "Assessments Include:",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Written exams",
        "Oral exams (Qur'an , Hadith, Arabic)",
        "Research projects or assignments",
      ],
    },
  ],
  advanced: [
    {
      title: "First Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Advanced Tafseer",
        "Islamic Jurisprudence",
        "Hadith Methodology",
      ],
    },
    {
      title: "Second Semester",
      icon: <FcOk className='text-[#009688]' />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"],
    },
    {
      title: "Assessments Include:",
      icon: <FcOk className='text-[#009688]' />,
      items: [
        "Written exams",
        "Oral exams (Qur'an , Hadith, Arabic)",
        "Research projects or assignments",
      ],
    },
  ],
};

const Courses = () => {
  usePageTitle("Our Courses");
  const [activeLevel, setActiveLevel] = useState("beginner");

  // Determine how many courses to show based on level
  const getCourseCount = () => {
    switch (activeLevel) {
      case "beginner":
        return 4;
      case "intermediate":
        return 3;
      case "advanced":
        return 3;
      default:
        return 4;
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#FFFCE1]/30 via-transparent to-[#009688]/5'>
      {/* Hero Section with modern design */}
      <section className='relative overflow-hidden py-12 md:py-16 lg:py-24 px-4'>
        {/* Decorative background elements */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#009688]/5 via-transparent to-[#360400]/5'></div>
        <div className='absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-bl from-[#009688]/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tr from-[#360400]/10 to-transparent rounded-full blur-3xl'></div>

        <div className='relative z-10 max-w-7xl mx-auto'>
          {/* Modern badge */}
          <div className='text-center mb-6 md:mb-8'>
            <div className='inline-block px-6 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4 md:mb-6'>
              Structured Islamic Education
            </div>
          </div>

          {/* Hero title with gradient accent */}
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#360400] font-clash leading-tight text-center mb-6 md:mb-8  px-2'>
            Our Courses
            <span className='block text-[#009688] bg-gradient-to-r from-[#009688] to-[#360400] bg-clip-text '>
              Discover Your Path
            </span>
            <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block mt-2'>
              to Quranic Knowledge
            </span>
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto rounded-full mb-8'></div>

          {/* Enhanced description card */}
          <div className='max-w-4xl mx-auto px-2'>
            <div className='  '>
              <p className='text-base md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed'>
                <span className='font-semibold text-[#360400]'>
                  DaarutTahseen
                </span>{" "}
                offers structured Quranic and Islamic studies programs for all
                levels, promoting both{" "}
                <span className='font-semibold text-[#009688]'>
                  intellectual
                </span>{" "}
                and{" "}
                <span className='font-semibold text-[#009688]'>
                  spiritual growth
                </span>
                . With a two-semester academic year (16 weeks each), classes run
                five days weekly, covering 2-3 subjects daily in 1.5-hour
                sessions.
              </p>
              <div className='mt-4 md:mt-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#009688]/10 border border-[#009688]/20'>
                <p className='text-base md:text-lg lg:text-xl text-[#360400] text-center font-medium'>
                  Explore our catalog to find the course that suits your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories with modern design */}
      <section className='px-4 pb-12 md:pb-16'>
        <div className='max-w-6xl mx-auto'>
          <div className=' p-4 md:p-8 lg:p-12 '>
            {/* Modern Navigation Tabs */}
            <div className='flex justify-center mb-8 md:mb-12'>
              <div className='bg-gray-100/80 p-1.5 md:p-2 rounded-xl md:rounded-2xl  w-full max-w-xl'>
                <div className='flex gap-1 md:gap-2'>
                  {["beginner", "intermediate", "advanced"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level)}
                      className={`flex-1 px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-clash text-xs sm:text-sm md:text-lg lg:text-xl transition-all duration-300 ${
                        activeLevel === level
                          ? "bg-[#009688] text-white shadow-lg transform scale-105"
                          : "text-[#666666] hover:text-[#009688] hover:bg-white/50"
                      }`}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Items with enhanced design */}
            <div className='max-w-5xl mx-auto'>
              <div className='text-center mb-6 md:mb-10'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-clash text-[#009688] mb-3 md:mb-4'>
                  {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)}{" "}
                  Classes
                </h2>
                <div className='w-16 md:w-24 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto rounded-full'></div>
              </div>

              <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                {Array.from({ length: getCourseCount() }, (_, i) => i + 1).map(
                  (courseNum) => {
                    const course = courseData[activeLevel][courseNum];
                    return (
                      <div
                        key={courseNum}
                        className='group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200 hover:border-[#009688]/30  transition-all duration-500 '>
                        {/* Course header */}
                        <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
                          <div className='p-2 md:p-3 bg-[#009688]/10 rounded-full group-hover:bg-[#009688]/20 transition-colors duration-300 flex-shrink-0'>
                            <VscStarFull className='text-[#009688] text-lg md:text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-200' />
                          </div>
                          <h3 className='text-lg md:text-xl lg:text-2xl font-clash text-[#360400] group-hover:text-[#009688] transition-colors duration-300'>
                            {course.title}
                          </h3>
                        </div>

                        {/* Course items grid */}
                        <div className='grid gap-2 md:gap-3 lg:gap-4'>
                          {course.items.map((item, index) => (
                            <div
                              key={index}
                              className='flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-white/70 rounded-lg md:rounded-xl border border-gray-100   transition-all duration-200 group/item'>
                              <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-[#009688] rounded-full flex-shrink-0 mt-2  transition-transform duration-200'></div>
                              <span className='text-sm md:text-base text-gray-700 group-hover/item:text-[#360400] transition-colors duration-200 leading-relaxed'>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Semester Breakdown */}
      <section className='py-12 md:py-16 bg-white/50 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-clash text-[#360400] mb-3 md:mb-4'>
              Semester Breakdown
            </h2>
            <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
              Understanding our structured academic approach for {activeLevel}{" "}
              level
            </p>
            <div className='w-16 md:w-24 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto rounded-full mt-3 md:mt-4'></div>
          </div>

          <div className='grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {semesterData[activeLevel]?.map((semester, index) => (
              <div
                key={index}
                className='group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8  border border-gray-100  hover:border-[#009688]/20 transition-all duration-500 '>
                {/* Semester header */}
                <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
                  <div className='p-2 md:p-3 bg-[#009688]/10 rounded-full group-hover:bg-[#009688]/20 transition-colors duration-300 flex-shrink-0'>
                    <div className='text-xl md:text-2xl  transition-transform duration-200'>
                      {semester.icon}
                    </div>
                  </div>
                  <h3 className='text-base md:text-lg lg:text-xl font-clash text-[#360400] group-hover:text-[#009688] transition-colors duration-300'>
                    {semester.title}
                  </h3>
                </div>

                {/* Semester items */}
                <ul className='space-y-2 md:space-y-3'>
                  {semester.items.map((item, id) => (
                    <li
                      key={id}
                      className='flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-50/50 rounded-lg md:rounded-xl  transition-colors duration-200 group/item'>
                      <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-[#009688] rounded-full mt-1.5 md:mt-2 flex-shrink-0  transition-transform duration-200'></div>
                      <span className='text-sm md:text-base text-gray-700  transition-colors duration-200 leading-relaxed'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative bottom accent */}
                <div className='mt-4 md:mt-6 h-1 bg-gradient-to-r from-[#009688]/20 to-[#360400]/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Enrollment Section */}
      <section className='py-12 md:py-16 relative overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-[#009688]/10 rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 bg-[#360400]/10 rounded-full blur-2xl'></div>

        <div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
          <div className='mb-8 md:mb-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash text-[#360400] mb-4 md:mb-6 leading-tight'>
              Ready to Begin Your Journey?
            </h2>
            <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2'>
              Take the first step towards deepening your Quranic and Islamic
              knowledge at
              <span className='font-semibold text-[#009688]'>
                {" "}
                DaarutTahseen Institution
              </span>
            </p>
          </div>

          <div className='mb-8 md:mb-10'>
            <Button className='px-8 md:px-12 py-4 md:py-6  text-white font-bold text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 '>
              Enroll Now
              <span className='ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-200'>
                →
              </span>
            </Button>
          </div>

          <div className=' p-6 md:p-8 max-w-2xl mx-auto   '>
            <p className='text-base md:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed'>
              You'll be redirected to the Admission page to select your class
              and complete registration.
            </p>
            <p className='text-base md:text-lg text-gray-700'>
              <span className='font-bold text-[#009688]'>Need help?</span> Our
              expert team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
