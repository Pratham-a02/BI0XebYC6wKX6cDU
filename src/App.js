import React from 'react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Bmi from './BMICalculator';
// import './App.css';

function App() {
  return (
    <Router> 
      {/* <h1>Heyy</h1> */}
      {/* <Link to="/">Page</Link> */}
      <Link to="/bmi"><button>Bmi</button></Link>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/bmi' element={<Bmi/>}/>
      </Routes>
    </Router>
  );
}

export default App;

