import React from 'react';

import { CurrentQuestion } from 'components/CurrentQuestion';

export const QuestionPage = () => {
  return (
    <main className='main-image'>
      <div className='main-background'>
        <CurrentQuestion />
      </div>
    </main>
  );
};
