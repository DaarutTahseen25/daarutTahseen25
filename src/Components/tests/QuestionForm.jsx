import React from "react";

const QuestionForm = ({
  selectedType,
  questionData,
  onChange,
  onOptionChange,
  onSelectCorrect,
  onCancel,
  onSubmit,
}) => {
  return (
    <>
      {/* Question Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question
        </label>
        <textarea
          name="question"
          value={questionData.question}
          onChange={onChange}
          placeholder="Enter your question here"
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
        />
      </div>

      {/* Answer Options for Multiple Choice */}
      {selectedType === "multiple" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Answer Options
          </label>
          <div className="space-y-3">
            {questionData.options.map((option, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={questionData.correctAnswer === index}
                  onChange={() => onSelectCorrect(index)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => onOptionChange(index, e.target.value)}
                  placeholder={`Option ${String.fromCharCode(65 + index)}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Select the correct answer by clicking the radio button
          </p>
        </div>
      )}

      {/* True/False Selection */}
      {selectedType === "truefalse" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Correct Answer
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => onSelectCorrect(0)}
              className={`flex-1 px-4 py-3 border rounded-lg font-medium transition-all ${
                questionData.correctAnswer === 0
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              True
            </button>
            <button
              onClick={() => onSelectCorrect(1)}
              className={`flex-1 px-4 py-3 border rounded-lg font-medium transition-all ${
                questionData.correctAnswer === 1
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              False
            </button>
          </div>
        </div>
      )}

      {/* Marks */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Marks
        </label>
        <input
          type="number"
          name="marks"
          value={questionData.marks}
          onChange={onChange}
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
        />
      </div>

      {/* Explanation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Explanation (optional)
        </label>
        <textarea
          name="explanation"
          value={questionData.explanation}
          onChange={onChange}
          placeholder="Enter your question here"
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
        <button
          onClick={onCancel}
          className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base"
        >
          {questionData.id ? "Update Question" : "Add Question"}
        </button>
      </div>
    </>
  );
};

export default QuestionForm;
