import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Button";
import DashTitle from "../../Components/DashTitle";

const ExamInterface = ({ examData, onSubmit, onExit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(null);

  // Parse duration to seconds (e.g., "20 mins" -> 1200 seconds)
  useEffect(() => {
    if (examData?.duration) {
      const minutes = parseInt(examData.duration);
      if (!isNaN(minutes)) {
        setTimeRemaining(minutes * 60);
      }
    }
  }, [examData?.duration]);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    if (seconds === null) return "--:--";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(answers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Mock questions - in real app, these would come from examData
  const mockQuestions = Array.from(
    { length: examData?.questions || 10 },
    (_, i) => ({
      id: i + 1,
      question: `Question ${
        i + 1
      }: What is the correct pronunciation of the letter "${String.fromCharCode(
        65 + (i % 26)
      )}"?`,
      type: "multiple-choice",
      options: [
        "Option A: First answer",
        "Option B: Second answer",
        "Option C: Third answer",
        "Option D: Fourth answer",
      ],
    })
  );

  const currentQ = mockQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen font-clash bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-gray-900">
              {examData?.title}
            </h1>
            <div className="flex items-center gap-4">
              <div
                className={`text-lg font-bold ${
                  timeRemaining < 300 ? "text-red-500" : "text-gray-700"
                }`}
              >
                ⏱ {formatTime(timeRemaining)}
              </div>
              <button
                onClick={onExit}
                className="text-sm text-gray-500 hover:text-gray-700 font-semibold"
              >
                Exit
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>
              Question {currentQuestion + 1} of {mockQuestions.length}
            </span>
            <span>{answeredCount} answered</span>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              Question {currentQ.id}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const optionLetter = String.fromCharCode(65 + index);
              const isSelected = answers[currentQuestion] === option;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerChange(currentQuestion, option)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-teal-600 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? "border-teal-600 bg-teal-600"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-800 font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border-teal-600 text-teal-600 hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </Button>

          {currentQuestion === mockQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            >
              Submit Exam
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Next →
            </Button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Question Navigator</h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {mockQuestions.map((_, index) => {
              const isAnswered = answers[index] !== undefined;
              const isCurrent = index === currentQuestion;

              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                    isCurrent
                      ? "bg-teal-600 text-white ring-2 ring-teal-300"
                      : isAnswered
                      ? "bg-teal-100 text-teal-700 hover:bg-teal-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
