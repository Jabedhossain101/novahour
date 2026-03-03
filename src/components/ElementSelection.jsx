'use client';
import { useState, useEffect } from 'react';

export default function ElementSelection({ file, onNext, onBack }) {
  const [selected, setSelected] = useState(['Tables', 'Headers']);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const options = ['Headers', 'Tables', 'Footers', 'Paragraphs', 'Metadata'];

  const toggleOption = opt => {
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt],
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Selection Section */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-2">Section & Element Selection</h2>
        <p className="text-gray-500 mb-8">
          Select which elements you want to extract.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => toggleOption(opt)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                selected.includes(opt)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-100 bg-gray-50 text-gray-400'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${selected.includes(opt) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}
              />
              <span className="font-bold text-sm">{opt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Page Preview Grid - */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* এখানে আমরা ৩টি পেজ দেখাচ্ছি উদাহরণ হিসেবে, বাস্তব PDF হলে লাইব্রেরি লাগবে (যেমন react-pdf) */}
        {[1, 2, 3].map(page => (
          <div
            key={page}
            className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center"
          >
            <div className="w-full aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border mb-4">
              <iframe
                src={`${fileUrl}#page=${page}`}
                className="w-full h-full pointer-events-none"
              />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase">
              Page {page}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-lg">
        <button
          onClick={onBack}
          className="px-8 py-3 text-gray-500 font-bold hover:text-black transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
        >
          Define Schema
        </button>
      </div>
    </div>
  );
}
