export default function ResultView() {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-10">Process Success!</h2>
      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
        <button className="p-6 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 flex flex-col items-center gap-2">
          <span className="font-black text-2xl text-blue-700">CSV</span> [cite:
          5]
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Download
          </span>
        </button>
        <button className="p-6 border-2 border-green-600 rounded-2xl hover:bg-green-50 flex flex-col items-center gap-2">
          <span className="font-black text-2xl text-green-700 uppercase">
            Excel
          </span>{' '}
          [cite: 6]
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Download
          </span>
        </button>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-12 text-gray-500 underline underline-offset-4"
      >
        Process another document
      </button>
    </div>
  );
}
