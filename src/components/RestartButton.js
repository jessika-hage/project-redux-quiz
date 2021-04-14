import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const RestartButton = () => {
  const dispatch = useDispatch()
   return (
     <Link to="/">
       <button className="restart-button" onClick={() => dispatch(quiz.actions.restart())}>Try Again</button>
     </Link>
   )
}
