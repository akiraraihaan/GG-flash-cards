export default function FlashCard({ card, showAnswer, onToggle }) {
  return (
    <div 
      className="bg-gray-100 rounded-lg p-8 min-h-[250px] flex items-center justify-center text-center cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
      onClick={onToggle}
    >
      <div className="text-xl font-medium">
        {showAnswer ? (
          <p>{card.answer}</p>
        ) : (
          <p>What is the<br />difference between<br />var, let, and const?</p>
        )}
      </div>
    </div>
  );
}