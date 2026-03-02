'use client';
import { useEffect, useState } from 'react';

export default function DocumentParsing({ file, onComplete }) {
  const [status, setStatus] = useState('Initializing OCR...');

  useEffect(() => {
    const stages = [
      'Extracting Text...',
      'Analyzing Layout...',
      'Identifying Sections...',
      'Detecting Tables...',
      'Finalizing Parsing...',
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < stages.length) {
        setStatus(stages[i]);
        i++;
      } else {
        clearInterval(interval);
        onComplete({ fileName: file?.name, type: file?.type });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-gray-100">
      <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
      <h2 className="text-2xl font-bold text-gray-800">{status}</h2>
      <p className="text-gray-500 mt-2">Reading: {file?.name}</p>
    </div>
  );
}
