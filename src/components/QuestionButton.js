import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Link } from 'react-router-dom';

export const QuestionButton = ({ disabled }) => {
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const questions = useSelector((state) => state.quiz.questions);

  const dispatch = useDispatch();

  return (
    <>
      {!quizOver &&
        (questionIndex === questions.length - 1 ? (
          <Link to='/Summary'>
            <button className='next-button'>Submit?</button>
          </Link>
        ) : (
          <button
            disabled={disabled}
            className="next-button"
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Next Question
          </button>
        ))}
    </>
  );
};
