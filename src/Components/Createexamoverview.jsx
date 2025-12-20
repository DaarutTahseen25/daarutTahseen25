import React from "react";
import { Calendar, ChevronDown, X, ClipboardList } from "lucide-react";

const CreateExamQuiz = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div className="flex gap-4">
            <div className="bg-teal-50 p-3 rounded-xl">
              <ClipboardList className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Create Assignment
              </h2>
              <p className="text-sm text-gray-500">
                Set up the details for your new assignment below
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Title */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Assignment Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>

          {/* Grid Row: Questions, Type, Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Number of Questions
              </label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white">
                  <option>Select</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Assignment Type
              </label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white">
                  <option>Select</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Submission Deadline
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                />
                <Calendar className="absolute right-3 top-3 w-4 h-4 text-teal-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Instructions
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            ></textarea>
          </div>

          {/* Questions */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Questions
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex gap-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-teal-500 text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-[2] px-6 py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20">
            Create Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateExamQuiz;
