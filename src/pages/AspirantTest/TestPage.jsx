import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import questionsData from "./data/questions";
import { usePageTitle } from "../../hooks/usePageTitle";
import { toast } from "react-toastify";

// Lazy-load components
const Header = lazy(() => import("./Header"));
const QuestionCard = lazy(() => import("./QuestionCard"));
const Sidebar = lazy(() => import("./Sidebar"));

const frozenQuestions = Object.freeze(questionsData);

export default function TestPage() {
  usePageTitle("Assessment Test");
  const [questions, setQuestions] = useState(frozenQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [cheated, setCheated] = useState(false);

  const handleAnswer = useCallback(
    (index, selectedOption) => {
      if (isSubmitted) return;

      setQuestions((prev) =>
        prev.map((q, i) => (i === index ? { ...q, answer: selectedOption } : q))
      );
    },
    [isSubmitted]
  );

  const handleSubmit = useCallback(() => {
    if (isSubmitted) return;

    const selectedAnswers = questions.map((q) => ({
      questionId: q.id,
      answer: q.answer || null,
    }));

    const submissionPayload = {
      answers: selectedAnswers,
      cheated,
    };

    console.log("Submitting answers:", submissionPayload);

    setTimeout(() => {
      toast.success("Answers submitted successfully!");
      setIsSubmitted(true);
    }, 1000);
  }, [questions, cheated, isSubmitted]);

  // Reminder effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isSubmitted && !questions.some((q) => q.answer)) {
        setShowReminder(true);
        setTimeout(() => setShowReminder(false), 6000);
      }
    }, 60_000);

    return () => clearTimeout(timeout);
  }, [questions, isSubmitted]);

  // Cheating detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && !isSubmitted) {
        setCheated(true);
        console.warn("User left the page. Marked as cheating.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isSubmitted]);

  return (
    <section className="grid grid-rows-[auto_1fr] gap-10 min-h-screen bg-secondary relative">
      <header className="bg-white border-b border-[#CCCCCC] h-[80px] p-6 flex items-center justify-center">
        <h1 className="font-clash text-center font-[500] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
          DaarutTahseen Placement Test
        </h1>
      </header>

      {/* Notification Banner */}
      {showReminder && (
        <div className="fixed top-4 left-1/2 z-50 w-fit px-6 py-3 bg-red-500 text-white text-center rounded shadow-md transform -translate-x-1/2 animate-slide-down">
          ⏰ You haven't answered any question yet!
        </div>
      )}

      <div className="w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-5">
          <Suspense fallback={<div>Loading Question...</div>}>
            <QuestionCard
              question={questions[currentIndex]}
              index={currentIndex}
              onAnswer={handleAnswer}
              isSubmitted={isSubmitted}
              setCurrentIndex={setCurrentIndex}
            />
          </Suspense>

          <Suspense fallback={<div>Loading Sidebar...</div>}>
            <Sidebar
              questions={questions}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              onSubmit={handleSubmit}
              isSubmitted={isSubmitted}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
