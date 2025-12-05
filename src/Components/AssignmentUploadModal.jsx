import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { FileText, UploadCloud, X, CheckCircle, Trash2 } from "lucide-react";
import Button from "./Button";

const AssignmentUploadModal = ({ isOpen, onClose, assignment }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Reset files when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFiles([]);
    }
  }, [isOpen]);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const addFiles = (newFiles) => {
    const filesWithMeta = newFiles.map((file) => ({
      file,
      name: file.name,
      size: formatSize(file.size),
      type: getFileType(file.name),
      status: "uploading",
      progress: 0,
      id: Math.random().toString(36).substr(2, 9),
    }));

    setFiles((prev) => [...prev, ...filesWithMeta]);

    // Simulate upload for each file
    filesWithMeta.forEach((fileObj) => {
      simulateUpload(fileObj.id);
    });
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, status: "completed", progress: 100 } : f
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, progress: Math.round(progress) } : f
          )
        );
      }
    }, 200);
  };

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileType = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    if (["pdf", "doc", "docx"].includes(ext)) return "document";
    if (["mp3", "wav", "m4a"].includes(ext)) return "audio";
    return "other";
  };

  if (!assignment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-lg p-0 gap-0 bg-white rounded-xl overflow-hidden">
        <DialogHeader className="p-4 sm:p-6 border-b border-gray-100 flex flex-row items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
              <FileText size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-base sm:text-lg font-bold text-gray-900">
                Upload Assignment
              </DialogTitle>
              <p className="text-xs sm:text-sm text-gray-500">
                Upload your completed assignment below
              </p>
            </div>
          </div>
          <DialogClose className="bg-transparent hover:bg-gray-100 rounded-full p-2 transition-colors" />
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
            className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all cursor-pointer ${
              isDragging
                ? "border-teal-500 bg-teal-50"
                : "border-gray-200 hover:bg-gray-50 hover:border-teal-300"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
              accept=".pdf,.doc,.docx,.mp3,.wav,.m4a"
            />
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <UploadCloud size={20} className="text-gray-500" />
              </div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Choose a file or drag and drop it here
              </p>
              <p className="text-xs text-gray-400">
                MP3, M4A, WAV, PDF and DOCX format, up to 10 MB
              </p>
              <Button
                variant="outline"
                className="mt-4 border-teal-600 text-teal-600 hover:bg-teal-50 text-xs sm:text-sm"
              >
                Browse File
              </Button>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4 relative group hover:border-teal-200 transition-colors"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center flex-shrink-0 ${
                      file.type === "document"
                        ? "bg-red-100 text-red-500"
                        : file.type === "audio"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {file.type === "document" ? (
                      <FileText size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <UploadCloud size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-xs sm:text-sm text-gray-900 truncate pr-6">
                        {file.name}
                      </h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(file.id);
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        {file.status === "completed" ? (
                          <Trash2 size={14} className="sm:w-4 sm:h-4" />
                        ) : (
                          <X size={14} className="sm:w-4 sm:h-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-1.5">
                      <span>{file.size}</span>
                      <span className="flex items-center gap-1">
                        {file.status === "uploading" ? (
                          <>
                            <span className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-400"></span>
                            Uploading...
                          </>
                        ) : (
                          <>
                            <CheckCircle size={12} className="text-teal-600" />
                            <span className="text-gray-700 font-medium">
                              Completed
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1 sm:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          file.status === "completed"
                            ? "bg-teal-600"
                            : "bg-teal-400"
                        }`}
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 pt-2 flex justify-between items-center bg-white border-t border-gray-50 sticky bottom-0 z-10">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-4 sm:px-8 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
          >
            Cancel
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 h-auto text-xs sm:text-sm"
            isDisabled={
              files.length === 0 || files.some((f) => f.status === "uploading")
            }
            onClick={() => {
              // Handle actual submission here if needed
              onClose();
            }}
          >
            Upload Assignment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentUploadModal;
