import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import ExamInstructionsModal from "./ExamInstructionsModal";
import ExamResultModal from "./ExamResultModal";

const StudentExamCard = ({
  id,
  title,
  date,
  time,
  status,
  dueDate,
  image,
  questions,
  duration,
  instructions,
  score,
  dateMarked,
  remark,
  courseName,
}) => {
  const navigate = useNavigate();
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const isDisabled = status !== "start";

  const statusText = {
    submitted: "Submitted",
    missed: "Missed",
  };

  const statusColor = {
    submitted: "text-teal-500",
    missed: "text-gray-400",
  };

  const examData = {
    id,
    title,
    date,
    time,
    status,
    dueDate,
    image,
    questions,
    duration,
    instructions,
    score,
    dateMarked,
    remark,
    courseName,
  };

  const handleStartExam = () => {
    // Navigate to exam page
    navigate(`/student/exam/${id}`);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-4 w-full border border-gray-200 relative overflow-hidden max-w-full flex flex-col gap-5">
        {/* Title and subtitle */}
        <div className="flex-1 flex flex-col sm:flex-row items-start gap-4">
          <img
            src={image}
            alt={title}
            className="w-20 h-16 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 truncate">
              {title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span>{questions} Questions</span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span>{duration}</span>
            </div>

            <p className="text-xs font-bold text-gray-900 mt-2">
              {date} ; {time}
            </p>

            {dueDate && status === "start" && (
              <p className="text-xs text-red-400 mt-1 break-words font-medium">
                Submit before: {dueDate}
              </p>
            )}

            {status !== "start" && (
              <p className={`text-xs mt-2 font-medium ${statusColor[status]}`}>
                {statusText[status]}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 w-full pt-2 border-t border-gray-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsInstructionsOpen(true)}
            className="w-full sm:w-auto border-teal-600 text-teal-600 hover:bg-teal-50 font-bold px-6 py-2 text-xs rounded-lg h-9"
          >
            Instructions
          </Button>

          {status === "start" ? (
            <Button
              size="sm"
              onClick={handleStartExam}
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-2 text-xs rounded-lg h-9"
            >
              Start
            </Button>
          ) : status === "submitted" ? (
            <Button
              size="sm"
              onClick={() => setIsResultOpen(true)}
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-2 text-xs rounded-lg h-9"
            >
              View Result
            </Button>
          ) : null}
        </div>
      </div>

      <ExamInstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
        exam={examData}
        onStart={handleStartExam}
      />

      <ExamResultModal
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
        exam={examData}
      />
    </>
  );
};

export default React.memo(StudentExamCard);
