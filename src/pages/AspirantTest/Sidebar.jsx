import React, { useMemo, useCallback, useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export default function Sidebar({
  questions,
  currentIndex,
  setCurrentIndex,
  onSubmit,
  isSubmitted,
  testDurationMinutes = 20,
}) {
  const [timeLeft, setTimeLeft] = useState(testDurationMinutes * 60);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;

        if (newTime <= 300 && !isWarning) {
          setIsWarning(true);
        }

        if (newTime <= 0) {
          onSubmit();
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, onSubmit, isWarning]);

  const formatTime = useCallback((seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const getTimerColor = useCallback(() => {
    if (timeLeft <= 300) return "text-red-600";
    if (timeLeft <= 900) return "text-orange-600";
    return "text-primary";
  }, [timeLeft]);

  const isAnyAnswered = useMemo(
    () => questions.some((q) => Boolean(q.answer)),
    [questions]
  );

  const handleQuestionClick = useCallback(
    (idx) => {
      if (!isSubmitted) setCurrentIndex(idx);
    },
    [isSubmitted, setCurrentIndex]
  );

  const handleSubmit = useCallback(() => {
    if (isSubmitted) return;
    if (window.confirm("Are you sure you want to submit your answers?")) {
      onSubmit();
    }
  }, [isSubmitted, onSubmit]);

  const getButtonClasses = (isCurrent, isAnswered) => {
    if (isSubmitted) return "bg-gray-300 text-gray-600 cursor-not-allowed";
    if (isCurrent) return "bg-accent text-white shadow-md";
    if (isAnswered) return "bg-primary text-white";
    return "bg-gray-200 text-gray-700";
  };

  return (
    <aside
      className="
        w-full md:w-64 lg:w-72
        md:sticky md:top-6
        bg-white border border-gray-200 rounded-lg shadow
        p-4 md:p-6
        flex flex-col gap-6
      "
    >
      {/* Timer Section */}
      <div
        className={`
        flex items-center justify-center gap-2 p-3 rounded-lg border-2
        ${isWarning ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}
        ${timeLeft <= 60 ? "animate-pulse" : ""} 
      `}
      >
        <Clock size={20} className={getTimerColor()} />
        <div className="text-center">
          <div className={`text-xl font-bold font-mono ${getTimerColor()}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="text-xs text-gray-600">
            {timeLeft <= 300 ? "Time running out!" : "Time remaining"}
          </div>
        </div>
        {isWarning && (
          <AlertTriangle size={16} className="text-red-600 animate-bounce" />
        )}
      </div>

      {isWarning && timeLeft > 0 && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-center">
          <div className="text-red-800 text-sm font-medium">
            ⚠️{" "}
            {timeLeft <= 60
              ? "Less than 1 minute left!"
              : "Only 5 minutes remaining!"}
          </div>
          <div className="text-red-600 text-xs mt-1">
            Consider submitting your answers soon
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-lg font-semibold text-gray-800">Questions</h2>
        <span className="text-sm text-gray-500">
          {questions.filter((q) => q.answer).length}/{questions.length} answered
        </span>
      </div>

      {/* Question Numbers Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 gap-2">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = Boolean(q.answer);

          return (
            <button
              key={q._id || q.id || idx}
              type="button"
              onClick={() => handleQuestionClick(idx)}
              disabled={isSubmitted}
              aria-current={isCurrent ? "step" : undefined}
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-full text-sm font-medium
                transition-colors duration-200
                ${getButtonClasses(isCurrent, isAnswered)}
              `}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Progress</span>
          <span>
            {Math.round(
              (questions.filter((q) => q.answer).length / questions.length) *
                100
            )}
            %
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                (questions.filter((q) => q.answer).length / questions.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isAnyAnswered || isSubmitted}
        className={`
          w-full py-3 mt-auto rounded-md text-center text-base font-semibold
          transition-all duration-200
          ${
            isSubmitted
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : !isAnyAnswered
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : timeLeft <= 300
              ? "bg-red-600 text-white hover:bg-red-700 animate-pulse"
              : "bg-primary text-white hover:bg-buttonhover"
          }
        `}
      >
        {isSubmitted
          ? "Submitted"
          : timeLeft <= 60
          ? "Submit Now!"
          : "Submit Answers"}
      </button>

      {/* Time's up overlay */}
      {timeLeft <= 0 && !isSubmitted && (
        <div className="absolute inset-0 bg-red-600 bg-opacity-90 flex items-center justify-center text-white text-lg font-bold rounded-lg">
          Time's Up!
        </div>
      )}
    </aside>
  );
}
