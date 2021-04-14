import React from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const progress = useSelector((state) => state.quiz.progress);
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const totalQuestions = useSelector((state) => state.quiz.questions.length);

  return (
    <div className='progress-container'>
      <div className='progress-bar'>
        <div className='progress-filler' style={{ width: `${progress}%` }} />
      </div>
      <h3 className='question-count'>
        {questionIndex + 1} / {totalQuestions}
      </h3>
    </div>
  );
};
