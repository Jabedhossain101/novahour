'use client';
export default function ConfidenceReview({ onNext, onBack }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-2">Confidence Review</h2>
      <p className="text-gray-500 mb-8">
        Check the accuracy of AI-extracted data points.
      </p>

      <div className="space-y-4 mb-10">
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-xs text-green-700 font-bold uppercase">
              Invoice Number
            </p>
            <p className="text-lg font-bold text-green-900">#INV-2024-001</p>
          </div>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            99% Match
          </span>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-xs text-yellow-700 font-bold uppercase">
              Total Amount
            </p>
            <p className="text-lg font-bold text-yellow-900">$1,450.00</p>
          </div>
          <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            82% Match
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="px-8 py-3 text-gray-500 font-bold">
          Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg"
        >
          Finalize & Download
        </button>
      </div>
    </div>
  );
}
