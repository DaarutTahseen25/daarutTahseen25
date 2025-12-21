import React, { useState } from "react";
import Button from "./Button";
import AssignmentDetailsModal from "./AssignmentDetailsModal";
import AssignmentUploadModal from "./AssignmentUploadModal";

const StudentAssignmentCard = ({
  title,
  date,
  time,
  status,
  dueDate,
  image,
  instructions,
  questions,
  courseName,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const isDisabled = status !== "start";

  const statusText = {
    submitted: "Submitted",
    missed: "Missed",
  };

  const statusColor = {
    submitted: "text-green-600",
    missed: "text-gray-400",
  };

  const assignmentData = {
    title,
    date,
    time,
    status,
    dueDate,
    image,
    instructions,
    questions,
    courseName,
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-4 w-full border border-gray-200 relative overflow-hidden max-w-full flex flex-col gap-5">
        {/* Title and subtitle */}
        <div className="flex-1 flex flex-col sm:flex-row items-start gap-4">
          <img
            src={image}
            alt={title}
            className="w-20 h-16 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="ftext-base font-semibold text-gray-800 truncate">
              {title}
            </h3>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              {date} ; {time}
            </p>

            {dueDate && status === "start" && (
              <p className="text-xs text-red-500 mt-1 break-words">
                Submit before: {dueDate}
              </p>
            )}

            {status !== "start" && (
              <p className={`text-sm mt-1 font-medium ${statusColor[status]}`}>
                {statusText[status]}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between  gap-3 w-full">
          <Button
            variant="cancel"
            size="lg"
            onClick={() => setIsDetailsOpen(true)}
            className="w-full sm:w-auto border-[1px] rounded-[10px] font-montserrat font-bold px-4 py-2 text-sm"
          >
            View
          </Button>

          <Button
            size="lg"
            variant={!isDisabled ? "primary" : "secondary"}
            isDisabled={isDisabled}
            onClick={() => !isDisabled && setIsUploadOpen(true)}
            className="w-full sm:w-auto rounded-[10px] text-sm px-4 py-2"
          >
            Upload
          </Button>
        </div>
      </div>

      <AssignmentDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        assignment={assignmentData}
        onUpload={() => setIsUploadOpen(true)}
      />

      <AssignmentUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        assignment={assignmentData}
      />
    </>
  );
};

export default React.memo(StudentAssignmentCard);
