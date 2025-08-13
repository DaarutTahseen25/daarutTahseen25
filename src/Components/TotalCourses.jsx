import { Check, ChevronDown, ChevronRight, LoaderCircle } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import Pagination from "./Pagination";

function TotalCourses({ courses, expandedCourse, setExpandedCourse }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const paginatedData = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [contentHeights, setContentHeights] = useState({});

  const contentRefs = useRef({});

  useEffect(() => {
    if (courses?.length) {
      const heights = {};
      courses.forEach((course) => {
        const el = contentRefs.current[course.id];
        if (el) {
          heights[course.id] = el.scrollHeight;
        }
      });
      setContentHeights(heights);
    }
  }, [courses]);

  return (
    <div className='flex flex-col w-full'>
      {courses?.length > 0 ? (
        paginatedData.map((course) => {
          const isExpanded = expandedCourse === course.id;
          const height = isExpanded ? contentHeights[course.id] || 0 : 0;

          return (
            <div
              key={course.id}
              className='mb-4 border border-[#cccccc] rounded-md w-full'>
              {/* Header - Stack on mobile */}
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between p-3 lg:p-4 gap-3 lg:gap-4'>
                {/* Image and Info - Full width on mobile */}
                <div className='flex gap-3 w-full lg:w-1/4'>
                  <img
                    src={course.image}
                    alt={course.name}
                    className='w-12 h-12 sm:w-16 sm:h-16 rounded object-cover flex-shrink-0'
                  />
                  <div className='min-w-0 flex-1'>
                    <h3 className='font-semibold text-lg sm:text-xl text-textmain truncate'>
                      {course.name}
                    </h3>
                    <p className='text-xs sm:text-sm font-semibold text-textmuted'>
                      {course.numberofchapters} chapters • {course.lectures}{" "}
                      lectures
                    </p>
                  </div>
                </div>

                {/* Progress, Score and Status - Stack on mobile */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 lg:justify-end'>
                  {/* Progress Bar */}
                  <div className='flex items-center gap-2 flex-1 lg:flex-initial'>
                    <div className='flex-1 lg:w-24 bg-gray-200 h-2 rounded'>
                      <div
                        className={`h-2 rounded ${
                          course.progress === 100
                            ? "bg-primary/40"
                            : "bg-accent/40"
                        }`}
                        style={{ width: `${course.progress}%` }}></div>
                    </div>
                    {/* Score - Hide on very small screens */}
                    <div className='text-xs sm:text-sm text-gray-700 hidden xs:block'>
                      {course.score}%
                    </div>
                  </div>

                  {/* Status + Toggle */}
                  <div className='flex items-center gap-2 justify-between sm:justify-end'>
                    <span className='flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border border-[#cccccc]'>
                      {course.status === "In progress" && (
                        <LoaderCircle className='w-3 h-3 text-[#D32F2F]' />
                      )}
                      {course.status === "Completed" && (
                        <Check className='w-3 h-3 text-primary' />
                      )}
                      <span className='truncate'>{course.status}</span>
                    </span>
                    <button
                      onClick={() => setExpandedCourse(course.id)}
                      className='text-gray-500 hover:text-gray-700 cursor-pointer transition-transform p-1'>
                      {isExpanded ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Accordion */}
              <div
                className='transition-all duration-300 overflow-hidden'
                style={{ maxHeight: `${height}px` }}>
                <div
                  ref={(el) => (contentRefs.current[course.id] = el)}
                  className='p-3 lg:p-4 space-y-2'>
                  {course.chapters?.map((title, i) => (
                    <div
                      key={i}
                      className='flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 border border-[#cccccc] rounded gap-2 sm:gap-0'>
                      <div className='text-xs sm:text-sm flex-1'>
                        <span className='inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded mr-2 mb-1 sm:mb-0'>
                          Ch {i + 1}
                        </span>
                        <span className='break-words'>{title}</span>
                      </div>
                      <div className='flex gap-2 flex-shrink-0'>
                        {/* Hide PDF button on very small screens */}
                        <button className='hidden sm:flex items-center gap-1 text-xs text-teal-600 border border-teal-600 px-2 py-1 rounded hover:bg-teal-50 whitespace-nowrap'>
                          Download PDF
                        </button>
                        <button className='flex items-center gap-1 text-xs text-white bg-teal-600 px-2 py-1 rounded hover:bg-teal-700 whitespace-nowrap'>
                          Play Video
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className='text-center text-gray-500 p-4'>
          No courses available.
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default React.memo(TotalCourses);
