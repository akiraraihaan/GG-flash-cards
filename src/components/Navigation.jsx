export default function Navigation({ onPrevious, onNext, showAnswer, onToggle, isFirstCard, isLastCard }) {
  return (
    <div className="flex justify-between mt-4">
      {/* Previous button - disabled when on first card */}
      <button 
        onClick={onPrevious}
        disabled={isFirstCard}
        className={`px-4 py-2 rounded-md flex items-center ${
          isFirstCard ? 'text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        <span className="mr-1">❮</span> Previous
      </button>
      
      {/* Toggle answer button */}
      <button 
        onClick={onToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      
      {/* Next button - disabled when on last card */}
      <button 
        onClick={onNext}
        disabled={isLastCard}
        className={`px-4 py-2 rounded-md flex items-center ${
          isLastCard ? 'text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Next <span className="ml-1">❯</span>
      </button>
    </div>
  );
}