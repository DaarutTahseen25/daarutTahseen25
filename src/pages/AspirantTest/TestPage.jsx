import React, { useState, useEffect } from "react";
import questionsData from "./data/questions";
import Header from "./Header";
import QuestionCard from "./QuestionCard";
import Sidebar from "./Sidebar";

export default function TestPage() {
  const [questions, setQuestions] = useState(questionsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [cheated, setCheated] = useState(false); // NEW

  const handleAnswer = (index, selectedOption) => {
    if (isSubmitted) return;

    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, answer: selectedOption } : q))
    );
  };

  const handleSubmit = () => {
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
      alert("Answers submitted successfully!");
      setIsSubmitted(true);
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const anyAnswered = questions.some((q) => q.answer);
      if (!anyAnswered && !isSubmitted) {
        setShowReminder(true);

        setTimeout(() => {
          setShowReminder(false);
        }, 6000);
      }
    }, 1 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, [questions, isSubmitted]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && !isSubmitted) {
        setCheated(true);
        console.warn("User left the page. Marked as cheating.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isSubmitted]);

  return (
    <section className='flex flex-col min-h-screen bg-secondary py-10 relative'>
      {/* Notification Banner */}
      {showReminder && (
        <div className='fixed top-4 left-1/2 z-50 w-fit px-6 py-3 bg-red-500 text-white text-center rounded shadow-md transform -translate-x-1/2 animate-slide-down'>
          ⏰ You haven't answered any question yet!
        </div>
      )}

      <div className='w-[95%] mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start w-full gap-5'>
          <QuestionCard
            question={questions[currentIndex]}
            index={currentIndex}
            onAnswer={handleAnswer}
            questions={questions}
            setCurrentIndex={setCurrentIndex}
            isSubmitted={isSubmitted}
          />

          <Sidebar
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onSubmit={handleSubmit}
            isSubmitted={isSubmitted}
          />
        </div>
      </div>
    </section>
  );
}
