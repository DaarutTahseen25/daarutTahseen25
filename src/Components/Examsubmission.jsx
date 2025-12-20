"use client";
import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import ScoreModal from "./Scoremodal";

const resources = [
  {
    id: 1,
    name: "Abdur Kharsma",
    avg: 40,
    score: 60,
    overallscore: 85,
    grade: "A",
    date: "20th Dec, 2025",
  },
  {
    id: 2,
    name: "Fatima Zahra",
    avg: 35,
    score: 55,
    overallscore: 75,
    grade: "B",
    date: "20th Dec, 2025",
  },
  {
    id: 3,
    name: "Aisha Siddiqa",
    avg: 45,
    score: 65,
    overallscore: 90,
    grade: "A+",
    date: "20th Dec, 2025",
  },
  {
    id: 4,
    name: "Umar Farooq",
    avg: 30,
    score: 50,
    overallscore: 70,
    grade: "C",
    date: "20th Dec, 2025",
  },
];

export default function ExamSubmission() {
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
              <th className="py-3 px-3 font-semibold">Assignment Avg</th>

              <th className="py-3 px-3 font-semibold">Score</th>
              <th className="py-3 px-3 font-semibold">Overall Score</th>
              <th className="py-3 px-3 font-semibold">Grade</th>
            </tr>
          </thead>

          <tbody>
            {resources.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-4 px-3 text-sm">{index + 1}</td>
                <td className="py-4 px-3 text-sm font-semibold">{item.name}</td>
                <td className="py-4 px-3 text-sm">{item.avg}</td>

                <td className="py-4 px-3 text-sm">{item.score}</td>
                <td className="py-4 px-3 text-sm ">
                  <span className="bg-primary p-1 rounded">
                    {item.overallscore}
                  </span>
                </td>
                <td className="py-4 px-3 text-sm">{item.grade}</td>
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
