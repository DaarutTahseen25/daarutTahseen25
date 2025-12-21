import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Calendar, Clock, HelpCircle } from "lucide-react";
import Button from "./Button";

const ExamInstructionsModal = ({ isOpen, onClose, exam, onStart }) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!exam) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white rounded-xl">
        <DialogClose className="absolute right-4 top-4 z-50 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors" />

        <div className="space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <img
                src={exam.image}
                alt={exam.title}
                className="w-full sm:w-24 h-32 sm:h-20 rounded-lg object-cover"
              />
              <div className="flex-1 w-full">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  {exam.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  You are about to begin your {exam.title} examination, covering
                  both recitation accuracy and rules of articulation
                </p>

                <div className="flex flex-wrap gap-4 sm:gap-8 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <HelpCircle size={18} className="text-teal-600" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">
                        Questions
                      </span>
                      <span className="font-bold">
                        {exam.questions} Questions
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={18} className="text-teal-600" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">
                        Duration
                      </span>
                      <span className="font-bold">{exam.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar size={18} className="text-red-500" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">
                        Deadline
                      </span>
                      <span className="font-bold text-red-500">
                        {exam.dueDate || "18 July, 2025 ; 4:00 PM"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Exam Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 mb-6">
              {exam.instructions?.map((instruction, index) => (
                <li key={index} className="pl-2 -indent-2 ml-2 leading-relaxed">
                  {instruction}
                </li>
              ))}
            </ol>

            <div className="flex items-start gap-3 mt-4 pt-4 border-t border-gray-100">
              <input
                type="checkbox"
                id="confirm-read"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
              />
              <label
                htmlFor="confirm-read"
                className="text-sm text-gray-700 cursor-pointer select-none"
              >
                I have read and understood the instructions.
              </label>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex justify-between items-center sticky bottom-0 z-10">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-6 sm:px-8 h-10 sm:h-11"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onStart && onStart();
              onClose();
            }}
            isDisabled={!isChecked}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 sm:px-8 h-10 sm:h-11"
          >
            Start Exam
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExamInstructionsModal;
