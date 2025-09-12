/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useTestQuestions from "./useTestQuestions";
import { useSubmitTest } from "./useSubmitTest";

const QuestionCard = lazy(() => import("./QuestionCard"));
const Sidebar = lazy(() => import("./Sidebar"));

export default function TestPage() {
  usePageTitle("Assessment Test");

  const { submitTest, isSubmitted, setIsSubmitted, isSubmiting } =
    useSubmitTest();

  const navigate = useNavigate();
  const { questions, loading, error, setQuestions } = useTestQuestions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReminder, setShowReminder] = useState(false);
  const [cheated, setCheated] = useState(false);

  const safeSetIndex = useCallback(
    (updater) => {
      setCurrentIndex((prev) => {
        const next =
          typeof updater === "function" ? updater(prev) : Number(updater);
        if (!questions?.length) return 0;
        return Math.min(Math.max(next, 0), questions.length - 1);
      });
    },
    [questions]
  );

  const handleAnswer = useCallback(
    (index, selectedOptionId) => {
      if (isSubmitted) return;
      setQuestions((prev) =>
        prev.map((q, i) =>
          i === index ? { ...q, answer: selectedOptionId } : q
        )
      );
    },
    [isSubmitted, setQuestions]
  );

  const handleSubmit = useCallback(() => {
    if (isSubmitted) return;

    const selectedAnswers = questions
      .filter((q) => q.answer)
      .map((q) => {
        const selectedOption = q.options.find((opt) => opt._id === q.answer);
        return {
          question_id: q._id,
          selected_option: selectedOption ? selectedOption.text : null,
        };
      });

    // submitTest({ answers: selectedAnswers });

    console.log("Submitting answers:", { answers: selectedAnswers });

    toast.success("Answers submitted successfully!");
    setIsSubmitted(true);
    navigate("/student/level-registration", { replace: true });
  }, [questions, isSubmitted, navigate, setIsSubmitted]);

  useEffect(() => {
    const onHidden = () => {
      if (document.visibilityState === "hidden" && !isSubmitted) {
        setCheated(true);
        console.warn("User left the page. Marked as cheating.");
      }
    };
    document.addEventListener("visibilitychange", onHidden);
    return () => document.removeEventListener("visibilitychange", onHidden);
  }, [isSubmitted]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isSubmitted && !questions.some((q) => q.answer)) {
        setShowReminder(true);
        setTimeout(() => setShowReminder(false), 6000);
      }
    }, 60_000);
    return () => clearTimeout(timeout);
  }, [questions, isSubmitted]);

  if (loading) return <div>Loading questions…</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!questions || questions.length === 0)
    return <div>No questions found.</div>;

  return (
    <>
      {showReminder && (
        <div className="fixed top-4 left-1/2 z-50 w-fit px-6 py-3 bg-red-500 text-white rounded shadow transform -translate-x-1/2 animate-slide-down">
          ⏰ You haven't answered any question yet!
        </div>
      )}

      <div className="w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <Suspense fallback={<div>Loading Question…</div>}>
            <QuestionCard
              question={questions[currentIndex]}
              index={currentIndex}
              total={questions.length}
              questions={questions}
              onAnswer={handleAnswer}
              isSubmitted={isSubmitted}
              setCurrentIndex={safeSetIndex}
            />
          </Suspense>

          <Suspense fallback={<div>Loading Sidebar…</div>}>
            <Sidebar
              questions={questions}
              currentIndex={currentIndex}
              setCurrentIndex={safeSetIndex}
              onSubmit={handleSubmit}
              isSubmitted={isSubmitted}
              isSubmiting={isSubmiting}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
