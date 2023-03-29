import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './style.css';
import { Login } from '../Login';
import { Register } from '../Register';

export default function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className='App'> 
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>YeatApp</p>
        {' '}
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}
