import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home';
import About from './components/about/About';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
