'use client';
export default function PreviewPages({ file, onNext, onBack }) {
  const fileUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Preview of Pages</h2>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
          1 Page Detected
        </span>
      </div>

      <div className="flex justify-center bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200 mb-8 min-h-[400px]">
        {file?.type === 'application/pdf' ? (
          <iframe
            src={fileUrl}
            className="w-full max-w-2xl h-[500px] shadow-lg rounded"
          />
        ) : (
          <img
            src={fileUrl}
            className="max-w-full h-auto rounded-lg shadow-lg"
            alt="Preview"
          />
        )}
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button
          onClick={onBack}
          className="px-8 py-3 text-gray-500 font-bold hover:text-gray-800"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
        >
          Continue to Selection
        </button>
      </div>
    </div>
  );
}
