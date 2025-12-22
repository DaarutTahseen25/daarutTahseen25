import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

export default function ResultsTable({ className, courses, getGradeColor }) {
  return (
    <div className="mb-6">
      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
        {className}
      </h3>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[85%] md:w-[50%]">Course</TableHead>
              <TableHead className="hidden sm:table-cell">
                Assignments Avg
              </TableHead>
              <TableHead className="hidden sm:table-cell">Exam Score</TableHead>
              <TableHead className="w-[25%] md:w-auto">Overall</TableHead>
              <TableHead className="hidden sm:table-cell">Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((c) => (
              <TableRow key={c.id}>
                <TableCell>
                  <span className="text-gray-900 text-sm md:text-base">
                    {c.course}
                  </span>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span className="text-gray-900 text-xs md:text-sm">
                    {c.assignmentAvg}%
                  </span>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span className="text-gray-900 text-xs md:text-sm">
                    {c.examScore}%
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900 text-xs md:text-sm">
                    {c.overallScore}%
                  </span>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span
                    className={`inline-flex justify-center items-center size-5 p-4 rounded-md text-xs md:text-sm ${getGradeColor(
                      c.grade
                    )}`}
                  >
                    {c.grade}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
