import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers with smart ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-1 self-end mt-6">
      {/* Previous Button */}
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-9 h-9 text-gray-500 text-sm"
          >
            •••
          </span>
        ) : (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all ${
              currentPage === page
                ? "bg-primary text-white shadow-sm"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default Pagination;
