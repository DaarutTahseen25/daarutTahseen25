import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

function ViewOverlay({ student, open, onOpenChange }) {
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
          <DialogTitle className="font-semibold text-xl font-clash text-gray-900">
            Student Details
          </DialogTitle>
        </DialogHeader>

        {/* Profile Section */}
        <div className="px-6 py-8 text-center">
          <h3 className="text-lg font-semibold font-clash text-gray-900 mt-4">
            {student.full_name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{student.email}</p>
        </div>

        {/* Details Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Level
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {student.level || "Not Set"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Progress
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${student.progress || 0}%` }}
                  ></div>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {student.progress || 0}%
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 col-span-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Join Date
              </p>
              <p className="text-lg font-semibold text-gray-900">{joinDate}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewOverlay;
