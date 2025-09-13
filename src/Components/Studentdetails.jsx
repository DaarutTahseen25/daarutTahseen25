import { AiOutlineClose } from "react-icons/ai";

function ViewOverlay({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow max-w-md w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl font-clash">Student details</h2>
          <button
            onClick={onClose}
            className="text-xl cursor-pointer text-textmain"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div>
          <img
            src={student.avatar}
            alt={student.name}
            className="h-30 w-30 rounded-full mx-auto my-4"
          />
          <p className="text-md font-semibold font-clash text-textmain text-center">
            {student.name}
          </p>
          <p className="text-sm text-textmuted text-center">{student.email}</p>
        </div>

        <div className="grid grid-cols-2 mt-6 ml-4">
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Level</p>
            <p className="text-md font-semibold text-textmain">
              {student.level}
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Status</p>
            <p className="text-md font-semibold text-textmain">
              {student.status}
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Progress</p>
            <p className="text-md font-semibold text-textmain">
              {student.progress}%
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Join Date</p>
            <p className="text-md font-semibold text-textmain">
              {student.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewOverlay;
