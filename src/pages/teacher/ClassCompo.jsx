import React, { useState } from "react";
import Pagination from "../../Components/Pagination";

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
      label: "Start",
    },
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
      label: "Start",
    },
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
      label: "Start",
    },
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
      label: "Start",
    },
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
      label: "Start",
    },
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
      label: "View",
    },
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
      label: "View",
    },
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
      label: "View",
    },
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
      label: "View",
    },
  },
];

const ClassCompo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(classesData.length / itemsPerPage);

  const paginatedData = classesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="mb-4 pb-4 border-b border-gray-200">
        <h1 className="text-[25px] font-clash font-medium">Upcoming Classes</h1>
      </div>
      <div className="bg-white rounded-[15px] p-4 sm:p-6 lg:p-8 shadow-sm">
        <div className="space-y-4">
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_auto] 
                gap-3 sm:gap-4 lg:gap-6 p-4 rounded-xl 
                border border-gray-100  transition
              "
            >
              {/* Course Info */}
              <div className="flex items-start gap-3 min-w-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-12 lg:w-20 lg:h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {item.chapter}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {item.Author}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center sm:justify-center">
                <div className="bg-[#FFFCE1] rounded-full px-3 py-1 text-xs sm:text-sm font-bold whitespace-nowrap">
                  {item.Date}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center sm:justify-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.id === 1
                      ? "bg-red-500"
                      : item.time === "Completed"
                      ? "bg-gray-400"
                      : "bg-[#33ABA0]"
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-bold truncate ${
                    item.id === 1
                      ? "text-red-500"
                      : item.time === "Completed"
                      ? "text-gray-400"
                      : "text-[#33ABA0]"
                  }`}
                >
                  {item.time}
                </span>
              </div>

              {/* Button */}
              <div className="flex items-center sm:justify-center">
                <button
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    item.button.label === "View" || item.id === 1
                      ? "bg-primary text-white hover:bg-buttonhover cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {item.button.label}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassCompo;
