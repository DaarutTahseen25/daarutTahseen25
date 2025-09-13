"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PencilLine, Trash2 } from "lucide-react";
import DeleteOverlay from "../../Components/Suspendstudent";
import AddOverlay from "../../Components/Addstudent";
import EditOverlay from "../../Components/Studentdetailsedit";
import ViewOverlay from "../../Components/Studentdetails";
import { useGetUsers } from "./useGetUsers";

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-700",
  Pending: "bg-pink-100 text-pink-700",
};

const levelColors = {
  beginner: "bg-teal-100 text-teal-700",
  intermediate: "bg-purple-100 text-purple-700",
  advanced: "bg-red-100 text-red-700",
};

export default function Students() {
  const {
    users: students,
    isLoading,
    setUsers: setStudents,
  } = useGetUsers({ role: "student" });

  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [overlay, setOverlay] = useState({ type: null, student: null });

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const handleAdd = (student) => setStudents((prev) => [...prev, student]);

  const handleUpdate = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s._id === updatedStudent._id ? updatedStudent : s))
    );
  };

  const filtered = students.filter((s) => {
    const matchesSearch = s.full_name
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesLevel =
      filterLevel === "All" ||
      (s.level ? s.level.toLowerCase() === filterLevel.toLowerCase() : false);

    const derivedStatus = s.is_verified
      ? s.is_active
        ? "Active"
        : "Suspended"
      : "Pending";
    const matchesStatus =
      filterStatus === "All" || derivedStatus === filterStatus;

    return matchesSearch && matchesLevel && matchesStatus;
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen p-3">
      <div className="max-w-7xl">
        {/* Header */}
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
            className="bg-primary hover:bg-buttonhover transition-colors text-white px-4 py-2 rounded-lg mt-6 md:mt-0"
          >
            + Add New Student
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search students"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            />

            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            >
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-textmuted rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-5xl">
              <thead>
                <tr className="text-gray-600 border-b border-textmuted">
                  <th className="py-2">Student</th>
                  <th className="py-2">Level</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Join Date</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => {
                  const status = s.is_verified
                    ? s.is_active
                      ? "Active"
                      : "Suspended"
                    : "Pending";
                  const joinDate = new Date(s.createdAt).toLocaleDateString();
                  return (
                    <tr key={s._id} className="hover:bg-gray-50">
                      <td className="py-3 flex items-center gap-3">
                        <img
                          src={s.image}
                          alt={s.full_name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold font-clash text-textmain">
                            {s.full_name}
                          </p>
                          <p className="text-gray-500 text-sm">{s.email}</p>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`px-3 py-1 capitalize rounded-full text-sm ${
                            s.level ? levelColors[s.level] : "bg-gray-100"
                          }`}
                        >
                          {s.level || "Nill"}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="text-gray-600">{joinDate}</td>
                      <td className="flex gap-3">
                        <button
                          className="text-[#2462FF] hover:text-blue-700"
                          onClick={() =>
                            setOverlay({ type: "view", student: s })
                          }
                        >
                          <FaEye className="size-4" />
                        </button>
                        <button
                          className="text-primary hover:text-buttonhover"
                          onClick={() =>
                            setOverlay({ type: "edit", student: s })
                          }
                        >
                          <PencilLine className="size-4" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() =>
                            setOverlay({ type: "delete", student: s })
                          }
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Overlays */}
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
