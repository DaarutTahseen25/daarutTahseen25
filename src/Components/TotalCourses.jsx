import { Check, ChevronDown, ChevronRight, LoaderCircle } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import Pagination from "./Pagination";
import { courseClasses } from "../constants/data";

function TotalCourses({ courses, expandedCourse, setExpandedCourse }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedClass, setExpandedClass] = useState(null);
  const itemsPerPage = 10;

  // Group courses by class
  const groupedCourses = courses.reduce((acc, course) => {
    const className = course.class || "Uncategorized";
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(course);
    return acc;
  }, {});

  // Use defined classes, and potentially add any uncategorized ones if needed
  // For now, we'll stick to the defined structure as it drives the UI
  const displayClasses = courseClasses;

  const totalPages = Math.ceil(displayClasses.length / itemsPerPage);

  const paginatedClasses = displayClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [contentHeights, setContentHeights] = useState({});
  const [classHeights, setClassHeights] = useState({});
  const contentRefs = useRef({});
  const classRefs = useRef({});

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

  useEffect(() => {
    const heights = {};
    displayClasses.forEach((classItem) => {
      const el = classRefs.current[classItem.name];
      if (el) {
        heights[classItem.name] = el.scrollHeight;
      }
    });
    setClassHeights(heights);
  }, [groupedCourses, expandedCourse, displayClasses]);

  return (
    <div className="flex flex-col w-full">
      {displayClasses.length > 0 ? (
        paginatedClasses.map((classItem) => {
          const className = classItem.name;
          const classCoursesData = groupedCourses[className] || [];
          const isClassExpanded = expandedClass === className;
          const classHeight = isClassExpanded
            ? classHeights[className] || 0
            : 0;

          return (
            <div
              key={className}
              className={`mb-6 border ${
                classItem.borderColor || "border-[#E0E0E0]"
              } rounded-lg overflow-hidden ${
                classItem.bgColor || "bg-[#F5F5F5]"
              }`}
            >
              {/* Class Header */}
              <div
                onClick={() =>
                  setExpandedClass(isClassExpanded ? null : className)
                }
                className={`flex items-center justify-between p-4 cursor-pointer hover:opacity-90 transition-colors ${
                  classItem.bgColor || "bg-[#E8F5F1]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${
                      classItem.iconBg || "bg-[#B2DFDB]"
                    } rounded flex items-center justify-center ${
                      classItem.iconColor || "text-[#009688]"
                    } font-bold text-sm`}
                  >
                    {classItem.code || className.substring(0, 2)}
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-textmain">
                      {className}
                    </h2>
                    <p className="text-sm text-textmuted">
                      {classCoursesData.length} Courses available
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-gray-600 transition-transform duration-300 ${
                    isClassExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Class Content - Collapsible */}
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{ maxHeight: `${classHeight}px` }}
              >
                <div
                  ref={(el) => (classRefs.current[className] = el)}
                  className="bg-white"
                >
                  {classCoursesData.length > 0 ? (
                    <>
                      {/* Table Header - Desktop */}
                      <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0] font-semibold text-sm text-gray-700">
                        <div>Course Name</div>
                        <div>Progress</div>
                        <div>Overall Score</div>
                        <div>Status</div>
                      </div>

                      {/* Course Rows */}
                      {classCoursesData.map((course) => {
                        const isExpanded = expandedCourse === course.id;
                        const height = isExpanded
                          ? contentHeights[course.id] || 0
                          : 0;

                        return (
                          <div
                            key={course.id}
                            className="border-b border-[#E0E0E0] last:border-b-0"
                          >
                            {/* Course Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
                              {/* Column 1 - Course Name & Info */}
                              <div className="flex gap-3 items-center">
                                <img
                                  src={course.image}
                                  alt={course.name}
                                  className="w-14 h-14 rounded object-cover flex-shrink-0"
                                />
                                <div className="min-w-0 flex-1">
                                  <h3 className="font-semibold text-base text-textmain">
                                    {course.name}
                                  </h3>
                                  <p className="text-xs text-textmuted mt-0.5">
                                    • {course.numberofchapters} chapters •{" "}
                                    {course.lectures} lectures
                                  </p>
                                </div>
                              </div>

                              {/* Column 2 - Progress */}
                              <div className="flex items-center gap-3">
                                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                  <div
                                    className={`h-2 rounded-full ${
                                      course.progress === 100
                                        ? "bg-[#009688]"
                                        : "bg-[#8B4513]"
                                    }`}
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 font-medium min-w-[3rem] text-right">
                                  {course.progress}%
                                </span>
                              </div>

                              {/* Column 3 - Overall Score */}
                              <div className="text-sm font-medium text-gray-700">
                                {course.score}%
                              </div>

                              {/* Column 4 - Status + Toggle */}
                              <div className="flex items-center justify-between gap-2">
                                <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-[#E0E0E0] bg-white">
                                  <LoaderCircle className="w-4 h-4 text-[#D32F2F]" />
                                  <span>{course.status}</span>
                                </span>
                                <button
                                  onClick={() =>
                                    setExpandedCourse(
                                      isExpanded ? null : course.id
                                    )
                                  }
                                  className="text-gray-500 hover:text-gray-700 cursor-pointer transition-all p-1"
                                >
                                  <ChevronRight
                                    size={20}
                                    className={`transition-transform duration-200 ${
                                      isExpanded ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>

                            {/* Animated Accordion - Course Chapters */}
                            <div
                              className="transition-all duration-300 overflow-hidden"
                              style={{ maxHeight: `${height}px` }}
                            >
                              <div
                                ref={(el) =>
                                  (contentRefs.current[course.id] = el)
                                }
                                className="px-4 pb-4 space-y-2 bg-gray-50"
                              >
                                {course.chapters?.map((title, i) => (
                                  <div
                                    key={i}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border border-[#E0E0E0] rounded bg-white gap-2 sm:gap-0"
                                  >
                                    <div className="text-sm flex-1">
                                      <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded mr-2 mb-1 sm:mb-0">
                                        Ch {i + 1}
                                      </span>
                                      <span className="break-words">
                                        {title}
                                      </span>
                                    </div>
                                    <div className="flex gap-2 flex-shrink-0">
                                      <button className="hidden sm:flex items-center gap-1 text-xs text-teal-600 border border-teal-600 px-3 py-1.5 rounded hover:bg-teal-50 whitespace-nowrap">
                                        Download PDF
                                      </button>
                                      <button className="flex items-center gap-1 text-xs text-white bg-teal-600 px-3 py-1.5 rounded hover:bg-teal-700 whitespace-nowrap">
                                        Play Video
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No courses available in this class yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-gray-500 p-4">
          No classes available.
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
