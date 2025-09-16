// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// function EditOverlay({ student, onClose, onUpdate }) {
//   const derivedStatus = student.is_verified
//     ? student.is_active
//       ? "Active"
//       : "Suspended"
//     : "Pending";

//   const joinDate = new Date(student.createdAt).toLocaleDateString();

//   const [form, setForm] = useState({
//     name: student.full_name,
//     email: student.email,
//     level: student.level || "Nill",
//     status: derivedStatus,
//     progress: student.progress || 0,
//     date: joinDate,
//     avatar: student.image,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = () => {
//     onUpdate({ ...student, ...form });
//     onClose();
//   };

//   if (!student) return null;

//   return (
//     <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
//       <div className="bg-white p-4 rounded-lg shadow max-w-md w-full">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-xl font-clash">Edit Student</h2>
//           <button
//             onClick={onClose}
//             className="text-xl cursor-pointer text-textmain"
//           >
//             <AiOutlineClose />
//           </button>
//         </div>

//         <div>
//           <img
//             src={form.avatar}
//             alt={form.name}
//             className="h-30 w-30 rounded-full mx-auto my-4"
//           />
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="text-md font-semibold font-clash text-textmain text-center w-full text-center border border-textmuted focus:outline-none focus:border-primary focus:ring-none px-4 py-1 rounded mb-2"
//           />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="text-sm text-textmuted text-center w-full  text-center border border-textmuted focus:outline-none focus:border-primary focus:ring-none px-4 py-1 rounded mt-2"
//           />
//         </div>

//         <div className="grid grid-cols-2 mt-6 ml-4 gap-4">
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmain/70 mt-2">Level</p>
//             <input
//               type="text"
//               name="level"
//               value={form.level}
//               onChange={handleChange}
//               className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
//             />
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmain/70 mt-2">Status</p>
//             <input
//               type="text"
//               name="status"
//               value={form.status}
//               onChange={handleChange}
//               className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
//             />
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmain/70 mt-2">Progress</p>
//             <input
//               type="number"
//               name="progress"
//               value={form.progress}
//               onChange={handleChange}
//               className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
//             />
//           </div>
//           <div className="flex flex-col pr-6">
//             <p className="text-md text-textmain/70 mt-2">Join Date</p>
//             <input
//               type="text"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
//             />
//           </div>
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="mx-auto cursor-pointer block px-5 py-2 bg-primary hover:bg-buttonhover text-white rounded mt-8 font-clash"
//         >
//           Update Student Details
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EditOverlay;

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function EditOverlay({ student, onClose, onUpdate }) {
  const derivedStatus = student.is_verified
    ? student.is_active
      ? "Active"
      : "Suspended"
    : "Pending";

  const joinDate = new Date(student.createdAt).toLocaleDateString();

  const [form, setForm] = useState({
    name: student.full_name,
    email: student.email,
    level: student.level || "",
    status: derivedStatus,
    progress: student.progress || 0,
    date: joinDate,
    avatar: student.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate({ ...student, ...form });
    onClose();
  };

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-semibold text-xl font-clash text-gray-900">
            Edit Student
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <AiOutlineClose className="text-gray-600 text-lg" />
          </button>
        </div>

<<<<<<< HEAD
        <div>
          <img
            src={form.avatar}
            alt={form.name}
            className="h-30 w-30 rounded-full mx-auto my-4"
          />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="text-md font-semibold font-clash text-textmain w-full text-center border border-textmuted focus:outline-none focus:border-primary focus:ring-none px-4 py-1 rounded mb-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="text-sm text-textmuted text-center w-full   border border-textmuted focus:outline-none focus:border-primary focus:ring-none px-4 py-1 rounded mt-2"
          />
        </div>
=======
        {/* Profile Section */}
        <div className="px-6 py-6">
          <div className="text-center mb-6">
            <img
              src={form.avatar}
              alt={form.name}
              className="h-24 w-24 rounded-full mx-auto object-cover ring-4 ring-gray-100 mb-4"
            />
>>>>>>> ea84f7a13498061aecb4d6764ad0bb7953d4e43f

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full text-lg font-semibold font-clash text-gray-900 text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full text-sm text-gray-600 text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Level
                </label>
                <input
                  type="text"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  placeholder="Student Level"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="Active">Active</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Progress ({form.progress}%)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  name="progress"
                  min="0"
                  max="100"
                  value={form.progress}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Join Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-8 px-6 py-3 bg-primary hover:bg-buttonhover text-white rounded-lg font-medium font-clash transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Update Student Details
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgba(0, 150, 136, 0.8);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgba(0, 150, 136, 0.8);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default EditOverlay;
