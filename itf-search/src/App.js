import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

// app components
import Home from './components/Home';
import Results from './components/Results';

function App() {
  return (
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/search/*" element={<Results />} />
        <Route path="/search/:type" element={<Results />} />
      </Routes>
  );
}

export default App;
