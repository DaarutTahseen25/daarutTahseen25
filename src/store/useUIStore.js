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
}));

export default useUIStore;
