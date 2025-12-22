import React from "react";
import { CheckSquare, Type, FileEdit } from "lucide-react";

const ICON_MAP = { CheckSquare, Type, FileEdit };

const QuestionTypeSelector = ({
  questionTypes = [],
  selectedType,
  onSelect,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Question Type
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {questionTypes.map((type) => {
          const IconComp = ICON_MAP[type.icon] || CheckSquare;
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`p-4 border rounded-lg text-left transition-all ${
                selectedType === type.id
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <IconComp
                size={20}
                className={
                  selectedType === type.id
                    ? "text-teal-600 mb-2"
                    : "text-gray-600 mb-2"
                }
              />
              <div
                className={`font-medium text-sm ${
                  selectedType === type.id ? "text-teal-700" : "text-gray-900"
                }`}
              >
                {type.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionTypeSelector;
