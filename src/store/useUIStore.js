import { create } from "zustand";

const useUIStore = create((set) => ({
  // ====== UI STATES ======
  isSidebarOpen: false,
  isDropdownOpen: false,
  showPassword: false,
  file: null,

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
  openDropdown: () => set({ isDropdownOpen: true }),
  closeDropdown: () => set({ isDropdownOpen: false }),

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
}));

export default useUIStore;
