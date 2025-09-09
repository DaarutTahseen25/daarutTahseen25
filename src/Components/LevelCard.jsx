import { useState } from "react";
import Button from "./Button";
import RegistrationError from "./RegistrationError";
import ConfirmLevelRegistration from "./ConfirmLevelRegistration";
import Success from "./Success";

import api from "../utils/api";
import { useAuth } from "../contexts/AuthContext";

const LevelCard = ({ title, color, description }) => {
  const [view, setView] = useState("");
  const [error, setError] = useState("");
  const { user, setUser } = useAuth();

  console.log(user);

  const closeModal = () => {
    setView("");
    setError("");
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post(
        "/levels/register",
        { level: title },
        { withCredentials: true }
      );

      if (!res.data.success) throw new Error("Registration failed");

      const { level, is_active } = res.data.data;

      setUser((prev) => ({
        ...prev,
        level,
        is_active,
      }));

      return "success";
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      return "error";
    }
  };

  const handleProceed = async () => {
    const status = await handleSubmit();

    if (status === "success") {
      setView("success");
    } else {
      setError("Something went wrong during verification.");
      setView("error");
    }
  };

  return (
    <div className="bg-white mt-4 px-6 py-3 rounded-lg shadow-md">
      {/* Card header */}
      <div className="flex items-center gap-[10px] mb-4">
        <div
          className="w-[34px] h-[34px] rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="font-clash font-[500] text-[20px] text-black uppercase">
          {title} level
        </h3>
      </div>

      {/* Description */}
      <p className="font-montserrat font-[400] text-[14px] text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey">
        {description}
      </p>

      {/* Button */}
      <Button
        className="bg-accent text-white px-[25.5px] py-[11.5px] rounded-[10px] hover:bg-accent-dark hover:bg-buttonhover"
        onClick={() => setView("confirm")}
      >
        Register Now
      </Button>

      {/* Modal */}
      {view !== "" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>

            {/* Views */}
            {view === "confirm" && (
              <ConfirmLevelRegistration
                title={title}
                onProceed={handleProceed}
              />
            )}

            {view === "success" && (
              <Success title={title} onCloseModal={closeModal} />
            )}

            {view === "error" && <RegistrationError error={error} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelCard;
