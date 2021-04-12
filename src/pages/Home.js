import React from 'react';
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <>
      <h1>Mushroom Quiz!</h1>
      <Link to='/QuestionPage'>
        <button>Start the Quiz</button>
      </Link>
    </>
  )
}

  