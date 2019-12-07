import React, { useState } from 'react';
import logo from './theodo-secure-logo.png';
import './App.css';

function App() {
  // Set up the logic to store the user input and merge it with the initial JSON object
  const [input, setInput] = useState('');
  const result = {__html: input};
  const [link, setLink] = useState('');

  // Render the application
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Type some text here:</p>
        <input className="json-input" type="textarea" onChange={(e) => setInput(e.target.value)}/>
        <p>Your text:</p>
        <div dangerouslySetInnerHTML={result} className="user-text"/>
        <p>Type your personal website address here:</p>
        <input className="json-input" type="textarea" onChange={(e) => setLink(e.target.value)}/>
        <p>Your personal website:</p>
        <a href={link}>Click here</a>
      </header>
    </div>
  );
}

export default App;
