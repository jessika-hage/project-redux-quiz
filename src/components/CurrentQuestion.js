/* eslint-disable react/button-has-type */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
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
  
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <section className="question-card-container">
        
        <h1 className="question-title">{question.questionText}</h1>
        <div className="image-answer">
          <Image />
          <div className="options-container">
            {options.map((option, index) => {
              return (
                <button
                  disabled={answers[currentQuestionIndex]}
                  className="options-button"
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
