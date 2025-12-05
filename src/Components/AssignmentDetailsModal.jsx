import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Calendar, Clock, HelpCircle, FileText } from "lucide-react";
import Button from "./Button";

const AssignmentDetailsModal = ({ isOpen, onClose, assignment, onUpload }) => {
  if (!assignment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:max-w-xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-[#F8F9FA] rounded-xl">
        <DialogClose className="absolute right-4 top-4 z-50 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors" />

        <div className=" space-y-4 sm:space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <img
                src={assignment.image}
                alt={assignment.title}
                className="w-full sm:w-20 h-32 sm:h-16 rounded-lg object-cover"
              />
              <div className="flex-1 w-full">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  {assignment.courseName}: {assignment.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Submit your recitation and written responses for this week's
                  assignment. Follow the instructions below carefully before
                  uploading
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <HelpCircle
                      size={14}
                      className="text-teal-600 sm:w-4 sm:h-4"
                    />
                    <span className="font-semibold">Questions</span>
                    <span>
                      {Array.isArray(assignment.questions)
                        ? assignment.questions.length
                        : assignment.questions || 0}{" "}
                      Questions
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FileText
                      size={14}
                      className="text-teal-600 sm:w-4 sm:h-4"
                    />
                    <span className="font-semibold">Submission Type</span>
                    <span>Audio and Written</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <Calendar
                      size={14}
                      className="text-red-500 sm:w-4 sm:h-4"
                    />
                    <span className="font-semibold text-red-500">Deadline</span>
                    <span className="text-red-500">
                      {assignment.dueDate || "18 July, 2025 ; 4:00 PM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instruction Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full m-3 sm:m-4"></div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
              Instruction
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700">
              {assignment.instructions?.map((instruction, index) => (
                <li key={index} className="pl-2 -indent-2 ml-2 leading-relaxed">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Questions Card */}
          {Array.isArray(assignment.questions) &&
            assignment.questions.length > 0 && (
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Questions
                </h3>
                <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                  {assignment.questions.map((question, index) => (
                    <li
                      key={index}
                      className="pl-2 -indent-2 ml-2 leading-relaxed"
                    >
                      {question}
                    </li>
                  ))}
                </ol>
              </div>
            )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex justify-between items-center sticky bottom-0 z-10">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-4 sm:px-6 text-xs sm:text-sm h-9 sm:h-10"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onClose();
              onUpload();
            }}
            isDisabled={assignment.status !== "start"}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 sm:px-6 text-xs sm:text-sm h-9 sm:h-10"
          >
            Upload Answer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentDetailsModal;
