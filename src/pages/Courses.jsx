

// // import React from "react";
// // import { VscStarFull } from "react-icons/vsc";
// // import { NavLink } from "react-router-dom";
// // import LandingPageHeader from "../Components/LandingPageHeader";
// // import Footer from "../Components/Footer";
// // import HomeSidebar from "../Components/HomeSidebar";
// // import Button from "../Components/Button";

// // // Function to get course items using switch
// // const getCourseItems = (courseNum) => {
// //   switch(courseNum) {
// //     case 1:
// //       return [
// //         "Introduction to Programming",
// //         "Basic Syntax and Variables",
// //         "Working with Functions",
// //         "Simple Data Structures"
// //       ];
// //     case 2:
// //       return [
// //         "Control Flow (If/Else)",
// //         "Loops and Iteration",
// //         "Working with Arrays",
// //         "Basic Error Handling"
// //       ];
// //     case 3:
// //       return [
// //         "Introduction to Objects",
// //         "Working with APIs",
// //         "Basic DOM Manipulation",
// //         "Event Handling"
// //       ];
// //     case 4:
// //       return [
// //         "Introduction to React",
// //         "Components and Props",
// //         "State Management Basics",
// //         "Building Simple Applications"
// //       ];
// //     default:
// //       return [];
// //   }
// // };

// // // Semester data (example - replace with your actual data)
// // const BeginnerSemesterData = [
// //   {
// //     title: "Semester 1",
// //     icon: <VscStarFull />,
// //     items: ["Quranic Studies", "Arabic Grammar", "Islamic History"]
// //   },
// //   {
// //     title: "Semester 2",
// //     icon: <VscStarFull />,
// //     items: ["Hadith Studies", "Fiqh", "Tajweed"]
// //   }
// // ];

// // const Courses = () => {
// //   return (
// //     <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
// //       <HomeSidebar />
// //       <LandingPageHeader />
      
// //       <div className='bg-[#FFFCE1]'>
// //         {/* Hero Section */}
// //         <div className="container mx-auto px-4 py-8 md:py-12">
// //           <h1 className='text-2xl md:text-4xl font-clash text-[#360400] text-center py-6 md:py-12'>
// //             Our Courses - Discover Your Path to Quranic Knowledge
// //           </h1>
// //           <p className='text-center px-4 text-sm text-[#360400] font-bricolage md:text-base'>
// //             DaarutTahseen Offers structured Quranic and islamic studies programs for all levels, 
// //             prompting both intellectual <span className="hidden md:inline"><br /></span> and spiritual growth.
// //             With a two-semester academic year (16 weeks each) classes run five days weekly, 
// //             covering 2-<span className="hidden md:inline"><br /></span>3 subjects daily in 15-hour sessions.
// //             Explore our catalog to find the course that suits your goals.
// //           </p>
// //         </div>
         
// //         {/* Course Categories */}
// //         <section className='container mx-auto w-full px-4 sm:px-6 lg:w-[80%]'>
// //           <div className='border-2 mt-6 border-none rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-sm'>
// //             {/* Navigation Tabs */}
// //             <div className='flex justify-center items-center border-gray-200 mb-6 sm:mb-8 w-full'>
// //               <div className='flex flex-col items-center sm:flex-row w-full sm:w-auto gap-0 sm:gap-4 md:gap-6 lg:gap-8'>
// //                 <NavLink 
// //                   to="/our-courses"
// //                   className={({ isActive }) => 
// //                     `px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash text-[#666666] whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
// //                       isActive 
// //                         ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
// //                         : 'text-[#666666] hover:text-[#009688]'
// //                     }`
// //                   }
// //                 >
// //                   Beginner
// //                 </NavLink>
                
// //                 <NavLink 
// //                   to="/intermediate-courses"
// //                   className={({ isActive }) => 
// //                     `px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash text-[#666666] whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
// //                       isActive 
// //                         ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
// //                         : 'text-[#666666] hover:text-[#009688]'
// //                     }`
// //                   }
// //                 >
// //                   Intermediate
// //                 </NavLink>
                
