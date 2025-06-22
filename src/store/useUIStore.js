import { create } from "zustand";

const useUIStore = create((set) => ({
  isSidebarOpen: false,
  isDropdownOpen: false,

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),

  closeSidebar: () => set({ isSidebarOpen: false }),
  openSidebar: () => set({ isSidebarOpen: true }),

  closeDropdown: () => set({ isDropdownOpen: false }),
  openDropdown: () => set({ isDropdownOpen: true }),
}));

export default useUIStore;
