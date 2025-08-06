import { Filter, RefreshCcw } from "lucide-react";
import useUIStore from "../../store/useUIStore";

// UI
export default function MyCourses() {
  // Zustand state
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

  // Static courses data
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

  // Filter logic
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
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-accent">
          My Courses
        </h1>

        {/* Filter Controls */}
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
            className="border px-2 py-1 rounded text-sm shadow-sm border-textmuted focus:border-none focus:outline-none focus:ring-1 focus:ring-primary"
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

      {/* Course List */}
      <div className="bg-white p-4 rounded-lg shadow overflow-auto">
        <div className="p-2 min-w-3xl mx-auto space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey mb-2">
            <div className="font-semibold">Course Name</div>
            <div className="font-semibold">Progress</div>
            <div className="font-semibold">Overall Score</div>
            <div className="font-semibold">Status</div>
          </div>

          {/* Courses */}
          {activeTab === "Total Courses" &&
            filteredCourses.length > 0 &&
            filteredCourses.map((course) => (
              <div key={course.id} className="mb-4">
                {/* Course row */}
                <div className="flex items-start justify-between">
                  {/* Left side: Image and name */}
                  <div className="flex gap-4 w-1/4">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-xl text-textmain">
                        {course.name}
                      </h3>
                      <p className="text-sm font-semibold text-textmuted">
                        {course.numberofchapters} chapters • {course.lectures}{" "}
                        lectures
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-30">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className={`h-2 rounded ${
                          course.progress === 100
                            ? "bg-primary/40"
                            : "bg-accent/40"
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-sm text-gray-700 ml-2">
                    {course.score}%
                  </div>

                  {/* Status */}
                  <div className="w-1/6 text-sm text-gray-700">
                    {course.score}%
                  </div>

                  {/* Status + Toggle */}
                  <div className="w-1/4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-sm rounded border border-textmuted ${
                        course.status === "Completed"
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      {course.status}
                    </span>
                    <button
                      onClick={() => setExpandedCourse(course.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedCourse === course.id ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Chapter details */}
                {expandedCourse === course.id && course.chapters && (
                  <div className="mt-4 space-y-2">
                    {course.chapters.map((title, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2"
                      >
                        <div className="text-sm">
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-md rounded mr-2">
                            Chapter {i + 1}
                          </span>
                          {title}
                        </div>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 text-sm text-teal-600 border border-teal-600 px-2 py-1 rounded hover:bg-teal-50">
                            Download Pdf
                          </button>
                          <button className="flex items-center gap-1 text-sm text-white bg-teal-600 px-2 py-1 rounded hover:bg-teal-700">
                            Play Video
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          {/* Fallback message */}
          {(activeTab !== "Total Courses" || filteredCourses.length === 0) && (
            <div className="text-center text-gray-500 p-4">
              No data for this tab.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
