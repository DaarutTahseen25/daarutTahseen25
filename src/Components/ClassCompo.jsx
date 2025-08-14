import React, { useState } from "react";
import Pagination from "./Pagination";
import { classesData } from "../constants/data";

const ClassCompo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(classesData.length / itemsPerPage);

  const paginatedData = classesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='w-full'>
      <div className='bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm'>
        <div className='space-y-4'>
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className='
                flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_auto] 
                gap-3 sm:gap-4 lg:gap-6 p-4 rounded-xl 
                border border-gray-100 hover:shadow-md transition
              '>
              {/* Course Info */}
              <div className='flex items-start gap-3 min-w-0'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-16 h-12 lg:w-20 lg:h-14 rounded-lg object-cover flex-shrink-0'
                />
                <div className='min-w-0'>
                  <h3 className='font-bold text-sm sm:text-base truncate'>
                    {item.title}
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-600 truncate'>
                    {item.chapter}
                  </p>
                  <p className='text-xs sm:text-sm text-gray-400 truncate'>
                    {item.Author}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className='flex items-center sm:justify-center'>
                <div className='bg-[#FFFCE1] rounded-full px-3 py-1 text-xs sm:text-sm font-bold whitespace-nowrap'>
                  {item.Date}
                </div>
              </div>

              {/* Status */}
              <div className='flex items-center sm:justify-center gap-2'>
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
                  }`}>
                  {item.time}
                </span>
              </div>

              {/* Button */}
              <div className='flex items-center sm:justify-center'>
                <button
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    item.button.label === "View" || item.id === 1
                      ? "bg-primary text-white hover:bg-buttonhover"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}>
                  {item.button.label}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-6'>
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
