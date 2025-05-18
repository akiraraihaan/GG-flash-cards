export default function FlashCard({ card, showAnswer, onToggle }) {
  return (
    <div 
      className="bg-gray-100 rounded-lg p-6 min-h-[200px] flex items-center justify-center text-center cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
      onClick={onToggle} // Toggle between question and answer on click
    >
      {/* Conditionally render question or answer based on state */}
      <div className="text-xl">
        {showAnswer ? card.answer : card.question}
      </div>
    </div>
  );
}