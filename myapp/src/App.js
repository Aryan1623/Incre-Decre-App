import React, { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
function App() {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleIncrement = () => {
    if (number < 150) {
      setHistory([...history, number]);
      setRedoStack([]);
      setNumber(prevNumber => prevNumber + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setHistory([...history, number]);
      setRedoStack([]);
      setNumber(prevNumber => prevNumber - 1);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastValue = history.pop();
      setRedoStack([...redoStack, number]);
      setNumber(lastValue);
      setHistory(history);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastRedo = redoStack.pop();
      setHistory([...history, number]);
      setNumber(lastRedo);
    }
  };

  return (
    <div className="App">
      <h1>Increment/Decrement App</h1>
      <div className="controls">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className="controls">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${(number / 150) * 100}%` }}
        ></div>
      </div>
      <div className="number-display">
        {number}
      </div>
     <Footer/>
    </div>
  );
}

export default App;

