import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function AddQuestionModal({ open, onOpenChange, onAdd }) {
  const [type, setType] = useState("multiple");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(0);
  const [marks, setMarks] = useState(1);
  const [explanation, setExplanation] = useState("");

  const types = [
    { key: "multiple", label: "Multiple Choice" },
    { key: "truefalse", label: "True/False" },
    { key: "short", label: "Short Answer" },
    { key: "essay", label: "Essay" },
  ];

  function save() {
    onAdd({
      type,
      question,
      options,
      correct,
      marks,
      explanation,
    });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold font-clash text-accent">
            Add New Question
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Question Type */}
          <div>
            <p className="text-xs mb-2 font-semibold">Question Type</p>
            <div className="grid grid-cols-2 gap-3">
              {types.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setType(t.key)}
                  className={`border border-textmuted rounded p-3 text-left text-sm ${
                    type === t.key ? "bg-teal-100 border-teal-500" : "bg-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Field */}
          <div>
            <p className="text-xs mb-1 font-semibold">Question</p>
            <textarea
              className="w-full border border-textmuted rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-500 focus:ring-none"
              placeholder="Enter your question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          {/* Answer Options  */}
          {type === "multiple" && (
            <div>
              <p className="text-xs mb-1">Answer Options</p>

              <div className="flex flex-col gap-2">
                {options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="correct"
                      checked={correct === i}
                      onChange={() => setCorrect(i)}
                      className="w-4 h-4 focus:outline-none focus:border-teal-500 focus:ring-none"
                    />
                    <input
                      className="flex-1 border border-textmuted rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-500 focus:ring-none"
                      placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      value={opt}
                      onChange={(e) => {
                        const copy = [...options];
                        copy[i] = e.target.value;
                        setOptions(copy);
                      }}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Marks */}
          <div>
            <p className="text-xs mb-1 font-semibold">Marks</p>
            <select
              value={marks}
              onChange={(e) => setMarks(Number(e.target.value))}
              className="border border-textmuted rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-500 focus:ring-none"
            >
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>

          {/* Explanation */}
          <div>
            <p className="text-xs mb-1 font-semibold">Explanation (optional)</p>
            <textarea
              className="w-full border border-textmuted rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-500 focus:ring-none"
              placeholder="Enter your explanation here"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              onClick={() => onOpenChange(false)}
              className="px-6 py-2 border border-textmuted rounded text-sm"
            >
              Cancel
            </button>

            <button
              onClick={save}
              className="px-6 py-2 bg-teal-600 text-white rounded text-sm"
            >
              Add Question
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
