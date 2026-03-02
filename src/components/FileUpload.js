'use client';
import { useState } from 'react';

export default function FileUpload({ onUpload }) {
  return (
    <div className="bg-white p-20 rounded-[40px] shadow-xl border-4 border-dashed border-blue-100 text-center">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl">
        +
      </div>
      <h2 className="text-2xl font-bold mb-8">Upload the document here</h2>
      <input
        type="file"
        onChange={e => onUpload(e.target.files[0])}
        className="hidden"
        id="fileInp"
      />
      <label
        htmlFor="fileInp"
        className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold cursor-pointer hover:bg-blue-700 transition-all"
      >
        Select File
      </label>
    </div>
  );
}