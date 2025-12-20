import React from "react";
import { X, ClipboardList } from "lucide-react";

const AddQuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-50">
          <div className="flex gap-4">
            <div className="bg-teal-50 p-2.5 rounded-lg">
              <ClipboardList className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                Add Question
              </h2>
              <p className="text-xs text-gray-500">
                Create a new exam question and specify correct answers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          {/* Question Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">Question</label>
            <textarea
              placeholder="Enter question here"
              rows="3"
              className="w-full px-3 py-2 border rounded-lg border-gray-200 focus:ring-2 focus:ring-teal-500/20 outline-none resize-none text-sm"
            />
          </div>

          {/* Options Inputs */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-700">Options</label>

            {["A", "B", "C", "D"].map((letter) => (
              <div key={letter} className="flex items-center gap-3">
                {/* Radio Circle Indicator */}
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                  {/* Small inner dot logic could go here for "correct answer" selection */}
                </div>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-sm text-gray-500">
                    Option {letter}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter option here"
                    className="w-full pl-20 pr-3 py-2 border rounded-lg border-gray-200 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm placeholder:text-gray-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex gap-3 border-t border-gray-50">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border-2 border-teal-500 text-teal-600 font-bold rounded-lg text-sm transition-all active:scale-95"
          >
            Cancel
          </button>
          <button className="flex-[2] py-2.5 bg-[#3EB0A3] text-white font-bold rounded-lg text-sm transition-all active:scale-95 shadow-md">
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
