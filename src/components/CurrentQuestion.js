import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answers = question.options

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {answers.map((answer, index) => {
        return (
          <p key={index}>{answer}</p>
        )
      })}
      <button>

      </button>
    </div>
  )
}
