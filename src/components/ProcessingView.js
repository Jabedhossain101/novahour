export default function ProcessingView({ progress }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-8 italic text-blue-800">
        document processing progress
      </h2>
      <div className="max-w-md mx-auto w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500 shadow-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="font-medium text-blue-600">{progress}% Completed</p>
    </div>
  );
}
