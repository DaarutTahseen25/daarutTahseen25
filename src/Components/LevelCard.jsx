import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import RegistrationError from './RegistrationError'
import ConfirmLevelRegistration from "./ConfirmLevelRegistration";
import Success from "./Success";


const LevelCard = ({ title, color, description }) => {
  const [levelPicked, setLevelPicked] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const closeModal = () => {
    setLevelPicked("");
    setShowSuccess(false);
    setShowError(false);
    setError("");
  };

  const handleProceed = (status) => {
    if (status === "success") {
      setTimeout(() => {
        setShowSuccess(true);
      setLevelPicked("success");
      }, 1000);
    } else if (status === "error") {
      setTimeout(()=>{
        setShowError(true);
      setError("Something went wrong during verification.");
      setLevelPicked("error");
      },1000)
    }
  };

  return (
    <div className='bg-white mt-4 px-6 py-3 rounded-lg shadow-md'>
      <div className='flex items-center gap-[10px] mb-4'>
        <div className={`w-[34px] h-[34px] rounded-full bg-${color}`}></div>
        <h3 className='font-clash font-[500] text-[20px] text-black uppercase'>
          {title}
        </h3>
      </div>

      <p className='font-montserrat font-[400] text-[14px] text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey'>
        {description}
      </p>

      <Button
        className='bg-accent text-white px-[25.5px] py-[11.5px] rounded-[10px] hover:bg-accent-dark hover:bg-buttonhover'
        onClick={() => setLevelPicked("confirm")}
      >
        Register Now
      </Button>

      {/* Modal */}
      {levelPicked !== "" && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
          <div className='relative '>
            <button
              onClick={closeModal}
              className='absolute cursor-pointer top-3 right-4 text-gray-400 hover:text-gray-600 text-xl'
            >
              &times;
            </button>

            {levelPicked === "confirm" && (
              <ConfirmLevelRegistration title={title} onProceed={handleProceed} />
            )}

            {levelPicked === "success" && showSuccess && (
              <Success title={title} onCloseModal={closeModal} />
            )}

            {levelPicked === "error" && showError && (
              <RegistrationError error={error}/>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelCard;
