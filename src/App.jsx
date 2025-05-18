import { useFlashCards } from './hooks/useFlashCards';
import ProgressBar from './components/ProgressBar';
import FlashCard from './components/FlashCard';
import Navigation from './components/Navigation';

function App() {
  const { 
    currentCard, 
    currentIndex, 
    totalCards, 
    progress, 
    showAnswer, 
    goToNext, 
    goToPrevious, 
    toggleAnswer 
  } = useFlashCards();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg border-4 border-gray-400 rounded-xl p-2">
        <h1 className="text-2xl font-bold mb-2">Flash Cards</h1>
        
        <ProgressBar 
          progress={progress} 
          currentCard={currentIndex + 1} 
          totalCards={totalCards} 
        />
        
        <FlashCard 
          card={currentCard} 
          showAnswer={showAnswer} 
          onToggle={toggleAnswer} 
        />
        
        <Navigation 
          onPrevious={goToPrevious} 
          onNext={goToNext} 
          showAnswer={showAnswer} 
          onToggle={toggleAnswer}
          isFirstCard={currentIndex === 0}
          isLastCard={currentIndex === totalCards - 1}
        />
      </div>
    </div>
  );
}

export default App;