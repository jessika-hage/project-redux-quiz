import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { QuestionButton } from './QuestionButton'


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answers = question.options
  const dispatch = useDispatch();
 

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {answers.map((answer, index) => {
        return (
          <button key={index} onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>
            <p>{answer}</p>
          </button>
        )
      })}
  <QuestionButton />
    </div>
  )
}
