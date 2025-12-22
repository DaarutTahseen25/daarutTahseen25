import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, Edit2, Lock, LockOpen } from "lucide-react";
import ViewCreateModal from "./ViewCreateModal";

const AssignmentCard = ({
  title,
  date,
  time,
  dueDate,
  image,
  instructions,
  questions,
  courseName,
  submittedBy,
  isClosed,
}) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [closed, setClosed] = useState(isClosed || false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      const target = event.target;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    // Add slight delay to prevent immediate closing
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const handleToggleStatus = () => {
    setClosed(!closed);
    // TODO: API call to update assignment status
    console.log(`Assignment ${closed ? "reopened" : "closed"}`);
  };

  const assignmentData = {
    title,
    date,
    time,
    dueDate,
    image,
    instructions,
    questions,
    courseName,
    submittedBy,
    isClosed: closed,
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 relative">
        {/* Image Section */}
        <div className="relative rounded-t-xl w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-t-xl object-cover"
          />
          {/* Status Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
              closed
                ? "bg-red-100 text-red-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {closed ? <Lock size={14} /> : <LockOpen size={14} />}
            {closed ? "Closed" : "Ongoing"}
          </div>
        </div>

        {/* Menu Button - Outside Image to avoid clipping */}
        <div className="absolute top-4 right-4 z-50" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5  rounded-full hover:bg-gray-50 transition-colors text-white cursor-pointer hover:text-gray-900 "
            title="More options"
          >
            <MoreVertical size={18} />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-max">
              <button
                onClick={() => {
                  console.log("View assignment");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Eye size={16} />
                View
              </button>

              {!closed && (
                <button
                  onClick={() => {
                    setIsUploadOpen(true);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
              )}

              <button
                onClick={() => {
                  handleToggleStatus();
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  closed
                    ? "text-emerald-700 hover:bg-emerald-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {closed ? <LockOpen size={16} /> : <Lock size={16} />}
                {closed ? "Reopen" : "Close"}
              </button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug mb-1">
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
            {dueDate && !closed && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                <span className="text-sm font-semibold text-red-700">
                  Due: {dueDate}
                </span>
              </div>
            )}
          </div>

          {/* Submitted Students */}
          {submittedBy && submittedBy.length > 0 && (
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="flex -space-x-3">
                {submittedBy.slice(0, 3).map((submission, idx) => (
                  <img
                    key={idx}
                    src={submission.image}
                    alt={submission.name}
                    title={submission.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {submittedBy.length === 1
                    ? `${submittedBy[0].name.split(" ")[0]} submitted`
                    : `${submittedBy.length} students submitted`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <ViewCreateModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        assignment={assignmentData}
      />
    </>
  );
};

export default React.memo(AssignmentCard);
