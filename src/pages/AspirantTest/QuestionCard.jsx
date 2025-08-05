import React from "react";
import Navigation from "./Navigation";

export default function QuestionCard({
  question,
  index,
  onAnswer,
  questions,
  currentIndex,
  setCurrentIndex,
  isSubmitted,
}) {
  return (
    <div className='flex flex-col gap-4 flex-1 w-full mb-5'>
      <h1 className='font-clash text-center sm:text-left font-medium text-xl sm:text-2xl md:text-4xl uppercase'>
        Beginner Level
      </h1>

      <div className='bg-white p-4 rounded-[5px] border border-[#CCCCCC] min-h-[223px]'>
        <h2 className='mb-4 font-bold text-sm sm:text-base md:text-xl font-montserrat pb-4 border-b-2 border-[#CCCCCC]'>
          Question {index + 1}
        </h2>
        <h2 className='font-montserrat font-normal text-sm sm:text-base md:text-lg'>
          {question.question}
        </h2>
      </div>

      <div className='space-y-3 bg-white p-4 rounded-[5px] border border-[#CCCCCC] min-h-[250px]'>
        {question.options.map((opt, i) => (
          <label key={i} className='flex items-center gap-2 cursor-pointer'>
            <input
              type='radio'
              name={`question-${index}`}
              value={opt}
              checked={question.answer === opt}
              onChange={() => onAnswer(index, opt)}
              className='accent-black cursor-pointer disabled:cursor-not-allowed'
              disabled={isSubmitted}
            />
            <span className='font-montserrat font-normal text-sm sm:text-base md:text-lg'>
              {opt}
            </span>
          </label>
        ))}
      </div>

      <Navigation
        currentIndex={index}
        setCurrentIndex={setCurrentIndex}
        total={questions.length}
      />
    </div>
  );
}
