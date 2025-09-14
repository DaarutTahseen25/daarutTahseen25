// import { AiOutlineClose } from "react-icons/ai";

// function DeleteOverlay({ student, onClose, onDelete }) {
//   const derivedStatus = student.is_verified
//     ? student.is_active
//       ? "Active"
//       : "Suspended"
//     : "Pending";

//   const joinDate = new Date(student.createdAt).toLocaleDateString();

//   if (!student) return null;

//   return (
//     <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
//       <div className="bg-white p-4 rounded-lg shadow max-w-md w-full">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-xl font-clash">Delete Student</h2>
//           <button
//             onClick={onClose}
//             className="text-xl cursor-pointer text-textmain"
//           >
//             <AiOutlineClose />
//           </button>
//         </div>

//         <div>
//           <img
//             src={student.image}
//             alt={student.full_name}
//             className="h-30 w-30 rounded-full mx-auto my-4"
//           />
//           <p className="text-md font-semibold font-clash text-textmain text-center">
//             {student.full_name}
//           </p>
//           <p className="text-sm text-textmuted text-center">{student.email}</p>
//         </div>

//         <div className="grid grid-cols-2 mt-6 ml-4">
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmuted mt-4">Level</p>
//             <p className="text-md font-semibold text-textmain">
//               {student.level || "Nill"}
//             </p>
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmuted mt-4">Status</p>
//             <p className="text-md font-semibold text-textmain">
//               {derivedStatus}
//             </p>
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmuted mt-4">Progress</p>
//             <p className="text-md font-semibold text-textmain">
//               {student.progress || 0}%
//             </p>
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmuted mt-4">Join Date</p>
//             <p className="text-md font-semibold text-textmain">{joinDate}</p>
//           </div>
//         </div>

//         <button
//           onClick={() => {
//             onDelete(student.id);
//             onClose();
//           }}
//           className="mx-auto cursor-pointer block px-5 py-2 bg-error text-white rounded mt-8 font-clash"
//         >
//           Delete Student
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DeleteOverlay;

import { AiOutlineClose } from "react-icons/ai";

function DeleteOverlay({ student, onClose, onDelete }) {
  const derivedStatus = student.is_verified
    ? student.is_active
      ? "Active"
      : "Suspended"
    : "Pending";

  const joinDate = new Date(student.createdAt).toLocaleDateString();

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

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-semibold text-xl font-clash text-red-600">
            Delete Student
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <AiOutlineClose className="text-gray-600 text-lg" />
          </button>
        </div>

        {/* Warning Message */}
        <div className="px-6 pt-4 pb-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm font-medium">
              ⚠️ This action cannot be undone. The student record will be
              permanently deleted.
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-4 text-center">
          <div className="relative inline-block">
            <img
              src={student.image}
              alt={student.full_name}
              className="h-20 w-20 rounded-full mx-auto object-cover ring-4 ring-red-100"
            />
            <div
              className={`absolute -bottom-1 -right-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                derivedStatus
              )}`}
            >
              {derivedStatus}
            </div>
          </div>
          <h3 className="text-lg font-semibold font-clash text-gray-900 mt-3">
            {student.full_name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{student.email}</p>
        </div>

        {/* Details Grid */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Level
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {student.level || "Not Set"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Progress
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {student.progress || 0}%
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 col-span-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Join Date
              </p>
              <p className="text-sm font-semibold text-gray-900">{joinDate}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(student.id);
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium font-clash transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteOverlay;
