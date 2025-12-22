import { useState } from "react";
import {
  TEST_TABS,
  QUESTION_TYPES,
  QUESTION_TYPE_LABELS,
  QUESTION_TYPE_BADGE_COLORS,
} from "../constants/data";

export function useTests() {
  const [activeTab, setActiveTab] = useState("Create Test");
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const [testInfo, setTestInfo] = useState({
    title: "",
    description: "",
    duration: "",
    totalMarks: "",
    subject: "Arabic Language",
    level: "Arabic Language",
    instruction: "",
  });

  const [questionData, setQuestionData] = useState({
    type: "",
    question: "",
    marks: "1",
    explanation: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
  });

  const handleTestInfoChange = (e) => {
    const { name, value } = e.target;
    setTestInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuestionDataChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData((prev) => ({ ...prev, options: newOptions }));
  };

  const handleAddNewQuestion = () => {
    setEditingQuestion(null);
    setQuestionData({
      type: "",
      question: "",
      marks: "1",
      explanation: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    });
    setSelectedQuestionType("");
    setShowQuestionModal(true);
  };

  const handleSelectQuestionType = (type) => {
    setSelectedQuestionType(type);
    setQuestionData((prev) => ({ ...prev, type }));
  };

  const handleSubmitQuestion = () => {
    if (!questionData.question.trim()) {
      alert("Please enter a question");
      return;
    }

    if (editingQuestion !== null) {
      const updated = [...questions];
      updated[editingQuestion] = {
        ...questionData,
        id: questions[editingQuestion].id,
      };
      setQuestions(updated);
    } else {
      const newQuestion = { ...questionData, id: Date.now() };
      setQuestions((prev) => [...prev, newQuestion]);
    }

    setShowQuestionModal(false);
    setSelectedQuestionType("");
    setQuestionData({
      type: "",
      question: "",
      marks: "1",
      explanation: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    });
    setEditingQuestion(null);
  };

  const handleEditQuestion = (index) => {
    setEditingQuestion(index);
    setQuestionData(questions[index]);
    setSelectedQuestionType(questions[index].type);
    setShowQuestionModal(true);
  };

  const handleDeleteQuestion = (index) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  const getQuestionTypeLabel = (type) => QUESTION_TYPE_LABELS[type] || type;
  const getQuestionTypeBadgeColor = (type) =>
    QUESTION_TYPE_BADGE_COLORS[type] || "bg-gray-100 text-gray-700";

  return {
    // constants
    tabs: TEST_TABS,
    questionTypes: QUESTION_TYPES,

    // ui state
    activeTab,
    setActiveTab,
    showQuestionModal,
    setShowQuestionModal,
    selectedQuestionType,
    setSelectedQuestionType,

    // test info
    testInfo,
    handleTestInfoChange,

    // questions
    questions,
    editingQuestion,
    questionData,
    setQuestionData,
    handleQuestionDataChange,
    handleOptionChange,
    handleAddNewQuestion,
    handleSelectQuestionType,
    handleSubmitQuestion,
    handleEditQuestion,
    handleDeleteQuestion,

    // helpers
    getQuestionTypeLabel,
    getQuestionTypeBadgeColor,
  };
}
