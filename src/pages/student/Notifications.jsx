import React, { useState } from "react";
import {
  Filter,
  Search,
  X,
  Award,
  Clock,
  BookOpen,
  Megaphone,
} from "lucide-react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../Components/ui/dialog";
import Button from "../../Components/Button";

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: "grade",
    icon: <Award className="text-teal-600" size={28} />,
    title: "New Grade Posted: Qur'an Recitation & Tajwid Exam",
    message: "You scored 40 on your Qur'an Recitation & Tajwid Exam.",
    category: "Grade",
    sender: "Teacher",
    time: "Just now",
    isUnread: true,
    color: "border-teal-500",
  },
  {
    id: 2,
    type: "class",
    icon: <Clock className="text-blue-600" size={28} />,
    title: "Upcoming Class: Qur'an Recitation & Tajwid",
    message:
      "The Qur'an Recitation & Tajwid class will start in a few hours 7:00 PM today. Make sure your device and connection are ready before class begins",
    category: "Class",
    sender: "Admin",
    time: "5 mins ago",
    isUnread: false,
    color: "border-blue-500",
  },
  {
    id: 3,
    type: "resources",
    icon: <BookOpen className="text-amber-600" size={28} />,
    title: "New Lesson Material Uploaded",
    message:
      'Your teacher just shared a new resource on "Introduction to Tajwid"',
    category: "Resources",
    sender: "Teacher",
    time: "20 mins ago",
    isUnread: false,
    color: "border-amber-600",
  },
  {
    id: 4,
    type: "announcement",
    icon: <Megaphone className="text-orange-600" size={28} />,
    title: "Eid al-Adha Break Declared",
    message:
      "DaarutTahseen will observe Eid al-Adha holiday from 15th to 18th June. Classes resume on 19th June, 2025.",
    category: "Announcement",
    sender: "Admin",
    time: "1 hrs ago",
    isUnread: false,
    color: "border-orange-500",
  },
];

const Notifications = () => {
  usePageTitle("Notifications");

  const [filterBy, setFilterBy] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Filter notifications
  const filteredNotifications = mockNotifications.filter((notification) => {
    const matchesSearch = notification.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || notification.type === filterBy;
    const matchesSource =
      sourceFilter === "all" ||
      notification.sender.toLowerCase() === sourceFilter.toLowerCase();
    return matchesSearch && matchesFilter && matchesSource;
  });

  const handleReset = () => {
    setFilterBy("all");
    setDateFilter("all");
    setSourceFilter("all");
    setSearchQuery("");
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <section className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter size={16} />
            <span className="text-sm font-medium">Filter by</span>
          </button>

          {/* Date Dropdown */}
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <option value="all">Date</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>

          {/* Source Dropdown */}
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <option value="all">Source</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Filter Pills (shown when filter toggle is active) */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => setFilterBy("all")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBy === "all"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterBy("grade")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBy === "grade"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Grades
            </button>
            <button
              onClick={() => setFilterBy("class")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBy === "class"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Classes
            </button>
            <button
              onClick={() => setFilterBy("resources")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBy === "resources"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setFilterBy("announcement")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBy === "announcement"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Announcements
            </button>
          </div>
        )}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="text-gray-500">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`bg-white rounded-xl border-l-4 ${notification.color} border-r border-t border-b border-gray-200 p-5 hover:shadow-md transition-shadow relative cursor-pointer`}
            >
              {/* Unread Indicator */}
              {notification.isUnread && (
                <div className="absolute top-5 left-3 w-2 h-2 bg-teal-600 rounded-full"></div>
              )}

              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">{notification.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {notification.message}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {notification.category}
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                      {notification.sender}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Notification Detail Modal */}
      <Dialog
        open={!!selectedNotification}
        onOpenChange={() => setSelectedNotification(null)}
      >
        <DialogContent className="max-w-md bg-white">
          {selectedNotification && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div>{selectedNotification.icon}</div>
                  <DialogTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {selectedNotification.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedNotification.message}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {selectedNotification.category}
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    {selectedNotification.sender}
                  </span>
                </div>

                {/* Time received */}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Time received:</span>{" "}
                    {selectedNotification.time}
                  </p>
                </div>

                {/* Close Button */}
                <Button
                  onClick={() => setSelectedNotification(null)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Notifications;
