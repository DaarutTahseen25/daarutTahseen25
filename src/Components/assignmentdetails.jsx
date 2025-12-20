import { Calendar, HelpCircle, UploadCloud, CheckCircle } from "lucide-react";

export default function AssignmentDetails({
  title,
  description,
  questionsCount,
  submissionType,
  deadline,
  instructions,
  questionList,
  imageSrc,
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white  mx-3 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <img
          src="/Islamic Aqeedah.png"
          alt={title}
          className="w-full sm:w-20 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-gray-900 text-base sm:text-lg">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>{questionsCount} Questions</span>
            </div>
            <div className="flex items-center gap-1">
              <UploadCloud className="w-4 h-4 text-teal-600" />
              <span>{submissionType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-red-500" />
              <span>{deadline}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="border border-gray-100 rounded-md p-3 space-y-2 bg-gray-50">
        <h3 className="font-medium text-gray-800">Instruction</h3>
        {instructions.map((inst, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 text-gray-700 text-sm"
          >
            <span className="text-teal-600 mt-1">
              {" "}
              <CheckCircle className="w-4 h-4 text-primary" />{" "}
            </span>
            <p>{inst}</p>
          </div>
        ))}
      </div>

      {/* Questions */}
      <div className="border border-gray-100 rounded-md p-3 space-y-2">
        <h3 className="font-medium text-gray-800">Questions</h3>
        <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
          {questionList.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ol>
      </div>

      {/* Button */}
      <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
        Edit Assignment
      </button>
    </div>
  );
}
