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
    <div className='w-full overflow-hidden'>
      <div className='rounded-2xl flex flex-col bg-white p-5 sm:p-4 lg:p-8 w-full overflow-hidden'>
        <div className='divide-y divide-gray-200 overflow-hidden'>
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4 lg:py-6 overflow-hidden'>
              {/* Course Info - Full width on mobile */}
              <div className='flex items-start w-full sm:flex-1 min-w-0 overflow-hidden'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-14 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-14 rounded-lg object-cover flex-shrink-0'
                />
                <div className='ml-2 sm:ml-3 lg:ml-4 min-w-0 flex-1 overflow-hidden'>
                  <h3 className='font-monsterrat font-bold text-sm sm:text-base truncate'>
                    {item.title}
                  </h3>
                  <p className='text-xs sm:text-sm font-monsterrat text-gray-600 truncate mt-0.5'>
                    {item.chapter}
                  </p>
                  <p className='text-xs sm:text-sm text-[#A9A9A9] font-montserrat truncate mt-0.5'>
                    {item.Author}
                  </p>
                </div>
              </div>

              {/* Mobile: Date, Status, and Button in column */}
              <div className='flex flex-col sm:hidden w-full gap-2 overflow-hidden'>
                {/* Date and Status in row */}
                <div className='flex items-center justify-between w-full gap-2'>
                  {/* Date - Compact mobile version */}
                  <div className='bg-[#FFFCE1] rounded-xl px-2 py-1 text-center flex-shrink-0'>
                    <p className='text-xs font-bold whitespace-nowrap'>
                      {item.Date}
                    </p>
                  </div>

                  {/* Time Status */}
                  <div className='flex items-center font-bold flex-shrink-0 min-w-0'>
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        item.id === 1
                          ? "bg-red-500"
                          : item.time === "Completed"
                          ? "bg-[#A9A9A9]"
                          : "bg-[#33ABA0]"
                      }`}></div>
                    <p
                      className={`text-xs font-bold ml-2 truncate ${
                        item.id === 1
                          ? "text-red-500"
                          : item.time === "Completed"
                          ? "text-[#A9A9A9]"
                          : "text-[#33ABA0]"
                      }`}>
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Button - Full width mobile version */}
                <button
                  className={`w-full px-3 py-2 rounded-md text-xs font-clash ${
                    item.button.label === "View"
                      ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                      : item.id === 1
                      ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                      : "bg-gray-200 text-[#CCCCCC] cursor-not-allowed"
                  }`}>
                  {item.button.label}
                </button>
              </div>

              {/* Desktop: Date, Status, and Button separately */}
              <div className='hidden sm:flex sm:items-center sm:gap-3 lg:gap-4 sm:flex-shrink-0'>
                {/* Date */}
                <div className='flex-shrink-0'>
                  <div className='bg-[#FFFCE1] rounded-2xl px-2 py-1.5 lg:px-3 lg:py-2 font-bold text-center min-w-fit'>
                    <p className='text-xs lg:text-sm whitespace-nowrap'>
                      {item.Date}
                    </p>
                  </div>
                </div>

                {/* Time Status */}
                <div className='flex items-center font-bold flex-shrink-0 min-w-0'>
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      item.id === 1
                        ? "bg-red-500"
                        : item.time === "Completed"
                        ? "bg-[#A9A9A9]"
                        : "bg-[#33ABA0]"
                    }`}></div>
                  <p
                    className={`text-sm lg:text-base font-bold ml-2 truncate ${
                      item.id === 1
                        ? "text-red-500"
                        : item.time === "Completed"
                        ? "text-[#A9A9A9]"
                        : "text-[#33ABA0]"
                    }`}>
                    {item.time}
                  </p>
                </div>

                {/* Button */}
                <button
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-sm lg:text-base font-clash flex-shrink-0 whitespace-nowrap ${
                    item.button.label === "View"
                      ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                      : item.id === 1
                      ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                      : "bg-gray-200 text-[#CCCCCC] cursor-not-allowed"
                  }`}>
                  {item.button.label}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-4'>
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
