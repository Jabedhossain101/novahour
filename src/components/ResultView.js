'use client';
import { useEffect, useState } from 'react';

export default function ResultView({ file }) {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      // মেমোরি লিক রোধ করতে আনমাউন্ট হওয়ার সময় ইউআরএল রিলিজ করা
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
      {/* বাম পাশ: ফাইল প্রিভিউ */}
      <div className="w-full lg:w-2/3 bg-white p-4 rounded-3xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-bold mb-4 text-gray-700">
          Document Preview:
        </h3>

        <div className="w-full h-[600px] overflow-y-auto rounded-xl border border-gray-100 bg-gray-50">
          {file?.type === 'application/pdf' ? (
            <iframe
              src={fileUrl}
              className="w-full h-full rounded-xl"
              title="PDF Preview"
            />
          ) : (
            <img
              src={fileUrl}
              alt="Uploaded Preview"
              className="w-full object-contain"
            />
          )}
        </div>
      </div>

      {/* ডান পাশ: রেজাল্ট এবং ডাউনলোড বাটন */}
      <div className="w-full lg:w-1/3 text-center py-10 bg-white rounded-3xl shadow-lg border border-gray-200 px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Process Success!
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <button className="p-6 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors">
            <span className="font-black text-2xl text-blue-700">CSV</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Download
            </span>
          </button>

          <button className="p-6 border-2 border-green-600 rounded-2xl hover:bg-green-50 flex flex-col items-center gap-2 transition-colors">
            <span className="font-black text-2xl text-green-700 uppercase">
              Excel
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Download
            </span>
          </button>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-12 text-gray-500 underline underline-offset-4 hover:text-blue-600"
        >
          Process another document
        </button>
      </div>
    </div>
  );
}
