import React, { useState } from "react";
import Input from "./input";
import Button from "./Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

export default function CreateAssignmentDialog({ open, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [type, setType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [instructions, setInstructions] = useState("");
  const [questions, setQuestions] = useState([""]);

  const handleQuestionChange = (idx, value) => {
    setQuestions((prev) => prev.map((q, i) => (i === idx ? value : q)));
  };

  const handleNumQuestionsChange = (e) => {
    const n = parseInt(e.target.value, 10) || 1;
    setNumQuestions(n);
    setQuestions((prev) => {
      if (n > prev.length) return [...prev, ...Array(n - prev.length).fill("")];
      return prev.slice(0, n);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate &&
      onCreate({
        title,
        description,
        numQuestions,
        type,
        deadline,
        instructions,
        questions,
      });
    onClose && onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose && onClose()}>
      <DialogContent className="bg-white max-w-[95vw] w-full max-h-[85vh] overflow-y-auto p-4 sm:p-5 flex flex-col">
        <DialogHeader className="px-1">
          <DialogTitle className="text-lg sm:text-xl">
            Create Assignment
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto px-1"
        >
          <Input
            label="Assignment Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="px-4 py-3 text-sm"
            labelClassName="md:text-lg mt-4"
          />
          <Input
            label="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            textArea
            required
            className="px-4 py-3 text-sm min-h-[80px]"
            labelClassName="md:text-lg mt-4"
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-stretch w-full">
            <div className="flex-1">
              <Input
                label="No. of Questions"
                name="numQuestions"
                type="number"
                min={1}
                value={numQuestions}
                onChange={handleNumQuestionsChange}
                required
                className="px-4 py-3 text-sm w-full"
                labelClassName="md:text-lg mt-4"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="assignmentType"
                className="block mb-1 font-medium text-textmain font-clash md:text-lg mt-4"
              >
                Assignment Type
              </label>
              <div className="relative">
                <select
                  id="assignmentType"
                  name="assignmentType"
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none transition focus:ring-none focus:ring-transparent focus:border-primary text-sm bg-white pr-8 appearance-none"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Quiz">Quiz</option>
                  <option value="Essay">Essay</option>
                  <option value="Project">Project</option>
                  <option value="Other">Other</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>
            </div>
          </div>

          <Input
            label="Deadline"
            name="deadline"
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="px-4 py-3 text-sm"
            labelClassName="md:text-lg mt-4"
          />

          <Input
            label="Instructions"
            name="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            textArea
            className="px-4 py-3 text-sm min-h-[80px]"
            labelClassName="md:text-lg mt-4"
          />

          <div className="w-full">
            <label className="block mb-1 font-medium text-textmain font-clash md:text-lg mt-4">
              Questions
            </label>
            <div className="space-y-3 max-h-[150px] overflow-y-auto pr-1">
              {questions.map((q, idx) => (
                <Input
                  key={idx}
                  label={`Question ${idx + 1}`}
                  name={`question-${idx}`}
                  value={q}
                  onChange={(e) => handleQuestionChange(idx, e.target.value)}
                  required
                  className="px-4 py-3 text-sm"
                  labelClassName="md:text-lg mt-4"
                />
              ))}
            </div>
          </div>

          <DialogFooter className="pt-4 mt-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:w-auto sm:px-6 py-2.5 text-sm"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto sm:px-6 py-2.5 text-sm"
              >
                Create Assignment
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
