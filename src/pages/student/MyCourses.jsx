import { Filter, RefreshCcw } from "lucide-react";
import useUIStore from "../../store/useUIStore";
import QuizCardComponent from "../../Components/QuizCardComponent";

// Tab Components
import TotalCourses from "../../Components/TotalCourses";
// import Classes from "../../Components/Classes";
// import Assignment from "../../Components/Assignment";
// import Quiz from "../../Components/Quiz";

export default function MyCourses() {
  const {
    expandedCourse,
    searchTerm,
    filterProgress,
    filterStatus,
    activeTab,
    setExpandedCourse,
    setSearchTerm,
    setFilterProgress,
    setFilterStatus,
    setActiveTab,
    resetFilters,
  } = useUIStore();

  const courses = [
    {
      id: 1,
      name: "Qur’an Recitation & Tajwid",
      chapters: [
        "Introduction to Tajwid",
        "Makharij (Articulation Points)",
        "Rules of Noon & Meem",
        "Madd & Lengthening Rules",
        "Practice & Recitation",
      ],
      progress: 70,
      score: 80,
      status: "In progress",
      numberofchapters: 5,
      lectures: 25,
      image: "/arabic Language.png",
    },
    {
      id: 2,
      name: "Arabic Alphabet Phonetic",
      chapters: [
        "Introduction to Tajwid",
        "Makharij (Articulation Points)",
        "Rules of Noon & Meem",
        "Madd & Lengthening Rules",
        "Practice & Recitation",
      ],
      progress: 70,
      score: 80,
      status: "In progress",
      numberofchapters: 5,
      lectures: 30,
      image: "/arabic Language.png",
    },
    {
      id: 3,
      name: "Basic Islamic Manners",
      chapters: [
        "Introduction to Tajwid",
        "Makharij (Articulation Points)",
        "Rules of Noon & Meem",
        "Madd & Lengthening Rules",
      ],
      progress: 70,
      score: 80,
      status: "In progress",
      numberofchapters: 4,
      lectures: 27,
      image: "/arabic Language.png",
    },
    {
      id: 4,
      name: "Short Surah Memorization",
      chapters: [
        "Introduction to Tajwid",
        "Makharij (Articulation Points)",
        "Rules of Noon & Meem",
        "Madd & Lengthening Rules",
        "Practice & Recitation",
      ],
      progress: 70,
      score: 80,
      status: "In progress",
      numberofchapters: 5,
      lectures: 30,
      image: "/arabic Language.png",
    },
    {
      id: 5,
      name: "Stories of the Prophet",
      chapters: [
        "Introduction to Tajwid",
        "Makharij (Articulation Points)",
        "Rules of Noon & Meem",
        "Madd & Lengthening Rules",
      ],
      progress: 100,
      score: 90,
      status: "Completed",
      numberofchapters: 4,
      lectures: 37,
      image: "/arabic-alphabet.png",
    },
  ];

  const filteredCourses = courses
    .filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((course) =>
      filterProgress === "Progress" ? course.progress < 100 : true
    )
    .filter((course) =>
      filterStatus === "Completed"
        ? course.status === "Completed"
        : filterStatus === "In progress"
        ? course.status === "In progress"
        : true
    );

  return (
    <div className="p-4 min-h-screen font-clash">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-accent">
          My Courses
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-4 bg-white max-w-3xl px-3 py-2 rounded-lg border border-textmuted">
          <button className="flex items-center px-3 py-1 text-textmain">
            <Filter size={16} className="mr-2" /> Filter by
          </button>
          <select
            className="px-2 py-1 text-sm border-l border-textmuted text-textmain"
            value={filterProgress}
            onChange={(e) => setFilterProgress(e.target.value)}
          >
            <option value="">Date</option>
            <option value="Progress">Progress</option>
          </select>
          <select
            className="px-2 py-1 text-sm border-l border-textmuted text-textmain"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="In progress">In progress</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-2 py-1 rounded text-sm shadow-sm border-textmuted focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            onClick={resetFilters}
            className="text-red-400 text-sm flex items-center gap-1"
          >
            <RefreshCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mt-6 gap-6 text-textmuted text-md md:text-xl border-b">
          {["Classes", "Total Courses", "Assignment", "Quiz"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-4 rounded-lg shadow overflow-auto">
        <div className="p-2 min-w-3xl mx-auto space-y-4">
          {activeTab === "Total Courses" && (
            <>
              <div className="grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey mb-2">
                <div className="font-semibold">Course Name</div>
                <div className="font-semibold">Progress</div>
                <div className="font-semibold">Overall Score</div>
                <div className="font-semibold">Status</div>
              </div>
              <TotalCourses
                courses={filteredCourses}
                expandedCourse={expandedCourse}
                setExpandedCourse={setExpandedCourse}
              />
            </>
          )}

          {/* {activeTab === "Classes" && <Classes />} */}
          {/* {activeTab === "Assignment" && <Assignment />} */}
          {/* {activeTab === "Quiz" && <Quiz />} */}
        </div>
      </div>
    </div>
  );
}
