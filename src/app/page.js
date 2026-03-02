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

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <main className="w-full min-h-screen bg-[#F3F7FF] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Step Indicator */}
        <div className="mb-8 flex justify-between items-center px-4">
          <span className="text-sm font-bold text-blue-600">
            STEP {step} OF 8
          </span>
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full ${step > i ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Sections Based on PDF */}
        {step === 1 && (
          <FileUpload
            onUpload={file => {
              setUploadedFile(file);
              nextStep();
            }}
          />
        )}
        {step === 2 && <DocumentParsing onComplete={nextStep} />}
        {step === 3 && (
          <ProgressView onComplete={nextStep} title="Initial Processing" />
        )}
        {step === 4 && (
          <PreviewPages
            file={uploadedFile}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {step === 5 && <ElementSelection onNext={nextStep} onBack={prevStep} />}
        {step === 6 && <SchemaDefinition onNext={nextStep} onBack={prevStep} />}
        {step === 7 && <ConfidenceReview onNext={nextStep} onBack={prevStep} />}
        {step === 8 && <FinalReview onRestart={() => setStep(1)} />}
      </div>
    </main>
  );
}
