"use client";

import { useState } from "react";
import Pagination from "./Pagination";
import { Check, LoaderCircle } from "lucide-react";

export default function StudentsTableComponent({ students = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const paginatedData = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full rounded bg-[#fefefc] p-4 shadow text-xs overflow-hidden">
      <div className="bg-white p-4 rounded">
        {/* Header */}
        <div className="hidden md:grid grid-cols-5 gap-4 text-md xl:text-xl py-2 px-3 mb-4 bg-light-grey rounded">
          <div className="font-semibold">S/N</div>
          <div className="font-semibold">Student Name</div>
          <div className="font-semibold">Progress</div>
          <div className="font-semibold">Overall Score</div>
          <div className="font-semibold">Status</div>
        </div>

        <ul className="divide-y divide-[#cccccc]">
          {paginatedData.map((student, i) => {
            const globalIndex = (currentPage - 1) * itemsPerPage + i;

            const isOpen = expandedIndex === globalIndex;

            return (
              <div key={globalIndex}>
                <StudentRow
                  index={globalIndex + 1}
                  {...student}
                  isOpen={isOpen}
                  onClick={() => setExpandedIndex(isOpen ? null : globalIndex)}
                />

                {isOpen && <StudentDetails student={student} />}
              </div>
            );
          })}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= STUDENT ROW ================= */

function StudentRow({ index, name, avatar, progress, score, isOpen, onClick }) {
  const isCompleted = progress === 100;
  const progressColor = isCompleted ? "bg-[#00BFA6]" : "bg-[#5e3c3c]";

  return (
    <li
      onClick={onClick}
      className="
        cursor-pointer
        font-montserrat py-4 px-2
        grid grid-cols-1 gap-3
        md:grid-cols-5 md:items-center
        hover:bg-[#f8f8f8]
      "
    >
      <span className="hidden md:block text-gray-500">{index}</span>

      <div className="flex items-center gap-3 min-w-0">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold truncate">{name}</span>
        <span className="md:hidden ml-auto text-[11px] text-gray-500">
          #{index}
        </span>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="flex-1 md:w-28 bg-[#f0f0f0] h-2 rounded-full overflow-hidden">
          <div
            className={`h-2 ${progressColor}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm text-gray-700">{score}%</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="border rounded-full px-3 py-1 flex items-center gap-2 text-xs font-semibold border-[#cccccc]">
          {isCompleted ? (
            <Check className="size-2 text-primary" />
          ) : (
            <LoaderCircle className="size-2 text-[#D32F2F]" />
          )}
          {isCompleted ? "Completed" : "In progress"}
        </span>

        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▾
        </span>
      </div>
    </li>
  );
}

/* ================= STUDENT DETAILS ================= */

function StudentDetails({ student }) {
  const [activeTab, setActiveTab] = useState("assignment");

  const assignments = student.assignments || [];
  const exams = student.exams || [];

  return (
    <div className="bg-white px-6 py-4 border-l-4 border-primary">
      <h3 className="font-semibold mb-3">Details for {student.name}</h3>

      {/* Tabs */}
      <div className="flex gap-6 text-sm mb-4 border-b border-textmuted">
        <button
          onClick={() => setActiveTab("assignment")}
          className={`pb-2 ${
            activeTab === "assignment"
              ? "border-b-2 border-primary font-semibold text-primary"
              : "text-gray-400"
          }`}
        >
          Assignment ({assignments.length})
        </button>

        <button
          onClick={() => setActiveTab("exam")}
          className={`pb-2 ${
            activeTab === "exam"
              ? "border-b-2 border-primary font-semibold text-primary"
              : "text-gray-400"
          }`}
        >
          Exam ({exams.length})
        </button>
      </div>

      {/* ================= ASSIGNMENTS ================= */}
      {activeTab === "assignment" && <DataTable data={assignments} />}

      {/* ================= EXAMS ================= */}
      {activeTab === "exam" && <DataTable data={exams} />}
    </div>
  );
}

/* ================= REUSABLE TABLE ================= */

function DataTable({ data }) {
  if (!data.length) {
    return <p className="text-gray-400 text-sm">No records available</p>;
  }

  return (
    <table className="w-full text-xs">
      <thead>
        <tr className="text-left text-gray-500">
          <th>Subject</th>
          <th>File</th>
          <th>Date</th>
          <th className="text-right">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-t border-textmuted">
            <td className="py-2">{item.subject}</td>
            <td className="py-2 text-primary">{item.file}</td>
            <td className="py-2">{item.date}</td>
            <td className="py-2 text-right">
              <span className="bg-[#e6f6f3] px-3 py-1 rounded-full">
                {item.score}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
