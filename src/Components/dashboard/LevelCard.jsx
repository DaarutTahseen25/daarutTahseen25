import { useState } from "react";
import Button from "./../../Components/Button";
import Modal from "../Modal";
import ConfirmLevelRegistration from "./ConfirmLevelRegistration";
import Success from "./Success";

const LevelCard = ({ title, color, description }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        <h3 className="font-clash font-[500] text-[20px] text-black uppercase">
          {title}
        </h3>
      </div>
      <div className="w-full">
        <p className="font-montserrat font-[400] text-[14px] text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey">
          {description}
        </p>
      </div>

      <Modal>
        {/* Open CONFIRMATION modal first */}
        <Modal.Open opens="confirm">
          <Button className="bg-accent text-white px-[25.5px] py-[11.5px] rounded-[10px] hover:bg-accent-dark hover:bg-buttonhover">
            Register Now
          </Button>
        </Modal.Open>

        {/* Confirmation Modal */}
        <Modal.Window name="confirm">
          <ConfirmLevelRegistration title={title} />
        </Modal.Window>

        {/* Success Modal */}
        <Modal.Window name="success">
          <Success title={title} />
        </Modal.Window>
      </Modal>
    </div>
  );
};



export default LevelCard;
