import React, { useState } from "react";
import Pagination from "./Pagination";
import { classesData } from "../constants/data";

const ClassCompo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  // Filter logic
  const filteredClasses = classesData.filter((item) => {
    const matchesDate = filterDate === "" || item.Date.includes(filterDate);
    const matchesStatus =
      filterStatus === "" ||
      (filterStatus === "Completed" && item.time === "Completed") ||
      (filterStatus === "Upcoming" && item.time !== "Completed");
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  // Separate upcoming and completed classes from filtered results
  const upcomingClasses = filteredClasses.filter(
    (item) => item.time !== "Completed"
  );
  const completedClasses = filteredClasses.filter(
    (item) => item.time === "Completed"
  );

  // Pagination for completed classes only
  const totalPages = Math.ceil(completedClasses.length / itemsPerPage);
  const paginatedCompletedClasses = completedClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleReset = () => {
    setFilterDate("");
    setFilterStatus("");
    setSearchTerm("");
    setCurrentPage(1);
  };

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
      {/* Redesigned Filters Bar (like Notifications) */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter Toggle (for future pills) */}
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            // onClick={() => setShowFilters(!showFilters)}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 21v-2a4 4 0 00-8 0v2M12 11v3m0 0V7m0 7h.01"
              />
            </svg>
            <span className="text-sm font-medium">Filter by</span>
          </button>

          {/* Date Dropdown */}
          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <option value="">Date</option>
            <option value="July">July</option>
            <option value="June">June</option>
          </select>

          {/* Status Dropdown */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <option value="">Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

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
