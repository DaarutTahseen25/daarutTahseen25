import { FaEye, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { PencilLine, Trash2, Search } from "lucide-react";
import DeleteOverlay from "../../Components/Suspendstudent";
import AddOverlay from "../../Components/Addstudent";
import EditOverlay from "../../Components/Studentdetailsedit";
import ViewOverlay from "../../Components/Studentdetails";
import Pagination from "../../Components/Pagination";
import { LoaderFallback } from "../../routes/AppRoutes";
import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";
import { useUserTable } from "../../hooks/useUserTable";
import { ActionMenu } from "../../Components/ui/ActionMenu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/ui/table";

const statusColors = {
  Active: "bg-green-100 text-green-800 border-green-200",
  Suspended: "bg-red-100 text-red-800 border-red-200",
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
};

const levelColors = {
  beginner: "bg-teal-100 text-teal-800 border-teal-200",
  intermediate: "bg-purple-100 text-purple-800 border-purple-200",
  advanced: "bg-orange-100 text-orange-800 border-orange-200",
};

export default function Students() {
  usePageTitle("Students Management");

  const {
    isLoading,
    currentData,
    totalPages,
    currentPage,
    setCurrentPage,
    pageSize,
    filteredCount,
    search,
    setSearch,
    filterLevel,
    setFilterLevel,
    filterStatus,
    setFilterStatus,
    sortConfig,
    toggleSort,
    overlay,
    openOverlay,
    closeOverlay,
    handleDelete,
    handleAdd,
    handleUpdate,
    deriveStatus,
  } = useUserTable({ role: "student", includeLevelFilter: true });

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

  if (isLoading) return <LoaderFallback />;

  const paginationStart = (currentPage - 1) * pageSize + 1;
  const paginationEnd = Math.min(currentPage * pageSize, filteredCount);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <DashTitle
            title="Students Management"
            subtitle="Add, edit, and monitor all registered students"
          />
          <button
            onClick={() => openOverlay("add")}
            className="bg-primary hover:bg-buttonhover transition-colors text-white px-6 py-3 rounded-lg mt-6 md:mt-0 font-medium shadow-sm hover:shadow-md"
          >
            + Add New Student
          </button>
        </div>

        {/* Modern Data Grid Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Search and Filters Bar */}
          <div className="px-3 md:px-6 py-3 md:py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                />
              </div>
              <div className="flex gap-2 md:gap-3">
                <select
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="flex-1 md:flex-none px-3 md:px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white md:min-w-32"
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="flex-1 md:flex-none px-3 md:px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white md:min-w-32"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Grid */}
          <Table>
            <TableHeader className="bg-gray-50 border-b border-gray-200">
              <TableRow>
                <TableHead className="w-full md:w-auto">
                  <button
                    onClick={() => toggleSort("full_name")}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Student
                    {getSortIcon("full_name")}
                  </button>
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  <button
                    onClick={() => toggleSort("level")}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Level
                    {getSortIcon("level")}
                  </button>
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  <button
                    onClick={() => toggleSort("status")}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Status
                    {getSortIcon("status")}
                  </button>
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  <button
                    onClick={() => toggleSort("createdAt")}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Join Date
                    {getSortIcon("createdAt")}
                  </button>
                </TableHead>
                <TableHead className="pr-0 w-12 md:w-auto">
                  <span className="text-sm font-semibold text-gray-700">
                    Actions
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100">
              {currentData.length ? (
                currentData.map((s, index) => {
                  const status = deriveStatus(s);
                  const joinDate = new Date(s.createdAt).toLocaleDateString();

                  return (
                    <TableRow
                      key={s._id}
                      className={`hover:bg-blue-50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <TableCell>
                        <div className="flex items-center gap-2 md:gap-4">
                          <div className="relative hidden sm:block">
                            <img
                              src={s.image}
                              alt={s.full_name}
                              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-100"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-gray-900 font-clash text-xs md:text-sm truncate">
                              {s.full_name}
                            </p>
                            <p className="text-gray-500 text-xs md:text-sm truncate hidden sm:block">
                              {s.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="hidden lg:table-cell">
                        <span
                          className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${
                            s.level
                              ? levelColors[s.level.toLowerCase()]
                              : "bg-gray-100 text-gray-800 border-gray-200"
                          }`}
                        >
                          {s.level
                            ? s.level.charAt(0).toUpperCase() + s.level.slice(1)
                            : "Not Registered"}
                        </span>
                      </TableCell>

                      <TableCell className="hidden md:table-cell">
                        <span
                          className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${statusColors[status]}`}
                        >
                          {status}
                        </span>
                      </TableCell>

                      <TableCell className="hidden md:table-cell text-sm text-gray-600 font-medium">
                        {joinDate}
                      </TableCell>

                      <TableCell className="pr-0">
                        <ActionMenu
                          items={[
                            {
                              label: "View details",
                              icon: <FaEye className="h-4 w-4" />,
                              onClick: () => openOverlay("view", s),
                            },
                            {
                              label: "Edit student",
                              icon: <PencilLine className="h-4 w-4" />,
                              onClick: () => openOverlay("edit", s),
                            },
                            {
                              label: "Delete student",
                              icon: <Trash2 className="h-4 w-4" />,
                              onClick: () => openOverlay("delete", s),
                              variant: "danger",
                            },
                          ]}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Search className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No students found
                      </h3>
                      <p className="text-gray-500">
                        Try adjusting your search or filter criteria
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Footer with Pagination and Info */}
          {currentData.length > 0 && (
            <div className="px-3 md:px-6 py-3 md:py-4 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="text-xs md:text-sm text-gray-600">
                Showing {paginationStart} to {paginationEnd} of {filteredCount}{" "}
                students
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
        <ViewOverlay
          student={overlay.entity}
          open={true}
          onOpenChange={closeOverlay}
        />
      )}
      {overlay.type === "edit" && (
        <EditOverlay
          student={overlay.entity}
          open={true}
          onOpenChange={closeOverlay}
          onUpdate={handleUpdate}
        />
      )}
      {overlay.type === "delete" && (
        <DeleteOverlay
          student={overlay.entity}
          open={true}
          onOpenChange={closeOverlay}
          onDelete={handleDelete}
        />
      )}
      {overlay.type === "add" && (
        <AddOverlay open={true} onOpenChange={closeOverlay} onAdd={handleAdd} />
      )}
    </div>
  );
}
