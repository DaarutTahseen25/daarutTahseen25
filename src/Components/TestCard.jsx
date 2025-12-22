import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const TestCard = ({
  title,
  tags = [],
  stats = {},
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((t, i) => (
            <span
              key={i}
              className={`px-2 py-1 text-xs font-medium rounded ${t.className}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 mb-4 flex-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Questions:</span>
          <span className="font-semibold text-gray-900">
            {stats.questions ?? "—"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Duration:</span>
          <span className="font-semibold text-gray-900">
            {stats.duration ?? "—"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Attempts:</span>
          <span className="font-semibold text-gray-900">
            {stats.attempts ?? "—"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Avg Score:</span>
          <span className="font-semibold text-teal-600">
            {stats.avg ?? "—"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-gray-200">
        <button
          onClick={onView}
          className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-teal-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
        >
          <span className="hidden xs:inline">View details</span>
          <span className="xs:hidden">View</span>
        </button>
        <button
          onClick={onEdit}
          className="p-1.5 sm:p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
          aria-label="Edit"
        >
          <Pencil size={14} className="sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete"
        >
          <Trash2 size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestCard;
