// components/QuizCardComponent.jsx
import React from "react";
import Button from "./Button";

const QuizCardComponent = ({
  title,
  date,
  time,
  questions,
  duration,
  status, // "start", "submitted", "missed"
  dueDate,
  image,
}) => {
  const isDisabled = status !== "start";

  const statusText = {
    submitted: "Submitted",
    missed: "Missed",
  };

  const statusColor = {
    submitted: "text-green-600",
    missed: "text-gray-300",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm border border-gray-200 relative overflow-hidden">
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={title}
          className="w-18 h-14 rounded object-cover"
        />
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-2 mt-1">
            ● <span> {questions} Questions</span> ● <span>{duration}</span>
          </p>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            {date} ; {time}
          </p>

          {dueDate && status === "start" && (
            <p className="text-xs text-red-500 mt-1">
              Submit before: {dueDate}
            </p>
          )}

          {status !== "start" && (
            <p className={`text-sm mt-1 font-medium ${statusColor[status]}`}>
              {statusText[status]}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4 gap-3 overflow-hidden">
       

        <Button
          variant="cancel"
          size="lg"
          className="border-[1px] rounded-[10px] font-montserrat font-bold px-4 py-1 text-sm h-[2.5rem]  "
        >
          Instructions
        </Button>

        <Button
          variant={!isDisabled ? "primary" : "secondary"}
          className="rounded-[10px] w-[3.5rem] h-[2rem] text-[10px] sm:text-sm sm:w-[5.125rem] sm:h-[2.5rem]"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default QuizCardComponent;
