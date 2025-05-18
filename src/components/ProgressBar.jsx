export default function ProgressBar({ progress, currentCard, totalCards }) {
  const roundedProgress = Math.round(progress);
  
  return (
    <div className="mb-6 w-full">
      {/* Progress bar with percentage inside */}
      <div className="w-full bg-gray-300 rounded-md h-7 relative">
        {/* Progress indicator */}
        <div 
          className="bg-gray-600 h-full rounded-md transition-all duration-300 ease-in-out flex items-center"
          style={{ width: `${progress}%` }}
        >
          {/* Only show percentage text inside the colored part if it's wide enough */}
          {progress > 10 && (
            <span className="text-white text-xs font-medium ml-2">
              {roundedProgress}%
            </span>
          )}
        </div>
        
        {/* Show percentage outside the colored part if it's too narrow */}
        {progress <= 10 && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-700">
            {roundedProgress}%
          </span>
        )}
        
        {/* Card count display */}
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-700">
          {currentCard} of {totalCards}
        </span>
      </div>
    </div>
  );
}