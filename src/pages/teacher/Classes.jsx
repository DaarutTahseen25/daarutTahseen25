import React, { useCallback } from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

import Tabs from "./CoursesTab";
import StudentTable from "../../Components/TotalStudents";
import Assignmentcard from "../../Components/Assignment";

import QuizCard from "./QuizCard";

// added
import ClassCompo from "./ClassCompo";

// added
import useUIStore from "../../store/useUIStore";
import FiltersAndTabs from "../../Components/TeacherBar";
import AssignmentPage from "../../Components/Assignment";
import ExamPage from "../../Components/Exams";

const assignments = [
  {
    id: 1,
    title: "Qur’an Recitation & Tajwid",
    subtitle: "Submit before: 20th June 2025; 12:00PM",
    deadline: "2025-10-20T12:00:00",
    image: "/quran-recitation.png",
    students: ["/test1.png", "/test2.png", "/test3.png", "/test4.png"],
    totalSubmitted: 7,
  },
  {
    id: 2,
    title: "Islamic History",
    subtitle: "Submit before: 25th June 2025; 5:00PM",
    deadline: "2025-06-25T17:00:00",
    image: "/arabic.png",
    students: ["/test2.png", "/test3.png"],
    totalSubmitted: 3,
  },
  {
    id: 3,
    title: "Arabic Language Basics",
    subtitle: "Submit before: 1st July 2025; 10:00AM",
    deadline: "2025-07-01T10:00:00",
    image: "/arabic.png",
    students: ["/test1.png", "/test4.png", "/test5.png", "/test6.png"],
    totalSubmitted: 10,
  },
];

const quizList = [
  {
    title: "Islamic History Quiz",
    date: "20th October, 2025",
    time: "12:00PM",
    questions: 20,
    duration: "30 mins",
    deadline: "2025-10-20T12:00:00",
    image: "/arabic.png",
    onView: () => console.log("View Islamic History Quiz"),
    onCreate: () => console.log("Create Islamic History Quiz"),
    onSeeAll: () => console.log("See All Islamic History Quizzes"),
    disableSeeAll: false,
  },
  {
    title: "Computer Science Quiz",
    date: "25th October, 2025",
    time: "10:00AM",
    questions: 15,
    duration: "20 mins",
    deadline: "2025-07-01T10:00:00",
    image: "/arabic.png",
    onView: () => console.log("View Computer Science Quiz"),
    onCreate: () => console.log("Create Computer Science Quiz"),
    onSeeAll: () => console.log("See All Computer Science Quizzes"),
    disableSeeAll: false,
  },
  {
    title: "Mathematics Quiz",
    date: "30th October, 2025",
    time: "2:00PM",
    questions: 25,
    duration: "40 mins",
    deadline: "2025-07-01T10:00:00",
    image: "/arabic.png",
    onView: () => console.log("View Mathematics Quiz"),
    onCreate: () => console.log("Create Mathematics Quiz"),
    onSeeAll: () => console.log("See All Mathematics Quizzes"),
    disableSeeAll: false,
  },
];

export default function Classes() {
  usePageTitle("My Courses");

  const {
    searchTerm,
    filterProgress,
    filterStatus,
    activeTab,
    setSearchTerm,
    setFilterProgress,
    setFilterStatus,
    setActiveTab,
    resetFilters,
  } = useUIStore();

  const handleSearchChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  return (
    <section className="">
      <div className="max-w-7xl mb-8 md:mb-12">
        <DashTitle
          title="My Classes"
          subtitle="View schedules, manage students, and monitor class activities"
        />
        <FiltersAndTabs />
      </div>

      {activeTab === "Total Students" && <StudentTable />}

      {activeTab === "Quiz" && quizList.length > 0 && (
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full">
            {quizList.map((quiz, index) => (
              <QuizCard key={index} {...quiz} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "Classes" && <ClassCompo />}

      {activeTab === "Assignment" && <AssignmentPage />}
      {activeTab === "Exam" && <ExamPage />}
    </section>
  );
}
