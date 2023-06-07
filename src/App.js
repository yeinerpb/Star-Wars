import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Characters from './components/Characters';
import Films from './components/Films';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <Home />} />
        <Route path="/characters" element={ <Characters />} />
        <Route path="/films" element={ <Films /> } />
        <Route path="/planets" element={ <Planets/> } />
        <Route path="/spaceships" element={ <Spaceships /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;