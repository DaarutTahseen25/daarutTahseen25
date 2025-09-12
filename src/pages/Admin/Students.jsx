"use client";
import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DeleteOverlay from "../../Components/Suspendstudent";
import AddOverlay from "../../Components/Addstudent";
import EditOverlay from "../../Components/Studentdetailsedit";
import ViewOverlay from "../../Components/Studentdetails";

const initialStudents = [
  {
    id: 1,
    name: "Aishat Abiodun",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    level: "Beginner",
    status: "Active",
    progress: 70,
    date: "01/03/2024",
  },
  {
    id: 2,
    name: "Ibrahim Adams",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    level: "Intermediate",
    status: "Suspended",
    progress: 65,
    date: "01/03/2024",
  },
  {
    id: 3,
    name: "Jimoh Abiodun",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    level: "Advance",
    status: "Pending",
    progress: 80,
    date: "01/03/2024",
  },
  {
    id: 4,
    name: "Maryam Omar",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    level: "Beginner",
    status: "Suspended",
    progress: 25,
    date: "01/03/2024",
  },
  {
    id: 5,
    name: "Muhammad Rafiu",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    level: "Advance",
    status: "Active",
    progress: 100,
    date: "01/03/2024",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    level: "Intermediate",
    status: "Pending",
    progress: 70,
    date: "01/03/2024",
  },
  {
    id: 7,
    name: "Fatima Ali",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    level: "Advance",
    status: "Active",
    progress: 95,
    date: "01/03/2024",
  },
  {
    id: 8,
    name: "Aisha Ibrahim",
    email: "ibrahimabiodun@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    level: "Intermediate",
    status: "Active",
    progress: 90,
    date: "01/03/2024",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-pink-100 text-pink-700",
};

const levelColors = {
  Beginner: "bg-teal-100 text-teal-700",
  Intermediate: "bg-purple-100 text-purple-700",
  Advance: "bg-red-100 text-red-700",
};

export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [overlay, setOverlay] = useState({ type: null, student: null });

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleAdd = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleUpdate = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  const filtered = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = filterLevel === "All" || s.level === filterLevel;
    const matchesStatus = filterStatus === "All" || s.status === filterStatus;
    return matchesSearch && matchesLevel && matchesStatus;
  });

  return (
    <div className="min-h-screen p-3">
      <div className="max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-accent font-clash mb-1">
              Student Management
            </h1>
            <p className="text-accent">
              Manage student accounts and information
            </p>
          </div>
          <button
            onClick={() => setOverlay({ type: "add", student: null })}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:primary/70 mt-6 md:mt-0"
          >
            + Add New Student
          </button>
        </div>

        <div className="bg-white max-w-7xl rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search students"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:ring-none focus:border-primary"
            />

            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:ring-none focus:border-primary"
            >
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advance</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:ring-none focus:border-primary"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-5xl">
              <thead>
                <tr className="text-gray-600 border-b border-textmuted">
                  <th className="py-2">Student</th>
                  <th className="py-2">Level</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Progress</th>
                  <th className="py-2">Join Date</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="py-3 flex items-center gap-3">
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold font-clash text-textmain">
                          {s.name}
                        </p>
                        <p className="text-gray-500 text-sm">{s.email}</p>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          levelColors[s.level]
                        }`}
                      >
                        {s.level}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          statusColors[s.status]
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="w-40 pr-6">
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-full bg-gray-200 h-2 rounded">
                          <div
                            className="bg-accent h-2 rounded"
                            style={{ width: `${s.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{s.progress}%</span>
                      </div>
                    </td>

                    <td className="text-gray-600">{s.date}</td>
                    <td className="flex gap-3">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => setOverlay({ type: "view", student: s })}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-green-500 hover:text-green-700"
                        onClick={() => setOverlay({ type: "edit", student: s })}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() =>
                          setOverlay({ type: "delete", student: s })
                        }
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {overlay.type === "view" && (
        <ViewOverlay
          student={overlay.student}
          onClose={() => setOverlay({ type: null, student: null })}
        />
      )}
      {overlay.type === "edit" && (
        <EditOverlay
          student={overlay.student}
          onClose={() => setOverlay({ type: null, student: null })}
          onUpdate={handleUpdate}
        />
      )}
      {overlay.type === "delete" && (
        <DeleteOverlay
          student={overlay.student}
          onClose={() => setOverlay({ type: null, student: null })}
          onDelete={handleDelete}
        />
      )}
      {overlay.type === "add" && (
        <AddOverlay
          onClose={() => setOverlay({ type: null, student: null })}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