// //                 <NavLink 
// //                   to="/advance-courses"
// //                   className={({ isActive }) => 
// //                     `px-3 sm:px-4 text-[#666666] md:px-6 py-2 sm:py-3 text-center font-clash whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
// //                       isActive 
// //                         ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
// //                         : 'text-[#666666] hover:text-[#009688]'
// //                     }`
// //                   }
// //                 >
// //                   Advanced
// //                 </NavLink>
// //               </div>
// //             </div>

// //             {/* Course Items */}
// //             <div className='mx-auto'>
// //               <h1 className='text-3xl text-[#009688] px-8 sm:text-xl md:text-2xl font-clash mb-3 sm:mb-4 md:mb-6'>
// //                 Beginner Classes
// //               </h1>
// //               <div className='space-y-4 sm:space-y-5 md:space-y-6'>
// //                 {[1, 2, 3, 4].map((courseNum) => (
// //                   <div key={courseNum} className='mb-4 sm:mb-5 md:mb-6 py-4 sm:py-5 px-4 sm:px-5 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-[#009688]/20 hover:shadow-md transition-all duration-300 pb-4 sm:pb-5 md:pb-6'>
// //                     <div className='flex items-center gap-2 sm:gap-3'>
// //                       <VscStarFull className="text-[#009688] text-lg sm:text-xl"/>
// //                       <h2 className='text-base sm:text-lg md:text-xl font-montserrat'>
// //                         Beginner Class {courseNum}
// //                       </h2>
// //                     </div>
// //                     <ul className='list-disc mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4'>
// //                       {getCourseItems(courseNum).map((item, index) => (
// //                         <li key={index} className='ml-5 sm:ml-6 text-xs sm:text-sm md:text-base text-gray-700'>
// //                           {item}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </section>
              
// //         {/* Semester Breakdown */}
// //         <section className='container bg-white px-4 w-full mt-10'>
// //           <div className='border-2 border-none p-6 md:p-10 md:w-full bg-white mx-auto px-4'>
// //             <h2 className='text-xl items-center flex justify-center md:text-2xl font-clash mb-6'>
// //               Semester BreakDown
// //             </h2>
// //             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
// //               {BeginnerSemesterData.map((semester, index) => (
// //                 <div key={index} className='border p-4 rounded-lg hover:shadow-md transition-shadow'>
// //                   <div className='flex items-center gap-2 mb-4'>
// //                     {semester.icon} 
// //                     <h3 className='text-lg font-semibold'>{semester.title}</h3>
// //                   </div>
// //                   <ul className='space-y-2'>
// //                     {semester.items.map((item, id) => (
// //                       <li key={id} className='list-disc ml-6 text-sm md:text-base'>{item}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>  

// //         {/* Enrollment Section */}
// //         <section className='container mx-auto px-4 py-8 md:py-12 text-center'>
// //           <h1 className='text-2xl md:text-3xl text-[#360400] font-clash mb-4'>
// //             How to enroll
// //           </h1>
// //           <p className='mb-6 text-[#000000] max-w-2xl mx-auto'>
// //             Ready to begin your journey of Quranic and islamic knowledge at daarutahseen institution
// //           </p>
// //           <Button className='mx-auto'>Enroll Now</Button>
// //           <p className='mt-6 md:mt-9 text-sm md:text-base'>
// //             You'll be redirected to the Admission page to select your class and complete registration.
// //           </p>
// //           <p className='text-sm md:text-base'>
// //             <span className='text-[#009688] font-medium'>Need help? </span> 
// //             Our Team is here to guide you.
// //           </p>
// //         </section>
// //       </div>

// //       <Footer />
// //     </main>
// //   );
// // };

// // export default Courses;


// import React, { useState } from "react";
// import { VscStarFull } from "react-icons/vsc";
// import { NavLink } from "react-router-dom";
// import LandingPageHeader from "../Components/LandingPageHeader";
// import Footer from "../Components/Footer";
// import HomeSidebar from "../Components/HomeSidebar";
// import Button from "../Components/Button";

