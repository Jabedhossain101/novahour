'use client';
export default function FinalReview({ onRestart }) {
  return (
    <div className="text-center py-10 bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-black text-gray-800 mb-2">
        Process Complete!
      </h2>
      <p className="text-gray-500 mb-10">
        Your document has been selectively re-extracted and is ready for export.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
        <button className="p-6 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 flex flex-col items-center gap-2 transition-all">
          <span className="font-black text-2xl text-blue-700 uppercase">
            CSV
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Download
          </span>
        </button>
        <button className="p-6 border-2 border-green-600 rounded-2xl hover:bg-green-50 flex flex-col items-center gap-2 transition-all">
          <span className="font-black text-2xl text-green-700 uppercase">
            Excel
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Download
          </span>
        </button>
      </div>

      <button
        onClick={onRestart}
        className="mt-12 text-blue-600 font-bold hover:underline"
      >
        Process another document
      </button>
    </div>
  );
}
