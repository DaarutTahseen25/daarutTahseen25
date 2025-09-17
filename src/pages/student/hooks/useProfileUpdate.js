/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useCallback } from "react";
import api from "../../../utils/api";
import { useAuth } from "../../../contexts/AuthContext";
import { uploadToCloudinary } from "../../../utils/uploadToCloudinary";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../utils/helper";

export default function useProfileUpdate() {
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    fullname: user?.full_name || "",
    phonenumber: user?.phone_number || "",
    gender: user?.gender || "Male",
  });
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(user?.image || "/default-avatar.png");
  const [imageFile, setImageFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => fileInputRef.current?.click();

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
    } else if (formData.fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters.";
    }

    if (formData.phonenumber.trim()) {
      const phoneRegex = /^[0-9+\-() ]{7,}$/;
      if (!phoneRegex.test(formData.phonenumber.trim())) {
        newErrors.phonenumber = "Enter a valid phone number.";
      }
    }
    return newErrors;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      setIsUpdating(true);

      try {
        let imageUrl = user?.image || "";
        if (imageFile) {
          imageUrl = await uploadToCloudinary(imageFile, `${user?.role}s`);
        }

        const res = await api.put(
          "/auth/profile",
          {
            full_name: formData.fullname.trim(),
            phone_number: formData.phonenumber.trim(),
            gender: formData.gender,
            image: imageUrl,
          },
          { withCredentials: true }
        );

        setUser((prev) => ({
          ...prev,
          full_name: formData.fullname.trim(),
          phone_number: formData.phonenumber.trim(),
          gender: formData.gender,
          image: imageUrl,
        }));

        toast.success(res?.data?.message || "Profile updated successfully!");
      } catch (err) {
        toast.error(getErrorMessage(err, "profileUpdate"));
      } finally {
        setIsUpdating(false);
      }
    },
    [formData, imageFile, user?.role, setUser, user?.image]
  );

  return {
    formData,
    errors,
    preview,
    fileInputRef,
    isUpdating,
    handleChange,
    handleFileChange,
    triggerFileSelect,
    handleSubmit,
  };
}
