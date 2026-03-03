'use client';
export default function FinalReview({ onRestart }) {
  return (
    <div className="bg-white p-16 rounded-[40px] shadow-2xl text-center">
      <h2 className="text-3xl font-bold mb-10">Process Success!</h2>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        <button className="p-8 border-2 border-blue-600 rounded-3xl flex flex-col items-center gap-2 hover:bg-blue-50">
          <span className="text-2xl font-black text-blue-700">CSV</span>
          <span className="text-xs font-bold text-gray-400 uppercase">
            Download
          </span>
        </button>
        <button className="p-8 border-2 border-green-600 rounded-3xl flex flex-col items-center gap-2 hover:bg-green-50">
          <span className="text-2xl font-black text-green-700 uppercase">
            Excel
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase">
            Download
          </span>
        </button>
      </div>
      <button
        onClick={onRestart}
        className="mt-12 text-gray-400 underline decoration-2 underline-offset-8"
      >
        Process another document
      </button>
    </div>
  );
}
