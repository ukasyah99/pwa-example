import React from 'react';
import logo from './logo.svg';
import './App.css';
import packageJSON from '../package.json';
import useAutoUpdate from './hooks/useAutoUpdate';

function App() {
  useAutoUpdate();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Version: {packageJSON.version}
        </p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
