import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { BookCheck } from "lucide-react";
import { formatDate } from "../utils/helper";
import Input from "./input";

export default function ScoreDialog({
  open,
  onClose,
  submission,
  setSubmissions,
}) {
  const [score, setScore] = useState(0);
  function onSubmit(id, e) {
    e.preventDefault();
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Number(score) } : s))
    );
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose && onClose()}>
      <DialogContent className="bg-white max-w-sm w-full   p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b border-gray-200 w-full pb-4 sm:pb-5">
            <div className="size-[48px] bg-[#00968833] text-primary rounded-full flex items-center justify-center">
              <BookCheck />
            </div>
            <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left w-full">
              Score Student Assignment
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="my-4 grid gap-2 sm:gap-3 text-sm sm:text-base">
          <p className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-medium text-gray-600">Student Name:</span>{" "}
            <span className="text-gray-900">{submission?.name}</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-medium text-gray-600">Assignment Title:</span>{" "}
            <span className="text-gray-900">Introduction to Tajwid</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-medium text-gray-600">Submission Date:</span>{" "}
            <span className="text-gray-900">
              {formatDate(submission?.date)}
            </span>
          </p>
        </div>
        <form onSubmit={(e) => onSubmit(submission?.id, e)} className="">
          <Input
            type="number"
            label="Score"
            className="w-full"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <Input textArea label="Remark" className="w-full" />
          <div className="flex justify-between gap-3 mt-6 w-full flex-col sm:flex-row">
            <button
              type="button"
              className="w-full sm:w-auto px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition mb-2 sm:mb-0"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
            >
              Save Score
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
