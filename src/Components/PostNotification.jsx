import React from "react";
import { X, Bell } from "lucide-react";

const PostNotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="bg-teal-50 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Notification</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Announcement
          </label>
          <textarea
            rows="6"
            placeholder="Type your announcement here..."
            className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none resize-none text-sm text-gray-700 transition-all"
          />
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border-2 border-teal-500 text-teal-600 font-bold rounded-lg text-sm transition-all active:scale-95"
          >
            Cancel
          </button>
          <button className="flex-1 py-2.5 bg-[#3EB0A3] hover:bg-[#34968a] text-white font-bold rounded-lg text-sm transition-all active:scale-95 shadow-md shadow-teal-500/10">
            Post Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostNotificationModal;
