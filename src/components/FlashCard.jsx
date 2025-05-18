export default function FlashCard({ card, showAnswer, onToggle }) {
  return (
    <div className="border-2 border-gray-600 p-1 rounded-xl">
      <div 
        className="bg-gray-100 rounded-xl p-8 min-h-[250px] flex items-center justify-center text-center cursor-pointer"
        onClick={onToggle}
      >
        <div className="text-xl font-medium">
          {showAnswer ? card.answer : card.question}
        </div>
      </div>
    </div>
  );
}