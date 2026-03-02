'use client';
import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import DocumentParsing from '@/components/DocumentParsing';
import ProgressView from '@/components/ProgressView';
import PreviewPages from '@/components/PreviewPages';
import ElementSelection from '@/components/ElementSelection';
import SchemaDefinition from '@/components/SchemaDefinition';
import ConfidenceReview from '@/components/ConfidenceReview';
import FinalReview from '@/components/FinalReview';

export default function Home() {
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);

  // ১. ফাইল আপলোড হ্যান্ডলার
  const handleUpload = file => {
    setUploadedFile(file);
    setStep(2); // Move to Document Parsing
  };

  // ২. পরবর্তী ধাপে যাওয়ার ফাংশন
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <main className="w-full min-h-screen bg-[#F3F7FF] p-8">
      {/* Step Indicator (Optional but helpful) */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex justify-between items-center text-xs font-bold text-blue-400 uppercase tracking-widest">
          <span>Step {step} of 8</span>
          <span>{uploadedFile?.name || 'No file selected'}</span>
        </div>
        <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-500"
            style={{ width: `${(step / 8) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ইমেজের ফ্লো অনুযায়ী ৮টি সেকশন */}
        {step === 1 && <FileUpload onUpload={handleUpload} />}

        {step === 2 && (
          <DocumentParsing
            file={uploadedFile}
            onComplete={data => {
              setParsedData(data);
              nextStep();
            }}
          />
        )}

        {step === 3 && <ProgressView onComplete={nextStep} />}

        {step === 4 && (
          <PreviewPages
            file={uploadedFile}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {step === 5 && (
          <ElementSelection
            data={parsedData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {step === 6 && <SchemaDefinition onNext={nextStep} onBack={prevStep} />}

        {step === 7 && <ConfidenceReview onNext={nextStep} onBack={prevStep} />}

        {step === 8 && (
          <FinalReview file={uploadedFile} onRestart={() => setStep(1)} />
        )}
      </div>
    </main>
  );
}
