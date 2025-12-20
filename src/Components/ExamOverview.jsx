import React, { useState } from "react"; // 1. Import useState
import { Calendar, HelpCircle, UploadCloud, CheckCircle } from "lucide-react";
import CreateExamQuiz from "./Createexamoverview";

export default function ExamOverview({
  title,
  description,
  questionsCount,
  submissionType,
  deadline,
  instructions,
  questionList,
  imageSrc,
}) {
  // 2. Define the modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white mx-3 space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src="/Islamic Aqeedah.png"
            alt={title}
            className="w-full sm:w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 text-base sm:text-lg">
              {title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>{questionsCount} Questions</span>
              </div>
              <div className="flex items-center gap-1">
                <UploadCloud className="w-4 h-4 text-teal-600" />
                <span>{submissionType}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-red-500" />
                <span>{deadline}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="border border-gray-100 rounded-md p-3 space-y-2">
          <h3 className="font-bold text-gray-800">Exam Instructions</h3>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
            {questionList.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ol>
        </div>

        {/* 3. Button with onClick handler */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/70 transition"
        >
          Edit Exam Overview
        </button>
      </div>

      {/* 4. Render the Modal */}
      <CreateExamQuiz
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
