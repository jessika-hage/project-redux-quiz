import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { QuestionButton } from './QuestionButton'
import { ProgressBar } from './ProgressBar'
import { Image } from './Image'


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const answers = question.options;
  const dispatch = useDispatch();
  const answerr = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id));


  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1 className="question-title">{question.questionText}</h1>
      <section className="question-card-container">
        <ProgressBar />
        <div className="image-answer">
          <Image />
          <div className="options-container">
            {answers.map((answer, index) => {
              return (
                <button disabled={answerr} className="options-button" key={index} onClick={() => { dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })) }}>
                  {answer}
                </button>
              )
            })}
            <QuestionButton />
          </div>
        </div>
      </section>
    </>
  )
}
