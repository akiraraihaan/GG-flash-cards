import { useFlashCards } from './hooks/useFlashCards';
import ProgressBar from './components/ProgressBar';
import FlashCard from './components/FlashCard';
import Navigation from './components/Navigation';

function App() {
  // Use our custom hook to get state and functions
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* App Title */}
        <h1 className="text-3xl font-bold mb-6">Flash Cards</h1>
        
        {/* Progress Bar Component */}
        <ProgressBar 
          progress={progress} 
          currentCard={currentIndex + 1} 
          totalCards={totalCards} 
        />
        
        {/* Flash Card Component */}
        <FlashCard 
          card={currentCard} 
          showAnswer={showAnswer} 
          onToggle={toggleAnswer} 
        />
        
        {/* Navigation Component */}
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