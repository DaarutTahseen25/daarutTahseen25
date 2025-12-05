import React, { useState } from "react";
import Button from "./Button";
import ResultModal from "./ResultModal";
import ExamInstructionsModal from "./ExamInstructionsModal";

/**
 * Shared exam-taking component for both aspirant placement tests and student course exams
 *
 * @param {Object} examData - Exam details (title, questions, duration, instructions, etc.)
 * @param {string} examType - "placement" | "course"
 * @param {Function} onComplete - Callback when exam is completed
 * @param {Function} onExamStart - Callback when exam is started (shows exam interface)
 * @param {string} returnPath - Navigation path after completion
 * @param {string} userLevel - User's level (for aspirant context)
 */
const ExamTaking = ({
  examData,
  examType = "course",
  onComplete,
  onExamStart,
  returnPath = "/",
  userLevel = "",
}) => {
  console.log("ExamTaking component props:", {
    examType,
    onExamStart: !!onExamStart,
    onComplete: !!onComplete,
  });

  // Map exam status from data to internal status
  // "start" -> "In Progress", "submitted" -> "Completed"
  const getInitialStatus = () => {
    if (examData?.status === "start") return "In Progress";
    if (examData?.status === "submitted") return "Completed";
    return examData?.status || "Pending";
  };

  const [examStatus, setExamStatus] = useState(getInitialStatus());
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const handleStartExam = () => {
    setShowInstructionsModal(true);
  };

  const handleBeginExam = () => {
    setShowInstructionsModal(false);

    // Call onExamStart to show exam interface
    if (onExamStart) {
      console.log("Calling onExamStart - switching to exam interface");
      onExamStart();
      // Don't set status here - the exam interface will handle it
    } else {
      // Fallback: simulate completion (for aspirant tests without interface)
      console.log("No onExamStart - using simulation fallback");
      setExamStatus("In Progress");
      setTimeout(() => {
        setExamStatus("Completed");
        if (onComplete) onComplete();
      }, 2000);
    }
  };

  const handleViewResult = () => {
    setShowResultModal(true);
  };

  const getStatusText = () => {
    switch (examStatus) {
      case "Pending":
        return examType === "placement"
          ? `Test Scheduled - ${examData?.scheduleDate || "TBD"}`
          : `Exam Scheduled - ${examData?.date || "TBD"}`;
      case "In Progress":
        return examType === "placement" ? "Test Ongoing" : "Exam Ongoing";
      case "Completed":
        return examType === "placement" ? "Test Completed" : "Exam Completed";
      default:
        return "Unknown Status";
    }
  };

  const ActionButton = () => {
    switch (examStatus) {
      case "Pending":
        return (
          <Button
            variant="notActive"
            disabled
            className="w-40 h-12 mt-6 rounded-xl"
          >
            {examType === "placement" ? "Take Test" : "Start Exam"}
          </Button>
        );
      case "In Progress":
        return (
          <Button
            onClick={handleStartExam}
            className="w-40 h-12 mt-6 rounded-xl transition-colors hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {examType === "placement" ? "Take Test" : "Start Exam"}
          </Button>
        );
      case "Completed":
        return (
          <Button
            onClick={handleViewResult}
            className="w-40 h-12 mt-6 rounded-xl transition-colors hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Result
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Modals */}
      <ExamInstructionsModal
        isOpen={showInstructionsModal}
        onClose={() => setShowInstructionsModal(false)}
        exam={examData}
        onStart={handleBeginExam}
      />

      <ResultModal
        isOpen={showResultModal}
        onClose={() => setShowResultModal(false)}
        score={examData?.score || 0}
      />

      {/* Status Card */}
      <section
        aria-labelledby="exam-status"
        className="mt-8 rounded-xl bg-white px-6 py-6 shadow-lg"
      >
        <h3
          id="exam-status"
          className="font-clash font-medium text-lg md:text-xl text-black uppercase mb-4"
        >
          {examType === "placement" ? "Registration Status" : "Exam Status"}
        </h3>

        <ul className="divide-y divide-dark-grey/30 font-montserrat text-sm md:text-base text-darkest-grey">
          <li className="py-3 text-black">
            <span className="font-semibold text-dark-grey">Status:</span>{" "}
            {getStatusText()}
          </li>

          {examType === "placement" && userLevel && (
            <li className="py-3 text-black capitalize">
              <span className="font-semibold text-dark-grey">
                Selected Level:
              </span>{" "}
              {userLevel}
            </li>
          )}

          {examType === "course" && examData?.courseName && (
            <li className="py-3 text-black">
              <span className="font-semibold text-dark-grey">Course:</span>{" "}
              {examData.courseName}
            </li>
          )}

          <li className="py-3 text-black">
            <span className="font-semibold text-dark-grey">
              {examType === "placement" ? "Test:" : "Exam:"}
            </span>{" "}
            {examStatus}
          </li>

          {examData?.questions && (
            <li className="py-3 text-black">
              <span className="font-semibold text-dark-grey">Questions:</span>{" "}
              {examData.questions}
            </li>
          )}

          {examData?.duration && (
            <li className="py-3 text-black">
              <span className="font-semibold text-dark-grey">Duration:</span>{" "}
              {examData.duration}
            </li>
          )}
        </ul>

        {/* Action Button */}
        <div className="flex justify-center lg:justify-start">
          <ActionButton />
        </div>
      </section>
    </>
  );
};

export default ExamTaking;
