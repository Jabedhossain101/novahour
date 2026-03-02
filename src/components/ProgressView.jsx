'use client';
import { useEffect, useState } from 'react';

export default function ProgressView({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
      <div className="flex justify-between mb-4">
        <span className="font-bold text-gray-700 text-lg">
          Document Progress
        </span>
        <span className="text-blue-600 font-bold">{progress}%</span>
      </div>
      <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center mt-6 text-gray-500 italic">
        Analyzing your document with AI...
      </p>
    </div>
  );
}
