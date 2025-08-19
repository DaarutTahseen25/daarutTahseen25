import { useReducer, useRef, useCallback } from "react";
import api from "../utils/api";
import { useAuth } from "../contexts/AuthContext";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/helper";

const initialState = (profile) => ({
  form: {
    fullName: profile?.full_name || "",
    email: profile?.email || "",
    matricNumber: profile?.matric_number || profile?.teacher_id || "",
    phoneNumber: profile?.phone_number || "",
    gender: profile?.gender || "Male",
  },
  passwords: {
    current_password: "",
    new_password: "",
    confirm_password: "",
  },
  errors: {
    current_password: "",
    new_password: "",
    confirm_password: "",
  },
  show: {
    current_password: false,
    new_password: false,
    confirm_password: false,
  },
  // 👇 split loading flags
  isLoadingPassword: false,
  isLoadingProfile: false,

  profilePic: profile?.image || "",
  profileFile: null,
});

function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        passwords: { ...state.passwords, [action.field]: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.value },
      };
    case "TOGGLE_SHOW":
      return {
        ...state,
        show: { ...state.show, [action.field]: !state.show[action.field] },
      };
    // 👇 separate loading
    case "SET_LOADING_PASSWORD":
      return { ...state, isLoadingPassword: action.value };
    case "SET_LOADING_PROFILE":
      return { ...state, isLoadingProfile: action.value };

    case "SET_PROFILE_PIC":
      return {
        ...state,
        profilePic: action.value,
        profileFile: action.file || null,
      };
    case "RESET_PASSWORDS":
      return {
        ...state,
        passwords: {
          current_password: "",
          new_password: "",
          confirm_password: "",
        },
        errors: {
          current_password: "",
          new_password: "",
          confirm_password: "",
        },
      };
    default:
      return state;
  }
}

export function useProfile(profile) {
  const { user, setUser } = useAuth();
  const [state, dispatch] = useReducer(reducer, profile, initialState);
  const fileInputRef = useRef(null);

  // =====================
  // Handlers
  // =====================
  const handleProfilePicChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) =>
      dispatch({ type: "SET_PROFILE_PIC", value: ev.target.result, file });
    reader.readAsDataURL(file);
  }, []);

  const handleFormChange = useCallback((field, value) => {
    dispatch({ type: "SET_FORM", field, value });
  }, []);

  const handlePasswordInput = useCallback(
    (field, value) => {
      dispatch({ type: "SET_PASSWORD", field, value });

      let error = "";
      if (field === "current_password" && value.length < 1) {
        error = "Current password is required";
      } else if (field === "new_password" && value.length < 6) {
        error = "Password must be at least 6 characters";
      } else if (
        field === "confirm_password" &&
        value !== state.passwords.new_password
      ) {
        error = "Passwords do not match";
      }
      dispatch({ type: "SET_ERROR", field, value: error });
    },
    [state.passwords.new_password]
  );

  // =====================
  // Password Change
  // =====================
  const handlePasswordChange = useCallback(() => {
    const { current_password, new_password, confirm_password } =
      state.passwords;
    const { errors } = state;

    if (!current_password || !new_password || !confirm_password) {
      toast.warning("Please fill in all fields.");
      return;
    }
    if (
      errors.current_password ||
      errors.new_password ||
      errors.confirm_password
    )
      return;

    dispatch({ type: "SET_LOADING_PASSWORD", value: true });

    api
      .put(
        "/auth/change-password",
        { current_password, new_password, confirm_password },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch({ type: "RESET_PASSWORDS" });
        toast.success(res?.data?.message || "Password updated successfully!");
      })
      .catch((err) => {
        toast.error(getErrorMessage(err, "Failed to update password."));
      })
      .finally(() => dispatch({ type: "SET_LOADING_PASSWORD", value: false }));
  }, [state]);

  // =====================
  // Profile Update
  // =====================
  const handleProfileUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      const { fullName, phoneNumber, gender } = state.form;

      if (!fullName || !phoneNumber) {
        toast.warning("Please fill in all fields.");
        return;
      }

      dispatch({ type: "SET_LOADING_PROFILE", value: true });
      try {
        let imageUrl = state.profilePic;

        if (state.profileFile) {
          imageUrl = await uploadToCloudinary(
            state.profileFile,
            `${user?.role}s`
          );
        }

        const res = await api.put(
          "/auth/profile",
          {
            full_name: fullName,
            phone_number: phoneNumber,
            gender,
            image: imageUrl,
          },
          { withCredentials: true }
        );

        setUser((prev) => ({
          ...prev,
          full_name: fullName,
          phone_number: phoneNumber,
          gender,
          image: imageUrl,
        }));

        toast.success(res?.data?.message || "Profile updated successfully!");
      } catch (err) {
        toast.error(getErrorMessage(err, "Failed to update profile."));
      } finally {
        dispatch({ type: "SET_LOADING_PROFILE", value: false });
      }
    },
    [state.form, state.profilePic, state.profileFile]
  );

  return {
    state,
    fileInputRef,
    dispatch,
    handleFormChange,
    handleProfilePicChange,
    handlePasswordInput,
    handlePasswordChange,
    handleProfileUpdate,
  };
}
