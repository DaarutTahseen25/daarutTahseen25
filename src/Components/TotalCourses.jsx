import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
function TotalCourses({ courses, expandedCourse, setExpandedCourse }) {
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
    <>
      {courses?.length > 0 ? (
        courses.map((course) => {
          const isExpanded = expandedCourse === course.id;
          const height = isExpanded ? contentHeights[course.id] || 0 : 0;

          return (
            <div
              key={course.id}
              className='mb-4 border border-[#cccccc]  rounded-md'>
              {/* Header */}
              <div className='flex items-start justify-between p-4'>
                {/* Image and Info */}
                <div className='flex gap-4 w-1/4'>
                  <img
                    src={course.image}
                    alt={course.name}
                    className='w-16 h-16 rounded object-cover'
                  />
                  <div>
                    <h3 className='font-semibold text-xl text-textmain'>
                      {course.name}
                    </h3>
                    <p className='text-sm font-semibold text-textmuted'>
                      {course.numberofchapters} chapters • {course.lectures}{" "}
                      lectures
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className='w-30'>
                  <div className='w-full bg-gray-200 h-2 rounded'>
                    <div
                      className={`h-2 rounded ${
                        course.progress === 100
                          ? "bg-primary/40"
                          : "bg-accent/40"
                      }`}
                      style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>

                {/* Score */}
                <div className='text-sm text-gray-700 ml-2'>
                  {course.score}%
                </div>

                {/* Status + Toggle */}
                <div className='w-1/4 flex items-center gap-2 justify-end'>
                  <span
                    className={`px-3 py-1 text-sm rounded border border-textmuted ${
                      course.status === "Completed"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}>
                    {course.status}
                  </span>
                  <button
                    onClick={() => setExpandedCourse(course.id)}
                    className='text-gray-500 hover:text-gray-700 cursor-pointer transition-transform'>
                    {isExpanded ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Animated Accordion */}
              <div
                className='transition-all duration-300 overflow-hidden'
                style={{ maxHeight: `${height}px` }}>
                <div
                  ref={(el) => (contentRefs.current[course.id] = el)}
                  className='p-4 space-y-2'>
                  {course.chapters?.map((title, i) => (
                    <div
                      key={i}
                      className='flex items-center justify-between p-2 border border-[#cccccc] rounded'>
                      <div className='text-sm'>
                        <span className='px-2 py-0.5 bg-yellow-100 text-yellow-800 text-md rounded mr-2'>
                          Chapter {i + 1}
                        </span>
                        {title}
                      </div>
                      <div className='flex gap-2'>
                        <button className='flex items-center gap-1 text-sm text-teal-600 border border-teal-600 px-2 py-1 rounded hover:bg-teal-50'>
                          Download Pdf
                        </button>
                        <button className='flex items-center gap-1 text-sm text-white bg-teal-600 px-2 py-1 rounded hover:bg-teal-700'>
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
    </>
  );
}

export default React.memo(TotalCourses);
