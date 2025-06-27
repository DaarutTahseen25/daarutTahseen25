import { useState } from "react";
import Button from "./../../Components/Button";
import { useNavigate } from "react-router";
import { Loader } from "./Loader";

const LevelCard = ({ title, color, description }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleRegistrationSuccessful = () => {
    setShowConfirmModal(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 3000);
  };
  return (
    <div className="bg-white mt-4 px-6 py-3 rounded-lg shadow-md">
      <div className="flex items-center gap-[10px] mb-4">
        <div className={`w-[34px] h-[34px] rounded-full bg-${color}`}></div>
        <h3 className="font-clash font-[500] text-[20px]  text-black  uppercase">
          {title}
        </h3>
      </div>
      <div className="w-full">
        <p className="font-montserrat font-[400] text-[14px]   text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey">
          {description}
        </p>
      </div>
      <Button
        className="bg-accent text-white px-[25.5px] py-[11.5px] rounded-[10px] hover:bg-accent-dark hover:bg-buttonhover"
        onClick={() => setShowConfirmModal((show) => !show)}
      >
        Register Now
      </Button>
      {showConfirmModal && (
        <Modal>
          <img src="/warning.png" alt="" className="h-[4rem] w-[5rem] " />
          <p className="flex flex-col gap-2 text-center">
            <span className="text-2xl font-clash font-medium">Confirm Registration</span>
            <span className="text-sm font-montserrat font-semibold">
              You have selected the{" "}
              <span className="text-[#009688]">{title}</span>. Are you sure you
              want to proceed? This action cannot be undone
            </span>
          </p>
          <div className="flex items-center justify-between w-full">
            <button
              className="hover:bg-buttonhover hover:text-white cursor-pointer w-[7.0625rem] h-[2.5rem] transition-colors text-sm font-semibold font-montserrat duration-300 text-[#009688] border border-[#009688] rounded-[10px]   "
              onClick={() => {
                setShowConfirmModal(false);
              }}
            >
              Cancel
            </button>
            <Button
              className=" text-white bg-[#009687bd] text-sm font-semibold font-montserrat rounded-[10px] py-3.5 px-3 w-[7.0625rem] h-[2.5rem] "
              onClick={handleRegistrationSuccessful}
            >
              Proceed
            </Button>
          </div>
        </Modal>
      )}
      {showSuccessModal && (
        <Modal>
          <img src="/success.png" alt="" className="w-[4.95rem] h-[5.2rem] " />
          <p className="flex flex-col gap-2 text-center">
            <span className="text-2xl font-medium font-clash">Registration Successful</span>
            <span className="text-sm font-montserrat font-semibold">
              You have successfully registered for the{" "}
              <span className="text-[#009688] capitalize">{title}</span>. Your
              placement test will be scheduled soon. Please check your dashboard
              regularly to see when it becomes available
            </span>
          </p>
          <div className="flex items-center justify-center w-full">
            
            <Button
              className=" text-white bg-[#009687bd] text-sm font-semibold font-montserrat rounded-[10px] py-3.5 px-3 w-[7.0625rem] h-[2.5rem] "
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/dashboard/level-registration")
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      {isLoading && (
        <div className="absolute top-0 left-0 h-full w-full bg-black/70  flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black/70  flex justify-center items-center">
      <div className="w-[31.25rem] h-[20.5rem] bg-white rounded-[20px] py-[1.875rem] px-[3rem] flex flex-col gap-5 items-center ">
        {children}
      </div>
    </div>
  );
}

export default LevelCard;