// // Course data for all levels
// const courseData = {
//   beginner: {
//     1: {
//       title: "Beginner Class 1",
//       items: [
//         "Qur'an Recitation & Tajweed",
//         "Basic Islamic Manners (Adab)",
//         "Stories of the Prophets",
//         "Short Surajs Memorization",
//         "Arabic Alphabet & Phonetics"
//       ]
//     },
//     2: {
//       title: "Beginner Class 2",
//       items: [
//         "Introduction to Nahw (Grammar)",
//         "Basic Aqeehag (Belief)",
//         "Qur'an Memorization (juz 'Amma)",
//         "Expanded Arabic Vocabulary",
//         "Simple Islamic History"

//       ]
//     },
//     3: {
//       title: "Beginner Class 3",
//       items: [
//         "Life of Prophet Muhammad (Seerah)",
//         "Tajwid Rules(Madd Ghunnah)",
//         "Introduction to Sarf(Morphology)",
//         "Arabic Sentence Formation",
//         "Prayer and Worship Basics (Fiqh)"
//       ]
//     },
//     4: {
//       title: "Beginner Class 4",
//       items: [
//         "Revision & Preparation for intermediate",
//         "Qur'an Application (Basic Tafsir)",
//         "Intermediate Arabic Conversations",
//         "Daily Islamic Practices",
//         "Simple Hadith Studies"
//       ]
//     }
//   },
//   intermediate: {
//     1: {
//       title: "Intermediate Class 1",
//       items: [
//         "Islamic Fiqh (Purification and Prayer)",
//         "Introduction to Hadith Sciences",
//         "Aqeedah (Names and Attributes)",
//         "Nahw (Intermediate Level)",
//         "Tafsir Selected Surahs"
//       ]
//     },
//     2: {
//       title: "Intermediate Class 2",
//       items: [
//         "Qur'an Recitation with Tajwid Perfection",
//         "Islamic Manners (Advanced)",
//         "Sarf (Verb Forms and Patterns)",
//         "Arabic Speaking Practice",
//         "Comparative Aqeedah Studies"
//       ]
//     },
//     3: {
//       title: "Intermediate Class 3",
//       items: [
//         "Research and Report Writing Skills",
//         "Tafsir of Medium-Length Surahs",
//         "Seerah (Post-Prophethood Battles)",
//         "Deep Study of Sarf Rules",
//         "Islamic Jurisprudence Transactions"
//       ]
//     },
  
//   },
//   advanced: {
//     1: {
//       title: "Advanced Class 1",
//       items: [
//         "Advacnce  Tajwid and Recitation Practise",
//         "Islamic Civilization and History",
//         "Qur'an Memorization Nahw Parsing",
//         "Aqeedah (Refutation of Devotions)"
//       ]
//     },
//     2: {
//       title: "Advanced Class 2",
//       items: [
//         "Tafsir Deep Dive (e.g, Surah Yusuf)",
//         "Advanced Hadith Studies",
//         "Fiqh of Worship and Family Life",
//         "Arabic Essay Writing"
//       ]
//     },
//     3: {
//       title: "Advanced Class 3",
//       items: [
//         "Detailed Study of Aqeedah and Deviants Sects",
//         "Qur'an Memorization Completion",
//         "Research Thesis on Islamic Topics",
//         "Hadith Authentication Studies",
//         "Public Speaking and Da'wah Skills"
//       ]
//     }
//   }
// };

// // Semester data for all levels
// const semesterData = {
//   beginner: [
//     {
//       title: "Semester 1",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Quranic Studies", "Arabic Grammar", "Islamic History"]
//     },
//     {
//       title: "Semester 2",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Hadith Studies", "Fiqh", "Tajweed"]
//     }
//   ],
//   intermediate: [
//     {
//       title: "Semester 1",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Advanced Tajweed", "Fiqh Applications", "Seerah Studies"]
//     },
//     {
//       title: "Semester 2",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Quranic Exegesis", "Islamic Finance", "Comparative Religion"]
//     }
//   ],
//   advanced: [
//     {
//       title: "Semester 1",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Advanced Tafseer", "Islamic Jurisprudence", "Hadith Methodology"]
//     },
//     {
//       title: "Semester 2",
//       icon: <VscStarFull className="text-[#009688]" />,
//       items: ["Theological Debates", "Research Methodology", "Islamic Leadership"]
//     }
//   ]
// };

