import { useState } from "react";
import ExamCardComponent from "./ExamsCard";

import CreateExamQuiz from "./CreateExamquiz";
import ViewExamModal from "./ViewExamModal";

const levels = [
  { id: "B1", name: "Beginner Class 1", studentsCount: 1 },
  { id: "B2", name: "Beginner Class 2", studentsCount: 0 },
  { id: "B3", name: "Beginner Class 3", studentsCount: 0 },
  { id: "B4", name: "Beginner Class 4", studentsCount: 0 },
];

const assignmentsByLevel = {
  B1: [
    {
      id: "a1",
      title: "Introduction to Tajwid",
      deadline: "20th December 2025; 10.00pm",
      duration: "45 mins",
      questions: 10,
      image: "/Islamic Aqeedah.png",
      students: ["/her2.png"],
      totalSubmitted: 3,
    },
    {
      id: "a22",
      title: "Introduction to Tajwid",
      deadline: "20th December 2025; 10.00pm",
      duration: "45 mins",
      questions: 10,
      image: "/Islamic Aqeedah.png",
      students: ["/her2.png"],
      totalSubmitted: 3,
    },
    {
      id: "a3",
      title: "Introduction to Tajwid",
      deadline: "20th December 2025; 10.00pm",
      duration: "45 mins",
      questions: 10,
      image: "/Islamic Aqeedah.png",
      students: ["/her2.png"],
      totalSubmitted: 3,
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

export default function ExamPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [activeAssignment, setActiveAssignment] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);
  const [openView, setOpenView] = useState(false);
  const [viewAssignment, setViewAssignment] = useState(null);
  const [viewLevel, setViewLevel] = useState(null);

  const handleOpenView = (levelId, assignment) => {
    setViewLevel(levelId);
    setViewAssignment(assignment);
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
    setViewAssignment(null);
    setViewLevel(null);
  };

  const toggleLevel = (id) => {
    setSelectedLevel((prev) => (prev === id ? null : id));
  };

  const handleOpenCreate = (levelId, assignment) => {
    setActiveLevel(levelId);
    setActiveAssignment(assignment);
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
    setActiveAssignment(null);
    setActiveLevel(null);
  };

  return (
    <div className="space-y-6">
      {levels.map((level) => {
        const styles = levelStyles[level.id];
        const assignments = assignmentsByLevel[level.id] || [];

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

            {/* ASSIGNMENTS */}
            {selectedLevel === level.id && (
              <div className="pl-2">
                {assignments.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {assignments.map((assignment) => (
                      <ExamCardComponent
                        key={assignment.id}
                        title={assignment.title}
                        deadline={assignment.deadline}
                        duration={assignment.duration}
                        questions={assignment.questions}
                        image={assignment.image}
                        students={assignment.students}
                        totalSubmitted={assignment.totalSubmitted}
                        onView={() => handleOpenView(level.id, assignment)}
                        onSeeAll={() =>
                          console.log(`See all for ${assignment.title}`)
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No assignments yet.</p>
                )}
              </div>
            )}
          </div>
        );
      })}
      {openView && (
        <ViewExamModal
          isOpen={openView}
          levelId={viewLevel}
          assignment={viewAssignment}
          onClose={handleCloseView}
        />
      )}

      {openCreate && (
        <CreateExamQuiz
          isOpen={openCreate}
          levelId={activeLevel}
          assignment={activeAssignment}
          onClose={handleCloseCreate}
        />
      )}
    </div>
  );
}
