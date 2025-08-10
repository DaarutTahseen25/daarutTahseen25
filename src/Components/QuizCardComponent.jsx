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
    missed: "text-gray-400",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full border border-gray-200 relative overflow-hidden max-w-full flex flex-col gap-5">
      <div className="flex-1 flex flex-col sm:flex-row items-start gap-4">
        <img
          src={image}
          alt={title}
          className="w-20 h-16 rounded object-cover flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {title}
          </h3>

          <p className="text-xs text-gray-500 flex flex-wrap items-center gap-2 mt-1">
            ● <span>{questions} Questions</span> ● <span>{duration}</span>
          </p>

          <p className="text-sm font-semibold text-gray-700 mt-1">
            {date} ; {time}
          </p>

          {dueDate && status === "start" && (
            <p className="text-xs text-red-500 mt-1 break-words">
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

      <div className="flex flex-col sm:flex-row justify-between  gap-3 w-full">
        <Button
          variant="cancel"
          size="lg"
          className="w-full sm:w-auto border-[1px] rounded-[10px] font-montserrat font-bold px-4 py-2 text-sm"
        >
          Instructions
        </Button>

        <Button
          size="lg"
          variant={!isDisabled ? "primary" : "secondary"}
          isDisabled={isDisabled}
          className="w-full sm:w-auto rounded-[10px] text-sm px-4 py-2"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default QuizCardComponent;
