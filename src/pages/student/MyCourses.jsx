import { useMemo, useCallback } from "react";
import { Filter, RefreshCcw } from "lucide-react";
import useUIStore from "../../store/useUIStore";
import QuizCardComponent from "../../Components/QuizCardComponent";
import TotalCourses from "../../Components/TotalCourses";

import { courses, quizList } from "../../constants/data";
import Tabs from "./CoursesTab";




const classesData = [
  {
    id: 1,
    thumbnail: "/quran-recitation.png",
    title: "Qur'an Recitation & Tajwid",
    chapter: "Chapter 1: Introduction to Tajwid",
    Author: "By Abdulmalik Ahmad",
    Date: "15th July, 2025 : 2:00PM",
    time: "2 mins left",
    button: {
      label: "Join"
    }
  },
  { 
    id: 2,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics",
    chapter: "Chapter 1: Orientation to Arabic Script",
    Author: "By Ibrahim Lawal",
    Date: "15th July, 2025 : 4:00PM",
    time: "2 hrs left",
    button: {
      label: "Join"
    }
  },
  {
    id: 3,
    thumbnail: "/basic-islamic.png",
    title: "Basic Islamic Manners",
    chapter: "Chapter 1: Personal Manners",
    Author: "By Ismail Mahmud",
    Date: "16th July, 2025 : 8:00AM",
    time: "18 hrs left",
    button: {
      label: "Join"
    }
  },
  {
    id: 4,
    thumbnail: "/short-surah.png",
    title: "Short Surah Memorization",
    chapter: "Chapter 1: Surah Al-Fatihah",
    Author: "By Muhanned Suleiman",
    Date: "16th July, 2025 : 12:00PM",
    time: "22 hrs left",
    button: {
      label: "Join"
    }
  },
  {
    id: 5,
    thumbnail: "/prophets-stories.png",
    title: "Stories of the Prophet",
    chapter: "Chapter 1: Introduction",
    Author: "By Saliu Lukman",
    Date: "17th July, 2025 : 10:00AM",
    time: "1day 20hrs left",
    button: {
      label: "Join"
    }
  },
  {
    id: 6,
    thumbnail: "/quran-recitation.png",
    title: "Qur'an Recitation & Tajwid",
    chapter: "Chapter 2: Makharij (Articulation Points)",
    Author: "By Abdulmalik Ahmad",
    Date: "14th July, 2025 : 4:00PM",
    time: "Completed",
    button: {
      label: "View"
    }
  },
  {
    id: 7,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics",
    chapter: "Chapter 2: Arabic Alphabet Overview",
    Author: "By Ibrahim Lawal",
    Date: "14th July, 2025 : 12:00AM",
    time: "Completed",
    button: {
      label: "View"
    }
  },
  {
    id: 8,
    thumbnail: "/basic-islamic.png",
    title: "Basic Islamic Manners",
    chapter: "Chapter 2: Manners with Family and ",
    Author: "By Ismail Mahmud",
    Date: "13th July, 2025 : 2:00PM",
    time: "Completed",
    button: {
      label: "View"
    }
  },
  {
    id: 9,
    thumbnail: "/short-surah.png",
    title: "Short Surah Memorization",
    chapter: "Chapter 2: Surah Al-Ikhlas",
    Author: "By Muhammed Suleiman",
    Date: "13th July, 2025 : 8:00AM",
    time: "Completed",
    button: {
      label: "View"
    }
  }
];

