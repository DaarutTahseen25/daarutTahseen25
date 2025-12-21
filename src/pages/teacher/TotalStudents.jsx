import {
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  LoaderCircle,
  Music,
} from "lucide-react";
import React, { useState } from "react";
import Pagination from "../../Components/Pagination";
import { courseClasses } from "../../constants/data";
import AssessmentTab from "./assessment-tab";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";

function TotalStudents({ students }) {
  const [activeTabs, setActiveTabs] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedClasses, setExpandedClasses] = useState([]);
  const [expandedStudents, setExpandedStudents] = useState([]);
  const itemsPerPage = 10;

  const setActiveTab = (studentId, tab) => {
    setActiveTabs((prev) => ({ ...prev, [studentId]: tab }));
  };

  // Group courses by class
  const groupedCourses = students.reduce((acc, course) => {
    const className = course.class || "Uncategorized";
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(course);
    return acc;
  }, {});

  const displayClasses = courseClasses;
  const totalPages = Math.ceil(displayClasses.length / itemsPerPage);
  const paginatedClasses = displayClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full">
      <Accordion
        type="multiple"
        value={expandedClasses}
        onValueChange={setExpandedClasses}
        className="space-y-6"
      >
        {displayClasses.length > 0 ? (
          paginatedClasses.map((classItem) => {
            const className = classItem.name;
            const studentsData = groupedCourses[className] || [];

            return (
              <AccordionItem
                key={className}
                value={className}
                className={`border rounded-lg overflow-hidden ${
                  classItem.borderColor || "border-[#E0E0E0]"
                } ${classItem.bgColor || "bg-[#F5F5F5]"}`}
              >
                {/* Class Header - Shadcn Accordion Trigger */}
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
                          {studentsData.length} Students available
                        </p>
                      </div>
                    </div>
                    {/* Shadcn will add its own chevron */}
                  </div>
                </AccordionTrigger>

                {/* Class Content - Accordion Content */}
                <AccordionContent className="bg-white p-0">
                  {studentsData.length > 0 ? (
                    <>
                      {/* Table Header - Desktop */}
                      <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0] font-semibold text-sm text-gray-700">
                        <div>Student Name</div>
                        <div>Progress</div>
                        <div>Overall Score</div>
                        <div>Status</div>
                      </div>

                      {/* Nested Shadcn Accordion for Students */}
                      <Accordion
                        type="multiple"
                        value={expandedStudents}
                        onValueChange={setExpandedStudents}
                        className="w-full"
                      >
                        {studentsData.map((student) => (
                          <AccordionItem
                            key={student.id}
                            value={student.id}
                            className="border-b border-[#E0E0E0] last:border-b-0"
                          >
                            {/* Student Row - This is the trigger */}
                            <div className="hover:bg-gray-50 transition-colors">
                              <AccordionTrigger className="p-4 hover:no-underline">
                                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4 w-full items-center">
                                  {/* Column 1 - Student Name & Info */}
                                  <div className="flex gap-3 items-center justify-start">
                                    <img
                                      src={student.image}
                                      alt={student.name}
                                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="min-w-0 flex-1 text-left">
                                      <h3 className="font-semibold text-base text-textmain">
                                        {student.name}
                                      </h3>
                                    </div>
                                  </div>

                                  {/* Column 2 - Progress */}
                                  <div className="flex items-center gap-3">
                                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                      <div
                                        className={`h-2 rounded-full ${
                                          student.progress === 100
                                            ? "bg-[#009688]"
                                            : "bg-[#8B4513]"
                                        }`}
                                        style={{
                                          width: `${student.progress}%`,
                                        }}
                                      ></div>
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium min-w-[3rem] text-right">
                                      {student.progress}%
                                    </span>
                                  </div>

                                  {/* Column 3 - Overall Score */}
                                  <div className="text-sm font-medium text-gray-700">
                                    {student.score}%
                                  </div>

                                  {/* Column 4 - Status */}
                                  <div className="flex items-center justify-between gap-2">
                                    {student.progress < 100 ? (
                                      <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-[#E0E0E0] bg-white">
                                        <LoaderCircle className="w-4 h-4 text-[#D32F2F]" />
                                        <span>In progress</span>
                                      </span>
                                    ) : (
                                      <span className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-[#E0E0E0] bg-white">
                                        <Check className="w-4 h-4 text-[#009688]" />
                                        <span>Completed</span>
                                      </span>
                                    )}
                                    {/* Shadcn will add its own chevron */}
                                  </div>
                                </div>
                              </AccordionTrigger>
                            </div>

                            {/* Student Details - Accordion Content */}
                            <AccordionContent className="pt-0">
                              <div className="py-4 px-8 space-y-2 border-t border-gray-200">
                                <h1 className="font-semibold text-base text-textmain">
                                  Details for {student.name}
                                </h1>

                                {/* Assignment and Exam Detail Tab */}
                                <AssessmentTab
                                  student={student}
                                  activeTab={
                                    activeTabs[student.id] || "Assignments"
                                  }
                                  setActiveTab={(tab) =>
                                    setActiveTab(student.id, tab)
                                  }
                                />

                                {/* Tab Content */}
                                <div className="mt-4">
                                  {(activeTabs[student.id] || "Assignments") ===
                                    "Assignments" && (
                                    <div className="space-y-0">
                                      {/* Desktop Table Header */}
                                      <div className="hidden lg:grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0] font-semibold text-sm text-gray-700">
                                        <div>Topic</div>
                                        <div>Uploaded files</div>
                                        <div>Date</div>
                                        <div>Score</div>
                                      </div>

                                      {/* Assignment Data Rows - Desktop */}
                                      {student.assignments?.length > 0 ? (
                                        student.assignments.map(
                                          (assignment, index) => (
                                            <div
                                              key={index}
                                              className="hidden lg:grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 px-4 py-3 border-b border-[#E0E0E0] text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                              <div className="font-medium">
                                                {assignment.topic}
                                              </div>
                                              <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                                                  <FileText size={16} />
                                                  <span>
                                                    {assignment.fileName ||
                                                      "Assignment file"}
                                                  </span>
                                                </div>
                                                {assignment.audioFile && (
                                                  <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                                                    <Music size={16} />
                                                    <span>
                                                      {assignment.audioFile}
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                              <div>{assignment.date}</div>
                                              <div className="font-semibold">
                                                {assignment.score !== undefined
                                                  ? `${assignment.score}%`
                                                  : "Not graded"}
                                              </div>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <div className="text-center text-gray-500 p-4">
                                          No assignments submitted yet.
                                        </div>
                                      )}

                                      {/* Mobile View - Cards */}
                                      <div className="lg:hidden space-y-4">
                                        {student.assignments?.length > 0 ? (
                                          student.assignments.map(
                                            (assignment, index) => (
                                              <div
                                                key={index}
                                                className="bg-gray-50 p-4 rounded-lg border border-[#E0E0E0]"
                                              >
                                                <div className="font-medium mb-3">
                                                  {assignment.topic}
                                                </div>

                                                <div className="space-y-2 text-sm">
                                                  <div className="flex justify-between">
                                                    <span className="text-gray-600">
                                                      Files:
                                                    </span>
                                                    <div className="text-right">
                                                      <div className="flex items-center gap-1 text-blue-600 hover:underline cursor-pointer">
                                                        <FileText size={14} />
                                                        <span>
                                                          {assignment.fileName ||
                                                            "Assignment file"}
                                                        </span>
                                                      </div>
                                                      {assignment.audioFile && (
                                                        <div className="flex items-center gap-1 text-blue-600 hover:underline cursor-pointer mt-1">
                                                          <Music size={14} />
                                                          <span>
                                                            {
                                                              assignment.audioFile
                                                            }
                                                          </span>
                                                        </div>
                                                      )}
                                                    </div>
                                                  </div>

                                                  <div className="flex justify-between">
                                                    <span className="text-gray-600">
                                                      Date:
                                                    </span>
                                                    <span className="font-medium">
                                                      {assignment.date}
                                                    </span>
                                                  </div>

                                                  <div className="flex justify-between">
                                                    <span className="text-gray-600">
                                                      Score:
                                                    </span>
                                                    <span className="font-semibold">
                                                      {assignment.score !==
                                                      undefined
                                                        ? `${assignment.score}%`
                                                        : "Not graded"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )
                                        ) : (
                                          <div className="text-center text-gray-500 p-4">
                                            No assignments submitted yet.
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {(activeTabs[student.id] || "Assignments") ===
                                    "Exams" && (
                                    <div className="space-y-0">
                                      {/* Desktop Table Header */}
                                      <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0] font-semibold text-sm text-gray-700">
                                        <div>Topic</div>
                                        <div>Date</div>
                                        <div>Score</div>
                                      </div>

                                      {/* Exam Data Rows - Desktop */}
                                      {student.exams?.length > 0 ? (
                                        student.exams.map((exam, index) => (
                                          <div
                                            key={index}
                                            className="hidden lg:grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 py-3 border-b border-[#E0E0E0] text-sm text-gray-700 hover:bg-gray-50"
                                          >
                                            <div className="font-medium">
                                              {exam.topic}
                                            </div>
                                            <div>{exam.date}</div>
                                            <div className="font-semibold">
                                              {exam.score !== undefined
                                                ? `${exam.score}%`
                                                : "Not graded"}
                                            </div>
                                          </div>
                                        ))
                                      ) : (
                                        <div className="text-center text-gray-500 p-4">
                                          No exam data available.
                                        </div>
                                      )}

                                      {/* Mobile View - Cards */}
                                      <div className="lg:hidden space-y-4">
                                        {student.exams?.length > 0 ? (
                                          student.exams.map((exam, index) => (
                                            <div
                                              key={index}
                                              className="bg-gray-50 p-4 rounded-lg border border-[#E0E0E0]"
                                            >
                                              <div className="font-medium mb-3">
                                                {exam.topic}
                                              </div>
                                              <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                  <span className="text-gray-600">
                                                    Date:
                                                  </span>
                                                  <span className="font-medium">
                                                    {exam.date}
                                                  </span>
                                                </div>
                                                <div className="flex justify-between">
                                                  <span className="text-gray-600">
                                                    Score:
                                                  </span>
                                                  <span className="font-semibold">
                                                    {exam.score !== undefined
                                                      ? `${exam.score}%`
                                                      : "Not graded"}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          ))
                                        ) : (
                                          <div className="text-center text-gray-500 p-4">
                                            No exam data available.
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No courses available in this class yet.
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })
        ) : (
          <div className="text-center text-gray-500 p-4">
            No classes available.
          </div>
        )}
      </Accordion>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default React.memo(TotalStudents);
