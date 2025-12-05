import { useMemo, useCallback } from "react";
import { Filter, RefreshCcw } from "lucide-react";

import QuizCardComponent from "../../Components/QuizCardComponent";
import TotalCourses from "../../Components/TotalCourses";
import StudentAssignments from "../../Components/StudentAssignments";
import StudentExams from "../../Components/StudentExams";
import ClassCompo from "../../Components/ClassCompo";
import DashTitle from "../../Components/DashTitle";

import useUIStore from "../../store/useUIStore";
import { usePageTitle } from "../../hooks/usePageTitle";

import { courses, examList } from "../../constants/data";
import Tabs from "./CoursesTab";

export default function MyCourses() {
  usePageTitle("My Courses");
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
    <div className="min-h-screen font-clash ">
      <div className="mb-4">
        <div className="max-w-7xl  mb-8 md:mb-12">
          <DashTitle
            title="My Courses"
            subtitle="Access and track progress on all your enrolled courses"
          />
        </div>

        {/* Filters */}
        <div className="w-full mt-4 bg-white p-3 sm:p-4 rounded-lg border border-textmuted shadow-sm">
          {/* Mobile: Stack everything vertically */}
          <div className="flex flex-col sm:hidden space-y-3">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-textmain font-medium">
                <Filter size={16} className="mr-2" />
                Filter & Search
              </div>
              <button
                onClick={resetFilters}
                className="text-red-400 text-sm flex items-center gap-1 px-2 py-1 hover:bg-red-50 rounded transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {/* Search Input - Full width on mobile */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full border px-3 py-2 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />

            {/* Filter Selects - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-3">
              <select
                className="w-full px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
              >
                <option value="">All Dates</option>
                <option value="Progress">By Progress</option>
              </select>

              <select
                className="w-full px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In progress">In Progress</option>
              </select>
            </div>
          </div>

          {/* Tablet/Desktop: Horizontal layout */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 lg:gap-4">
            {/* Filter Label */}
            <div className="flex items-center text-textmain font-medium whitespace-nowrap">
              <Filter size={16} className="mr-2" />
              Filter by
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-textmuted hidden md:block"></div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <select
                className="px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white min-w-0 flex-shrink-0"
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
              >
                <option value="">Date</option>
                <option value="Progress">Progress</option>
              </select>

              <select
                className="px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white min-w-0 flex-shrink-0"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">Status</option>
                <option value="Completed">Completed</option>
                <option value="In progress">In Progress</option>
              </select>
            </div>

            {/* Search Input - Flexible width */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 min-w-48 max-w-xs border px-3 py-2 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="text-red-400 text-sm flex items-center gap-1 px-3 py-2 hover:bg-red-50 rounded transition-colors whitespace-nowrap flex-shrink-0"
          >
            <RefreshCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      {activeTab === "Total Courses" && (
        <div className="w-full mt-6">
          <TotalCourses
            courses={filteredCourses}
            expandedCourse={expandedCourse}
            setExpandedCourse={setExpandedCourse}
          />
        </div>
      )}

      {/* Classes Tab */}

      {activeTab === "Classes" && (
        <div className="mt-6">
          <ClassCompo />
        </div>
      )}

      {/* Assignment Tab */}

      {activeTab === "Assignment" && examList.length > 0 && (
        <div className="w-full overflow-x-hidden mt-6">
          <StudentAssignments assignments={examList} />
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
