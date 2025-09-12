import React, { useMemo, useCallback } from "react";
import Navigation from "./Navigation";

function QuestionCard({
  question,
  index,
  total,
  onAnswer,
  setCurrentIndex,
  isSubmitted,
}) {
  const handleAnswer = useCallback(
    (optId) => {
      onAnswer(index, optId);
    },
    [onAnswer, index]
  );

  const optionsList = useMemo(
    () =>
      question?.options?.map((opt) => (
        <label key={opt._id} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={`question-${index}`}
            value={opt._id}
            checked={question?.answer === opt._id}
            onChange={() => handleAnswer(opt._id)}
            disabled={isSubmitted}
            className="accent-black cursor-pointer disabled:cursor-not-allowed"
          />
          <span className="font-montserrat font-normal text-sm sm:text-base md:text-lg">
            {opt.text}
          </span>
        </label>
      )),
    [question?.options, question?.answer, handleAnswer, index, isSubmitted]
  );

  return (
    <div className="flex flex-col gap-4 flex-1 w-full mb-5">
      <h1 className="font-clash text-center sm:text-left font-medium text-xl sm:text-2xl md:text-4xl uppercase">
        {question?.level}
      </h1>

      <div className="bg-white p-4 rounded-[5px] border border-[#CCCCCC] min-h-[223px]">
        <h2 className="mb-4 font-bold text-sm sm:text-base md:text-xl font-montserrat pb-4 border-b-2 border-[#CCCCCC]">
          Question {index + 1}
        </h2>
        <h2 className="font-montserrat font-normal text-sm sm:text-base md:text-lg">
          {question?.question_text}
        </h2>
      </div>

      <div className="space-y-3 bg-white p-4 rounded-[5px] border border-[#CCCCCC] min-h-[250px]">
        {optionsList}
      </div>

      <Navigation
        currentIndex={index}
        setCurrentIndex={setCurrentIndex}
        total={total}
        onSubmit={() => {}}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default React.memo(QuestionCard);
