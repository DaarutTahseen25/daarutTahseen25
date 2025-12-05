import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import StudentExamCard from "./StudentExamCard";
import { courseClasses } from "../constants/data";

const StudentExams = ({ exams }) => {
  // Group exams by class, then by course
  const groupedExams = exams.reduce((acc, exam) => {
    const className = exam.class || "Uncategorized";
    const courseName = exam.courseName || "General";

    if (!acc[className]) {
      acc[className] = {};
    }
    if (!acc[className][courseName]) {
      acc[className][courseName] = [];
    }
    acc[className][courseName].push(exam);
    return acc;
  }, {});

  // Initialize expanded state for all classes and courses (all closed by default)
  const [expandedClasses, setExpandedClasses] = useState({});
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleClass = (className) => {
    setExpandedClasses((prev) => ({
      ...prev,
      [className]: !prev[className],
    }));
  };

  const toggleCourse = (className, courseName) => {
    const key = `${className}-${courseName}`;
    setExpandedCourses((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Helper to get class style
  const getClassStyle = (className) => {
    return (
      courseClasses.find((c) => c.name === className) || {
        bgColor: "bg-gray-100",
        iconBg: "bg-gray-200",
        iconColor: "text-gray-600",
        code: className.substring(0, 2).toUpperCase(),
      }
    );
  };

  return (
    <div className="space-y-6  w-full">
      {courseClasses.map((courseClass) => {
        const className = courseClass.name;
        const classCourses = groupedExams[className] || {};
        const isClassExpanded = expandedClasses[className];
        const style = courseClass;
        const hasExams = Object.keys(classCourses).length > 0;

        return (
          <div
            key={className}
            className={`rounded-xl cursor-pointer  overflow-hidden border ${
              isClassExpanded ? "border-gray-200" : "border-transparent"
            } transition-all duration-300`}
          >
            {/* Class Header */}
            <button
              onClick={() => toggleClass(className)}
              className={`w-full flex items-center justify-between p-4 ${style.bgColor} transition-colors duration-200`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg ${style.iconBg} ${style.iconColor} flex items-center justify-center font-bold text-sm`}
                >
                  {style.code}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">{className}</h3>
                  <p className="text-sm text-gray-500">
                    {Object.values(classCourses).flat().length} Exam available
                  </p>
                </div>
              </div>
              {isClassExpanded ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Class Content */}
            <div
              className="transition-all duration-300 ease-in-out overflow-hidden "
              style={{
                maxHeight: isClassExpanded ? "2000px" : "0px",
                opacity: isClassExpanded ? 1 : 0,
              }}
            >
              <div className="p-4 bg-white space-y-4">
                {!hasExams ? (
                  <div className="text-center py-8 text-gray-400 text-sm">
                    No exams available for this class yet.
                  </div>
                ) : (
                  Object.entries(classCourses).map(
                    ([courseName, courseExams]) => {
                      const isCourseExpanded =
                        expandedCourses[`${className}-${courseName}`];

                      return null;
                    }
                  )
                )}

                {hasExams && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    {Object.values(classCourses)
                      .flat()
                      .map((exam) => (
                        <StudentExamCard key={exam.id} {...exam} />
                      ))}
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

export default StudentExams;