// const Courses = () => {
//   const [activeLevel, setActiveLevel] = useState("beginner");

//   return (
//     <main className="grid grid-rows-[auto_1fr_auto] bg-[#FFFCE1] min-h-screen">
//       <HomeSidebar />
//       <LandingPageHeader />
      
//       {/* <div className='bg-[#FFFCE1]'> */}
//         {/* Hero Section */}
//         <div className="container mx-auto px-4 py-8 md:py-12">
//           <h1 className='text-2xl md:text-4xl font-clash text-[#360400] text-center py-6 md:py-12'>
//             Our Courses - Discover Your Path to Quranic Knowledge
//           </h1>
//           <p className='text-center px-4 text-sm text-[#360400] font-bricolage md:text-base'>
//             DaarutTahseen Offers structured Quranic and islamic studies programs for all levels, 
//             prompting both intellectual <span className="hidden md:inline"><br /></span> and spiritual growth.
//             With a two-semester academic year (16 weeks each) classes run five days weekly, 
//             covering 2-<span className="hidden md:inline"><br /></span>3 subjects daily in 15-hour sessions.
//             Explore our catalog to find the course that suits your goals.
//           </p>
//         </div>
         
//         {/* Course Categories */}
//         <section className='container mx-auto w-full px-4 sm:px-6 lg:w-[80%]'>
//           <div className='border-2 mt-6 border-none rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-sm'>
//             {/* Navigation Tabs */}
//             <div className='flex justify-center items-center border-gray-200 mb-6 sm:mb-8 w-full'>
//               <div className='flex flex-col items-center sm:flex-row w-full sm:w-auto gap-0 sm:gap-4 md:gap-6 lg:gap-8'>
//                 <button
//                   onClick={() => setActiveLevel("beginner")}
//                   className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash text-[#666666] whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
//                     activeLevel === "beginner"
//                       ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
//                       : 'text-[#666666] hover:text-[#009688]'
//                   }`}
//                 >
//                   Beginner
//                 </button>
                
//                 <button
//                   onClick={() => setActiveLevel("intermediate")}
//                   className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash text-[#666666] whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
//                     activeLevel === "intermediate"
//                       ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
//                       : 'text-[#666666] hover:text-[#009688]'
//                   }`}
//                 >
//                   Intermediate
//                 </button>
                
//                 <button
//                   onClick={() => setActiveLevel("advanced")}
//                   className={`px-3 sm:px-4 text-[#666666] md:px-6 py-2 sm:py-3 text-center font-clash whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
//                     activeLevel === "advanced"
//                       ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
//                       : 'text-[#666666] hover:text-[#009688]'
//                   }`}
//                 >
//                   Advanced
//                 </button>
//               </div>
//             </div>

//             {/* Course Items */}
//             <div className='mx-auto'>
//               <h1 className='text-3xl text-[#009688] px-8 sm:text-xl md:text-2xl font-clash mb-3 sm:mb-4 md:mb-6'>
//                 {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Classes
//               </h1>
//               <div className='space-y-4 sm:space-y-5 md:space-y-6'>
//                 {[1, 2, 3, 4].map((courseNum) => {
//                   const course = courseData[activeLevel][courseNum];
//                   return (
//                     <div key={courseNum} className='mb-4 sm:mb-5 md:mb-6 py-4 sm:py-5 px-4 sm:px-5 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-[#009688]/20 hover:shadow-md transition-all duration-300 pb-4 sm:pb-5 md:pb-6'>
//                       <div className='flex items-center gap-2 sm:gap-3'>
//                         <VscStarFull className="text-[#009688] text-lg sm:text-xl"/>
//                         <h2 className='text-base sm:text-lg md:text-xl font-montserrat'>
//                           {course.title}
//                         </h2>
//                       </div>
//                       <ul className='list-disc mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4'>
//                         {course.items.map((item, index) => (
//                           <li key={index} className='ml-5 sm:ml-6 text-xs sm:text-sm md:text-base text-gray-700'>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//            {/* Semester Breakdown */}
//  <section className='container bg-white px-4 w-full mt-10'>
//   <div className='border-2 border-none p-6 md:p-10 bg-white mx-auto'>
//     <h2 className='text-xl text-center md:text-2xl font-clash mb-6 md:mb-8'>
//       Semester Breakdown
//     </h2>
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
//       {semesterData[activeLevel]?.map((semester, index) => (
//         <div 
//           key={index} 
//           className='border border-gray-200 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow duration-300'
//         >
//           <div className='flex items-center gap-3 mb-4'>
//             {semester.icon} 
//             <h3 className='text-lg md:text-xl font-semibold text-[#360400]'>
//               {semester.title}
//             </h3>
//           </div>
//           <ul className='space-y-2 md:space-y-3'>
//             {semester.items.map((item, id) => (
//               <li 
//                 key={id} 
//                 className='list-disc ml-5 md:ml-6 text-sm md:text-base text-gray-700 leading-relaxed'
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>  


