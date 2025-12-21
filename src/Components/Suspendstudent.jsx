import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

function DeleteOverlay({ student, open, onOpenChange, onDelete }) {
  const derivedStatus = student.is_verified
    ? student.is_active
      ? "Active"
      : "Suspended"
    : "Pending";

  const joinDate = new Date(student.createdAt).toLocaleDateString();

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-200";
      case "Suspended":
        return "text-red-600 bg-red-50 border-red-200";
      case "Pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  if (!student) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl font-clash text-red-600">
            Delete Student
          </DialogTitle>
        </DialogHeader>

        {/* Profile Section */}
        <div className="px-6 py-4 text-center">
          <h3 className="text-lg font-semibold font-clash text-gray-900 mt-3">
            {student.full_name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{student.email}</p>
        </div>

        {/* Details Grid */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Level
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {student.level || "Not Set"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Progress
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {student.progress || 0}%
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 col-span-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Join Date
              </p>
              <p className="text-sm font-semibold text-gray-900">{joinDate}</p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex space-x-3 sm:justify-between">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onDelete(student.id);
              onOpenChange(false);
            }}
            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium font-clash transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete Student
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteOverlay;
