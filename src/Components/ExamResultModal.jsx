import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { ClipboardList } from "lucide-react";
import Button from "./Button";

const ExamResultModal = ({ isOpen, onClose, exam }) => {
  if (!exam) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:max-w-lg p-0 gap-0 bg-white rounded-xl overflow-hidden">
        <DialogHeader className="p-4 sm:p-6 border-b border-gray-100 flex flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
            <ClipboardList size={20} />
          </div>
          <DialogTitle className="text-lg font-bold text-gray-900">
            View Result
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 bg-transparent hover:bg-gray-100 rounded-full p-2 transition-colors" />
        </DialogHeader>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-sm font-bold text-gray-400">
                Assignment Title:
              </span>
              <span className="text-sm font-bold text-gray-900 sm:text-right">
                {exam.title}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-sm font-bold text-gray-400">
                Date Marked:
              </span>
              <span className="text-sm font-bold text-gray-900 sm:text-right">
                {exam.dateMarked || "N/A"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-sm font-bold text-gray-400">Score:</span>
              <div className="sm:text-right">
                <span className="inline-block px-4 py-1 rounded-md bg-teal-100 text-teal-700 font-bold text-lg">
                  {exam.score}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-2">
              <span className="text-sm font-bold text-gray-400 shrink-0">
                Remark:
              </span>
              <p className="text-sm text-gray-700 sm:text-right leading-relaxed max-w-xs">
                {exam.remark || "No remark available."}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 pt-2 flex justify-center bg-white pb-8">
          <Button
            onClick={onClose}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-12 py-2.5 h-auto w-full sm:w-auto"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExamResultModal;
