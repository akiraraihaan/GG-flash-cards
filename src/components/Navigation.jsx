export default function Navigation({ onPrevious, onNext, showAnswer, onToggle, isFirstCard, isLastCard }) {
  return (
    <div className="flex justify-between mt-6">
      {/* Previous button */}
      <button 
        onClick={onPrevious}
        disabled={isFirstCard}
        className={`px-4 py-2 text-gray-700 flex items-center ${isFirstCard ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'}`}
      >
        <span className="mr-1">❮</span> Previous
      </button>
      
      {/* Toggle answer button */}
      <button 
        onClick={onToggle}
        className="px-6 py-2 font-medium"
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      
      {/* Next button */}
      <button 
        onClick={onNext}
        disabled={isLastCard}
        className={`px-4 py-2 text-gray-700 flex items-center ${isLastCard ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'}`}
      >
        Next <span className="ml-1">❯</span>
      </button>
    </div>
  );
}