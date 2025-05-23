export default function FlashCard({ card, showAnswer, onToggle }) {
  return (
    <div className="border-3 border-gray-400 p-1 rounded-xl">
      <div 
        className="bg-gray-100 rounded-lg p-8 min-h-[250px] flex items-center justify-center text-center cursor-pointer"
        onClick={onToggle}
      >
        <div className={`${showAnswer ? 'font-normal text-medium' : 'font-extrabold text-3xl'}`}>
          {showAnswer ? card.answer : card.question}
        </div>
      </div>
    </div>
  );
}