import { useMemo, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Filter, RefreshCcw } from "lucide-react";
import useUIStore from "../../store/useUIStore";
import QuizCardComponent from "../../Components/QuizCardComponent";
import TotalCourses from "../../Components/TotalCourses";

import { courses, quizList } from "../../constants/data";
import Tabs from "./CoursesTab";
import ClassCompo from "../../Components/ClassCompo";

export default function MyCourses() {
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
    <div className='p-4 min-h-screen font-clash'>
      <div className='mb-4'>
        <h1 className='text-3xl md:text-4xl font-semibold text-accent'>
          My Courses
        </h1>

        {/* Filters */}
        <div className='flex flex-wrap items-center gap-3 mt-4 bg-white max-w-3xl px-3 py-2 rounded-lg border border-textmuted'>
          <button className='flex items-center px-3 py-1 text-textmain'>
            <Filter size={16} className='mr-2' /> Filter by
          </button>
          <select
            className='px-2 py-1 text-sm border-l border-textmuted text-textmain'
            value={filterProgress}
            onChange={(e) => setFilterProgress(e.target.value)}>
            <option value=''>Date</option>
            <option value='Progress'>Progress</option>
          </select>
          <select
            className='px-2 py-1 text-sm border-l border-textmuted text-textmain'
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}>
            <option value=''>Status</option>
            <option value='Completed'>Completed</option>
            <option value='In progress'>In progress</option>
          </select>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='border px-2 py-1 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-1 focus:ring-primary'
          />
          <button
            onClick={resetFilters}
            className='text-red-400 text-sm flex items-center gap-1'>
            <RefreshCcw className='w-5 h-5' />
            Reset
          </button>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
      {activeTab === "Total Courses" && (
        <div className='bg-white w-full p-4 rounded-lg shadow overflow-auto'>
          <div className='p-2 min-w-3xl mx-auto space-y-4'>
            <div className='grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey'>
              <div className='font-semibold'>Course Name</div>
              <div className='font-semibold'>Progress</div>
              <div className='font-semibold'>Overall Score</div>
              <div className='font-semibold'>Status</div>
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
        <div className='w-full overflow-x-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full'>
            {quizList.map((quiz) => (
              <QuizCardComponent key={quiz.id} {...quiz} />
            ))}
          </div>
        </div>
      )}

      {/* Classes Tab */}

      {activeTab === "Classes" && <ClassCompo />}
    </div>
  );
}
