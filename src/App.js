import React from 'react';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'
import fire from './firebase'
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
      <footer>
            <script src="/__/firebase/7.22.0/firebase-app.js"></script>
            <script src="/__/firebase/7.22.0/firebase-analytics.js"></script>
            <script src="/__/firebase/init.js"></script>
      </footer>
    </div>
    
  );
}

export default App;
