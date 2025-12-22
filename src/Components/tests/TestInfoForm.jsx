import React from "react";

const TestInfoForm = ({ testInfo, onChange, subjects = [], levels = [] }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:p-5">
      <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
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
            onChange={onChange}
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
            onChange={onChange}
            placeholder="Enter Test Description"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (min)
            </label>
            <input
              type="number"
              name="duration"
              value={testInfo.duration}
              onChange={onChange}
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
              onChange={onChange}
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
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Level
          </label>
          <select
            name="level"
            value={testInfo.level}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          >
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instruction
          </label>
          <textarea
            name="instruction"
            value={testInfo.instruction}
            onChange={onChange}
            placeholder="Test instruction for students"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TestInfoForm;
