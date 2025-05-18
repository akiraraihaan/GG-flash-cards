export default function ProgressBar({ progress, currentCard, totalCards }) {
  const roundedProgress = Math.round(progress);
  
  return (
    <div className="mb-2 w-full">
      {/* Progress bar with percentage inside */}
      <div className="w-full border-4 border-gray-400 p-1 rounded-xl h-10 relative">
        {/* Progress indicator */}
        <div 
          className="bg-gray-600 h-full rounded-md transition-all duration-300 ease-in-out flex items-center"
          style={{ width: `${progress}%` }}
        >
            <span className="text-white text-xs font-medium ml-1">
              {roundedProgress}%
            </span>
        </div>
        
        {/* Card count display */}
        {currentCard > 19 ? (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white">
            {currentCard} of {totalCards}
          </span>
        ) : (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-700">
            {currentCard} of {totalCards}
          </span>
        )}
      </div>
    </div>
  );
}