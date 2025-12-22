import React from "react";
import { Eye, Save, Plus, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../Components/ui/dialog";
import TabsBar from "../../Components/tests/TabsBar";
import TestInfoForm from "../../Components/tests/TestInfoForm";
import QuestionsPanel from "../../Components/tests/QuestionsPanel";
import QuestionTypeSelector from "../../Components/tests/QuestionTypeSelector";
import QuestionForm from "../../Components/tests/QuestionForm";
import ViewTestsGrid from "../../Components/tests/ViewTestsGrid";
import { TEST_SUBJECTS, TEST_LEVELS, SAMPLE_TESTS } from "../../constants/data";
import { useTests } from "../../hooks/useTests";

const Tests = () => {
  const {
    tabs,
    questionTypes,
    activeTab,
    setActiveTab,
    showQuestionModal,
    setShowQuestionModal,
    selectedQuestionType,
    setSelectedQuestionType,
    testInfo,
    handleTestInfoChange,
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
    getQuestionTypeLabel,
    getQuestionTypeBadgeColor,
  } = useTests();

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-1 sm:mb-2">
            Aptitude Test Management
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Create, manage and review student's assessments
          </p>
        </div>

        {/* Tabs */}
        <TabsBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        {/* Test Builder */}
        {activeTab === "Create Test" && (
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                  Test Builder
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Create comprehensive aptitude tests
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline">Preview</span>
                </button>
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Save size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Save Test</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {/* Test Information */}
              <div className="lg:col-span-1">
                <TestInfoForm
                  testInfo={testInfo}
                  onChange={handleTestInfoChange}
                  subjects={TEST_SUBJECTS}
                  levels={TEST_LEVELS}
                />
              </div>

              {/* Questions Section */}
              <div className="lg:col-span-2">
                <QuestionsPanel
                  questions={questions}
                  onAdd={handleAddNewQuestion}
                  onEdit={handleEditQuestion}
                  onDelete={handleDeleteQuestion}
                  getLabel={getQuestionTypeLabel}
                  getBadgeColor={getQuestionTypeBadgeColor}
                />
              </div>
            </div>
          </div>
        )}

        {/* View Test Tab */}
        {activeTab === "View Test" && (
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 md:p-6">
            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Tests..."
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
                <Search
                  className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
              <select className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent min-w-[140px] sm:min-w-[160px] text-sm sm:text-base">
                <option>All Subjects</option>
                {TEST_SUBJECTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button className="px-3 sm:px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base">
                <Plus size={18} />
                Create New Test
              </button>
            </div>

            {/* Tests Grid */}
            <ViewTestsGrid tests={SAMPLE_TESTS} />
          </div>
        )}
      </div>

      {/* Add Question Dialog */}
      <Dialog
        open={showQuestionModal}
        onOpenChange={(open) => {
          setShowQuestionModal(open);
          if (!open) setSelectedQuestionType("");
        }}
      >
        <DialogContent className="max-w-2xl bg-white rounded-lg sm:rounded-xl shadow-xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
            <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900">
              {editingQuestion !== null ? "Edit Question" : "Add New Question"}
            </DialogTitle>
          </DialogHeader>

          <div className="p-4 sm:p-6 space-y-4">
            {/* Question Type Selection */}
            <QuestionTypeSelector
              questionTypes={questionTypes}
              selectedType={selectedQuestionType}
              onSelect={handleSelectQuestionType}
            />

            {selectedQuestionType && (
              <QuestionForm
                selectedType={selectedQuestionType}
                questionData={questionData}
                onChange={handleQuestionDataChange}
                onOptionChange={handleOptionChange}
                onSelectCorrect={(index) =>
                  setQuestionData((prev) => ({ ...prev, correctAnswer: index }))
                }
                onCancel={() => {
                  setShowQuestionModal(false);
                  setSelectedQuestionType("");
                }}
                onSubmit={handleSubmitQuestion}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tests;
