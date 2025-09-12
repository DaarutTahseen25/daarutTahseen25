import { useCallback } from "react";
import { Filter, RefreshCcw } from "lucide-react";

import ClassCompo from "./ClassCompo";

import useUIStore from "../../store/useUIStore";
import { usePageTitle } from "../../hooks/usePageTitle";

import Tabs from "./CoursesTab";
import StudentTable from "../../Components/TotalStudents";
import AssignmentCard from "../../Components/Assignment";
import QuizCard from "./QuizCard";

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
    <div className="p-4 min-h-screen font-clash ">
      <div className="mb-4">
        <div className="max-w-7xl  mb-8 md:mb-12">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4">
              Classes
            </div>
            <h1 className="font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4">
              My Classes
              <span className="block text-[#009688] text-2xl md:text-3xl lg:text-4xl mt-2 capitalize">
                view and manage your classes
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto md:mx-0 rounded-full"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="w-full mt-4 bg-white p-3 sm:p-4 rounded-lg border border-textmuted shadow-sm">
          {/* Mobile: Stack everything vertically */}
          <div className="flex flex-col sm:hidden space-y-3">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-textmain font-medium">
                <Filter size={16} className="mr-2" />
                Filter & Search
              </div>
              <button
                onClick={resetFilters}
                className="text-red-400 text-sm flex items-center gap-1 px-2 py-1 hover:bg-red-50 rounded transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {/* Search Input - Full width on mobile */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full border px-3 py-2 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />

            {/* Filter Selects - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-3">
              <select
                className="w-full px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
              >
                <option value="">All Dates</option>
                <option value="Progress">By Progress</option>
              </select>

              <select
                className="w-full px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In progress">In Progress</option>
              </select>
            </div>
          </div>

          {/* Tablet/Desktop: Horizontal layout */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 lg:gap-4">
            {/* Filter Label */}
            <div className="flex items-center text-textmain font-medium whitespace-nowrap">
              <Filter size={16} className="mr-2" />
              Filter by
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-textmuted hidden md:block"></div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <select
                className="px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white min-w-0 flex-shrink-0"
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
              >
                <option value="">Date</option>
                <option value="Progress">Progress</option>
              </select>

              <select
                className="px-3 py-2 text-sm border border-textmuted rounded text-textmain focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white min-w-0 flex-shrink-0"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">Status</option>
                <option value="Completed">Completed</option>
                <option value="In progress">In Progress</option>
              </select>

              {/* Search Input - Flexible width */}
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-1 min-w-48 max-w-xs border px-3 py-2 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="text-red-400 text-sm flex items-center gap-1 px-3 py-2 hover:bg-red-50 rounded transition-colors whitespace-nowrap flex-shrink-0"
            >
              <RefreshCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
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

      {/* Classes Tab */}

      {activeTab === "Classes" && <ClassCompo />}

      {/* Assignment Tab */}

      {activeTab === "Assignment" && quizList.length > 0 && (
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1201px)]:grid-cols-3 gap-3 w-full">
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                title={assignment.title}
                subtitle={assignment.subtitle}
                deadline={assignment.deadline}
                image={assignment.image}
                students={assignment.students}
                totalSubmitted={assignment.totalSubmitted}
                onView={() => console.log(`View ${assignment.title}`)}
                onCreate={() => console.log(`Create for ${assignment.title}`)}
                onSeeAll={() => console.log(`See all for ${assignment.title}`)}
                disableSeeAll={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
