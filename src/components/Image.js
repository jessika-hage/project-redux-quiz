import React from 'react';
import { useSelector } from 'react-redux';

export const Image = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  return (
    <img
      className='card-image'
      src={require(`../assets/${question.image}`)}
      alt='animal'
    />
  );
};
