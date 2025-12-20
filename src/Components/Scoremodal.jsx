"use client";
import React, { useState, useEffect } from "react";

export default function ScoreModal({ isOpen, onClose, student, onSave }) {
  const [score, setScore] = useState("");
  const [remark, setRemark] = useState("");

  // Reset values when modal opens
  useEffect(() => {
    if (student) {
      setScore(student.score || "");
      setRemark("");
    }
  }, [student]);

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Score Student Assignment</h2>
        <p className="mb-2 text-textmain">
          <strong className="text-gray-400">Student Name:</strong>{" "}
          {student.name}
        </p>
        <p className="mb-2 text-textmain">
          <strong className="text-gray-400">Submission Date:</strong>{" "}
          {student.date}
        </p>
        <label className="block mt-3">
          <span className="text-sm font-medium">Score</span>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="mt-1 block w-full border border-gray-400  rounded px-2 py-1 focus:outline-none focus:ring-none focus:border-teal-600"
          />
        </label>
        <label className="block mt-3">
          <span className="text-sm font-medium">Remark</span>
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="mt-1 block w-full border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-none focus:border-teal-600"
          />
        </label>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave({ student, score, remark });
              onClose();
            }}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Save Score
          </button>
        </div>
      </div>
    </div>
  );
}
