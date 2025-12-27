import React, { useState } from "react";
import TeacherExamCard from "./TeacherExamCard";
import { courseClasses } from "../constants/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const TeacherExams = ({ exams }) => {
  // Group exams by class
  const groupedExams = exams.reduce((acc, exam) => {
    const className = exam.class || "Uncategorized";
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(exam);
    return acc;
  }, {});

  const [expandedClasses, setExpandedClasses] = useState([]);

  return (
    <div className="flex flex-col w-full space-y-6">
      <Accordion
        type="multiple"
        value={expandedClasses}
        onValueChange={setExpandedClasses}
        className="space-y-6"
      >
        {courseClasses.map((courseClass) => {
          const className = courseClass.name;
          const classExams = groupedExams[className] || [];

          return (
            <AccordionItem
              key={className}
              value={className}
              className={`border ${
                courseClass.borderColor || "border-[#E0E0E0]"
              } rounded-lg overflow-hidden ${
                courseClass.bgColor || "bg-[#F5F5F5]"
              }`}
            >
              {/* Class Header */}
              <AccordionTrigger
                className={`p-4 hover:no-underline hover:opacity-90 transition-colors ${
                  courseClass.bgColor || "bg-[#E8F5F1]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${
                        courseClass.iconBg || "bg-[#B2DFDB]"
                      } rounded flex items-center justify-center ${
                        courseClass.iconColor || "text-[#009688]"
                      } font-bold text-sm`}
                    >
                      {courseClass.code || className.substring(0, 2)}
                    </div>
                    <div className="text-left">
                      <h2 className="font-semibold text-lg text-textmain">
                        {className}
                      </h2>
                      <p className="text-sm text-textmuted">
                        {classExams.length} Exam
                        {classExams.length !== 1 ? "s" : ""} available
                      </p>
                    </div>
                  </div>
                  {/* Shadcn will add its own chevron */}
                </div>
              </AccordionTrigger>

              {/* Class Content - Exam Cards Grid */}
              <AccordionContent className="p-0">
                <div className="p-4 bg-white">
                  {classExams.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                      {classExams.map((exam) => (
                        <TeacherExamCard key={exam.id} {...exam} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      No exams available for this class yet.
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

export default TeacherExams;
