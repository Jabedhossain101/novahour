'use client';
import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ProcessingView from '@/components/ProcessingView';
import ResultView from '@/components/ResultView';

export default function Home() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleUpload = file => {
    setStep(2);
    // Processing Animation
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep(3);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  return (
    
    <main className="w-full min-h-screen bg-[#F3F7FF] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex justify-center">
        <div className="w-full">
          {step === 1 && <FileUpload onUpload={handleUpload} />}
          {step === 2 && <ProcessingView progress={progress} />}
          {step === 3 && <ResultView />}
        </div>
      </div>
    </main>
  );
}
