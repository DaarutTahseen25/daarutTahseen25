import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";

// Mock results data
const resultsData = [
  {
    className: "Beginner Class 1",
    courses: [
      {
        id: 1,
        course: "Qur'an Recitation & Tajwid",
        assignmentAvg: 40,
        examScore: 50,
        overallScore: 90,
        grade: "A",
      },
      {
        id: 2,
        course: "Arabic Alphabet & Phonetics",
        assignmentAvg: 40,
        examScore: 50,
        overallScore: 90,
        grade: "A",
      },
      {
        id: 3,
        course: "Basic Islamic Manners (Adab)",
        assignmentAvg: 10,
        examScore: 20,
        overallScore: 30,
        grade: "F",
      },
      {
        id: 4,
        course: "Short Surahs Memorization",
        assignmentAvg: 40,
        examScore: 40,
        overallScore: 90,
        grade: "A",
      },
      {
        id: 5,
        course: "Stories of the Prophets",
        assignmentAvg: 10,
        examScore: 20,
        overallScore: 30,
        grade: "F",
      },
    ],
  },
  {
    className: "Beginner Class 2",
    courses: [
      {
        id: 6,
        course: "Introduction to Nahw (Grammar)",
        assignmentAvg: 40,
        examScore: 50,
        overallScore: 90,
        grade: "A",
      },
    ],
  },
];

const Results = () => {
  usePageTitle("Results");

  const getGradeColor = (grade) => {
    switch (grade) {
      case "A":
      case "B":
        return "bg-teal-100 text-teal-700";
      case "C":
        return "bg-yellow-100 text-yellow-700";
      case "D":
      case "F":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-teal-100 text-teal-700";
    if (score >= 50) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <section className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Results</h1>
      </div>

      {/* Results by Class */}
      <div className="space-y-8">
        {resultsData.map((classData, index) => (
          <div key={index}>
            {/* Class Header */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {classData.className} Result
            </h2>

            {/* Results Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        S/N
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Course
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Assignment Avg.
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Exam Score
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Overall Score
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {classData.courses.map((course, idx) => (
                      <tr
                        key={course.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {course.course}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm font-medium text-gray-700">
                            {course.assignmentAvg}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-sm font-medium text-gray-700">
                            {course.examScore}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${getScoreColor(
                              course.overallScore
                            )}`}
                          >
                            {course.overallScore}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${getGradeColor(
                              course.grade
                            )}`}
                          >
                            {course.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
