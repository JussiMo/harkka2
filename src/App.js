import React from 'react';
import './App.css';
import Chuck from './components/Chuck.js';

const refreshPage = () => {
  window.location.reload();
};

function App() {
  return (
    <div>
      <Chuck />
      <button onClick={refreshPage}>New fact</button>
    </div>
  );
}

export default App;
