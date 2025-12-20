import React from "react";
import { Calendar, ChevronDown, X, ClipboardCheck } from "lucide-react";

const ExamOverviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-50">
          <div className="flex gap-4">
            <div className="bg-teal-50 p-2.5 rounded-lg">
              <ClipboardCheck className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                Exam Overview
              </h2>
              <p className="text-xs text-gray-500">
                Set up the details for your new exam below
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

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Course Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none border-gray-200"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none border-gray-200 text-sm"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase">
                Number of Questions
              </label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border rounded-lg border-gray-200 bg-white text-sm">
                  <option>Select</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase">
                Exam Type
              </label>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 border rounded-lg border-gray-200 bg-white text-sm">
                  <option>Select</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-700 mb-1 uppercase">
                Submission Deadline
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg border-gray-200 text-sm"
                />
                <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-teal-600" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Instructions
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none border-gray-200"
            />
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
            Create Exam Overview
          </button>
        </div>
      </div>
    </div>
  );
};
