import React from "react";
import { Plus, Pencil, Trash2, FileText } from "lucide-react";

const QuestionsPanel = ({
  questions = [],
  onAdd,
  onEdit,
  onDelete,
  getLabel,
  getBadgeColor,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0 mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
            Questions ({questions.length})
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Add and manage test questions
          </p>
        </div>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden xs:inline">Add New Question</span>
          <span className="xs:hidden">Add Question</span>
        </button>
      </div>

      {questions.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-gray-400" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            No Questions Added
          </h4>
          <p className="text-gray-600 mb-4">
            Start building your test by adding questions
          </p>
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            <Plus size={16} />
            Add First Question
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-700">
                      Q{index + 1}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(
                        question.type
                      )}`}
                    >
                      {getLabel(question.type)}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-700">
                      {question.marks} mark{question.marks !== "1" ? "s" : ""}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium mb-2">
                    {question.question}
                  </p>
                  {question.type === "multiple" && (
                    <div className="text-xs text-gray-600 space-y-1">
                      {question.options.map((option, optIdx) =>
                        option ? (
                          <div key={optIdx} className="flex items-center gap-2">
                            <span className="font-medium">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{option}</span>
                            {optIdx === question.correctAnswer && (
                              <span className="text-teal-600">✓</span>
                            )}
                          </div>
                        ) : null
                      )}
                    </div>
                  )}
                  {question.type === "truefalse" && (
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Answer:</span>{" "}
                      {question.correctAnswer === 0 ? "True" : "False"}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 self-end sm:self-start">
                  <button
                    onClick={() => onEdit(index)}
                    className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsPanel;
