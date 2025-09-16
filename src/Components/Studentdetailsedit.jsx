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
    level: student.level || "Nill",
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
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow max-w-md w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl font-clash">Edit Student</h2>
          <button
            onClick={onClose}
            className="text-xl cursor-pointer text-textmain"
          >
            <AiOutlineClose />
          </button>
        </div>

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

        <div className="grid grid-cols-2 mt-6 ml-4 gap-4">
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmain/70 mt-2">Level</p>
            <input
              type="text"
              name="level"
              value={form.level}
              onChange={handleChange}
              className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmain/70 mt-2">Status</p>
            <input
              type="text"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmain/70 mt-2">Progress</p>
            <input
              type="number"
              name="progress"
              value={form.progress}
              onChange={handleChange}
              className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmain/70 mt-2">Join Date</p>
            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border border-textmuted rounded px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mx-auto cursor-pointer block px-5 py-2 bg-primary hover:bg-buttonhover text-white rounded mt-8 font-clash"
        >
          Update Student Details
        </button>
      </div>
    </div>
  );
}

export default EditOverlay;
