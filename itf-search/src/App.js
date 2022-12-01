import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

// app components
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>    
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
