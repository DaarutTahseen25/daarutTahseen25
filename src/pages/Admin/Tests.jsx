"use client";
import { useState } from "react";
import AddQuestionModal from "../../Components/NewQuestionComponent";
import { Pencil, Trash2 } from "lucide-react";

export default function Tests() {
  const [activeTab, setActiveTab] = useState("create");
  const [questions, setQuestions] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function addQuestionToList(q) {
    setQuestions([...questions, q]);
  }

  // dummy tests
  const tests = [
    {
      title: "Arabic Language Proficiency Test",
      tags: ["Intermediate", "Arabic", "Active"],
      questions: 25,
      duration: "45 minutes",
      attempt: 156,
      avgScore: "78%",
    },
    {
      title: "Quran Recitation Assessment",
      tags: ["Advanced", "Quran", "Active"],
      questions: 15,
      duration: "55 minutes",
      attempt: 156,
      avgScore: "98%",
    },
    {
      title: "Islamic Studies Foundation",
      tags: ["Beginner", "Islamic Studies", "Draft"],
      questions: 29,
      duration: "35 minutes",
      attempt: 256,
      avgScore: "89%",
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-3xl font-semibold text-accent font-clash">
          Aptitude Test Management
        </h1>
        <p className="text-accent/70 font-montserrat font-semibold text-xl">
          Create, Manage and Review Student Assessments
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("create")}
          className={`px-6 py-2 rounded font-semibold ${
            activeTab === "create"
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Create Test
        </button>

        <button
          onClick={() => setActiveTab("view")}
          className={`px-6 py-2 rounded font-semibold ${
            activeTab === "view"
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          View Tests
        </button>
      </div>

      {/*  VIEW TESTS TAB */}
      {activeTab === "view" && (
        <div className="bg-white p-4 min-h-screen rounded-md shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, index) => (
              <div
                key={index}
                className="relative border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
              >
                {/* EDIT & DELETE */}
                <div className="absolute top-3 right-3 flex gap-3">
                  <Pencil className="w-5 h-5 text-teal-600 cursor-pointer hover:text-teal-700" />
                  <Trash2 className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-600" />
                </div>

                <h2 className="font-semibold text-accent mb-2">{test.title}</h2>

                <div className="flex flex-wrap gap-2 mb-3">
                  {test.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-accent/80 flex flex-col gap-1 mb-4">
                  <p>
                    <span className="font-semibold">Questions:</span>{" "}
                    {test.questions}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {test.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Attempt:</span>{" "}
                    {test.attempt}
                  </p>
                  <p>
                    <span className="font-semibold">Avg Score:</span>{" "}
                    {test.avgScore}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <button className="px-4 py-2 bg-teal-600 text-white text-xs rounded">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*  CREATE TEST TAB  */}
      {activeTab === "create" && (
        <div className="w-full min-h-screen bg-white p-4 flex flex-col gap-6">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4 mb-6">
            <div className="flex flex-col gap-1 md:items-start items-center">
              <h1 className="text-xl font-semibold text-accent font-clash">
                Test Builder
              </h1>
              <p className="text-accent/70 font-montserrat font-semibold text-sm">
                Create comprehensive aptitude tests
              </p>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 border border-textmuted rounded text-sm">
                Preview
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded text-sm">
                Save Test
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT SIDE FORM */}
            <div className="bg-white p-4 rounded shadow border border-textmuted ">
              <h2 className="text-lg text-accent font-semibold font-clash mb-3">
                Test Information
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  className="w-full border border-textmuted rounded px-3 py-2 text-sm"
                  placeholder="Enter Test Title"
                />

                <textarea
                  className="w-full border border-textmuted rounded px-3 py-2 text-sm"
                  placeholder="Enter Test Description"
                />

                <div className="flex gap-3">
                  <input
                    type="number"
                    className="flex-1 border border-textmuted rounded px-3 py-2 text-sm"
                    defaultValue={60}
                  />
                  <input
                    type="number"
                    className="flex-1 border border-textmuted rounded px-3 py-2 text-sm"
                    defaultValue={100}
                  />
                </div>

                <select className="w-full border border-textmuted rounded px-3 py-2 text-sm">
                  <option>Arabic Language</option>
                </select>

                <select className="w-full border border-textmuted rounded px-3 py-2 text-sm">
                  <option>Arabic Language</option>
                </select>

                <textarea
                  className="w-full border border-textmuted rounded px-3 py-2 text-sm"
                  placeholder="Test instruction for students"
                />
              </div>
            </div>

            {/* RIGHT SIDE QUESTIONS */}
            <div className="lg:col-span-2 bg-white p-4 rounded shadow border border-textmuted">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Questions ({questions.length})
                </h2>

                <button
                  onClick={() => setOpenModal(true)}
                  className="px-4 py-2 bg-teal-600 text-white rounded text-sm"
                >
                  Add New Question
                </button>
              </div>

              <div className="mt-4">
                {questions.length === 0 ? (
                  <div className="border border-textmuted rounded p-6 flex flex-col items-center justify-center text-center text-sm text-gray-500">
                    <p>No Questions Added</p>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="mt-3 px-4 py-2 bg-teal-600 text-white rounded text-sm"
                    >
                      Add First Question
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {questions.map((q, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">
                              Q{index + 1}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {q.type}
                            </span>
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                              {q.marks} mark
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-teal-600 cursor-pointer">
                            <i className="ri-pencil-line text-lg"></i>
                            <i className="ri-delete-bin-6-line text-lg text-red-500"></i>
                          </div>
                        </div>

                        <p className="font-semibold text-gray-800 mb-3">
                          {q.question}
                        </p>

                        {q.type === "multiple" && (
                          <div className="flex flex-col gap-2 mt-2">
                            {q.options.map((opt, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="font-semibold">
                                  {String.fromCharCode(65 + i)}.
                                </span>
                                <span>{opt}</span>
                                {q.correct === i && (
                                  <span className="text-green-600 text-sm">
                                    ✔
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL */}
      <AddQuestionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={addQuestionToList}
      />
    </>
  );
}
