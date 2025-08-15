import { useRef, useState, useMemo, useCallback } from "react";
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

  const [passwords, setPasswords] = useState({ password: "", confirm: "" });
  const [errors, setErrors] = useState({ password: "", confirm: "" });

  const [show, setShow] = useState({ password: false, confirm: false });
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
        if (value.length < 8) {
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
    if (!passwords.password || !passwords.confirm) {
      alert("Please fill in both fields.");
      return;
    }
    if (errors.password || errors.confirm) return;

    setIsLoading(true);
    setTimeout(() => {
      setPasswords({ password: "", confirm: "" });
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
        setForm({
          fullName: "",
          email: "",
          matricNumber: "",
          phoneNumber: "",
          gender: "Male",
        });
        setIsLoading(false);
        alert("Profile updated successfully!");
      }, 5000);
    },
    [form]
  );

  // =====================
  // Render
  // =====================
  return (
    <section>
      <h1 className="font-clash font-medium text-3xl sm:text-[40px] text-center sm:text-left text-accent">
        Profile
      </h1>
      <div className="mt-5 grid sm:grid-cols-[1fr_2fr] gap-5">
        {/* Left Section */}
        <div className="flex flex-col gap-y-6">
          {/* Profile Picture */}
          <div className="flex rounded-full mx-auto sm:mx-0 w-[14.25rem] h-[14.25rem] relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleProfilePicChange}
            />
            <img
              src="/edit-profile.png"
              alt=""
              className="w-11 h-11 absolute bottom-3 right-5.5 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            />
          </div>

          {/* Change Password */}
          <div>
            <p className="text-xl sm:text-2xl font-medium font-clash">
              Change Password
            </p>
            <hr className="my-2 border-t border-t-[#CCCCCC]" />
            <div className="bg-white mt-3 flex flex-col justify-between rounded-sm gap-y-5 py-5 px-4 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)]">
              {/* New Password */}
              <div className="font-bricolage">
                <label htmlFor="nPass" className="lg:text-xl block">
                  New Password
                </label>
                <div
                  className={`flex items-center justify-between border py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg ${
                    errors.password ? "border-red-500" : "border-[#CCCCCC]"
                  }`}
                >
                  <input
                    type={show.password ? "text" : "password"}
                    id="nPass"
                    value={passwords.password}
                    placeholder="Enter new password"
                    className="h-full focus:outline-0 text-sm lg:text-base w-full"
                    onChange={(e) =>
                      handlePasswordInput("password", e.target.value)
                    }
                    required
                  />
                  <img
                    src="/eye-icon.png"
                    alt=""
                    className="w-5.5 h-3 lg:w-[1.8rem] lg:h-[0.84rem] cursor-pointer"
                    onClick={() =>
                      setShow((prev) => ({ ...prev, password: !prev.password }))
                    }
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="font-bricolage">
                <label htmlFor="cPass" className="lg:text-xl block">
                  Confirm Password
                </label>
                <div
                  className={`flex items-center justify-between border py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg ${
                    errors.confirm ? "border-red-500" : "border-[#CCCCCC]"
                  }`}
                >
                  <input
                    type={show.confirm ? "text" : "password"}
                    id="cPass"
                    value={passwords.confirm}
                    placeholder="Confirm password"
                    className="h-full focus:outline-0 text-sm lg:text-base w-full"
                    onChange={(e) =>
                      handlePasswordInput("confirm", e.target.value)
                    }
                    required
                  />
                  <img
                    src="/eye-icon.png"
                    alt=""
                    className="w-5.5 h-3 lg:w-[1.8rem] lg:h-[0.84rem] cursor-pointer"
                    onClick={() =>
                      setShow((prev) => ({ ...prev, confirm: !prev.confirm }))
                    }
                  />
                </div>
                {errors.confirm && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirm}</p>
                )}
              </div>

              <Button
                variant="primary"
                size="lg"
                className="rounded-[10px] mt-2 lg:mt-4 text-sm lg:text-base font-clash"
                onClick={handlePasswordChange}
                isDisabled={
                  !passwords.password ||
                  !passwords.confirm ||
                  errors.password ||
                  errors.confirm
                }
                type="button"
              >
                Change Password
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section - Personal Info */}
        <div>
          <p className="text-xl sm:text-2xl font-medium font-clash">
            Personal Information
          </p>
          <hr className="my-2 border-t border-t-[#CCCCCC]" />
          <form
            onSubmit={handleProfileUpdate}
            className="bg-white font-bricolage mt-3 flex flex-col rounded-sm justify-between gap-y-5 lg:gap-y-7 p-5 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)]"
          >
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "matricNumber", label: "Matric Number", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "phoneNumber", label: "Phone Number", type: "tel" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="lg:text-xl block">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={form[id]}
                  onChange={(e) => handleFormChange(id, e.target.value)}
                  className="transition-transform duration-500 focus:outline-primary text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg"
                />
              </div>
            ))}

            <div>
              <label htmlFor="gender" className="lg:text-xl block">
                Gender
              </label>
              <select
                id="gender"
                onChange={(e) => handleFormChange("gender", e.target.value)}
                value={form.gender}
                className="transition-transform duration-500 focus:outline-primary text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg"
              >
                {["Male", "Female", "Other"].map((gen) => (
                  <option key={gen} value={gen}>
                    {gen}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="rounded-[10px] mt-4 font-clash"
              isDisabled={
                !form.fullName ||
                !form.email ||
                !form.matricNumber ||
                !form.phoneNumber
              }
              type="submit"
            >
              Save
            </Button>
          </form>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <Loader />
        </div>
      )}
    </section>
  );
};

export default Profile;
