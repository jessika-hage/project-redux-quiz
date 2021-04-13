import React from 'react';
import { useSelector } from 'react-redux';

import { RestartButton } from 'components/RestartButton';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const rightAnswers = answers.filter((answer) => answer.isCorrect === true);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  console.log(rightAnswers);
  return (
    <section className='main-container'>
      <div className='summary-container'>
        {answers.map((option) => (
          <div key={option.id} className='summary-answer-wrapper'>
            <img
              className='summary-image'
              src={require(`../assets/${option.questionImage}`)}
              alt='mushroom'
            />
            <div className='score-text-wrapper'>
              <p className='right-score'>
                <span className='score-bold'> Correct Answer was:</span>{' '}
                {option.correctAnswer}
              </p>
              <p className='your-score'>
                {' '}
                <span className='score-bold'> Your Answer was:</span>{' '}
                <span
                  className={
                    option.answer === option.correctAnswer ? 'green' : 'red'
                  }
                >
                  {option.answer}
                </span>
              </p>
            </div>
          </div>
        ))}
        <div>
          <h1 className='summary-text'>
            Your score: {rightAnswers.length} / {answers.length}
          </h1>
          <RestartButton />
        </div>
      </div>
    </section>
  );
};
