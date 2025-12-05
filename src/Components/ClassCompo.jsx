import React, { useState } from "react";
import Pagination from "./Pagination";
import { classesData } from "../constants/data";

const ClassCompo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Separate upcoming and completed classes
  const upcomingClasses = classesData.filter(
    (item) => item.time !== "Completed"
  );
  const completedClasses = classesData.filter(
    (item) => item.time === "Completed"
  );

  // Pagination for completed classes only
  const totalPages = Math.ceil(completedClasses.length / itemsPerPage);
  const paginatedCompletedClasses = completedClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const ClassCard = ({ item, isUpcoming }) => {
    const isUrgent = item.time.includes("min");
    const statusColor = isUrgent
      ? "text-red-500"
      : isUpcoming
      ? "text-[#33ABA0]"
      : "text-gray-400";
    const dotColor = isUrgent
      ? "bg-red-500"
      : isUpcoming
      ? "bg-[#33ABA0]"
      : "bg-gray-400";

    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
        {/* Course Info */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-16 h-12 sm:w-20 sm:h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 truncate mt-0.5">
              {item.chapter}
            </p>
            <p className="text-xs text-gray-400 truncate mt-0.5">
              {item.Author}
            </p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center justify-between sm:justify-start sm:gap-6">
          <div className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
            {item.Date}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className={`text-xs sm:text-sm font-semibold ${statusColor}`}>
              {item.time}
            </span>
          </div>

          {/* Button */}
          <button
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
              isUpcoming
                ? "bg-[#33ABA0] text-white hover:bg-[#2a9688]"
                : "bg-[#33ABA0] text-white hover:bg-[#2a9688]"
            }`}
          >
            {item.button.label}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-8">
      {/* Upcoming Classes Section */}
      {upcomingClasses.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Upcoming Classes
          </h2>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {upcomingClasses.map((item) => (
                <ClassCard key={item.id} item={item} isUpcoming={true} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Completed Classes Section */}
      {completedClasses.length > 0 && (
        <div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {paginatedCompletedClasses.map((item) => (
                <ClassCard key={item.id} item={item} isUpcoming={false} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassCompo;
