import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DiabetesPredictionForm from './Views/DiabitiesForm';
import Home from './Views/HomePage';
function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/diagnose" element={<DiabetesPredictionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
