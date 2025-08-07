import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useUIStore from "../store/useUIStore";

export default function TotalCourses({ courses }) {
  const { expandedCourse, setExpandedCourse } = useUIStore();

  const filteredCourses = courses.filter(Boolean);

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">No data for this tab.</div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-auto">
      <div className="p-2 min-w-3xl mx-auto space-y-4">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey mb-2">
          <div className="font-semibold">Course Name</div>
          <div className="font-semibold">Progress</div>
          <div className="font-semibold">Overall Score</div>
          <div className="font-semibold">Status</div>
        </div>

        {/* Course Rows */}
        {filteredCourses.map((course) => (
          <div key={course.id} className="mb-4">
            <div className="flex items-start justify-between">
              {/* Name & Image */}
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

              {/* Progress */}
              <div className="w-30">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className={`h-2 rounded ${
                      course.progress === 100 ? "bg-primary/40" : "bg-accent/40"
                    }`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Score */}
              <div className="text-sm text-gray-700 ml-2">{course.score}%</div>

              {/* Status */}
              <div className="w-1/6 text-sm text-gray-700">{course.score}%</div>

              {/* Status Label + Expand */}
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
                    <FiChevronUp size={16} />
                  ) : (
                    <FiChevronDown size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Chapters */}
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
      </div>
    </div>
  );
}
