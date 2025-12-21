import React, { useState } from "react";
import { Pencil, Trash2, X, Plus, User, Wifi, Clock3 } from "lucide-react";

const TimetableManagement = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "Saturday, January 20, 2024",
      time: "9:00 AM",
      duration: "1 hour",
      course: "Basic Quran Reading",
      instructor: "Dr. Shareh Musa",
      mode: "Online",
      students: 15,
      tag: "Beginner",
      tagColor: "bg-teal-100 text-teal-700"
    },
    {
      id: 2,
      date: "Saturday, January 20, 2024",
      time: "11:00 AM",
      duration: "1 hour",
      course: "Arabic Grammar Fundamentals",
      instructor: "Prof. Ahmad Ali",
      mode: "Online",
      students: 15,
      tag: "Beginner",
      tagColor: "bg-teal-100 text-teal-700"
    },
    {
      id: 3,
      date: "Saturday, January 20, 2024",
      time: "11:00 AM",
      duration: "1 hour",
      course: "Arabic Grammar Fundamentals",
      instructor: "Prof. Ahmad Ali",
      mode: "Online",
      students: 15,
      tag: "Intermediate",
      tagColor: "bg-purple-100 text-purple-700"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    course: "",
    instructor: "",
    mode: "Online",
    students: "",
    tag: "Beginner",
    tagColor: "bg-teal-100 text-teal-700"
  });

  const tagColors = {
    Beginner: "bg-teal-100 text-teal-700",
    Intermediate: "bg-purple-100 text-purple-700",
    Advanced: "bg-blue-100 text-blue-700"
  };

  const getTotalStudents = (date) => {
    return entries.filter(entry => entry.date === date)
      .reduce((sum, entry) => sum + entry.students, 0);
  };

  const getEntriesByDate = (date) => {
    return entries.filter(entry => entry.date === date).length;
  };

  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.date]) {
      acc[entry.date] = [];
    }
    acc[entry.date].push(entry);
    return acc;
  }, {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'tag' ? { tagColor: tagColors[value] } : {})
    }));
  };

  const handleAddEntry = () => {
    setEditingEntry(null);
    setFormData({
      date: "",
      time: "",
      duration: "",
      course: "",
      instructor: "",
      mode: "Online",
      students: "",
      tag: "Beginner",
      tagColor: "bg-teal-100 text-teal-700"
    });
    setShowModal(true);
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setFormData({
      date: entry.date,
      time: entry.time,
      duration: entry.duration,
      course: entry.course,
      instructor: entry.instructor,
      mode: entry.mode,
      students: entry.students.toString(),
      tag: entry.tag,
      tagColor: entry.tagColor
    });
    setShowModal(true);
  };

  const handleDeleteEntry = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingEntry) {
      setEntries(entries.map(entry => 
        entry.id === editingEntry.id 
          ? { ...formData, id: entry.id, students: parseInt(formData.students) }
          : entry
      ));
    } else {
      const newEntry = {
        ...formData,
        id: Math.max(...entries.map(e => e.id), 0) + 1,
        students: parseInt(formData.students)
      };
      setEntries([...entries, newEntry]);
    }
    
    setShowModal(false);
    setEditingEntry(null);
  };

  return (
    <div className="min-h-screen p-3">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-medium text-gray-900 mb-2">
              Timetable Management
            </h1>
            <p className="text-gray-600">Create and manage course schedules</p>
          </div>
          <button 
            onClick={handleAddEntry}
            className="w-full md:w-auto px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Add Timetable Entry
          </button>
        </div>

        {/* Timetable Entries */}
        <div className="space-y-8">
          {Object.entries(groupedEntries).map(([date, dateEntries]) => (
            <div key={date} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Date Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{date}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {getEntriesByDate(date)} entries scheduled • {getTotalStudents(date)} total students
                  </p>
                </div>
                <div className="mt-3 md:mt-0 flex items-center gap-2 text-sm">
                  <span className="text-teal-600 font-medium">4</span>
                  <span className="text-gray-500">Entries</span>
                </div>
              </div>

              {/* Entries List */}
              <div className="space-y-4">
                {dateEntries.map((entry) => (
                  <div key={entry.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex flex-col items-start gap-4 flex-1">
                        <div className="flex gap-2">

                        {/* Time Badge */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#2462FF33] rounded-lg flex items-center justify-center">
                              <span className="text-xl font-semibold text-[#2462FF]">
                                <Clock3 size={18} />
                              </span>
                            </div>
                          </div>

                          
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">{entry.time}</span>
                            <span className="text-sm text-gray-500">• {entry.duration}</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded ${entry.tagColor}`}>
                              {entry.tag}
                            </span>
                          </div>
                        </div>

                        {/* Entry Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 mb-1">
                            {entry.course}
                          </h3>
                            <span className="flex py-3 items-center gap-1">
                              <User size={18} /> {entry.instructor}
                            </span>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Wifi size={18} /> {entry.mode}
                            </span>
                            <span className="flex items-center gap-1">
                              <User size={18} /> {entry.students} students
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 lg:flex-shrink-0">
                        <button 
                          onClick={() => handleEditEntry(entry)}
                          className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </button>
                        <button 
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                {editingEntry ? "Edit Timetable Entry" : "Add Timetable Entry"}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="e.g., Saturday, January 20, 2024"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    placeholder="e.g., 9:00 AM"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="e.g., 1 hour"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <select
                    name="tag"
                    value={formData.tag}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="e.g., Basic Quran Reading"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor
                </label>
                <input
                  type="text"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleInputChange}
                  placeholder="e.g., Dr. Shareh Musa"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mode
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  >
                    <option value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Students
                  </label>
                  <input
                    type="number"
                    name="students"
                    value={formData.students}
                    onChange={handleInputChange}
                    placeholder="e.g., 15"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                >
                  {editingEntry ? "Update Entry" : "Add Entry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableManagement;