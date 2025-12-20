import React, { useState } from "react";
import { FaRegEdit, FaFolder } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UploadResourcesOverlay from "./Uploadresourcesover";

const resources = [
  {
    id: 1,
    topic: "Introduction to Tajwid",
    files: ["Introduction-to-Tajwid.mp4", "Introduction-to-Tajwid.pdf"],
    date: "9th June, 2025",
  },
  {
    id: 2,
    topic: "Makharij (Articulation Points)",
    files: [
      "Makhrij-Articulation-Points.mp4",
      "Makhrij-Articulation-Points.pdf",
    ],
    date: "9th June, 2025",
  },
  {
    id: 3,
    topic: "Rules of Noon & Meem",
    files: ["Rule-of-Noon-and-meem.mp4", "Rule-of-Noon-and-meem.pdf"],
    date: "9th June, 2025",
  },
];

export default function ResourcesTable() {
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-5 shadow-sm w-full">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-3 px-3 font-semibold">S/N</th>
                <th className="py-3 px-3 font-semibold">Topic</th>
                <th className="py-3 px-3 font-semibold">Uploaded Files</th>
                <th className="py-3 px-3 font-semibold">Date</th>
                <th className="py-3 px-3 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {resources.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4 px-3 text-sm">{index + 1}</td>

                  <td className="py-4 px-3 text-sm font-semibold">
                    {item.topic}
                  </td>

                  <td className="py-4 px-3 text-sm">
                    <div className="flex flex-col gap-1">
                      {item.files.map((file, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="flex items-center gap-2 text-blue-600 hover:underline"
                        >
                          <FaFolder className="text-sm" />
                          {file}
                        </a>
                      ))}
                    </div>
                  </td>

                  <td className="py-4 px-3 text-sm">{item.date}</td>

                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <button className="text-green-600 hover:text-green-700">
                        <FaRegEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* OPEN OVERLAY BUTTON */}
        <button
          onClick={() => setOpenUpload(true)}
          className="w-full bg-primary text-white font-semibold mt-6 py-3 rounded-lg hover:bg-buttonhover"
        >
          Upload Resources
        </button>
      </div>

      {/* UPLOAD OVERLAY */}
      <UploadResourcesOverlay
        open={openUpload}
        onClose={() => setOpenUpload(false)}
      />
    </>
  );
}
