import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Destination from './components/Destination';
import Beaches from './components/Beaches'
import Religious from './components/Religious'
import Parks from './components/Parks'
import Navbar from './components/Navbar'


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Destination" element={<Destination/>} />
        <Route path="/Beaches" element={<Beaches/>} />
        <Route path="/Religious" element={<Religious/>} />
        <Route path="/Parks" element={<Parks/>} />
      </Routes>
    </div>
  </Router>
);

export default App;
