import { useState, useRef } from "react";
import { X, Upload, FileText, Video, Trash2 } from "lucide-react";

export default function UploadResourcesOverlay({ open, onClose }) {
  const fileInputRef = useRef(null);
  const [chapter, setChapter] = useState("");
  const [topic, setTopic] = useState("");
  const [files, setFiles] = useState([]);

  if (!open) return null;

  const handleFiles = (selected) => {
    const mapped = Array.from(selected).map((file) => ({
      id: crypto.randomUUID(),
      file,
      progress: file.type.startsWith("video") ? 100 : 50,
      status: file.type.startsWith("video") ? "Completed" : "Uploading",
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4 border-textmuted">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Upload size={18} />
            </div>
            <div>
              <h2 className="text-lg font-semibold font-Montserrat">
                Upload Resources
              </h2>
              <p className="text-xs text-gray-500">
                Upload your class resources below
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-4">
          <div>
            <label className="mb-1 block text-xs font-medium">Chapter</label>
            <input
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              className="w-full rounded-lg border border-textmuted px-3 py-2 text-sm focus:outline-none focus:ring-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium">Topic</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-lg border border-textmuted px-3 py-2 text-sm focus:outline-none focus:ring-none focus:border-primary"
            />
          </div>

          {/* Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={(e) => {
              e.preventDefault();
              handleFiles(e.dataTransfer.files);
            }}
            onDragOver={(e) => e.preventDefault()}
            className="cursor-pointer rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50 px-4 py-6 text-center"
          >
            <p className="text-sm font-semibold">
              Choose a file or drag and drop it here
            </p>
            <p className="mt-1 text-xs text-gray-500">
              MP4, MOV, AVI, MKV, PDF and DOCX format, up to 500 MB
            </p>
            <button
              type="button"
              className="mt-3 rounded-lg border border-emerald-500 px-4 py-1.5 text-sm text-emerald-600"
            >
              Browse File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          {/* Selected files preview */}
          <div className="space-y-3">
            {files.map((f) => (
              <div
                key={f.id}
                className="rounded-xl border border-textmuted p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      {f.file.type.startsWith("video") ? (
                        <Video size={18} />
                      ) : (
                        <FileText size={18} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{f.file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(f.file.size / (1024 * 1024)).toFixed(0)} MB ·{" "}
                        {f.status}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(f.id)}
                    className="text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
                  <div
                    className="h-1.5 rounded-full bg-emerald-500"
                    style={{ width: `${f.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-textmuted px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-emerald-500 hover:bg-primary px-5 py-2 text-sm font-medium text-white">
            Upload Resources
          </button>
        </div>
      </div>
    </div>
  );
}