export default function MyCourses() {
  const {
    expandedCourse,
    searchTerm,
    filterProgress,
    filterStatus,
    activeTab,
    setExpandedCourse,
    setSearchTerm,
    setFilterProgress,
    setFilterStatus,
    setActiveTab,
    resetFilters,
  } = useUIStore();

  const handleSearchChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((course) =>
        filterProgress === "Progress" ? course.progress < 100 : true
      )
      .filter((course) =>
        filterStatus ? course.status === filterStatus : true
      );
  }, [searchTerm, filterProgress, filterStatus]);

  return (
    <div className='p-4 min-h-screen font-clash'>
      <div className='mb-4'>
        
        <h1 className='text-3xl md:text-4xl font-semibold text-accent'>
          My Courses
          
        </h1> 
        

        {/* Filters */}
        <div className='flex flex-wrap items-center gap-3 mt-4 bg-white max-w-3xl px-3 py-2 rounded-lg border border-textmuted'>
          <button className='flex items-center px-3 py-1 text-textmain'>
            <Filter size={16} className='mr-2' /> Filter by
          </button>
          <select
            className='px-2 py-1 text-sm border-l border-textmuted text-textmain'
            value={filterProgress}
            onChange={(e) => setFilterProgress(e.target.value)}>
            <option value=''>Date</option>
            <option value='Progress'>Progress</option>
          </select>
          <select
            className='px-2 py-1 text-sm border-l border-textmuted text-textmain'
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}>
            <option value=''>Status</option>
            <option value='Completed'>Completed</option>
            <option value='In progress'>In progress</option>
          </select>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='border px-2 py-1 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-1 focus:ring-primary'
          />
          <button
            onClick={resetFilters}
            className='text-red-400 text-sm flex items-center gap-1'>
            <RefreshCcw className='w-5 h-5' />
            Reset
          </button>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
      {activeTab === "Total Courses" && (
        <div className='bg-white w-full p-4 rounded-lg shadow overflow-auto'>
          <div className='p-2 min-w-3xl mx-auto space-y-4'>
            <div className='grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey'>
              <div className='font-semibold'>Course Name</div>
              <div className='font-semibold'>Progress</div>
              <div className='font-semibold'>Overall Score</div>
              <div className='font-semibold'>Status</div>
            </div>
            <TotalCourses
              courses={filteredCourses}
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
        </div>
      )}

      {activeTab === "Quiz" && quizList.length > 0 && (
        <div className='w-full overflow-x-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full'>
            {quizList.map((quiz) => (
              <QuizCardComponent key={quiz.id} {...quiz} />
            ))}
          </div>
        </div>
      )}

      
      {/* Classes Tab */}

     { activeTab === "Classes" && (
     <div className="rounded-2xl bg-white w-full shadow-2xl overflow-hidden">
      <div className="divide-y divide-gray-200">

      {classesData.map((item) => (
        <div 
          key={item.id} 
          className="flex  flex-col md:flex-row items-start md:items-center  gap-4 p-2 md:p-6  ">
          {/* Course Info */}
          <div className="flex items-start flex-1 min-w-0">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-18 h-14 md:w-25 md:h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="ml-3 md:ml-5 min-w-0">
              <h3 className="font-monsterrat font-bold  truncate">{item.title}</h3>
              <p className="text-xs font-monsterrat weight:700  md:text-sm  truncate">{item.chapter}</p>
              <p className="text-xs md:text-sm text-[#A9A9A9] font-montserrat truncate">{item.Author}</p>
            </div>
          </div>
          
          {/* Date */}
          <div className="flex-1  ">
            <div className="bg-[#FFFCE1] rounded-2xl p-3 md:p-1 md:mx-15 font-bold text-center">
              <p className="text-xs md:text-sm  ">{item.Date}</p>
            </div>
          </div>
          
          {/* Time Status */}
          <div className="flex items-center font-bold w-full md:w-auto md:px-4">
            <div className={`w-2 h-2 rounded-full ${
              item.id === 1 ? "bg-red-500" : 
              item.time === "Completed" ? "bg-[#A9A9A9]" : "bg-[#33ABA0]"
            }`}>

              
            </div>
            <p className={`text-xs font-bold md:text-sm ml-2 ${
              item.id === 1 ? "text-red-500" :
              item.time === "Completed" ? "text-[#A9A9A9]" : "text-[#33ABA0]"
            }`}>
              {item.time}
            </p>
          </div>
          
          {/* Button */}
         
           <button className={`px-5 py-2 rounded-md text-lg font-clash ${
              item.button.label === "View" 
                ? "bg-[#33ABA0] text-white" 
                : item.id === 1 
                  ? "bg-[#33ABA0] text-white" 
                  : "bg-gray-200 text-[#CCCCCC]" 
            }`}>
              {item.button.label}
            </button>
        </div>
        
      ))}
      </div>
      
    </div>

     )}

    </div>
  );
}
