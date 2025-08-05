import React from "react";
import Header from "./Header";

export default function Sidebar({
  questions,
  currentIndex,
  setCurrentIndex,
  onSubmit,
  isSubmitted,
}) {
  const isAnyAnswered = questions.some((q) => q.answer);

  const handleSubmit = () => {
    if (isSubmitted) return;
    const confirm = window.confirm(
      "Are you sure you want to submit your answers?"
    );
    if (!confirm) return;
    onSubmit();
  };

  return (
    <div className='flex flex-col gap-4 w-full md:w-auto'>
      <Header onTimeUp={onSubmit} isSubmitted={isSubmitted} />

      <div className='p-4 bg-white rounded-[5px] border border-[#CCCCCC]'>
        <div className='mb-4 font-bold text-sm sm:text-base md:text-lg font-montserrat pb-4 border-b-2 border-[#CCCCCC]'>
          Question {currentIndex + 1}/{questions.length}
        </div>

        <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-5 gap-2 w-full'>
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              disabled={isSubmitted}
              className={`min-w-[35px] w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] flex items-center justify-center rounded-full font-montserrat text-xs sm:text-sm md:text-base font-normal transition-colors
                ${
                  idx === currentIndex
                    ? "bg-accent/80 text-white"
                    : q.answer
                    ? "bg-primary/80 text-white"
                    : "bg-[#CCCCCC]/80 text-black"
                }
                ${
                  isSubmitted
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
              `}>
              {q.id}
            </button>
          ))}
        </div>
      </div>

      <button
        disabled={!isAnyAnswered || isSubmitted}
        className={`w-full py-2 rounded font-montserrat font-medium transition-all
          ${
            !isAnyAnswered || isSubmitted
              ? "bg-[#F6F6F6] text-[#CCCCCC] cursor-not-allowed"
              : "bg-primary text-white hover:bg-buttonhover"
          }
        `}
        onClick={handleSubmit}>
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </div>
  );
}
