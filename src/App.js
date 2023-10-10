import React, { useEffect } from 'react';
import './App.css';
import Chuck from './components/Chuck.js';

const refreshPage = () => {
  window.location.reload();
};

function App() {
  useEffect(() => {
    const interval = setInterval(refreshPage, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Chuck />
      <button onClick={refreshPage}>New random fact</button>
    </div>
  );
}

export default App;
