'use client';
export default function PreviewPages({ file, onNext, onBack }) {
  const url = file ? URL.createObjectURL(file) : '';
  return (
    <div className="bg-white p-10 rounded-[40px] shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Document Preview</h2>
      <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-8 border">
        <iframe src={url} className="w-full h-full" title="preview" />
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="font-bold text-gray-400">
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
