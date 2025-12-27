/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { formatDate } from "../../utils/helper";
import {
  BookCheck,
  Calendar,
  CalendarDays,
  CircleQuestionMark,
  Download,
  FileQuestion,
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

const assignment = {
  description:
    "Submit your recitation and written responses for this week’s assignment. Follow the instructions below carefully before uploading",
  courseTitle: "Qur'an Recitation & Tajwid",
  topic: "Introduction to Tajwid",
  deadline: "2024-07-15",
  totalSubmissions: 5,
  totalStudents: 20,
  totalMarked: 4,
  questions: [
    "Recite Suratul Fātiḥah (from memory) and upload your audio.",
    "Explain the rule of Idghām with Ghunnah and give two examples from the Qur’an.",
    "What are the five major points of articulation (Makharij al-Ḥurūf)?",
    "Define Ikhfāʼ and describe when it occurs.",
  ],
  instructions:
    "Complete the following recitation and theory tasks. Record your audio where required and submit all answers before the due date.Accepted submission format: Audio (MP3, M4A and WAV), Written (PDF and DOCX). Submission Deadline: 18 July, 2024 ; 4:00 PM",
  submissionType: "Audio and Written",
  imageUrl: "/Islamic Aqeedah.png",
};

// const submissions = [
//   {
//     id: 1,
//     name: "Aisha Bello",
//     avatar: "/test3.png",
//     date: "2024-07-10",
//     files: [
//       { type: "pdf", name: "tajwid_intro.pdf" },
//       { type: "audio", name: "recitation.mp3" },
//     ],
//     score: "85",
//   },
//   {
//     id: 2,
//     name: "Umar Sani",
//     avatar: "/test2.png",
//     date: "2024-07-11",
//     files: [{ type: "pdf", name: "assignment1.docx" }],
//     score: "90",
//   },
//   {
//     id: 3,
//     name: "Fatima Yusuf",
//     avatar: "/test1.png",
//     date: "2024-07-12",
//     files: [{ type: "pdf", name: "tajwid_notes.pdf" }],
//     score: "-",
//   },
// ];

export default function ViewAssignment() {
  const [showDialog, setShowDialog] = useState(false);
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "Aisha Bello",
      avatar: "/test3.png",
      date: "2024-07-10",
      files: [
        { type: "pdf", name: "tajwid_intro.pdf" },
        { type: "audio", name: "recitation.mp3" },
      ],
      score: 85,
    },
    {
      id: 2,
      name: "Umar Sani",
      avatar: "/test2.png",
      date: "2024-07-11",
      files: [{ type: "pdf", name: "assignment1.docx" }],
      score: 90,
    },
    {
      id: 3,
      name: "Fatima Yusuf",
      avatar: "/test1.png",
      date: "2024-07-12",
      files: [{ type: "pdf", name: "tajwid_notes.pdf" }],
      score: 0,
    },
  ]);

  //   let totalMarked = 0;
  const marked = `${assignment.totalMarked}/${assignment.totalSubmissions}`;
  const submission = `${assignment.totalSubmissions}/${assignment.totalStudents}`;
  return (
    <main>
      <h1 className="font-clash font-medium text-2xl sm:text-4xl text-accent ">
        Assignment: {assignment.topic}
      </h1>
      <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
        <StatCard
          title="Total Marked"
          value={marked}
          icon={() => <BookCheck />}
          bgColor={"#00968833"}
          textColor={"#009688"}
        />
        <StatCard
          title="Total Submissions"
          value={submission}
          icon={() => <UsersRound />}
          bgColor="#36040033"
          textColor="#360400"
        />
        <StatCard
          title="Deadline"
          value={formatDate(assignment.deadline)}
          icon={() => <Calendar />}
          isDeadline
          bgColor={"#D32F2F33"}
          textColor="#D32F2F"
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
        />
      </div>
      <div className="mt-8">
        <h2 className="font-clash text-lg sm:text-xl font-medium mb-4 pb-5 border-b border-gray-200">
          Assignment Details
        </h2>
        <AssignmentDetails assignment={assignment} />
      </div>
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
}) {
  return (
    <div className="flex items-center w-full sm:w-[320px] h-[89px] gap-4 p-4 rounded-lg bg-white border border-gray-200 mb-4 sm:mb-0">
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

function AssignmentDetails({ assignment }) {
  return (
    <div className="bg-white rounded-[15px] w-full p-4 sm:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 border border-gray-200 rounded-[15px] p-4">
        {assignment.imageUrl && (
          <img
            src={assignment.imageUrl}
            alt={assignment.topic}
            className="w-20 h-20 object-cover rounded-lg border border-gray-100 shadow-sm mx-auto sm:mx-0"
          />
        )}
        <div className="flex-1 w-full">
          <h3 className="font-clash text-lg sm:text-2xl font-semibold text-accent mb-1 text-center sm:text-left">
            {assignment.courseTitle}: {assignment.topic}
          </h3>
          <p className="text-base text-gray-700 font-montserrat mb-2 text-center sm:text-left">
            {assignment.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center sm:items-start text-sm mb-2 w-full">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-primary">
                <CircleQuestionMark />
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-bold text-[15px] text-[#A9A9A9] ">
                  Questions
                </p>
                <p className="font-montserrat font-bold text-[15px]  ">
                  {assignment.questions.length} Questions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-primary">
                <Download />
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-bold text-[15px] text-[#A9A9A9] ">
                  Submission Type
                </p>
                <p className="font-montserrat font-bold text-[15px]  ">
                  {assignment.submissionType}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-red-600">
                <CalendarDays />
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-bold text-[15px] text-[#A9A9A9] ">
                  Deadline
                </p>
                <p className="font-montserrat font-bold text-[15px] text-red-600 ">
                  {formatDate(assignment.deadline)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border border-gray-200 rounded-[15px] p-4">
        <h4 className="font-montserrat font-bold text-base mb-2 text-gray-800">
          Instructions
        </h4>
        <ul className="pl-2 space-y-2 text-gray-700 text-sm">
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
      <div className="border border-gray-200 rounded-[15px] p-4">
        <h4 className="font-montserrat font-bold text-base mb-2 text-gray-800">
          Questions
        </h4>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm">
          {assignment.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
      </div>
      <Button className="mt-4 w-full">Edit Assignment</Button>
    </div>
  );
}
