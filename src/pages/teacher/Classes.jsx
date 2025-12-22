import { useMemo, useCallback, useState } from "react";
import { Filter, RefreshCcw } from "lucide-react";

// import StudentAssignments from "../../Components/StudentAssignments";
import StudentExams from "../../Components/StudentExams";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

import { courses, examList, students } from "../../constants/data";
import ReusableTabs from "../../Components/ReusableTabs";
import ClassCompo from "./ClassCompo";
import TotalStudents from "./TotalStudents";
import UploadResources from "./UploadResources";
import Assignments from "./Assignments";

export default function MyCourses() {
  usePageTitle("My Courses");
  // Local tab state
  const [activeTab, setActiveTab] = useState("Classes");
  // Local filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProgress, setFilterProgress] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setFilterProgress("");
    setFilterStatus("");
  }, []);

  const filteredStudents = useMemo(() => {
    return students
      .filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((student) =>
        filterProgress === "In progress" ? student.progress < 100 : true
      )
      .filter((student) =>
        filterStatus ? student.status === filterStatus : true
      );
  }, [searchTerm, filterProgress, filterStatus]);

  return (
    <div className="min-h-screen font-clash  ">
      <div className="mb-4">
        <div className="max-w-7xl  mb-8 md:mb-12">
          <DashTitle
            title="My Classes"
            subtitle="View schedules, manage students, and monitor class activities"
          />
        </div>

        {/* Redesigned Filters Bar (like Notifications) */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Toggle (for future pills) */}
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              // onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by</span>
            </button>

            {/* Date Dropdown */}
            <select
              value={filterProgress}
              onChange={(e) => setFilterProgress(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option value="">Date</option>
              <option value="Progress">Progress</option>
            </select>

            {/* Status Dropdown */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option value="">Status</option>
              <option value="Completed">Completed</option>
              <option value="In progress">In Progress</option>
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
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ReusableTabs
        tabs={["Classes", "Total Students", "Assignment", "Exam"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Tab Content */}
      {activeTab === "Total Students" && (
        <div className="w-full mt-6">
          <TotalStudents students={filteredStudents} />
        </div>
      )}

      {/* Classes Tab */}
      {activeTab === "Classes" && (
        <div className="mt-6 space-y-6">
          <ClassCompo />
          <UploadResources />
        </div>
      )}

      {/* Assignment Tab */}
      {activeTab === "Assignment" && courses.length > 0 && (
        <div className="w-full overflow-x-hidden mt-6">
          <Assignments />
        </div>
      )}

      {/* Exam Tab */}
      {activeTab === "Exam" && examList.length > 0 && (
        <div className="w-full overflow-x-hidden mt-6">
          <StudentExams exams={examList} />
        </div>
      )}
    </div>
  );
}
