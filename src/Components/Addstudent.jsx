import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function AddOverlay({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    level: "Beginner",
    status: "Active",
    progress: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSave = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      ...form,
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      date: new Date().toLocaleDateString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-xl font-clash">Add New Student</h2>
          <button
            onClick={onClose}
            className="text-xl cursor-pointer text-textmain"
          >
            <AiOutlineClose />
          </button>
        </div>

        <label className="block text-sm font-medium mb-1">Full Name*</label>
        <input
          name="name"
          placeholder="Enter student's full name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-textmuted px-3 py-2 rounded mb-1 focus:outline-none focus:border-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

        <label className="block text-sm font-medium mb-1">Email*</label>
        <input
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-textmuted px-3 py-2 rounded mb-1 focus:outline-none focus:border-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block text-sm font-medium mb-1">Level</label>
        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className="w-full border border-textmuted px-3 py-2 rounded mb-3 focus:outline-none focus:border-primary"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advance</option>
        </select>

        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border border-textmuted px-3 py-2 rounded mb-3 focus:outline-none focus:border-primary"
        >
          <option>Active</option>
          <option>Pending</option>
          <option>Suspended</option>
        </select>

        <div className="flex justify-between mt-6 px-4">
          <button
            onClick={onClose}
            className="px-8 py-2 bg-white text-textmain border border-textmuted rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 cursor-pointer bg-primary text-white rounded"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOverlay;
