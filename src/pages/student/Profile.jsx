import { useRef, useState, useMemo, useCallback } from "react";
import {
  Lock,
  User,
  Camera,
  Mail,
  Phone,
  GraduationCap,
  Users,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import Button from "../../Components/Button";
import { Loader } from "../../Components/Loader";
import { useAuth } from "../../contexts/AuthContext";
import { usePageTitle } from "../../hooks/usePageTitle";

const Profile = () => {
  usePageTitle("My Profile");
  const { user } = useAuth();

  const profile = useMemo(() => user?.user || user, [user]);

  const [form, setForm] = useState(() => ({
    fullName: profile?.full_name || "",
    email: profile?.email || "",
    matricNumber: profile?.matric_number || profile?.teacher_id || "",
    phoneNumber: profile?.phone_number || "",
    gender: profile?.gender || "Male",
  }));

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({
    oldPassword: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState({
    oldPassword: false,
    password: false,
    confirm: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [profilePic, setProfilePic] = useState(profile?.image);
  const fileInputRef = useRef(null);

  // =====================
  // Handlers
  // =====================
  const handleProfilePicChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setProfilePic(ev.target.result);
    reader.readAsDataURL(file);
  }, []);

  const handlePasswordInput = useCallback(
    (field, value) => {
      setPasswords((prev) => ({ ...prev, [field]: value }));

      setErrors((prev) => {
        const newErrors = { ...prev };
        if (field === "oldPassword" && value.length < 1) {
          newErrors[field] = "Current password is required";
        } else if (field === "password" && value.length < 8) {
          newErrors[field] = "Password must be at least 8 characters";
        } else if (field === "confirm" && value !== passwords.password) {
          newErrors.confirm = "Passwords do not match";
        } else {
          newErrors[field] = "";
        }
        return newErrors;
      });
    },
    [passwords.password]
  );

  const handlePasswordChange = useCallback(() => {
    if (!passwords.oldPassword || !passwords.password || !passwords.confirm) {
      alert("Please fill in all fields.");
      return;
    }
    if (errors.oldPassword || errors.password || errors.confirm) return;

    setIsLoading(true);
    setTimeout(() => {
      setPasswords({ oldPassword: "", password: "", confirm: "" });
      setIsLoading(false);
      alert("Password changed successfully!");
    }, 2000);
  }, [errors, passwords]);

  const handleFormChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleProfileUpdate = useCallback(
    (e) => {
      e.preventDefault();
      const { fullName, email, matricNumber, phoneNumber } = form;

      if (!fullName || !email || !matricNumber || !phoneNumber) {
        alert("Please fill in all fields.");
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Profile updated successfully!");
      }, 2000);
    },
    [form]
  );

  // =====================
  // Render
  // =====================
  return (
    <section className='min-h-screen bg-gradient-to-br from-[#FFFCE1]/30 via-transparent to-[#009688]/5 p-4 md:p-6 lg:p-8'>
      {/* Compact Header */}
      <div className='max-w-7xl mx-auto mb-8 md:mb-12'>
        <div className='text-center md:text-left'>
          <div className='inline-block px-4 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4'>
            Account Settings
          </div>
          <h1 className='font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4'>
            My Profile
            <span className='block text-[#009688] text-2xl md:text-3xl lg:text-4xl mt-2'>
              Manage Your Account
            </span>
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto md:mx-0 rounded-full'></div>
        </div>
      </div>

      {/* Improved Layout */}
      <div className='max-w-6xl mx-auto space-y-6'>
        {/* Top Row - Profile Picture */}
        <div className='bg-white/90 rounded-2xl p-5 border border-white/50 shadow-sm'>
          <div className='flex items-center gap-6'>
            {/* Profile Picture */}
            <div className='relative group'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-white shadow-md'>
                <img
                  src={profilePic}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
              <div
                className='absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer'
                onClick={() => fileInputRef.current?.click()}>
                <Camera className='w-5 h-5 text-white' />
              </div>
              <input
                type='file'
                accept='image/*'
                ref={fileInputRef}
                className='hidden'
                onChange={handleProfilePicChange}
              />
            </div>

            {/* Profile Info */}
            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-1'>
                <User className='w-4 h-4 text-[#009688]' />
                <h3 className='font-clash font-bold text-lg text-[#360400]'>
                  Profile Picture
                </h3>
              </div>
              <p className='text-gray-600 text-sm'>
                Click on your picture to change it
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid gap-6 lg:grid-cols-2'>
          {/* Personal Information */}
          <div className='bg-white/90 rounded-2xl p-5 border border-white/50 shadow-sm'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='p-2 bg-[#009688]/10 rounded-lg'>
                <User className='w-5 h-5 text-[#009688]' />
              </div>
              <div>
                <h3 className='font-clash font-bold text-lg text-[#360400]'>
                  Personal Information
                </h3>
                <p className='text-gray-600 text-xs'>Update your details</p>
              </div>
            </div>

            <form onSubmit={handleProfileUpdate} className='space-y-4'>
              {/* Form Fields Grid */}
              <div className='grid gap-4 sm:grid-cols-2'>
                {/* Full Name */}
                <div className='sm:col-span-2'>
                  <label className='text-sm font-medium text-[#360400] block mb-1'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <User className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
                    <input
                      type='text'
                      value={form.fullName}
                      onChange={(e) =>
                        handleFormChange("fullName", e.target.value)
                      }
                      className='w-full py-2.5 pl-9 pr-3 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] focus:border-[#009688] text-sm'
                      placeholder='Enter full name'
                    />
                  </div>
                </div>

                {/* Matric Number */}
                <div>
                  <label className='text-sm font-medium text-[#360400] block mb-1'>
                    Matric Number
                  </label>
                  <div className='relative'>
                    <GraduationCap className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
                    <input
                      type='text'
                      value={form.matricNumber}
                      onChange={(e) =>
                        handleFormChange("matricNumber", e.target.value)
                      }
                      className='w-full py-2.5 pl-9 pr-3 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] focus:border-[#009688] text-sm'
                      placeholder='Enter matric number'
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className='text-sm font-medium text-[#360400] block mb-1'>
                    Gender
                  </label>
                  <div className='relative'>
                    <Users className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
                    <select
                      onChange={(e) =>
                        handleFormChange("gender", e.target.value)
                      }
                      value={form.gender}
                      className='w-full py-2.5 pl-9 pr-8 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] focus:border-[#009688] text-sm appearance-none'>
                      {["Male", "Female", "Other"].map((gen) => (
                        <option key={gen} value={gen}>
                          {gen}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className='text-sm font-medium text-[#360400] block mb-1'>
                    Email
                  </label>
                  <div className='relative'>
                    <Mail className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
                    <input
                      type='email'
                      value={form.email}
                      onChange={(e) =>
                        handleFormChange("email", e.target.value)
                      }
                      className='w-full py-2.5 pl-9 pr-3 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] focus:border-[#009688] text-sm'
                      placeholder='Enter email'
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className='text-sm font-medium text-[#360400] block mb-1'>
                    Phone Number
                  </label>
                  <div className='relative'>
                    <Phone className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
                    <input
                      type='tel'
                      value={form.phoneNumber}
                      onChange={(e) =>
                        handleFormChange("phoneNumber", e.target.value)
                      }
                      className='w-full py-2.5 pl-9 pr-3 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] focus:border-[#009688] text-sm'
                      placeholder='Enter phone number'
                    />
                  </div>
                </div>
              </div>

              <Button
                variant='primary'
                size='lg'
                className={`w-full py-2.5 rounded-lg font-clash font-semibold text-sm mt-5 ${
                  !form.fullName ||
                  !form.email ||
                  !form.matricNumber ||
                  !form.phoneNumber
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                isDisabled={
                  !form.fullName ||
                  !form.email ||
                  !form.matricNumber ||
                  !form.phoneNumber
                }
                type='submit'>
                Save Changes
              </Button>
            </form>
          </div>

          {/* Password Section */}
          <div className='bg-white/90 rounded-2xl p-5 border border-white/50 shadow-sm'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='p-2 bg-[#009688]/10 rounded-lg'>
                <Lock className='w-5 h-5 text-[#009688]' />
              </div>
              <div>
                <h3 className='font-clash font-bold text-lg text-[#360400]'>
                  Security
                </h3>
                <p className='text-gray-600 text-xs'>Change your password</p>
              </div>
            </div>

            <div className='space-y-4'>
              {/* Current Password */}
              <div>
                <label className='text-sm font-medium text-[#360400] block mb-1'>
                  Current Password
                </label>
                <div className='relative'>
                  <input
                    type={show.oldPassword ? "text" : "password"}
                    value={passwords.oldPassword}
                    placeholder='Enter current password'
                    className={`w-full py-2.5 px-3 pr-10 rounded-lg border bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] text-sm ${
                      errors.oldPassword
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-[#009688]"
                    }`}
                    onChange={(e) =>
                      handlePasswordInput("oldPassword", e.target.value)
                    }
                  />
                  <button
                    type='button'
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    onClick={() =>
                      setShow((prev) => ({
                        ...prev,
                        oldPassword: !prev.oldPassword,
                      }))
                    }>
                    {show.oldPassword ? (
                      <EyeOff className='w-4 h-4' />
                    ) : (
                      <Eye className='w-4 h-4' />
                    )}
                  </button>
                </div>
                {errors.oldPassword && (
                  <p className='text-red-500 text-xs flex items-center gap-1 mt-1'>
                    <AlertCircle className='w-3 h-3' />
                    {errors.oldPassword}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label className='text-sm font-medium text-[#360400] block mb-1'>
                  New Password
                </label>
                <div className='relative'>
                  <input
                    type={show.password ? "text" : "password"}
                    value={passwords.password}
                    placeholder='Enter new password'
                    className={`w-full py-2.5 px-3 pr-10 rounded-lg border bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] text-sm ${
                      errors.password
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-[#009688]"
                    }`}
                    onChange={(e) =>
                      handlePasswordInput("password", e.target.value)
                    }
                  />
                  <button
                    type='button'
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    onClick={() =>
                      setShow((prev) => ({ ...prev, password: !prev.password }))
                    }>
                    {show.password ? (
                      <EyeOff className='w-4 h-4' />
                    ) : (
                      <Eye className='w-4 h-4' />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className='text-red-500 text-xs flex items-center gap-1 mt-1'>
                    <AlertCircle className='w-3 h-3' />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className='text-sm font-medium text-[#360400] block mb-1'>
                  Confirm New Password
                </label>
                <div className='relative'>
                  <input
                    type={show.confirm ? "text" : "password"}
                    value={passwords.confirm}
                    placeholder='Confirm new password'
                    className={`w-full py-2.5 px-3 pr-10 rounded-lg border bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#009688] text-sm ${
                      errors.confirm
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-[#009688]"
                    }`}
                    onChange={(e) =>
                      handlePasswordInput("confirm", e.target.value)
                    }
                  />
                  <button
                    type='button'
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    onClick={() =>
                      setShow((prev) => ({ ...prev, confirm: !prev.confirm }))
                    }>
                    {show.confirm ? (
                      <EyeOff className='w-4 h-4' />
                    ) : (
                      <Eye className='w-4 h-4' />
                    )}
                  </button>
                </div>
                {errors.confirm && (
                  <p className='text-red-500 text-xs flex items-center gap-1 mt-1'>
                    <AlertCircle className='w-3 h-3' />
                    {errors.confirm}
                  </p>
                )}
              </div>

              <Button
                variant='primary'
                size='lg'
                className={`w-full py-2.5 rounded-lg font-clash font-semibold text-sm mt-5 ${
                  !passwords.oldPassword ||
                  !passwords.password ||
                  !passwords.confirm ||
                  errors.oldPassword ||
                  errors.password ||
                  errors.confirm
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handlePasswordChange}
                isDisabled={
                  !passwords.oldPassword ||
                  !passwords.password ||
                  !passwords.confirm ||
                  errors.oldPassword ||
                  errors.password ||
                  errors.confirm
                }
                type='button'>
                Change Password
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Loading Overlay */}
      {isLoading && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40 z-50'>
          <div className=''>
            <Loader />
            <p className='text-[#360400] font-clash font-medium text-sm text-center mt-3'>
              Updating...
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
