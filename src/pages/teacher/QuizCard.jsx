import React from "react";
import { formatDeadline } from "../../utils/helper";

const QuizCard = ({
  title,
  questions,
  duration,
  deadline,
  image,
  onView,
  onCreate,
  onSeeAll,
  disableSeeAll = true,
  viewText = "View",
  createText = "Create New",
}) => {
  const deadlineDate = deadline ? new Date(deadline) : null;
  const now = new Date();
  const isClosed = deadlineDate && deadlineDate < now;
  return (
    <div className="rounded-xl bg-white shadow border border-neutral-200 relative p-3 sm:p-4 w-full max-w-full min-h-[280px] flex flex-col justify-between">
      {/* See all button */}
      <button
        onClick={onSeeAll}
        disabled={disableSeeAll}
        className={`absolute top-3 right-3 text-xs sm:text-sm font-semibold border px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
          disableSeeAll
            ? "text-gray-400 border-gray-300 bg-gray-100 cursor-not-allowed"
            : "text-teal-600 border-teal-500 bg-white hover:bg-teal-50"
        }`}
      >
        See all
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col sm:flex-row items-start gap-4 mt-6 sm:mt-2">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-20 h-16 rounded object-cover flex-shrink-0"
          />
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base sm:text-lg text-black truncate">
            {title}
          </h3>

          {/* Questions + Duration */}
          <p className="text-xs text-gray-500 flex flex-wrap items-center gap-2 mt-1">
            ● <span>{questions} Questions</span> ● <span>{duration}</span>
          </p>

          <div>
            {deadline && (
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  isClosed ? "text-gray-500" : "text-red-500"
                }`}
              >
                {isClosed
                  ? "Submission Closed"
                  : `Submit before ${formatDeadline(deadlineDate)}`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
        <button
          onClick={onView}
          className="flex-1 cursor-pointer border border-teal-500 text-teal-600 py-2 rounded-lg font-semibold text-xs sm:text-sm"
        >
          {viewText}
        </button>
        <button
          onClick={onCreate}
          disabled={isClosed}
          className={`flex-1 py-2 rounded-lg font-semibold text-xs sm:text-sm ${
            isClosed
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-teal-600 text-white cursor-pointer"
          }`}
        >
          {createText}
        </button>
      </div>
    </div>
  );
};

export default React.memo(QuizCard);
