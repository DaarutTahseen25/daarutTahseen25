import React, { useState } from "react";
import StudentAssignmentCard from "./StudentAssignment";
import { courseClasses } from "../constants/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"; // Adjust the import path as needed

const StudentAssignments = ({ assignments }) => {
  const [expandedClasses, setExpandedClasses] = useState([]);
  const [expandedCourses, setExpandedCourses] = useState([]);

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

  return (
    <div className="flex flex-col w-full gap-6">
      <Accordion
        type="multiple"
        value={expandedClasses}
        onValueChange={setExpandedClasses}
        className="space-y-6"
      >
        {displayClasses.map((classItem) => {
          const className = classItem.name;
          const classCourses = groupedData[className] || {};
          const courseNames = Object.keys(classCourses);
          const totalAssignments = Object.values(classCourses).flat().length;

          return (
            <AccordionItem
              key={className}
              value={className}
              className={`border ${
                classItem.borderColor || "border-[#E0E0E0]"
              } rounded-lg overflow-hidden ${
                classItem.bgColor || "bg-[#F5F5F5]"
              }`}
            >
              {/* Class Header */}
              <AccordionTrigger
                className={`p-4 hover:no-underline hover:opacity-90 transition-colors ${
                  classItem.bgColor || "bg-[#E8F5F1]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
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
                  {/* Shadcn will add its own chevron */}
                </div>
              </AccordionTrigger>

              {/* Class Content */}
              <AccordionContent className="p-0">
                <div className="p-4 space-y-4 bg-white">
                  {courseNames.length > 0 ? (
                    <Accordion
                      type="multiple"
                      value={expandedCourses}
                      onValueChange={setExpandedCourses}
                      className="space-y-4"
                    >
                      {courseNames.map((courseName) => {
                        const assignments = classCourses[courseName];
                        const classCourseKey = `${className}-${courseName}`;
                        const courseImage = assignments[0]?.image; // Use image from first assignment

                        return (
                          <AccordionItem
                            key={classCourseKey}
                            value={classCourseKey}
                            className="border border-gray-100 rounded-lg overflow-hidden bg-[#E8F5F1]/30"
                          >
                            {/* Course Header */}
                            <AccordionTrigger className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors hover:no-underline">
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
                                    {assignments.length !== 1 ? "s" : ""}{" "}
                                    available
                                  </p>
                                </div>
                              </div>
                              {/* Shadcn will add its own chevron */}
                            </AccordionTrigger>

                            {/* Assignments List */}
                            <AccordionContent className="p-4 pt-0">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {assignments.map((assignment) => (
                                  <StudentAssignmentCard
                                    key={assignment.id}
                                    {...assignment}
                                  />
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  ) : (
                    <div className="text-center text-gray-500 py-4">
                      No assignments available for this class.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default StudentAssignments;
