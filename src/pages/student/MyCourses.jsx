import { useMemo, useCallback, useState } from "react";
import { Filter, RefreshCcw } from "lucide-react";

import QuizCardComponent from "../../Components/QuizCardComponent";
import TotalCourses from "../../Components/TotalCourses";
import StudentAssignment from "../../Components/StudentAssignment";
import ClassCompo from "../../Components/ClassCompo";

import useUIStore from "../../store/useUIStore";
import { usePageTitle } from "../../hooks/usePageTitle";

import { courses, quizList } from "../../constants/data";
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
    <div className="p-4 min-h-screen font-clash">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-accent">
          My Courses
        </h1>

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
      </div>

      {/* Tab Content */}
      {activeTab === "Total Courses" && (
        <div className="bg-white w-full p-2 sm:p-4 rounded-lg shadow">
          <div className="w-full mx-auto space-y-4">
            {/* Header - Hide on mobile since course cards are self-explanatory */}
            <div className="hidden lg:grid grid-cols-4 gap-4 py-2 px-3 md:py-3 mb-4 bg-light-grey rounded font-semibold text-md xl:text-lg text-gray-700">
              <div>Course</div>
              <div>Progress</div>
              <div>Score</div>
              <div>Status</div>
            </div>

            {/* Mobile Header - Optional simplified version */}
            <div className="lg:hidden flex justify-between items-center py-2 px-3 mb-4 bg-light-grey rounded text-sm font-semibold">
              <span>Your Courses</span>
              <span className="text-xs text-gray-600">
                {filteredCourses?.length || 0} total
              </span>
            </div>

            <TotalCourses
              courses={filteredCourses}
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
        </div>
      )}

      {activeTab === "Quiz" && quizList.length > 0 && (
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full">
            {quizList.map((quiz) => (
              <QuizCardComponent key={quiz.id} {...quiz} />
            ))}
          </div>
        </div>
      )}

      {/* Classes Tab */}

      {activeTab === "Classes" && <ClassCompo />}

      {/* Assignment Tab */}

      {activeTab === "Assignment" && quizList.length > 0 && (
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full">
            {quizList.map((assignment) => (
              <StudentAssignment key={assignment.id} {...assignment} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
