'use client';
import { useState } from 'react';

export default function ElementSelection({ onNext, onBack }) {
  const [selected, setSelected] = useState(['Tables', 'Headers']);

  const options = ['Headers', 'Tables', 'Footers', 'Paragraphs', 'Metadata'];

  const toggleOption = opt => {
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt],
    );
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-2">Section & Element Selection</h2>
      <p className="text-gray-500 mb-8">
        Select which elements you want to extract from the document.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {options.map(opt => (
          <div
            key={opt}
            onClick={() => toggleOption(opt)}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              selected.includes(opt)
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-100 bg-gray-50 text-gray-400'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center ${selected.includes(opt) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}
            >
              {selected.includes(opt) && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>
            <span className="font-bold">{opt}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="px-8 py-3 text-gray-500 font-bold">
          Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all"
        >
          Define Schema
        </button>
      </div>
    </div>
  );
}
