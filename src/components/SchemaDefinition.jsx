'use client';
export default function SchemaDefinition({ onNext, onBack }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Schema & Output Definition</h2>
      <div className="space-y-4 mb-10">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl border border-gray-100"
          >
            <input
              type="text"
              placeholder={`Field Name ${i}`}
              className="flex-1 p-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-blue-500"
            />
            <select className="p-2 bg-white border border-gray-200 rounded-lg outline-none">
              <option>String</option>
              <option>Number</option>
              <option>Date</option>
            </select>
          </div>
        ))}
        <button className="text-blue-600 font-bold text-sm hover:underline">
          + Add New Field
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="px-8 py-3 text-gray-500 font-bold">
          Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg"
        >
          Start Attribution
        </button>
      </div>
    </div>
  );
}
