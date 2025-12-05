import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import ExamTaking from "../../Components/ExamTaking";
import ExamInterface from "./ExamInterface";
import DashTitle from "../../Components/DashTitle";
import { examList } from "../../constants/data";
import { usePageTitle } from "../../hooks/usePageTitle";

const ExamPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isExamStarted, setIsExamStarted] = useState(false);

  // Find exam data by ID
  const examData = examList.find((exam) => exam.id === parseInt(id));

  usePageTitle(examData?.title || "Exam");

  // Handle when user starts the exam (from ExamTaking component)
  const handleExamStart = () => {
    console.log("handleExamStart called - switching to exam interface");
    setIsExamStarted(true);
  };

  // Handle exam submission
  const handleExamSubmit = (answers) => {
    console.log("Exam submitted with answers:", answers);
    // TODO: Send answers to backend
    // For now, navigate back to courses
    alert("Exam submitted successfully!");
    navigate("/student/my-courses");
  };

  // Handle exam exit
  const handleExamExit = () => {
    if (
      window.confirm(
        "Are you sure you want to exit? Your progress will not be saved."
      )
    ) {
      setIsExamStarted(false);
    }
  };

  // If exam not found, show error
  if (!examData) {
    return (
      <div className="min-h-screen font-clash">
        <DashTitle
          title="Exam Not Found"
          subtitle="The exam you're looking for doesn't exist"
        />
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/student/my-courses")}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-buttonhover transition-colors"
          >
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  console.log("ExamPage render - isExamStarted:", isExamStarted);

  // If exam is started, show exam interface
  if (isExamStarted) {
    console.log("Rendering ExamInterface");
    return (
      <ExamInterface
        examData={examData}
        onSubmit={handleExamSubmit}
        onExit={handleExamExit}
      />
    );
  }

  console.log("Rendering ExamTaking component");

  // Otherwise, show exam status and start button
  return (
    <div className="min-h-screen font-clash">
      {/* Page Header */}
      <div className="mb-8">
        <DashTitle
          title={examData.title}
          subtitle={`${examData.courseName} - ${examData.class}`}
        />
      </div>

      {/* Exam Taking Component */}
      <ExamTaking
        examData={examData}
        examType="course"
        onComplete={handleExamSubmit}
        onExamStart={handleExamStart}
        returnPath="/student/my-courses"
      />

      {/* Back Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/student/my-courses")}
          className="text-primary hover:text-buttonhover font-semibold transition-colors"
        >
          ← Back to My Courses
        </button>
      </div>
    </div>
  );
};

export default ExamPage;
