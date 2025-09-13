import { AiOutlineClose } from "react-icons/ai";

function DeleteOverlay({ student, onClose, onDelete }) {
  const derivedStatus = student.is_verified
    ? student.is_active
      ? "Active"
      : "Suspended"
    : "Pending";

  const joinDate = new Date(student.createdAt).toLocaleDateString();

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow max-w-md w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl font-clash">Delete Student</h2>
          <button
            onClick={onClose}
            className="text-xl cursor-pointer text-textmain"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div>
          <img
            src={student.image}
            alt={student.full_name}
            className="h-30 w-30 rounded-full mx-auto my-4"
          />
          <p className="text-md font-semibold font-clash text-textmain text-center">
            {student.full_name}
          </p>
          <p className="text-sm text-textmuted text-center">{student.email}</p>
        </div>

        <div className="grid grid-cols-2 mt-6 ml-4">
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Level</p>
            <p className="text-md font-semibold text-textmain">
              {student.level || "Nill"}
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Status</p>
            <p className="text-md font-semibold text-textmain">
              {derivedStatus}
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Progress</p>
            <p className="text-md font-semibold text-textmain">
              {student.progress || 0}%
            </p>
          </div>
          <div className="flex flex-col pr-6">
            <p className="text-md text-textmuted mt-4">Join Date</p>
            <p className="text-md font-semibold text-textmain">{joinDate}</p>
          </div>
        </div>

        <button
          onClick={() => {
            onDelete(student.id);
            onClose();
          }}
          className="mx-auto cursor-pointer block px-5 py-2 bg-error text-white rounded mt-8 font-clash"
        >
          Delete Student
        </button>
      </div>
    </div>
  );
}

export default DeleteOverlay;
