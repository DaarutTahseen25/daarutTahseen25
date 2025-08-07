import { Filter, RefreshCcw } from "lucide-react";

import useUIStore from "../../store/useUIStore";

import QuizCardComponent from "../../Components/QuizCardComponent";

import TotalCourses from "../../Components/AllCourses";

export default function MyCourses() {
  const {
    expandedCourse,

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

      name: "Arabic Alphabet Basics",

      chapters: [
        "Arabic Letters Overview",

        "Sounds and Pronunciation",

        "Makharij",

        "Practice Quiz",
      ],

      progress: 30,

      score: 45,

      status: "In progress",

      numberofchapters: 4,

      lectures: 18,

      image: "/arabic Language.png",
    },

    {
      id: 3,

      name: "Stories of the Prophets",

      chapters: [
        "Prophet Adam",

        "Prophet Nuh",

        "Prophet Ibrahim",

        "Prophet Musa",
      ],

      progress: 100,

      score: 92,

      status: "Completed",

      numberofchapters: 4,

      lectures: 22,

      image: "/arabic Language.png",
    },

    {
      id: 4,

      name: "Short Surahs Memorization",

      chapters: [
        "Surah Al-Fatiha",

        "Surah Al-Ikhlas",

        "Surah Al-Falaq",

        "Surah An-Naas",
      ],

      progress: 100,

      score: 100,

      status: "Completed",

      numberofchapters: 4,

      lectures: 16,

      image: "/arabic Language.png",
    },

    {
      id: 5,

      name: "Islamic Manners & Etiquette",

      chapters: [
        "Greeting Others",

        "Respecting Parents",

        "Table Manners",

        "Cleanliness in Islam",
      ],

      progress: 50,

      score: 60,

      status: "In progress",

      numberofchapters: 4,

      lectures: 20,

      image: "/arabic Language.png",
    },
  ];

  const quizList = [
    {
      id: 1,

      title: "Qur’an Recitation Basics",

      quizes: 10,

      duration: "15mins",

      date: "15th August, 2025",

      time: "3:00PM",

      status: "start",

      dueDate: "20th August, 2025, 12:00PM",

      image: "/arabic Language.png",
    },

    {
      id: 2,

      title: "Arabic Alphabet Test",

      quizes: 8,

      duration: "10mins",

      date: "18th August, 2025",

      time: "1:00PM",

      status: "submitted",

      image: "/arabic Language.png",
    },

    {
      id: 3,

      title: "Stories of Prophets Quiz",

      quizes: 12,

      duration: "20mins",

      date: "19th August, 2025",

      time: "5:00PM",

      status: "submitted",

      image: "/arabic Language.png",
    },

    {
      id: 4,

      title: "Short Surahs Assessment",

      quizes: 6,

      duration: "12mins",

      date: "21st August, 2025",

      time: "4:30PM",

      status: "missed",

      image: "/arabic Language.png",
    },

    {
      id: 5,

      title: "Islamic Manners Check",

      quizes: 7,

      duration: "10mins",

      date: "22nd August, 2025",

      time: "2:15PM",

      status: "start",

      dueDate: "25th August, 2025, 11:00AM",

      image: "/arabic Language.png",
    },

    {
      id: 6,

      title: "Final Review Quiz",

      quizes: 15,

      duration: "25mins",

      date: "25th August, 2025",

      time: "6:00PM",

      status: "submitted",

      image: "/arabic Language.png",
    },
  ];

  const filteredCourses = courses

    .filter((course) =>
      !searchTerm
        ? true
        : course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    .filter((course) =>
      filterProgress === "Progress" ? course.progress < 100 : true
    )

    .filter((course) => {
      if (filterStatus === "Completed") return course.status === "Completed";

      if (filterStatus === "In progress")
        return course.status === "In progress";

      return true;
    });

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

      {/* Total Courses */}

      {activeTab === "Total Courses" && (
        <TotalCourses courses={filteredCourses} />
      )}

      {/* Quiz */}

      {activeTab === "Quiz" && quizList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizList.map((quiz, idx) => (
            <QuizCardComponent key={idx} {...quiz} />
          ))}
        </div>
      )}

      {/* Fallback */}

      {activeTab !== "Total Courses" && activeTab !== "Quiz" && (
        <div className="text-center text-gray-500 p-4">
          No data for this tab.
        </div>
      )}
    </div>
  );
}
