import { create } from "zustand";

const useUIStore = create((set) => ({
  // ====== UI STATES ======
  isSidebarOpen: false,
  isDropdownOpen: false,
  showPassword: false,
  file: null,
  level: "",
  isAdmissionProcess: false,

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
  openDropdown: () => set({ isDropdownOpen: true }),
  closeDropdown: () => set({ isDropdownOpen: false }),

  setLevel: (level) => set({ level }),
  setAdmissionProcess: (value) => set({ isAdmissionProcess: value }),

  // ====== COURSE FILTER STATES ======
  expandedCourse: null,
  searchTerm: "",
  filterProgress: "",
  filterStatus: "",
  activeTab: "Total Courses",

  setExpandedCourse: (id) =>
    set((state) => ({
      expandedCourse: state.expandedCourse === id ? null : id,
    })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterProgress: (progress) => set({ filterProgress: progress }),
  setFilterStatus: (status) => set({ filterStatus: status }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  resetCourseFilters: () =>
    set({
      searchTerm: "",
      filterProgress: "",
      filterStatus: "",
    }),
}));

export default useUIStore;
