import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Bmi from './components/Bmi';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; 

    const bmi = (weightInKg / (heightInM * heightInM)).toFixed(1);
    setBmiResult(bmi);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmiResult !== null && (
        <div>
          <h3>Your BMI is: {bmiResult}</h3>
        </div>
      )}
      <Link to="/bmi">
      {/* <button>Calculate</button> */}
      </Link>
    </div>
  );
};

export default BMICalculator;