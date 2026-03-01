'use client';
import { useState } from 'react';

export default function FileUpload({ onUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
      <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div
          onDragOver={e => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={e => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files[0]) {
              onUpload(e.dataTransfer.files[0]);
            }
          }}
          className={`w-full p-16 flex flex-col items-center border-4 border-dashed transition-all duration-300 ${
            isDragging
              ? 'border-blue-400 bg-blue-50 scale-[1.01]'
              : 'border-gray-200 bg-white'
          }`}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg mb-8">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M12 5v14m-7-7h14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Upload the document here
          </h2>

          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file-upload"
            className="px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all cursor-pointer active:scale-95"
          >
            Select File
          </label>
          <p className="mt-4 text-sm text-gray-400">Supported: PDF, JPG, PNG</p>
        </div>
      </div>
    </div>
  );
}
