import { useState } from "react";
import StudentsTableComponent from "./studentstables";

const levels = [
  { id: "B1", name: "Beginner Class 1", studentsCount: 1 },
  { id: "B2", name: "Beginner Class 2", studentsCount: 0 },
  { id: "B3", name: "Beginner Class 3", studentsCount: 0 },
  { id: "B4", name: "Beginner Class 4", studentsCount: 0 },
];

const studentsByLevel = {
  B1: [
    {
      name: "Abdulkabir Aishat",
      avatar: "/avatar.jpg",
      progress: 70,
      score: 80,
      assignments: [
        {
          subject: "Introduction to Tajwid",
          file: "Assignment_Tajwid.pdf",
          date: "9th June, 2025",
          score: 40,
        },
      ],
      exams: [
        {
          subject: "Final Tajwid Exam",
          file: "Exam_Tajwid.pdf",
          date: "20th June, 2025",
          score: 75,
        },
      ],
    },
  ],
  B2: [],
  B3: [],
  B4: [],
};

const levelStyles = {
  B1: {
    base: "bg-[#e9f6f4]",
    hover: "hover:bg-[#dff2ee]",
    ring: "ring-[#00BFA6]",
  },
  B2: {
    base: "bg-[#fff4e5]",
    hover: "hover:bg-[#ffedd1]",
    ring: "ring-[#FF9800]",
  },
  B3: {
    base: "bg-[#fdeaea]",
    hover: "hover:bg-[#fbdcdc]",
    ring: "ring-[#E53935]",
  },
  B4: {
    base: "bg-[#f3e8ff]",
    hover: "hover:bg-[#e9d5ff]",
    ring: "ring-[#8B5CF6]",
  },
};

export default function StudentLevels() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const toggleLevel = (id) => {
    setSelectedLevel((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {levels.map((level) => {
        const styles = levelStyles[level.id];

        return (
          <div key={level.id} className="space-y-3">
            {/* LEVEL CARD */}
            <button
              onClick={() => toggleLevel(level.id)}
              className={`
                w-full flex items-center justify-between
                rounded-lg px-4 py-4 text-left
                shadow transition
                ${styles.base}
                ${styles.hover}
                ${selectedLevel === level.id ? `ring-2 ${styles.ring}` : ""}
              `}
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded text-xs font-bold bg-white/70">
                  {level.id}
                </span>
                <div>
                  <p className="font-semibold">{level.name}</p>
                  <p className="text-xs text-gray-600">
                    {level.studentsCount} Students enrolled
                  </p>
                </div>
              </div>

              <span
                className={`text-xl transition-transform ${
                  selectedLevel === level.id ? "rotate-90" : ""
                }`}
              >
                ›
              </span>
            </button>

            {/* STUDENT TABLE */}
            {selectedLevel === level.id && (
              <div className="pl-2">
                <StudentsTableComponent
                  students={studentsByLevel[level.id] || []}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
