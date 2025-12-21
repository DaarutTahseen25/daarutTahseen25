import React, { useState } from "react";
import {
  Eye,
  Save,
  Plus,
  Pencil,
  Trash2,
  X,
  FileText,
  CheckSquare,
  Type,
  FileEdit,
  Search,
} from "lucide-react";

const Tests = () => {
  const [activeTab, setActiveTab] = useState("Create Test");
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const tabs = ["Create Test", "View Test"];

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

  const questionTypes = [
    { id: "multiple", label: "Multiple Choice", icon: CheckSquare },
    { id: "truefalse", label: "True/False", icon: CheckSquare },
    { id: "short", label: "Short Answer", icon: Type },
    { id: "essay", label: "Essay", icon: FileEdit },
  ];

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
      const updatedQuestions = [...questions];
      updatedQuestions[editingQuestion] = {
        ...questionData,
        id: questions[editingQuestion].id,
      };
      setQuestions(updatedQuestions);
    } else {
      const newQuestion = {
        ...questionData,
        id: Date.now(),
      };
      setQuestions([...questions, newQuestion]);
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

  const getQuestionTypeLabel = (type) => {
    const typeMap = {
      multiple: "Multiple Choice",
      truefalse: "True/False",
      short: "Short Answer",
      essay: "Essay",
    };
    return typeMap[type] || type;
  };

  const getQuestionTypeBadgeColor = (type) => {
    const colorMap = {
      multiple: "bg-blue-100 text-blue-700",
      truefalse: "bg-red-100 text-red-700",
      short: "bg-purple-100 text-purple-700",
      essay: "bg-green-100 text-green-700",
    };
    return colorMap[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Aptitude Test Management
          </h1>
          <p className="text-gray-600">
            Create, manage and review student's assessments
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 w-fit p-1 rounded-b-sm gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? "bg-white text-teal-600 shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-white/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Test Builder */}
        {activeTab === "Create Test" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  Test Builder
                </h2>
                <p className="text-gray-600 text-sm">
                  Create comprehensive aptitude tests
                </p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Eye size={18} />
                  Preview
                </button>
                <button className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
                  <Save size={18} />
                  Save Test
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Test Information */}
              <div className="lg:col-span-1">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Test Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Test Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={testInfo.title}
                        onChange={handleTestInfoChange}
                        placeholder="Enter Test Title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={testInfo.description}
                        onChange={handleTestInfoChange}
                        placeholder="Enter Test Description"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Duration (min)
                        </label>
                        <input
                          type="number"
                          name="duration"
                          value={testInfo.duration}
                          onChange={handleTestInfoChange}
                          placeholder="60"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Total Marks
                        </label>
                        <input
                          type="number"
                          name="totalMarks"
                          value={testInfo.totalMarks}
                          onChange={handleTestInfoChange}
                          placeholder="100"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={testInfo.subject}
                        onChange={handleTestInfoChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      >
                        <option>Arabic Language</option>
                        <option>English Language</option>
                        <option>Mathematics</option>
                        <option>Islamic Studies</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Level
                      </label>
                      <select
                        name="level"
                        value={testInfo.level}
                        onChange={handleTestInfoChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      >
                        <option>Arabic Language</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instruction
                      </label>
                      <textarea
                        name="instruction"
                        value={testInfo.instruction}
                        onChange={handleTestInfoChange}
                        placeholder="Test instruction for students"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Questions Section */}
              <div className="lg:col-span-2">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Questions ({questions.length})
                      </h3>
                      <p className="text-sm text-gray-600">
                        Add and manage test questions
                      </p>
                    </div>
                    <button
                      onClick={handleAddNewQuestion}
                      className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Plus size={16} />
                      Add New Question
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
                        onClick={handleAddNewQuestion}
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
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-700">
                                  Q{index + 1}
                                </span>
                                <span
                                  className={`px-2 py-1 text-xs font-medium rounded ${getQuestionTypeBadgeColor(
                                    question.type
                                  )}`}
                                >
                                  {getQuestionTypeLabel(question.type)}
                                </span>
                                <span className="px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-700">
                                  {question.marks} mark
                                  {question.marks !== "1" ? "s" : ""}
                                </span>
                              </div>
                              <p className="text-sm text-gray-900 font-medium mb-2">
                                {question.question}
                              </p>
                              {question.type === "multiple" && (
                                <div className="text-xs text-gray-600 space-y-1">
                                  {question.options.map(
                                    (option, optIdx) =>
                                      option && (
                                        <div
                                          key={optIdx}
                                          className="flex items-center gap-2"
                                        >
                                          <span className="font-medium">
                                            {String.fromCharCode(65 + optIdx)}.
                                          </span>
                                          <span>{option}</span>
                                          {optIdx ===
                                            question.correctAnswer && (
                                            <span className="text-teal-600">
                                              ✓
                                            </span>
                                          )}
                                        </div>
                                      )
                                  )}
                                </div>
                              )}
                              {question.type === "truefalse" && (
                                <div className="text-xs text-gray-600">
                                  <span className="font-medium">Answer:</span>{" "}
                                  {question.correctAnswer === 0
                                    ? "True"
                                    : "False"}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleEditQuestion(index)}
                                className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                              >
                                <Pencil size={16} />
                              </button>
                              <button
                                onClick={() => handleDeleteQuestion(index)}
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
              </div>
            </div>
          </div>
        )}

        {/* View Test Tab */}
        {activeTab === "View Test" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Tests..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent min-w-[160px]">
                <option>All Subjects</option>
                <option>Arabic Language</option>
                <option>English Language</option>
                <option>Islamic Studies</option>
                <option>Mathematics</option>
              </select>
              <button className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 whitespace-nowrap">
                <Plus size={18} />
                Create New Test
              </button>
            </div>

            {/* Tests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Test Card 1 */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Arabic Language Proficiency Test
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-teal-100 text-teal-700">
                      Intermediate
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700">
                      Arabic
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      45 minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-teal-600">75%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                    View details
                  </button>
                  <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Test Card 2 */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quran Recitation Assessment
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700">
                      Advanced
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-700">
                      Quran
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      55 minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-semibold text-gray-900">150</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-teal-600">92%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                    View details
                  </button>
                  <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Test Card 3 */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Islamic Studies Foundation
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-teal-100 text-teal-700">
                      Beginner
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-orange-100 text-orange-700">
                      Islamic Studies
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-pink-100 text-pink-700">
                      Draft
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      35 minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-semibold text-gray-900">256</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-teal-600">88%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                    View details
                  </button>
                  <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Test Card 4 */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Arabic Language Proficiency Test
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-teal-100 text-teal-700">
                      Intermediate
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700">
                      Arabic
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      45 minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-semibold text-gray-900">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-teal-600">75%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                    View details
                  </button>
                  <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Test Card 5 */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quran Recitation Assessment
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700">
                      Advanced
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-700">
                      Quran
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      55 minutes
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-semibold text-gray-900">150</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-teal-600">92%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                    View details
                  </button>
                  <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Question Modal */}
      {showQuestionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingQuestion !== null
                  ? "Edit Question"
                  : "Add New Question"}
              </h2>
              <button
                onClick={() => {
                  setShowQuestionModal(false);
                  setSelectedQuestionType("");
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Question Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Question Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {questionTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => handleSelectQuestionType(type.id)}
                        className={`p-4 border rounded-lg text-left transition-all ${
                          selectedQuestionType === type.id
                            ? "border-teal-500 bg-teal-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={
                            selectedQuestionType === type.id
                              ? "text-teal-600 mb-2"
                              : "text-gray-600 mb-2"
                          }
                        />
                        <div
                          className={`font-medium text-sm ${
                            selectedQuestionType === type.id
                              ? "text-teal-700"
                              : "text-gray-900"
                          }`}
                        >
                          {type.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedQuestionType && (
                <>
                  {/* Question Text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <textarea
                      name="question"
                      value={questionData.question}
                      onChange={handleQuestionDataChange}
                      placeholder="Enter your question here"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    />
                  </div>

                  {/* Answer Options for Multiple Choice */}
                  {selectedQuestionType === "multiple" && (
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
                              onChange={() =>
                                setQuestionData((prev) => ({
                                  ...prev,
                                  correctAnswer: index,
                                }))
                              }
                              className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                            />
                            <input
                              type="text"
                              value={option}
                              onChange={(e) =>
                                handleOptionChange(index, e.target.value)
                              }
                              placeholder={`Option ${String.fromCharCode(
                                65 + index
                              )}`}
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
                  {selectedQuestionType === "truefalse" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Correct Answer
                      </label>
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            setQuestionData((prev) => ({
                              ...prev,
                              correctAnswer: 0,
                            }))
                          }
                          className={`flex-1 px-4 py-3 border rounded-lg font-medium transition-all ${
                            questionData.correctAnswer === 0
                              ? "border-teal-500 bg-teal-50 text-teal-700"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          True
                        </button>
                        <button
                          onClick={() =>
                            setQuestionData((prev) => ({
                              ...prev,
                              correctAnswer: 1,
                            }))
                          }
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
                      onChange={handleQuestionDataChange}
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
                      onChange={handleQuestionDataChange}
                      placeholder="Enter your question here"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => {
                        setShowQuestionModal(false);
                        setSelectedQuestionType("");
                      }}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmitQuestion}
                      className="flex-1 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      {editingQuestion !== null
                        ? "Update Question"
                        : "Add Question"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tests;
