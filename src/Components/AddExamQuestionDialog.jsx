import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Button from "./Button";
import { NotepadText } from "lucide-react";
import Input from "./input";

export default function AddExamQuestionDialog({
  modalOpen,
  onClose,
  initialData = null,
  isEdit = false,
  onSave,
}) {
  // State for question and options
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" });
  const [correct, setCorrect] = useState("");

  // Pre-fill for editing
  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question || "");
      setOptions({
        A: initialData.options?.A || "",
        B: initialData.options?.B || "",
        C: initialData.options?.C || "",
        D: initialData.options?.D || "",
      });
      setCorrect(initialData.correct || "");
    } else {
      setQuestion("");
      setOptions({ A: "", B: "", C: "", D: "" });
      setCorrect("");
    }
  }, [initialData, modalOpen]);

  const handleOptionChange = (key, value) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!correct) {
      alert("Please select the correct answer.");
      return;
    }
    if (onSave) {
      onSave({ question, options, correct });
    }
    onClose && onClose();
  };

  return (
    <Dialog open={modalOpen} onOpenChange={(v) => !v && onClose && onClose()}>
      <DialogContent className="bg-white max-w-[95vw] w-full max-h-[85vh] overflow-y-auto p-4 sm:p-6 flex flex-col">
        <DialogHeader className="px-1">
          <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 w-full pb-4 sm:pb-5">
            <div className="size-[48px] bg-[#00968833] text-primary rounded-full flex items-center justify-center shrink-0">
              <NotepadText />
            </div>
            <div className="flex flex-col gap-1 items-center sm:items-start w-full">
              <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left w-full">
                {isEdit ? "Edit Question" : "Add Question"}
              </DialogTitle>
              <p className="text-sm text-gray-600 text-center sm:text-left">
                {isEdit
                  ? "Edit the exam question and options."
                  : "Create a new Exam question and specify the correct answer."}
              </p>
            </div>
          </div>
        </DialogHeader>
        <form
          className="w-full flex flex-col gap-4 mt-2"
          onSubmit={handleSubmit}
        >
          <Input
            textArea
            label={"Question"}
            placeholder={"Enter question here"}
            className="w-full min-h-[80px]"
            labelClassName="md:text-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <div className="mt-2">
            <label className="block mb-1 font-medium text-textmain font-clash md:text-lg">
              Options
            </label>
            <div className="flex flex-col gap-3">
              {/* Option A */}
              <div className="flex flex-col items-start w-full">
                <label className="flex items-center cursor-pointer w-full mb-1">
                  <input
                    type="radio"
                    name="question-correct"
                    checked={correct === "A"}
                    onChange={() => setCorrect("A")}
                    className="accent-black cursor-pointer disabled:cursor-not-allowed"
                  />
                  <span className="font-montserrat font-normal text-sm sm:text-base md:text-lg shrink-0 ml-2">
                    Option A
                  </span>
                </label>
                <Input
                  placeholder="Enter option A"
                  className="w-full mt-1 ml-0"
                  value={options.A}
                  onChange={(e) => handleOptionChange("A", e.target.value)}
                  required
                />
              </div>
              {/* Option B */}
              <div className="flex flex-col items-start w-full">
                <label className="flex items-center cursor-pointer w-full mb-1">
                  <input
                    type="radio"
                    name="question-correct"
                    checked={correct === "B"}
                    onChange={() => setCorrect("B")}
                    className="accent-black cursor-pointer disabled:cursor-not-allowed"
                  />
                  <span className="font-montserrat font-normal text-sm sm:text-base md:text-lg shrink-0 ml-2">
                    Option B
                  </span>
                </label>
                <Input
                  placeholder="Enter option B"
                  className="w-full mt-1 ml-0"
                  value={options.B}
                  onChange={(e) => handleOptionChange("B", e.target.value)}
                  required
                />
              </div>
              {/* Option C */}
              <div className="flex flex-col items-start w-full">
                <label className="flex items-center cursor-pointer w-full mb-1">
                  <input
                    type="radio"
                    name="question-correct"
                    checked={correct === "C"}
                    onChange={() => setCorrect("C")}
                    className="accent-black cursor-pointer disabled:cursor-not-allowed"
                  />
                  <span className="font-montserrat font-normal text-sm sm:text-base md:text-lg shrink-0 ml-2">
                    Option C
                  </span>
                </label>
                <Input
                  placeholder="Enter option C"
                  className="w-full mt-1 ml-0"
                  value={options.C}
                  onChange={(e) => handleOptionChange("C", e.target.value)}
                  required
                />
              </div>
              {/* Option D */}
              <div className="flex flex-col items-start w-full">
                <label className="flex items-center cursor-pointer w-full mb-1">
                  <input
                    type="radio"
                    name="question-correct"
                    checked={correct === "D"}
                    onChange={() => setCorrect("D")}
                    className="accent-black cursor-pointer disabled:cursor-not-allowed"
                  />
                  <span className="font-montserrat font-normal text-sm sm:text-base md:text-lg shrink-0 ml-2">
                    Option D
                  </span>
                </label>
                <Input
                  placeholder="Enter option D"
                  className="w-full mt-1 ml-0"
                  value={options.D}
                  onChange={(e) => handleOptionChange("D", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={onClose} type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {isEdit ? "Save Changes" : "Add Question"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
