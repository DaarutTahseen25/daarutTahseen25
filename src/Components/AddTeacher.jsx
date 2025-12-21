import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

function AddTeacher({ open, onOpenChange, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    experience: "Choose experience",
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
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl font-clash text-gray-900">
            Add New Teacher
          </DialogTitle>
        </DialogHeader>

        {/* Form Content */}
        <div className="space-y-4 py-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter student's full name"
              value={form.name}
              onChange={handleChange}
              className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.name ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject field */}

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Subject taking*
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="Beginner">Quranic studies</option>
              <option value="Intermediate">Hadith</option>
              <option value="Advanced">Nahw</option>
            </select>
          </div>

          {/* experience and Status Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Experience
              </label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="Beginner">12 years</option>
                <option value="Intermediate">15 years</option>
                <option value="Advanced">30 years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>

          {/* Initial Progress */}
        </div>

        <DialogFooter className="flex space-x-3 sm:justify-between">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-primary hover:bg-buttonhover text-white rounded-lg font-medium font-clash transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Add Teacher
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddTeacher;
