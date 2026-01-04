/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { formatDate } from "../../utils/helper";
import {
  BookCheck,
  Calendar,
  CalendarDays,
  CircleQuestionMark,
  Download,
  Edit,
  FileQuestion,
  Trash,
  UsersRound,
} from "lucide-react";
import SubmissionTable from "../../Components/SubmissionTable";
import { UserRound, FileAudio, FileText, CircleCheck } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../Components/ui/table";
import Button from "../../Components/Button";
import CreateExamDialog from "../../Components/CreateExamDialog";
import AddExamQuestionDialog from "../../Components/AddExamQuestionDialog";
const questions = [
  {
    id: 1,
    question: "Which of the following is NOT a rule of Tajwid?",
    options: {
      A: { id: 1, text: "Idghām" },
      B: { id: 2, text: "Ikhfāʼ" },
      C: { id: 3, text: "Iqlāb" },
      D: { id: 4, text: "Isti'ādhah" },
    },
  },
  {
    id: 2,
    question: "What is the meaning of 'Makharij al-Ḥurūf'?",
    options: {
      A: { id: 1, text: "Rules of stopping" },
      B: { id: 2, text: "Points of articulation of letters" },
      C: { id: 3, text: "Rules of noon sākinah" },
      D: { id: 4, text: "Types of elongation" },
    },
  },
  {
    id: 3,
    question: "Which surah is recited in every unit of Salah?",
    options: {
      A: { id: 1, text: "Surah Al-Baqarah" },
      B: { id: 2, text: "Surah Al-Fātiḥah" },
      C: { id: 3, text: "Surah Al-Ikhlās" },
      D: { id: 4, text: "Surah Al-Kawthar" },
    },
  },
  {
    id: 4,
    question:
      "Idghām with Ghunnah occurs when Noon Sakinah is followed by which letters?",
    options: {
      A: { id: 1, text: "ي، ن، م، و (Ya, Nun, Meem, Waw)" },
      B: { id: 2, text: "ر، ل (Ra, Lam)" },
      C: { id: 3, text: "ب (Ba)" },
      D: { id: 4, text: "All letters" },
    },
  },
  {
    id: 5,
    question: "What is the minimum number of verses in a surah?",
    options: {
      A: { id: 1, text: "1" },
      B: { id: 2, text: "2" },
      C: { id: 3, text: "3" },
      D: { id: 4, text: "7" },
    },
  },
];
export default function ViewExam() {
  const [showDialog, setShowDialog] = useState(false);
  const [editExamDialogOpen, setEditExamDialogOpen] = useState(false);
  const [assignment, setAssignment] = useState({
    description:
      "Submit your recitation and written responses for this week’s assignment. Follow the instructions below carefully before uploading",
    courseTitle: "Qur'an Recitation & Tajwid",
    topic: "Introduction to Tajwid",
    deadline: "2024-07-15",
    totalSubmissions: 5,
    totalStudents: 20,
    totalMarked: 4,
    instructions:
      "Complete the following recitation and theory tasks. Record your audio where required and submit all answers before the due date.Accepted submission format: Audio (MP3, M4A and WAV), Written (PDF and DOCX). Submission Deadline: 18 July, 2024 ; 4:00 PM",
    submissionType: "Audio and Written",
    imageUrl: "/Islamic Aqeedah.png",
    questions: [
      "Recite Suratul Fātiḥah (from memory) and upload your audio.",
      "Explain the rule of Idghām with Ghunnah and give two examples from the Qur’an.",
      "What are the five major points of articulation (Makharij al-Ḥurūf)?",
      "Define Ikhfāʼ and describe when it occurs.",
    ],
  });
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "Aisha Bello",
      avatar: "/test3.png",
      assignmentAvg: 80,
      examScore: 85,
      overallScore: 83,
      grade: "A",
    },
    {
      id: 2,
      name: "Umar Sani",
      avatar: "/test2.png",
      assignmentAvg: 75,
      examScore: 90,
      overallScore: 83,
      grade: "A",
    },
    {
      id: 3,
      name: "Fatima Yusuf",
      avatar: "/test1.png",
      assignmentAvg: 60,
      examScore: 70,
      overallScore: 65,
      grade: "B",
    },
    {
      id: 4,
      name: "Khairah Yunus",
      avatar: "/test5.png",
      assignmentAvg: 20,
      examScore: 10,
      overallScore: 30,
      grade: "B",
    },
  ]);

  const submission = `${assignment.totalSubmissions}/${assignment.totalStudents}`;
  return (
    <main>
      <h1 className="font-clash font-medium text-xl sm:text-2xl md:text-4xl text-accent ">
        {assignment.courseTitle}
      </h1>
      <div className="flex flex-col sm:flex-row items-stretch gap-4 md:gap-6 mt-6 w-full">
        <StatCard
          title="Total Submissions"
          value={submission}
          icon={() => <UsersRound />}
          bgColor="#36040033"
          textColor="#360400"
          className="flex-1 w-full"
        />
        <StatCard
          title="Deadline"
          value={formatDate(assignment.deadline)}
          icon={() => <Calendar />}
          isDeadline
          bgColor={"#D32F2F33"}
          textColor="#D32F2F"
          className="flex-1 w-full"
        />
      </div>
      {/* Submission Table */}
      <div className="mt-8">
        <h2 className="font-clash text-lg sm:text-xl font-medium mb-4 pb-5 border-b border-gray-200">
          Student Submissions
        </h2>
        <SubmissionTable
          setSubmissions={setSubmissions}
          submissions={submissions}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          forType="exam"
        />
      </div>
      <div className="mt-8">
        <h2 className="font-clash text-lg sm:text-xl font-medium mb-4 pb-5 border-b border-gray-200">
          Exam Overview
        </h2>
        <ExamOverview
          assignment={assignment}
          onEditClick={() => setEditExamDialogOpen(true)}
        />
        <CreateExamDialog
          open={editExamDialogOpen}
          onClose={() => setEditExamDialogOpen(false)}
          onEdit={(data) => {
            setAssignment((prev) => ({ ...prev, ...data }));
            setEditExamDialogOpen(false);
          }}
          initialData={{
            ...assignment,
            numQuestions: assignment.questions?.length || 1,
            questions: assignment.questions || [""],
            deadline: assignment.deadline || "",
          }}
          isEdit={true}
        />
      </div>
      <div className="mt-8">
        <h2 className="font-clash text-lg sm:text-xl font-medium mb-4 pb-5 border-b border-gray-200">
          Exam Questions
        </h2>
        <Questions />
      </div>
      <Button className="mt-8 w-full">Publish</Button>
    </main>
  );
}

