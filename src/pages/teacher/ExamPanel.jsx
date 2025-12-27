import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";

import AssignmentCard from "./AssigmentCard";
import CreateAssignmentDialog from "../../Components/CreateAssignmentDialog";
import { courseClasses, courses } from "../../constants/data";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
import TeacherExamCard from "../../Components/TeacherExamCard";

const ExamPanel = () => {
  const [expandedClasses, setExpandedClasses] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const handleCreateAssignment = () => {
    // TODO: Add logic to create assignment (API call or state update)
    // console.log("Assignment Created:", assignmentData);
  };

  const classMap = new Map();
  courseClasses.forEach((cls) => {
    classMap.set(cls.name, cls);
  });

  const classCourseArray = courses.map((course) => {
    const classDetails = classMap.get(course.class);

    return {
      id: course.id,
      class: course.class,
      courseName: course.name,
      exams: course.exams || [],
      classCode: classDetails?.code,
      classBgColor: classDetails?.bgColor,
      classIconBg: classDetails?.iconBg,
      classIconColor: classDetails?.iconColor,
      classBorderColor: classDetails?.borderColor,
      enrolledStudents: course.students || [],
    };
  });

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Create Assignment Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowDialog(true)}
          className="px-4 py-2 rounded-lg bg-dark-cyan text-white font-medium text-sm hover:opacity-90 transition-colors flex items-center gap-2"
        >
          <PlusIcon />
          Create Exam
        </button>
        <CreateAssignmentDialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
          onCreate={handleCreateAssignment}
        />
      </div>

      <Accordion
        type="multiple"
        value={expandedClasses}
        onValueChange={setExpandedClasses}
        className="space-y-6"
      >
        {classCourseArray.map((classItem) => {
          return (
            <AccordionItem
              key={classItem.id}
              value={classItem.id}
              className={`border ${classItem.classBorderColor} rounded-lg overflow-hidden ${classItem.classBgColor}`}
            >
              {/* Class Header */}
              <AccordionTrigger
                className={`p-4 hover:no-underline hover:opacity-90 transition-colors ${classItem.classBgColor}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${classItem.classIconBg} rounded flex items-center justify-center ${classItem.classIconColor} font-bold text-sm`}
                    >
                      {classItem.classCode}
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg text-textmain truncate max-w-[60vw] sm:max-w-xs">
                        {classItem.class}: {classItem.courseName}
                      </h2>
                      <p className="text-sm text-left text-textmuted">
                        {classItem.enrolledStudents.length} student
                        {classItem.enrolledStudents.length !== 1
                          ? "s"
                          : ""}{" "}
                        enrolled
                      </p>
                    </div>
                  </div>
                  {/* Shadcn will add its own chevron */}
                </div>
              </AccordionTrigger>

              {/* Class Content */}
              <AccordionContent className="p-0">
                <div className="p-4 bg-white space-y-4">
                  <div>
                    {classItem.exams.length > 0 ? (
                      <div className="">
                        {Object.values(classItem.exams)
                          .flat()
                          .map((exam) => (
                            <TeacherExamCard key={exam.id} {...exam} />
                          ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-6">
                        No exams available for this class.
                      </div>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExamPanel;
