import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, Upload } from "lucide-react";
import AssignmentDetailsModal from "./AssignmentDetailsModal";
import AssignmentUploadModal from "./AssignmentUploadModal";

const StudentAssignmentCard = ({
  title,
  date,
  time,
  status,
  dueDate,
  image,
  instructions,
  questions,
  courseName,
  isClosed,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isDisabled = isClosed || status !== "start";

  const statusText = {
    submitted: "Submitted",
    missed: "Missed",
  };

  const statusColor = {
    submitted: "bg-emerald-100 text-emerald-700",
    missed: "bg-red-100 text-red-700",
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      const target = event.target;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const assignmentData = {
    title,
    date,
    time,
    status,
    dueDate,
    image,
    instructions,
    questions,
    courseName,
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 relative">
        {/* Image Section */}
        <div className="relative rounded-t-xl w-full h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-t-xl object-cover"
          />
          {/* Status Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center gap-2 flex-wrap">
            {isClosed ? (
              <div className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
                Closed
              </div>
            ) : (
              status !== "start" && (
                <div
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[status]}`}
                >
                  {statusText[status]}
                </div>
              )
            )}
          </div>
        </div>

        {/* Menu Button - Outside Image to avoid clipping */}
        <div className="absolute top-4 right-4 z-50" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-full hover:bg-gray-50 transition-colors text-white hover:text-gray-900 cursor-pointer"
            title="More options"
          >
            <MoreVertical size={18} />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-max">
              <button
                onClick={() => {
                  setIsDetailsOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Eye size={16} />
                View
              </button>

              <button
                onClick={() => {
                  setIsUploadOpen(true);
                  setMenuOpen(false);
                }}
                disabled={isDisabled}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  isDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Upload size={16} />
                Upload
              </button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3 space-y-2">
          {/* Title */}
          <div>
            <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-snug">
              {title}
            </h3>
          </div>

          {/* Info Section - Date, Time, Due Date */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <span className="font-medium">{date}</span>
              <span className="text-gray-400">•</span>
              <span>{time}</span>
            </div>
            {dueDate && status === "start" && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                <span className="text-sm font-semibold text-red-700">
                  Due: {dueDate}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <AssignmentDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        assignment={assignmentData}
        onUpload={() => setIsUploadOpen(true)}
      />

      <AssignmentUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        assignment={assignmentData}
      />
    </>
  );
};

export default React.memo(StudentAssignmentCard);
