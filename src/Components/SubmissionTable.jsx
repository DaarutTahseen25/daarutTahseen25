import Pagination from "./Pagination";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from ".././Components/ui/table";
import { UserRound, FileAudio, FileText } from "lucide-react";
import ScoreDialog from "./ScoreDialog";
import { useState } from "react";

// forType: 'assignment' | 'exam'
export default function SubmissionTable({
  submissions,
  setSubmissions,
  forType = "assignment",
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  // Pagination state
  const [page, setPage] = useState(1);
  const limit = 10;
  const total = submissions.length;
  const totalPages = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  const paginatedSubmissions = submissions.slice(skip, skip + limit);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="hidden md:table-cell">
              <p className="font-clash font-bold text-[15px]">S/N</p>
            </TableHead>
            <TableHead className="w-full md:w-auto">
              <p className="font-clash font-bold text-[15px]">Student Name</p>
            </TableHead>
            {forType === "exam" && (
              <TableHead className="hidden sm:table-cell">
                <p className="font-clash font-bold text-[15px]">
                  Assignment Avg.
                </p>
              </TableHead>
            )}
            {forType === "exam" && (
              <TableHead className="">
                <p className="font-clash font-bold text-[15px]">Exam Score</p>
              </TableHead>
            )}
            {forType === "exam" && (
              <TableHead className="hidden sm:table-cell">
                <p className="font-clash font-bold text-[15px]">
                  Overall Score
                </p>
              </TableHead>
            )}
            {forType === "exam" && (
              <TableHead className="hidden sm:table-cell">
                <p className="font-clash font-bold text-[15px]">Grade</p>
              </TableHead>
            )}
            {forType === "assignment" && (
              <>
                <TableHead className="hidden md:table-cell">
                  <p className="font-clash font-bold text-[15px]">Date</p>
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  <p className="font-clash font-bold text-[15px]">
                    Submitted Files
                  </p>
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  <p className="font-clash font-bold text-[15px]">Score</p>
                </TableHead>
              </>
            )}
            {forType === "assignment" && (
              <TableHead className="">
                <p className="font-clash font-bold text-[15px]">Action</p>
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedSubmissions.map((s, idx) => (
            <TableRow key={s.id}>
              <TableCell className="hidden md:table-cell">
                {skip + idx + 1}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 font-montserrat">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-8 h-8 rounded-full object-cover border hidden sm:block"
                  />
                  <span>{s.name}</span>
                </div>
              </TableCell>
              {forType === "exam" && (
                <>
                  <TableCell className="hidden sm:table-cell">
                    {s.assignmentAvg ?? "-"}
                  </TableCell>
                  <TableCell className="text-center md:text-left">
                    {s.examScore ?? "-"}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div
                      className={` flex items-center justify-center font-bold text-center w-14 h-7 rounded-md ${
                        s.overallScore <= 44
                          ? "bg-red-500/24 text-red-500"
                          : "bg-primary/24 text-primary "
                      }`}
                    >
                      {s.overallScore ?? "-"}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {s.grade ?? "-"}
                  </TableCell>
                </>
              )}
              {forType === "assignment" && (
                <>
                  <TableCell className="hidden md:table-cell">
                    {s.date}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-2 items-center">
                      {s.files.map((file, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs"
                        >
                          {file.type === "audio" ? (
                            <FileAudio className="w-4 h-4 text-blue-500" />
                          ) : (
                            <FileText className="w-4 h-4 text-red-500" />
                          )}
                          {file.name}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {s.score}
                  </TableCell>
                </>
              )}
              {forType === "assignment" && (
                <TableCell className="">
                  <button
                    className="px-4 py-2 bg-primary cursor-pointer text-white rounded hover:bg-accent-dark transition"
                    onClick={() => {
                      setSelectedSubmission(s);
                      setShowDialog(true);
                    }}
                  >
                    Score
                  </button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Custom Pagination Component */}
      <div className="flex justify-end pt-6 pb-2 pr-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
      <ScoreDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        submission={selectedSubmission}
        setSubmissions={setSubmissions}
      />
    </div>
  );
}
