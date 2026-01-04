import { Dot, Trash, Trash2 } from "lucide-react";
import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function TeacherExamCard({
  id,
  title,
  status,
  dueDate,
  image,
  questions,
  duration,
  courseName,
  submittedBy,
}) {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-200 p-4 rounded-[5px] w-full max-w-md md:max-w-lg flex flex-col gap-4 shadow-sm relative">
      {/* Header Row: Image & Main Info */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center relative">
        <img
          src={image}
          alt={title}
          className="w-full sm:w-20 h-32 sm:h-16 rounded object-cover flex-shrink-0 mb-2 sm:mb-0"
        />
        <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-row justify-between items-start">
            <h1 className="font-montserrat text-[18px] sm:text-[20px] font-semibold truncate">
              {title}
            </h1>
            <button className="p-2 cursor-pointer text-red-500 hover:bg-red-50 rounded transition sm:absolute sm:top-2 sm:right-2 static mt-1 sm:mt-0">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="flex gap-1 items-center font-montserrat text-[14px] sm:text-[15px] font-semibold text-[#A9A9A9]">
              <Dot /> {questions.length || 30} Questions
            </span>
            <span className="flex gap-1 items-center font-montserrat text-[14px] sm:text-[15px] font-semibold text-[#A9A9A9]">
              <Dot /> {duration || 20} min
            </span>
            {courseName && (
              <span className="flex gap-1 items-center font-montserrat text-[13px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {courseName}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Due Date & Status */}
      <div className="flex items-center justify-between">
        <p className="text-[13px] sm:text-base text-red-500 font-montserrat font-medium">
          Submit before: {dueDate}
        </p>
        {status && (
          <span
            className={`px-2 py-0.5 rounded text-xs font-semibold ${
              status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Submitted Students */}
      {submittedBy && submittedBy.length > 0 && (
        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-3">
            {submittedBy.slice(0, 3).map((submission, idx) => (
              <img
                key={idx}
                src={submission.image}
                alt={submission.name}
                title={submission.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
              />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">
              {submittedBy.length === 1
                ? `${submittedBy[0].name.split(" ")[0]} submitted`
                : `${submittedBy.length} students submitted`}
            </p>
          </div>
        </div>
      )}

      {/* Actions Row */}
      <div className="flex justify-end mt-2">
        <Button
          onClick={() => {
            if (id) navigate(`/teacher/exam/${id}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
}
