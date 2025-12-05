import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import StudentAssignmentCard from "./StudentAssignment";
import { courseClasses } from "../constants/data";

const StudentAssignments = ({ assignments }) => {
  const [expandedClass, setExpandedClass] = useState(null);
  const [expandedCourses, setExpandedCourses] = useState({});

  // Group assignments by class
  const groupedByClass = assignments.reduce((acc, assignment) => {
    const className = assignment.class || "Uncategorized";
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(assignment);
    return acc;
  }, {});

  // For each class, group by course
  const groupedData = Object.keys(groupedByClass).reduce((acc, className) => {
    acc[className] = groupedByClass[className].reduce(
      (courseAcc, assignment) => {
        const courseName = assignment.courseName || "General";
        if (!courseAcc[courseName]) {
          courseAcc[courseName] = [];
        }
        courseAcc[courseName].push(assignment);
        return courseAcc;
      },
      {}
    );
    return acc;
  }, {});

  // Use defined classes to drive the UI order and styling
  const displayClasses = courseClasses;

  const toggleCourse = (classCourseKey) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [classCourseKey]: !prev[classCourseKey],
    }));
  };

  // Refs for height animation
  const classRefs = useRef({});
  const courseRefs = useRef({});
  const [heights, setHeights] = useState({});

  useEffect(() => {
    // Calculate heights for animations
    const newHeights = {};

    // Class heights
    displayClasses.forEach((classItem) => {
      if (classRefs.current[classItem.name]) {
        newHeights[classItem.name] =
          classRefs.current[classItem.name].scrollHeight;
      }
    });

    // Course heights
    Object.keys(groupedData).forEach((className) => {
      Object.keys(groupedData[className]).forEach((courseName) => {
        const key = `${className}-${courseName}`;
        if (courseRefs.current[key]) {
          newHeights[key] = courseRefs.current[key].scrollHeight;
        }
      });
    });

    setHeights(newHeights);
  }, [groupedData, expandedClass, expandedCourses]);

  return (
    <div className="flex flex-col w-full gap-6">
      {displayClasses.map((classItem) => {
        const className = classItem.name;
        const classCourses = groupedData[className] || {};
        const courseNames = Object.keys(classCourses);
        const isClassExpanded = expandedClass === className;
        const totalAssignments = Object.values(classCourses).flat().length;

        return (
          <div
            key={className}
            className={`border ${
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
                    {totalAssignments} Assignments available
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

            {/* Class Content */}
            <div
              className="transition-all duration-300 overflow-hidden"
              style={{
                maxHeight: isClassExpanded ? "2000px" : "0px", // Using a large max-height for nested content
                opacity: isClassExpanded ? 1 : 0,
              }}
            >
              <div className="p-4 space-y-4 bg-white">
                {courseNames.length > 0 ? (
                  courseNames.map((courseName) => {
                    const assignments = classCourses[courseName];
                    const classCourseKey = `${className}-${courseName}`;
                    const isCourseExpanded = expandedCourses[classCourseKey];
                    const courseImage = assignments[0]?.image; // Use image from first assignment

                    return (
                      <div
                        key={classCourseKey}
                        className="border border-gray-100 rounded-lg overflow-hidden bg-[#E8F5F1]/30"
                      >
                        {/* Course Header */}
                        <div
                          onClick={() => toggleCourse(classCourseKey)}
                          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            {courseImage && (
                              <img
                                src={courseImage}
                                alt={courseName}
                                className="w-12 h-12 rounded object-cover"
                              />
                            )}
                            <div>
                              <h3 className="font-semibold text-base text-gray-800">
                                {courseName}
                              </h3>
                              <p className="text-xs text-gray-500">
                                {assignments.length} Assignment
                                {assignments.length !== 1 ? "s" : ""} available
                              </p>
                            </div>
                          </div>
                          <ChevronDown
                            size={20}
                            className={`text-gray-500 transition-transform duration-300 ${
                              isCourseExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Assignments List */}
                        <div
                          className="transition-all duration-300 overflow-hidden"
                          style={{
                            maxHeight: isCourseExpanded
                              ? `${heights[classCourseKey] || 1000}px`
                              : "0px",
                          }}
                        >
                          <div
                            ref={(el) =>
                              (courseRefs.current[classCourseKey] = el)
                            }
                            className="p-4 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            {assignments.map((assignment) => (
                              <StudentAssignmentCard
                                key={assignment.id}
                                {...assignment}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    No assignments available for this class.
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentAssignments;
