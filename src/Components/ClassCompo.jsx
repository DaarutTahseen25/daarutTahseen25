import React, { useState } from "react";
import { classesData } from "../constants/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClassCompo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(classesData.length / itemsPerPage);

  const paginatedData = classesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <div className='rounded-2xl flex flex-col  bg-white p-4 md:p-8 w-full overflow-hidden'>
        <div className='divide-y divide-gray-200'>
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className='flex flex-col md:flex-row items-start md:items-center gap-4 py-2 md:py-6'>
              {/* Course Info */}
              <div className='flex items-start flex-1 min-w-0'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-18 h-14 md:w-25 md:h-16 rounded-lg object-cover flex-shrink-0'
                />
                <div className='ml-3 md:ml-5 min-w-0'>
                  <h3 className='font-monsterrat font-bold truncate'>
                    {item.title}
                  </h3>
                  <p className='text-xs font-monsterrat md:text-sm truncate'>
                    {item.chapter}
                  </p>
                  <p className='text-xs md:text-sm text-[#A9A9A9] font-montserrat truncate'>
                    {item.Author}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className='flex-1'>
                <div className='bg-[#FFFCE1] rounded-2xl p-3 md:p-1 md:mx-15 font-bold text-center'>
                  <p className='text-xs md:text-sm'>{item.Date}</p>
                </div>
              </div>

              {/* Time Status */}
              <div className='flex items-center font-bold w-full md:w-auto md:px-4'>
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.id === 1
                      ? "bg-red-500"
                      : item.time === "Completed"
                      ? "bg-[#A9A9A9]"
                      : "bg-[#33ABA0]"
                  }`}></div>
                <p
                  className={`text-xs font-bold md:text-sm ml-2 ${
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
                className={`px-5 py-2 rounded-md text-lg font-clash ${
                  item.button.label === "View"
                    ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                    : item.id === 1
                    ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                    : "bg-gray-200 text-[#CCCCCC]"
                }`}>
                {item.button.label}
              </button>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className='flex self-end border border-[#CCCCCC] rounded w-fit  mt-4 '>
          <button
            onClick={() => changePage(currentPage - 1)}
            className='px-4 py-1 border-r border-[#CCCCCC]  disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm'
            disabled={currentPage === 1}>
            <ChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`px-4 py-1    ${
                currentPage === index + 1
                  ? "bg-primary hover:bg-buttonhover duration-200 transition-colors cursor-pointer text-white"
                  : "bg-white hover:bg-buttonhover duration-200 transition-colors cursor-pointer border-r  border-[#CCCCCC]"
              }`}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            className='px-4 py-1  disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm'
            disabled={currentPage === totalPages}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCompo;
