"use client";
import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import ScoreModal from "./Scoremodal";

const resources = [
  {
    id: 1,
    name: "Abdur Kharsma",
    date: "9th June, 2025",
    files: ["Introduction-to-Tajwid.mp4", "Introduction-to-Tajwid.pdf"],
    score: 85,
  },
  {
    id: 2,
    name: "Abdur Kharsma",
    date: "9th June, 2025",
    files: ["Introduction-to-Tajwid.mp4", "Introduction-to-Tajwid.pdf"],
    score: 85,
  },
  {
    id: 3,
    name: "Abdur Kharsma",
    date: "9th June, 2025",
    files: ["Introduction-to-Tajwid.mp4", "Introduction-to-Tajwid.pdf"],
    score: 85,
  },
];

export default function StudentSubmission() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setModalOpen(false);
  };

  const handleSaveScore = ({ student, score, remark }) => {
    console.log("Saved:", { student, score, remark });
    // You can call your API here to save the score
  };

  return (
    <div className="bg-white rounded-2xl p-5 w-full">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full border-collapse table-auto">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 px-3 font-semibold">S/N</th>
              <th className="py-3 px-3 font-semibold">Student</th>
              <th className="py-3 px-3 font-semibold">Date</th>
              <th className="py-3 px-3 font-semibold max-w-xs">
                Submitted Files
              </th>
              <th className="py-3 px-3 font-semibold">Score</th>
              <th className="py-3 px-3 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {resources.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-4 px-3 text-sm">{index + 1}</td>
                <td className="py-4 px-3 text-sm font-semibold">{item.name}</td>
                <td className="py-4 px-3 text-sm">{item.date}</td>
                <td className="py-4 px-3 text-sm max-w-xs break-words">
                  <div className="flex flex-col gap-1">
                    {item.files.map((file, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center gap-2 text-blue-600 hover:underline truncate"
                      >
                        <FaFolder className="text-sm" />
                        {file}
                      </a>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-3 text-sm">{item.score}</td>
                <td className="py-4 px-3">
                  <button
                    className="bg-primary px-2 py-1 rounded text-white"
                    onClick={() => handleOpenModal(item)}
                  >
                    Score
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ScoreModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        student={selectedStudent}
        onSave={handleSaveScore}
      />
    </div>
  );
}
