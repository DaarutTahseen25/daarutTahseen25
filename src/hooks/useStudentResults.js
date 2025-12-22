import { useMemo } from "react";

export function useStudentResults() {
  // Mock results data
  const resultsData = useMemo(
    () => [
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
    ],
    []
  );

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

  return { resultsData, getGradeColor, getScoreColor };
}