//         {/* Enrollment Section */}
//         <section className='container mx-auto px-4 py-8 md:py-12 text-center'>
//           <h1 className='text-2xl md:text-3xl text-[#360400] font-clash mb-4'>
//             How to enroll
//           </h1>
//           <p className='mb-6 text-[#000000] max-w-2xl mx-auto'>
//             Ready to begin your journey of Quranic and islamic knowledge at daarutahseen institution
//           </p>
//           <Button className='mx-auto'>Enroll Now</Button>
//           <p className='mt-6 md:mt-9 text-sm md:text-base'>
//             You'll be redirected to the Admission page to select your class and complete registration.
//           </p>
//           <p className='text-sm md:text-base'>
//             <span className='text-[#009688] font-medium'>Need help? </span> 
//             Our Team is here to guide you.
//           </p>
//         </section>
//       {/* </div> */}

//       <Footer />
//     </main>
//   );
// };

// export default Courses;


import React, { useState } from "react";
import { VscStarFull } from "react-icons/vsc";
import { BiSolidBook } from "react-icons/bi";
import { FcOk,FcOrganization } from "react-icons/fc";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import Button from "../Components/Button";

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
        "Arabic Alphabet & Phonetics"
      ]
    },
    2: {
      title: "Beginner Class 2",
      items: [
        "Introduction to Nahw (Grammar)",
        "Basic Aqeedah (Belief)",
        "Qur'an Memorization (juz 'Amma)",
        "Expanded Arabic Vocabulary",
        "Simple Islamic History"
      ]
    },
    3: {
      title: "Beginner Class 3",
      items: [
        "Life of Prophet Muhammad (Seerah)",
        "Tajwid Rules (Madd Ghunnah)",
        "Introduction to Sarf (Morphology)",
        "Arabic Sentence Formation",
        "Prayer and Worship Basics (Fiqh)"
      ]
    },
    4: {
      title: "Beginner Class 4",
      items: [
        "Revision & Preparation for intermediate",
        "Qur'an Application (Basic Tafsir)",
        "Intermediate Arabic Conversations",
        "Daily Islamic Practices",
        "Simple Hadith Studies"
      ]
    }
  },
  intermediate: {
    1: {
      title: "Intermediate Class 1",
      items: [
        "Islamic Fiqh (Purification and Prayer)",
        "Introduction to Hadith Sciences",
        "Aqeedah (Names and Attributes)",
        "Nahw (Intermediate Level)",
        "Tafsir Selected Surahs"
      ]
    },
    2: {
      title: "Intermediate Class 2",
      items: [
        "Qur'an Recitation with Tajwid Perfection",
        "Islamic Manners (Advanced)",
        "Sarf (Verb Forms and Patterns)",
        "Arabic Speaking Practice",
        "Comparative Aqeedah Studies"
      ]
    },
    3: {
      title: "Intermediate Class 3",
      items: [
        "Research and Report Writing Skills",
        "Tafsir of Medium-Length Surahs",
        "Seerah (Post-Prophethood Battles)",
        "Deep Study of Sarf Rules",
        "Islamic Jurisprudence Transactions"
      ]
    }
  },
  advanced: {
    1: {
      title: "Advanced Class 1",
      items: [
        "Advanced Tajwid and Recitation Practice",
        "Islamic Civilization and History",
        "Qur'an Memorization Nahw Parsing",
        "Aqeedah (Refutation of Deviations)"
      ]
    },
    2: {
      title: "Advanced Class 2",
      items: [
        "Tafsir Deep Dive (e.g, Surah Yusuf)",
        "Advanced Hadith Studies",
        "Fiqh of Worship and Family Life",
        "Arabic Essay Writing"
      ]
    },
    3: {
      title: "Advanced Class 3",
      items: [
        "Detailed Study of Aqeedah and Deviant Sects",
        "Qur'an Memorization Completion",
        "Research Thesis on Islamic Topics",
        "Hadith Authentication Studies",
        "Public Speaking and Da'wah Skills"
      ]
    }
  }
};

