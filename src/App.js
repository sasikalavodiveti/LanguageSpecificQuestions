import React from 'react';
import QuestionsContainer from './containers/QuestionsContainer';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <QuestionsContainer />
    </div>
  );
}

export default App;
