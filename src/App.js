
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import Skills from './Components/Skills';
// import About from './Components/About';
// import { ThemeProvider } from './Context/ThemeContext';

// function App() {
//   return (
//     <ThemeProvider>
//     <BrowserRouter basename="/myportfolio_reactjs">
//     <Routes>
//       <Route path="/" element={<Skills />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </BrowserRouter>
//   </ThemeProvider>
 
//   );
// }

// export default App;

// App.jsx
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import TechStack from "./Components/TechStack";
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './index.css';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Context/ThemeContext';
import Skills from "./Components/Skills"
function HomePage() {
  return (
    <div className="font-sans">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
    <BrowserRouter basename="/myportfolio_reactjs">
           <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/Skills" element={<Skills />} />
           </Routes>
         </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;