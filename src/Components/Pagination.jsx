import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // adjust import if using other icons

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className='flex self-end border border-[#CCCCCC] rounded w-fit mt-4'>
      {/* Previous Button */}
      <button
        onClick={() => changePage(currentPage - 1)}
        className='px-4 py-1 border-r border-[#CCCCCC] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm'
        disabled={currentPage === 1}>
        <ChevronLeft />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => changePage(index + 1)}
          className={`px-4 py-1 ${
            currentPage === index + 1
              ? "bg-primary text-white hover:bg-buttonhover transition-colors duration-200"
              : "bg-white border-r border-[#CCCCCC] hover:bg-buttonhover transition-colors duration-200"
          }`}>
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => changePage(currentPage + 1)}
        className='px-4 py-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm'
        disabled={currentPage === totalPages}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