function StatCard({
  title,
  value,
  textColor,
  bgColor,
  icon: Icon,
  isDeadline,
  className = "",
}) {
  return (
    <div
      className={`flex items-center h-[89px] gap-4 p-4 rounded-lg bg-white border border-gray-200 mb-4 sm:mb-0 ${className}`}
    >
      <div
        className="size-[48px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <p style={{ color: textColor }}>
          <Icon />
        </p>
      </div>
      <div>
        <h1 className="font-montserrat text-base sm:text-[20px] text-[#A9A9A9] font-bold ">
          {title}
        </h1>
        <p
          className="font-montserrat text-base sm:text-[20px] font-bold"
          style={{ color: isDeadline ? "#D32F2F" : "#000000" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function ExamOverview({ assignment, onEditClick }) {
  return (
    <div className="bg-white rounded-[15px] w-full p-3 sm:p-4 md:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 border border-gray-200 rounded-[15px] p-3 sm:p-4">
        {assignment.imageUrl && (
          <img
            src={assignment.imageUrl}
            alt={assignment.topic}
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-100 shadow-sm mx-auto sm:mx-0"
          />
        )}
        <div className="flex-1 w-full">
          <h3 className="font-clash text-base sm:text-lg md:text-2xl font-semibold text-accent mb-1 text-center sm:text-left">
            {assignment.courseTitle}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-12 items-center sm:items-start text-xs sm:text-sm md:text-base mb-2 w-full">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-primary">
                <CircleQuestionMark />
              </span>
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="font-montserrat font-bold text-xs sm:text-[15px] text-[#A9A9A9] ">
                  Questions
                </p>
                <p className="font-montserrat font-bold text-xs sm:text-[15px]  ">
                  {assignment.questions.length} Questions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-primary">
                <Download />
              </span>
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="font-montserrat font-bold text-xs sm:text-[15px] text-[#A9A9A9] ">
                  Submission Type
                </p>
                <p className="font-montserrat font-bold text-xs sm:text-[15px]  ">
                  {assignment.submissionType}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-red-600">
                <CalendarDays />
              </span>
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="font-montserrat font-bold text-xs sm:text-[15px] text-[#A9A9A9] ">
                  Deadline
                </p>
                <p className="font-montserrat font-bold text-xs sm:text-[15px] text-red-600 ">
                  {formatDate(assignment.deadline)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border border-gray-200 rounded-[15px] p-3 sm:p-4">
        <h4 className="font-montserrat font-bold text-sm sm:text-base mb-2 text-gray-800">
          Exam Instructions
        </h4>
        <ul className="pl-2 space-y-2 text-gray-700 text-xs sm:text-sm">
          {assignment.instructions
            .split(/\.(?=\s|$)/)
            .map((inst, i) => inst.trim())
            .filter(Boolean)
            .map((inst, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-primary">
                  <CircleCheck size={18} />
                </span>
                <span>
                  {inst}
                  {inst.endsWith(".") ? "" : "."}
                </span>
              </li>
            ))}
        </ul>
      </div>
      <Button
        className="mt-4 w-full text-xs sm:text-sm md:text-base"
        onClick={onEditClick}
      >
        Edit Exam Overview
      </Button>
    </div>
  );
}

function Questions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [localQuestions, setLocalQuestions] = useState(
    questions.map((q) => ({ ...q, correct: q.correct || null }))
  );

  const handleDelete = (id) => {
    setLocalQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleEdit = (question) => {
    const optionTexts = Object.fromEntries(
      Object.entries(question.options).map(([k, v]) => [k, v.text])
    );
    setEditData({
      ...question,
      options: optionTexts,
    });
    setIsEdit(true);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    // data.correct is the key (A/B/C/D)
    const newOptions = {
      A: { id: 1, text: data.options.A },
      B: { id: 2, text: data.options.B },
      C: { id: 3, text: data.options.C },
      D: { id: 4, text: data.options.D },
    };
    if (isEdit && editData) {
      setLocalQuestions((prev) =>
        prev.map((q) =>
          q.id === editData.id
            ? {
                ...q,
                question: data.question,
                options: newOptions,
                correct: data.correct,
              }
            : q
        )
      );
    } else {
      setLocalQuestions((prev) => [
        ...prev,
        {
          id: prev.length ? prev[prev.length - 1].id + 1 : 1,
          question: data.question,
          options: newOptions,
          correct: data.correct,
        },
      ]);
    }
    setIsEdit(false);
    setEditData(null);
  };

  return (
    <div className="bg-white rounded-[15px] w-full p-4 sm:p-6 border border-gray-200">
      {localQuestions.map((question) => (
        <div key={question.id} className="mb-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
            <h2 className="font-clash font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-accent break-words">
              Question {question.id}
            </h2>
            <div className="flex items-center gap-4">
              <Edit
                size={18}
                className="cursor-pointer text-primary"
                onClick={() => handleEdit(question)}
              />
              <Trash
                size={18}
                className="cursor-pointer text-red-600"
                onClick={() => handleDelete(question.id)}
              />
            </div>
          </div>
          <p className="mb-4 font-montserrat font-normal text-sm sm:text-base md:text-lg lg:text-xl break-words">
            {question.question}
          </p>
          {question?.options &&
            Object.entries(question.options).map(([key, opt]) => (
              <label
                key={opt.id}
                className={`flex items-center gap-2 cursor-pointer w-full ${
                  question.correct === key ? "font-bold text-green-700" : ""
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={opt.id}
                  className="accent-black cursor-pointer disabled:cursor-not-allowed"
                  checked={question.correct === key}
                  readOnly
                  disabled
                />
                <span className="font-montserrat font-normal text-xs sm:text-sm md:text-base lg:text-lg break-words">
                  {key}. {opt.text}
                  {question.correct === key && (
                    <span className="ml-2 text-green-700">✔</span>
                  )}
                </span>
              </label>
            ))}
        </div>
      ))}
      <Button
        className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg"
        onClick={() => {
          setEditData(null);
          setIsEdit(false);
          setModalOpen(true);
        }}
      >
        Add Question
      </Button>
      <AddExamQuestionDialog
        modalOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
          setIsEdit(false);
        }}
        initialData={editData}
        isEdit={isEdit}
        onSave={handleSave}
      />
    </div>
  );
}
