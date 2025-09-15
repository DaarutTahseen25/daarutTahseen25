import { AiOutlineClose } from "react-icons/ai";

function ViewTeacher({ teacher, onClose }) {
  const derivedStatus = teacher.is_verified
    ? teacher.is_active
      ? "Active"
      : "Suspended"
    : "Pending";

  const joinDate = new Date(teacher.createdAt).toLocaleDateString();

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-200";
      case "Suspended":
        return "text-red-600 bg-red-50 border-red-200";
      case "Pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  if (!teacher) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-semibold text-xl font-clash text-gray-900">
            Teacher Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <AiOutlineClose className="text-gray-600 text-lg" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-8 text-center">
          <div className="relative inline-block">
            <img
              src={teacher.image}
              alt={teacher.full_name}
              className="h-24 w-24 rounded-full mx-auto object-cover ring-4 ring-gray-100"
            />
            <div
              className={`absolute -bottom-1 -right-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                derivedStatus
              )}`}
            >
              {derivedStatus}
            </div>
          </div>
          <h3 className="text-lg font-semibold font-clash text-gray-900 mt-4">
            {teacher.full_name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{teacher.email}</p>
        </div>

        {/* Details Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Level
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {teacher.level || "Not Set"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Progress
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${teacher.progress || 0}%` }}
                  ></div>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {teacher.progress || 0}%
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Join Date
              </p>
              <p className="text-lg font-semibold text-gray-900">{joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTeacher;
