import React, { useState } from "react";
import {
  Upload,
  FileText,
  Video,
  Edit,
  Trash2,
  X,
  LoaderCircle,
  CheckCircle,
} from "lucide-react";
import { courseClasses } from "../../constants/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";

const UploadResources = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      topic: "Introduction to Tajwid",
      files: [
        {
          name: "Introduction-to-Tajwid.mp4",
          type: "video",
          size: "120 MB",
          status: "completed",
        },
        {
          name: "Introduction-to-Tajwid.pdf",
          type: "document",
          size: "60 KB",
          status: "completed",
        },
      ],
      date: "9th June, 2025",
      class: "Beginner Class 1",
    },
    {
      id: 2,
      topic: "Makharij (Articulation Points)",
      files: [
        {
          name: "Makhrij-Articulation-Points.mp4",
          type: "video",
          size: "150 MB",
          status: "completed",
        },
        {
          name: "Makhrij-Articulation-Points.pdf",
          type: "document",
          size: "80 KB",
          status: "completed",
        },
      ],
      date: "9th June, 2025",
      class: "Beginner Class 1",
    },
    {
      id: 3,
      topic: "Rules of Noon & Meem",
      files: [
        {
          name: "Rule-of-Moon-and-meem.mp4",
          type: "video",
          size: "130 MB",
          status: "completed",
        },
        {
          name: "Rule-of-Moon-and-meem.pdf",
          type: "document",
          size: "70 KB",
          status: "completed",
        },
      ],
      date: "9th June, 2025",
      class: "Beginner Class 2",
    },
    {
      id: 4,
      topic: "Madd & Lengthening Rules",
      files: [
        {
          name: "Madd-and-Leng_Rules.mp4",
          type: "video",
          size: "140 MB",
          status: "completed",
        },
        {
          name: "Madd-and-Leng_Rules.pdf",
          type: "document",
          size: "75 KB",
          status: "completed",
        },
      ],
      date: "9th June, 2025",
      class: "Beginner Class 2",
    },
    {
      id: 5,
      topic: "Practice & Recitation",
      files: [
        {
          name: "Practice-and-Recitation.mp4",
          type: "video",
          size: "160 MB",
          status: "completed",
        },
        {
          name: "Practice-and-Recitation.pdf",
          type: "document",
          size: "85 KB",
          status: "completed",
        },
      ],
      date: "9th June, 2025",
      class: "Beginner Class 3",
    },
  ]);

  const [expandedClasses, setExpandedClasses] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    chapter: "",
    topic: "",
    files: [],
  });

  // Group resources by class
  const groupedByClass = resources.reduce((acc, resource) => {
    const className = resource.class || "Uncategorized";
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(resource);
    return acc;
  }, {});

  const classes = Object.keys(groupedByClass);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newUploadingFiles = selectedFiles.map((file) => ({
      file,
      progress: 0,
      status: "uploading",
    }));
    setUploadingFiles((prev) => [...prev, ...newUploadingFiles]);

    // Simulate upload progress
    newUploadingFiles.forEach((uploadingFile) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress >= 100) {
          progress = 100;
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.file === uploadingFile.file
                ? { ...f, progress: 100, status: "completed" }
                : f
            )
          );
          clearInterval(interval);
        } else {
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.file === uploadingFile.file ? { ...f, progress } : f
            )
          );
        }
      }, 200);
    });
  };

  const handleRemoveFile = (fileToRemove) => {
    setUploadingFiles((prev) => prev.filter((f) => f.file !== fileToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ chapter: "", topic: "", files: [] });
    setUploadingFiles([]);
    setDialogOpen(false);
  };

  const handleDeleteResource = (id) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id));
  };

  const getFileIcon = (fileName) => {
    if (
      fileName.includes(".mp4") ||
      fileName.includes(".mov") ||
      fileName.includes(".avi")
    ) {
      return <Video className="w-4 h-4 text-red-500" />;
    }
    return <FileText className="w-4 h-4 text-blue-500" />;
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="mb-4 pb-4 border-b border-gray-200">
        <h1 className="text-[25px] font-clash font-medium">Upcoming Classes</h1>
      </div>

      {/* Resources Table (Grouped by Class) */}
      <Accordion
        type="multiple"
        value={expandedClasses}
        onValueChange={setExpandedClasses}
        className="space-y-6"
      >
        {classes.map((className) => {
          const classResources = groupedByClass[className] || [];
          const classObj =
            courseClasses.find((c) => c.name === className) || {};
          const classColor = {
            bgColor: classObj.bgColor || "bg-[#F5F5F5]",
            iconBg: classObj.iconBg || "bg-[#E0E0E0]",
            iconColor: classObj.iconColor || "text-gray-600",
          };

          return (
            <AccordionItem
              key={className}
              value={className}
              className="border border-[#E0E0E0] rounded-lg overflow-hidden bg-[#F5F5F5]"
            >
              <AccordionTrigger
                className={`p-4 hover:no-underline hover:opacity-90 transition-colors ${classColor.bgColor}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${classColor.iconBg} rounded flex items-center justify-center ${classColor.iconColor} font-bold text-sm`}
                    >
                      {classObj.code || "C"}
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg text-textmain">
                        {className}
                      </h2>
                      <p className="text-sm text-textmuted">
                        {classResources.length} Resources available
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-0">
                <div className="bg-white">
                  {/* Desktop Table Header */}
                  <div className="hidden lg:grid grid-cols-[50px_2fr_3fr_1fr_100px] gap-4 px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0] font-semibold text-sm text-gray-700">
                    <div>S/N</div>
                    <div>Topic</div>
                    <div>Uploaded Files</div>
                    <div>Date</div>
                    <div>Action</div>
                  </div>

                  {classResources.length > 0 ? (
                    <div>
                      {classResources.map((resource, index) => (
                        <div
                          key={resource.id}
                          className="border-b border-[#E0E0E0] last:border-b-0 hover:bg-gray-50 transition-colors"
                        >
                          {/* Desktop View */}
                          <div className="hidden lg:grid grid-cols-[50px_2fr_3fr_1fr_100px] gap-4 px-4 py-3 items-center">
                            <div className="text-gray-600">{index + 1}</div>

                            <div className="font-medium text-gray-800">
                              {resource.topic}
                            </div>

                            <div className="space-y-1">
                              {resource.files.map((file, fileIndex) => (
                                <div
                                  key={fileIndex}
                                  className="flex items-center gap-2"
                                >
                                  <label
                                    htmlFor={`file-${resource.id}-${fileIndex}`}
                                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                                  >
                                    {getFileIcon(file.name)}
                                    <span>{file.name}</span>
                                  </label>
                                </div>
                              ))}
                            </div>

                            <div className="text-sm text-gray-600">
                              {resource.date}
                            </div>

                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteResource(resource.id)
                                }
                                className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Mobile View */}
                          <div className="lg:hidden p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded mr-2">
                                  {index + 1}
                                </span>
                                <h3 className="font-medium text-gray-800 inline">
                                  {resource.topic}
                                </h3>
                              </div>
                              <div className="flex items-center gap-1">
                                <button className="p-1 text-blue-600">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteResource(resource.id)
                                  }
                                  className="p-1 text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2 mb-3">
                              {resource.files.map((file, fileIndex) => (
                                <div
                                  key={fileIndex}
                                  className="flex items-center gap-2 p-2 bg-gray-50 rounded"
                                >
                                  <input
                                    type="checkbox"
                                    id={`mobile-file-${resource.id}-${fileIndex}`}
                                    className="rounded text-teal-600"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor={`mobile-file-${resource.id}-${fileIndex}`}
                                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer flex-1"
                                  >
                                    {getFileIcon(file.name)}
                                    <span className="truncate">
                                      {file.name}
                                    </span>
                                  </label>
                                </div>
                              ))}
                            </div>

                            <div className="text-sm text-gray-500">
                              {resource.date}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No resources available in this class yet.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Upload Button */}
      <div className="">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              Upload Resources
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-sm bg-white max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg">Upload Resources</DialogTitle>
              <DialogDescription className="text-sm">
                Upload your class resources below
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Class Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="class"
                  className="block text-sm font-medium text-gray-700"
                >
                  Class
                </label>
                <select
                  id="class"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  defaultValue={courseClasses[0]?.name || ""}
                >
                  {courseClasses.map((cls) => (
                    <option key={cls.name} value={cls.name}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Chapter Input */}
              <div className="space-y-2">
                <label
                  htmlFor="chapter"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chapter
                </label>
                <input
                  type="text"
                  id="chapter"
                  value={formData.chapter}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      chapter: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter chapter name"
                />
              </div>

              {/* Topic Input */}
              <div className="space-y-2">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-700"
                >
                  Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, topic: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter topic name"
                />
              </div>

              {/* File Upload Area */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Choose a file or drag and drop it here
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    MP4, MOV, AVI, MKV, PDF and DOCX format, up to 500 MB
                  </p>
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    accept=".mp4,.mov,.avi,.mkv,.pdf,.docx"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors"
                  >
                    Browse File
                  </label>
                </div>
              </div>

              {/* Uploading Files List */}
              {uploadingFiles.length > 0 && (
                <div className="space-y-3">
                  {uploadingFiles.map((uploadingFile, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getFileIcon(uploadingFile.file.name)}
                          <span className="text-sm font-medium truncate">
                            {uploadingFile.file.name}
                          </span>
                        </div>
                        {uploadingFile.status === "uploading" && (
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(uploadingFile.file)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>
                            {Math.round(uploadingFile.file.size / 1024)} KB of{" "}
                            {Math.round(uploadingFile.file.size / 1024)} KB
                          </span>
                          <span>{uploadingFile.progress}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full bg-primary transition-all duration-300`}
                            style={{ width: `${uploadingFile.progress}%` }}
                          />
                        </div>

                        <div className="flex items-center gap-1 text-xs">
                          {uploadingFile.status === "uploading" ? (
                            <>
                              <LoaderCircle className="w-3 h-3 text-primary animate-spin" />
                              <span className="text-blue-600">
                                Uploading...
                              </span>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-3 h-3 text-primary" />
                              <span className="text-green-600">Completed</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium cursor-pointer"
                >
                  Upload Resources
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UploadResources;
