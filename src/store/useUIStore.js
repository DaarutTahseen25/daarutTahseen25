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

  // ===== STUDENT REGISTRATION FORM STATES =====
  showPassword: false,
  file: null,

  formData: {
    nin: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  },

  formErrors: {},

  setShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),

  setFile: (file) => set({ file }),
  clearFile: () => set({ file: null }),

  setFormData: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),

  setFormErrors: (errors) => set({ formErrors: errors }),
}));

export default useUIStore;
