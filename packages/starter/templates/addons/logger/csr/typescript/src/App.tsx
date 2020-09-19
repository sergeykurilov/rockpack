import React from 'react';
import { LoggerContainer } from '@rockpack/logger';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      Hello world
    </p>
  </div>
);

export default (): JSX.Element => (
  <LoggerContainer>
    <App />
  </LoggerContainer>
);