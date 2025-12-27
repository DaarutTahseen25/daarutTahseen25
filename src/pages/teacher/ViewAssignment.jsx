/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { formatDate } from "../../utils/helper";
import { BookCheck, Calendar, UsersRound } from "lucide-react";
import SubmissionTable from "../../Components/SubmissionTable";
import { UserRound, FileAudio, FileText } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../Components/ui/table";

const assignment = {
  title: "Introduction to Tajwid",
  deadline: "2024-07-15",
  totalSubmissions: 5,
  totalStudents: 20,
  totalMarked: 4,
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
        Assignment: {assignment.title}
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
        <h2 className="font-montserrat text-lg sm:text-xl font-semibold mb-4">
          Student Submissions
        </h2>
        <SubmissionTable
          setSubmissions={setSubmissions}
          submissions={submissions}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        />
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
