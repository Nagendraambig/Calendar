import React from 'react';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
      </header>
    </div>
    
  );
}

export default App;
