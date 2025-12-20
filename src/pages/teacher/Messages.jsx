import React, { useState } from "react";
import {
  Filter,
  Search,
  RotateCcw,
  Clock,
  Megaphone,
  User,
  ShieldCheck,
  Edit3,
  Trash2,
  ChevronDown,
} from "lucide-react";
import PostNotificationModal from "../../Components/PostNotification";
import DashTitle from "../../Components/DashTitle";

const NotificationCard = ({
  type,
  title,
  message,
  time,
  tag,
  sender,
  isNew,
  showActions,
}) => {
  // Border colors based on notification type
  const borderColor =
    type === "class" ? "border-l-[#7C3AED]" : "border-l-[#F97316]";
  const iconColor = type === "class" ? "text-[#7C3AED]" : "text-[#F97316]";
  const Icon = type === "class" ? Clock : Megaphone;

  return (
    <div
      className={`relative bg-white rounded-xl border border-gray-100 shadow-sm ${borderColor} border-l-4 p-5 transition-all hover:shadow-md`}
    >
      <div className="flex gap-4">
        {/* Type Icon */}
        <div className="mt-1">
          <div className="relative">
            <Icon className={`w-5 h-5 ${iconColor}`} />
            {isNew && (
              <span className="absolute -top-1 -left-3 w-2 h-2 bg-red-500 rounded-full border border-white" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-gray-900 text-base">{title}</h3>
            <span className="text-xs text-gray-400 font-medium">{time}</span>
          </div>

          <p className="text-gray-600 text-sm mt-1 leading-relaxed max-w-[90%]">
            {message}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[10px] font-bold rounded-md">
              {tag}
            </span>
            <span
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-bold ${
                sender === "Admin"
                  ? "bg-teal-50 text-teal-600"
                  : "bg-teal-50 text-teal-600"
              }`}
            >
              {sender === "Admin" ? (
                <ShieldCheck className="w-3 h-3" />
              ) : (
                <User className="w-3 h-3" />
              )}
              {sender}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons (visible on hover or specific cards) */}
      {showActions && (
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-1 text-teal-600 hover:bg-teal-50 rounded transition-colors">
            <Edit3 className="w-4 h-4" />
          </button>
          <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function Messages() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  return (
    <div className="p-8 max-w-6xl mx-auto  min-h-screen font-sans">
      <DashTitle title="Notifications" />

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button className="p-2 border-r border-gray-200 hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>

          <div className="flex items-center px-4 py-2 border-r border-gray-200 gap-2 cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-600">Filter by</span>
          </div>

          <div className="flex items-center px-4 py-2 border-r border-gray-200 gap-6 cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-600">Date</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center px-4 py-2 border-r border-gray-200 gap-6 cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-600">Source</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center px-4 py-2 gap-2 flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500 font-medium px-4">
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>

        <button
          onClick={() => setIsPostModalOpen(true)}
          className="bg-[#3EB0A3] hover:bg-[#34968a] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm"
        >
          Post a Notification
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        <NotificationCard
          type="class"
          isNew={true}
          title="Upcoming Class: Qur'an Recitation & Tajwid"
          message="The Qur'an Recitation & Tajwid class will start in a few hours 7:00 PM today. Make sure your device and connection are ready before class begins"
          time="Just now"
          tag="Class"
          sender="Admin"
        />

        <NotificationCard
          type="announcement"
          title="Eid al-Adha Break Declared"
          message="DaarutTahseen will observe Eid al-Adha holiday from 15th to 18th June. Classes resume on 19th June, 2025."
          time="1 hrs ago"
          tag="Announcement"
          sender="Admin"
        />

        <NotificationCard
          type="announcement"
          title="Exam Starts Tomorrow"
          message="All DaarutTahseen students are reminded that the general examination will commence tomorrow, Monday, 10th November 2025"
          time="3 hrs ago"
          tag="Announcement"
          sender="Admin"
        />

        <NotificationCard
          type="announcement"
          title="Announcement from Qur'an Recitation & Tajwid Class"
          message="Please review Makharij al-Huruf before our next class. It will help you understand tomorrow's topic better."
          time="4 hrs ago"
          tag="Announcement"
          sender="Teacher"
          showActions={true}
        />
      </div>
      {/* The Overlay Component */}
      <PostNotificationModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />
    </div>
  );
}
