export default function ProgressBar({ progress, currentCard, totalCards }) {
  return (
    <div className="mb-4 w-full">
      {/* Display percentage and card count */}
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{Math.round(progress)}%</span>
        <span>{currentCard} of {totalCards}</span>
      </div>
      
      {/* Progress bar container */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        {/* Dynamic progress bar that changes width based on progress */}
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}