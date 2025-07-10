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

  setShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),
  setFile: (file) => set({ file }),
  clearFile: () => set({ file: null }),

  // ====== LOGIN FORM STATE ======
  loginForm: {
    email: "",
    password: "",
  },
  loginErrors: {},
  setLoginForm: (key, value) =>
    set((state) => ({
      loginForm: {
        ...state.loginForm,
        [key]: value,
      },
    })),
  setLoginErrors: (errors) => set({ loginErrors: errors }),
  resetLoginForm: () =>
    set({
      loginForm: { email: "", password: "" },
      loginErrors: {},
    }),

  // ====== SIGNUP FORM STATE ======
  signupForm: {
    nin: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  },

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

  signupErrors: {},
  setSignupForm: (key, value) =>
    set((state) => ({
      signupForm: {
        ...state.signupForm,
        [key]: value,
      },
    })),
  setSignupErrors: (errors) => set({ signupErrors: errors }),
  resetSignupForm: () =>
    set({
      signupForm: {
        nin: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreed: false,
      },
      signupErrors: {},
    }),

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
