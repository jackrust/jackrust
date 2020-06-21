import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Official website of Jack Rust - V5
        </p>
        <a
          className="App-link"
          href="https://twitter.com/JackTimothyRust"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
