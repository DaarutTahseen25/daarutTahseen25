"use client";
import React from "react";
import { CheckCircle, FileText, Clock, X } from "lucide-react";
import StudentSubmission from "./studentsubmission";
import AssignmentDetails from "./assignmentdetails";
import ExamSubmission from "./Examsubmission";
import ExamOverview from "./ExamOverview";
import AssignmentQuestionList from "./QuestionsCard";

const ViewExamModal = ({ isOpen, onClose, levelId, assignment }) => {
  if (!isOpen || !assignment) return null;

  const {
    title,
    students = [],
    totalSubmitted = 0,
    totalMarked = 0,
    deadline,
    details = {},
  } = assignment;
  const instructions = details.instructions || [];
  const questions = details.questions || [];

  const formatDate = (dateStr) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-1">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-accent/70 font-clash">
            Assignment: {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Top Summary Cards */}

          <div className="flex flex-col md:flex-row gap-4 p-6">
            <div className="flex-1 bg-white p-4 rounded-lg flex items-center gap-4 shadow">
              <FileText className="text-yellow-500 w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Total Submission</span>
                <span className="text-lg font-bold">
                  {totalSubmitted}/{students.length}
                </span>
              </div>
            </div>

            <div className="flex-1 bg-white p-4 rounded-lg flex items-center gap-4 shadow">
              <Clock className="text-red-500 w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Deadline</span>
                <span className="text-lg font-bold">
                  {formatDate(deadline)}
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 mb-4 border-b border-gray-200 mx-3">
            <p className="text-accent font-Montserrat font-semibold">
              Student Submission
            </p>
          </div>

          <div>
            <ExamSubmission />
          </div>
          <div className="px-6 mb-4 border-b border-gray-200 mx-3 mt-5">
            <p className="text-accent font-Montserrat font-semibold">
              Exam Overview
            </p>
          </div>
          {/* Exam Overview */}
          <div className="">
            <ExamOverview
              title="Qur’an Recitation & Tajwid: Introduction to Tajwid"
              description="Submit your recitation and written responses for this week's assignment. Follow the instructions below carefully before uploading"
              questionsCount={5}
              submissionType="Audio and Written"
              deadline="18 July, 2025 ; 4:00 PM"
              questionList={[
                "Recite Suratul Fātihah (from memory) and upload your audio.",
                "Explain the rule of Idghām with Ghunnah and give two examples from the Qur’an.",
                "What are the five major points of articulation (Makharij al-Ḥurūf)?",
                "Define Ikhfā’ and describe when it occurs.",
              ]}
            />
          </div>
          <div className="px-6 mb-4 border-b border-gray-200 mx-3 mt-5">
            <p className="text-accent font-Montserrat font-semibold">
              Exam Questions
            </p>
          </div>
          {/*  Exam Questions */}
          <div>
            <AssignmentQuestionList />
          </div>
          <div className="flex justify-center gap-4 p-6  w-full">
            <button className="text-white bg-primary w-full max-w-sm py-3 rounded-md hover:bg-primary/90 transition">
              Publish To Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExamModal;
