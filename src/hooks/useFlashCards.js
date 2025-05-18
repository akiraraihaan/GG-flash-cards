import { useState } from 'react';
import { flashcards } from '../data/flashcards';

export function useFlashCards() {
  // State to track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to track whether to show the answer or question
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Calculate total number of flashcards
  const totalCards = flashcards.length;
  
  // Get the current flashcard based on index
  const currentCard = flashcards[currentIndex];
  
  // Calculate progress as a percentage
  const progress = ((currentIndex + 1) / totalCards) * 100;
  
  // Function to move to next card
  const goToNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false); // Reset to show question on new card
    }
  };
  
  // Function to move to previous card
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false); // Reset to show question on new card
    }
  };
  
  // Function to toggle between question and answer
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  
  // Return all the state and functions needed by components
  return {
    currentCard,
    currentIndex,
    totalCards,
    progress,
    showAnswer,
    goToNext,
    goToPrevious,
    toggleAnswer
  };
}