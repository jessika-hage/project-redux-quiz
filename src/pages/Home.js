import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className='home-container'>
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1542519349-0f4641c660df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1541296093088-f079b71d3478?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1508018151423-1b1e201c4203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG11c2hyb29tfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1602529859927-a39e6c800eea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2hyb29tc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1575819774821-f13236012f4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1583406712884-97467bb5d3c3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        alt='mushrooms'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1571590900195-9b7c3c289824?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2hyb29tc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
      />
      <img
        className='background-image'
        src='https://images.unsplash.com/photo-1454425064867-5ba516caf601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG11c2hyb29tc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        alt='mushrooms'
      />

      <div class='homescreen-box'>
        <h1 className='title'>How much do you know about mushrooms?</h1>
        <Link to='/QuestionPage'>
          <button className='start-button'>Start the Quiz</button>
        </Link>
      </div>
    </main>
  );
};
