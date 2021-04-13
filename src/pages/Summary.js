import React from 'react';
import { useSelector } from 'react-redux';
// import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const rightAnswers = answers.filter(answer => answer.isCorrect === true)
  console.log(rightAnswers)
  return (
    <section className="main-container">
      <div className="summary-container">
        <h1 className="summary-text">Your score: {rightAnswers.length} / {answers.length}</h1>
      </div>
    </section>
  
  )
}