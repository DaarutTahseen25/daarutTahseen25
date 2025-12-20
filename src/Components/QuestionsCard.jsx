import React, { useState } from "react"; // Added useState
import { Edit3, Trash2 } from "lucide-react";
import AddQuestionModal from "./CreateExamquiz";

const QuestionItem = ({ number, question, options }) => {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-lg font-bold text-gray-800">Question {number}</h3>
        <button className="text-teal-600 hover:text-teal-700 transition-colors">
          <Edit3 className="w-4 h-4" />
        </button>
        <button className="text-red-500 hover:text-red-600 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="h-px bg-gray-200 w-full mb-4" />
      <p className="text-gray-700 font-medium mb-4">{question}</p>
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name={`q-${number}`}
                defaultChecked={index === 0}
                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black transition-all"
              />
              <div className="absolute w-2.5 h-2.5 bg-black rounded-full scale-0 peer-checked:scale-100 transition-transform" />
            </div>
            <span className="text-gray-700 group-hover:text-black transition-colors">
              {option.label}. {option.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

const AssignmentQuestionList = () => {
  // 1. Create state to track if the modal is open
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const sampleOptions = [
    { label: "A", text: "2 beats (counts)" },
    { label: "B", text: "5 beats (counts)" },
    { label: "C", text: "8 beats (counts)" },
    { label: "D", text: "4 beats (counts)" },
  ];

  const questions = [1, 2, 3];

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        {questions.map((num) => (
          <QuestionItem
            key={num}
            number={num}
            question="How many beats (counts) are required for a Madd Asli (Natural Prolongation)?"
            options={sampleOptions}
          />
        ))}

        {/* 2. Added onClick to trigger the modal */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-[#3EB0A3] hover:bg-[#34968a] text-white font-semibold rounded-lg transition-colors shadow-sm"
        >
          Add Question
        </button>
      </div>

      {/* 3. Render the Modal component */}
      <AddQuestionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
};

export default AssignmentQuestionList;