// Semester data for all levels
const semesterData = {
  beginner: [
    {
      title: "First Semester",
      icon: <BiSolidBook className="text-[#009688]" />,
      items: ["Focus on core foundation", "Midterm test after 2 months", "Final exams at the end of semester"]
    },
    {
      title: "Second Semester",
      icon: <FcOk className="text-[#009688]" />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"]
    },
    {
      title: "Assessments Include:",
      icon: <FcOrganization className="text-[#009688]" />,
      items: ["Written exams", "Oral exmas (Qur'an, Hadith, Arabic)", "Research Projects or assignments"]
    }
  ],
  intermediate: [
    {
      title: "First Semester",
      icon: <BiSolidBook className="text-[#009688]" />,
      items: ["Focus on core foundation", "Midterm test after 2 months", "Final exams at the end of semester"]
    },
    {
      title: "Second Semester",
      icon: <FcOk className="text-[#009688]" />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"]
    },
    {
      title: "Assessments Include:",
      icon: <FcOrganization className="text-[#009688]" />,
      items: ["Written exams", "Oral exams (Qur'an , Hadith, Arabic)", "Research projects or assignments"]
    }
  ],
  advanced: [
    {
      title: "First Semester",
      icon: <BiSolidBook className="text-[#009688]" />,
      items: ["Advanced Tafseer", "Islamic Jurisprudence", "Hadith Methodology"]
    },
     {
      title: "Second Semester",
      icon: <FcOk className="text-[#009688]" />,
      items: ["Emphasis on mastery", "Class Progression", "Final exams"]
    },
     {
      title: "Assessments Include:",
      icon: <FcOrganization className="text-[#009688]" />,
      items: ["Written exams", "Oral exams (Qur'an , Hadith, Arabic)", "Research projects or assignments"]
    }
  ]
};

