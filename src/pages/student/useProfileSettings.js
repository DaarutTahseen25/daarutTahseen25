// src/hooks/useProfileSettings.js
import { useState, useRef } from "react";
import useUpdateProfile from "./hooks/useUpdateProfile";

export default function useProfileSettings(user) {
  const { updateProfile, isUpdating } = useUpdateProfile();

  const [preview, setPreview] = useState(user?.image || "/default-avatar.png");
  const fileInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    fullname: user?.full_name || "",
    phonenumber: user?.phone_number || "",
    gender: user?.gender || "Male",
  });
  const [errors, setErrors] = useState({});

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

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    await updateProfile({
      full_name: formData.fullname.trim(),
      phone_number: formData.phonenumber.trim(),
      gender: formData.gender,
      imageFile,
      preview,
    });
  };

  return {
    preview,
    fileInputRef,
    formData,
    errors,
    isUpdating,
    handleFileChange,
    triggerFileSelect,
    handleChange,
    handleSubmit,
  };
}
