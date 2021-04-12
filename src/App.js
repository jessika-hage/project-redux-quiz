import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { Home } from './pages/Home'
import { Summary } from './pages/Summary';
import { QuestionPage } from './pages/QuestionPage';

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/QuestionPage/'>
              <QuestionPage />
            </Route>
            <Route path='/Summary'>
              <Summary />
            </Route>
          </>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};
