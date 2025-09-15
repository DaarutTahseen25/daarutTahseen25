/* eslint-disable no-unused-vars */

import { useState, useMemo } from "react";
import { FaEye, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { PencilLine, Trash2, Search, Filter } from "lucide-react";
import AddTeacher from "../../Components/AddTeacher";
import EditTeacher from "../../Components/EditTeacher";
import ViewTeacher from "../../Components/ViewTeacher";
import Pagination from "../../Components/Pagination";
import { useGetUsers } from "./useGetUsers";
import { LoaderFallback } from "../../routes/AppRoutes";
import { usePageTitle } from "../../hooks/usePageTitle";
import DeleteTeacher from "../../Components/DeleteTeacher";

export default function Tutors() {
  usePageTitle("Teachers Management");
  const {
    users: teachers,
    isLoading,
    setUsers: setTeachers,
  } = useGetUsers({ role: "teacher" });

  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [overlay, setOverlay] = useState({ type: null, teacher: null });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleDelete = (id) => {
    setTeachers((prev) => prev.filter((s) => s._id !== id));
  };

  const handleAdd = (teacher) => setTeachers((prev) => [...prev, teacher]);

  const handleUpdate = (updatedTeacher) => {
    setTeachers((prev) =>
      prev.map((s) => (s._id === updatedTeacher._id ? updatedTeacher : s))
    );
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <FaSort className="w-3 h-3 text-gray-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <FaSortUp className="w-3 h-3 text-primary" />
    ) : (
      <FaSortDown className="w-3 h-3 text-primary" />
    );
  };

  const filtered = useMemo(() => {
    let result = teachers.filter((s) => {
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

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle special cases
        if (sortConfig.key === "status") {
          aValue = a.is_verified
            ? a.is_active
              ? "Active"
              : "Suspended"
            : "Pending";
          bValue = b.is_verified
            ? b.is_active
              ? "Active"
              : "Suspended"
            : "Pending";
        }

        if (sortConfig.key === "createdAt") {
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
        }

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [teachers, search, filterLevel, filterStatus, sortConfig]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => setCurrentPage(1), [search, filterLevel, filterStatus]);

  if (isLoading) return <LoaderFallback />;

  return (
    <div className="min-h-screen p-3">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-accent font-clash mb-1">
              Teachers Management
            </h1>
            <p className="text-accent">
              Manage teachers accounts and information
            </p>
          </div>
          <button
            onClick={() => setOverlay({ type: "add", teacher: null })}
            className="bg-primary hover:bg-buttonhover transition-colors text-white px-6 py-3 rounded-lg mt-6 md:mt-0 font-medium shadow-sm hover:shadow-md"
          >
            + Add New Teacher
          </button>
        </div>

        {/* Modern Data Grid Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Search and Filters Bar */}
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search teachers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white min-w-32"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Grid */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("full_name")}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Teacher
                      {getSortIcon("full_name")}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-sm font-semibold text-gray-700">
                      Subject
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-sm font-semibold text-gray-700">
                      Experience
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Status
                      {getSortIcon("status")}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("createdAt")}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Join Date
                      {getSortIcon("createdAt")}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-sm font-semibold text-gray-700">
                      Actions
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.length ? (
                  currentData.map((s, index) => {
                    const status = s.is_verified
                      ? s.is_active
                        ? "Active"
                        : "Suspended"
                      : "Pending";
                    const joinDate = new Date(s.createdAt).toLocaleDateString();

                    const getStatusColor = (status) => {
                      switch (status) {
                        case "Active":
                          return "bg-green-100 text-green-800 border-green-200";
                        case "Suspended":
                          return "bg-red-100 text-red-800 border-red-200";
                        case "Pending":
                          return "bg-yellow-100 text-yellow-800 border-yellow-200";
                        default:
                          return "bg-gray-100 text-gray-800 border-gray-200";
                      }
                    };

                    return (
                      <tr
                        key={s._id}
                        className={`hover:bg-blue-50 transition-colors duration-150 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={s.image}
                                alt={s.full_name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                              />
                              <div
                                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                                  status === "Active"
                                    ? "bg-green-500"
                                    : status === "Suspended"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                                }`}
                              ></div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-gray-900 font-clash text-sm truncate">
                                {s.full_name}
                              </p>
                              <p className="text-gray-500 text-sm truncate">
                                {s.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                            Quranic Studies
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700 font-medium">
                            15 years
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                              status
                            )}`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                status === "Active"
                                  ? "bg-green-500"
                                  : status === "Suspended"
                                  ? "bg-red-500"
                                  : "bg-yellow-500"
                              }`}
                            ></div>
                            {status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                          {joinDate}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors duration-150"
                              onClick={() =>
                                setOverlay({ type: "view", teacher: s })
                              }
                              title="View Details"
                            >
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 text-primary hover:text-buttonhover hover:bg-primary/10 rounded-lg transition-colors duration-150"
                              onClick={() =>
                                setOverlay({ type: "edit", teacher: s })
                              }
                              title="Edit Teacher"
                            >
                              <PencilLine className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-lg transition-colors duration-150"
                              onClick={() =>
                                setOverlay({ type: "delete", teacher: s })
                              }
                              title="Delete Teacher"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No teachers found
                        </h3>
                        <p className="text-gray-500">
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer with Pagination and Info */}
          {currentData.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                Showing {(currentPage - 1) * pageSize + 1} to{" "}
                {Math.min(currentPage * pageSize, filtered.length)} of{" "}
                {filtered.length} teachers
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>

      {/* Overlays */}
      {overlay.type === "view" && (
        <ViewTeacher
          teacher={overlay.teacher}
          onClose={() => setOverlay({ type: null, teacher: null })}
        />
      )}
      {overlay.type === "edit" && (
        <EditTeacher
          teacher={overlay.teacher}
          onClose={() => setOverlay({ type: null, teacher: null })}
          onUpdate={handleUpdate}
        />
      )}
      {overlay.type === "delete" && (
        <DeleteTeacher
          teacher={overlay.teacher}
          onClose={() => setOverlay({ type: null, teacher: null })}
          onDelete={handleDelete}
        />
      )}
      {overlay.type === "add" && (
        <AddTeacher
          onClose={() => setOverlay({ type: null, teacher: null })}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
