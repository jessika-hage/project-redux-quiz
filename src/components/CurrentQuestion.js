import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

import { QuestionButton } from './QuestionButton';
import { ProgressBar } from './ProgressBar';
import { Image } from './Image';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answers = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const options = question.options;
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <section className="question-card-container">
        <h1 className="question-title">{question.questionText}</h1>
        <div className="image-answer">
          <Image />
          <div className='options-container'>
            {options.map((option, index) => {
              return (
                <button
                  disabled={answers[currentQuestionIndex]}
                  className='options-button'
                  key={index}
                  onClick={() => {
                    dispatch(
                      quiz.actions.submitAnswer({
                        questionId: question.id,
                        answerIndex: index,
                      })
                    );
                  }}
                >
                  {option}
                </button>
              );
            })}
            <QuestionButton disabled={!answers[currentQuestionIndex]} />
          </div>
        </div>
        <ProgressBar />
      </section>
    </>
  );
};