const Courses = () => {
  const [activeLevel, setActiveLevel] = useState("beginner");

  // Determine how many courses to show based on level
  const getCourseCount = () => {
    switch(activeLevel) {
      case "beginner": return 4;
      case "intermediate": return 3;
      case "advanced": return 3;
      default: return 4;
    }
  };

  return (
    <main className="grid grid-rows-[auto_1fr_auto] bg-[#FFFCE1] min-h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className='text-2xl md:text-4xl font-clash  text-[#360400] text-center py-6 md:py-12'>
          Our Courses - Discover Your Path to Quranic Knowledge
        </h1>
        <p className='text-center px-4  text-sm text-[#360400] font-bricolage md:text-base'>
          DaarutTahseen Offers structured Quranic and islamic studies programs for all levels, 
          prompting both intellectual <span className="hidden md:inline"><br /></span> and spiritual growth.
          With a two-semester academic year (16 weeks each) classes run five days weekly, 
          covering 2-<span className="hidden md:inline"><br /></span>3 subjects daily in 15-hour sessions.
          Explore our catalog to find the course that suits your goals.
        </p>
      </div>
       
      {/* Course Categories */}
      <section className='container mx-auto w-full px-4 sm:px-6 lg:w-[80%]'>
        <div className='border-2 mt-6 border-none rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-sm'>
          {/* Navigation Tabs */}
          <div className='flex justify-center items-center border-gray-200 mb-6 sm:mb-8 w-full'>
            <div className='flex flex-col items-center sm:flex-row w-full sm:w-auto gap-0 sm:gap-4 md:gap-6 lg:gap-8'>
              <button
                onClick={() => setActiveLevel("beginner")}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
                  activeLevel === "beginner"
                    ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
                    : 'text-[#666666] hover:text-[#009688]'
                }`}
              >
                Beginner
              </button>
              
              <button
                onClick={() => setActiveLevel("intermediate")}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
                  activeLevel === "intermediate"
                    ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
                    : 'text-[#666666] hover:text-[#009688]'
                }`}
              >
                Intermediate
              </button>
              
              <button
                onClick={() => setActiveLevel("advanced")}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-center font-clash whitespace-nowrap transition-colors duration-200 text-xl sm:text-2xl md:text-3xl ${
                  activeLevel === "advanced"
                    ? 'text-[#009688] font-clash border-b-2 border-[#009688]' 
                    : 'text-[#666666] hover:text-[#009688]'
                }`}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Course Items */}
          <div className='mx-auto'>
            <h1 className='text-3xl text-[#009688] px-8 sm:text-xl md:text-2xl font-clash mb-3 sm:mb-4 md:mb-6'>
              {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Classes
            </h1>
            <div className='space-y-4 sm:space-y-5 md:space-y-6'>
              {Array.from({ length: getCourseCount() }, (_, i) => i + 1).map((courseNum) => {
                const course = courseData[activeLevel][courseNum];
                return (
                  <div key={courseNum} className='mb-4 sm:mb-5 md:mb-6 py-4 sm:py-5 px-4 sm:px-5 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-[#009688]/20 hover:shadow-md transition-all duration-300 pb-4 sm:pb-5 md:pb-6'>
                    <div className='flex items-center gap-2 sm:gap-3'>
                      <VscStarFull className="text-black text-lg sm:text-xl"/>
                      <h2 className='text-base sm:text-lg text-[#360400] md:text-xl font-montserrat'>
                        {course.title}
                      </h2>
                    </div>
                    <ul className='list-disc mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4'>
                      {course.items.map((item, index) => (
                        <li key={index} className='ml-5 sm:ml-6 text-xs sm:text-sm md:text-base text-gray-700'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Semester Breakdown - Fixed Version */}
 <section className='bg-white mx-auto flex justify-center  shadow-xl px-4 w-full mt-10 mb-10'>
  <div className=' justify-between p-6 md:p-8 lg:p-10  '>
    <h2 className='text-3xl text-center font-clash  text-[#360400]  md:mb-8'>
      Semester Breakdown
    </h2>
    <div className='grid  lg:flex grid-cols-1 gap-7 md:grid-cols-2 lg:gap-15'>
      {semesterData[activeLevel]?.map((semester, index) => (
        <div 
          key={index} 
          className='border border-gray-200 p-5 md:p-6 rounded-lg hover:shadow-md transition-all duration-300'>
          <div className='flex  items-center gap-3 mb-4'>
            {semester.icon} 
            <h3 className='text-sm md:text-sm font-montserrat text-[#360400]'>
              {semester.title}
            </h3>
          </div>
          <ul className='space-y-2 '>
            {semester.items.map((item, id) => (
              <li 
                key={id} 
                className='list-disc text-gray-700 text-sm md:text-base '
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section> 

      {/* Enrollment Section */}
      <section className='container mx-auto px-4 py-8 md:py-12 text-center'>
        <h1 className='text-3xl md:text-2xl text-[#360400] font-clash mb-4'>
          How to Enroll
        </h1>
        <p className='mb-6 text-[#000000] max-w-2xl mx-auto'>
          Ready to begin your journey of Quranic and islamic knowledge at daarutahseen institution
        </p>
        <Button className='mx-auto'>Enroll Now</Button>
        <p className='mt-6 md:mt-9 text-sm md:text-base'>
          You'll be redirected to the Admission page to select your class and complete registration.
        </p>
        <p className='text-sm md:text-base'>
          <span className='text-[#009688] font-medium'>Need help? </span> 
          Our Team is here to guide you.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default Courses;