
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import About from './Components/About';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter basename="/myportfolio_reactjs">
    <Routes>
      <Route path="/" element={<Skills />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
 
  );
}

export default App;