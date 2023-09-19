// WeightQuestion.js
import React, { useState } from 'react';
import "./weight.css"

const WeightQuestion = ({ question, onNext }) => {
  const [weight, setWeight] = useState('');
  const [height, setGoal] = useState('');

  const handleContinueClick = () => {
    onNext({ weight, height });
  };

  return (
    <div>
      <div className="questionTitler">
        <h3>{question}</h3>
      </div>
      <div className="weight">
        <label className="label">Current Weight:</label>
        <div className="inputContainer">
          <input 
            type="text" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="inputField"
            placeholder="ex. 180 lbs"
          />
          <span className="units">lbs</span>
        </div>
      </div>
      <div className="goal">
        <label className="label">Goal:</label>
        <div className="inputContainer">
          <input 
            type="text" 
            value={height} 
            onChange={(e) => setGoal(e.target.value)} 
            className="inputField"
            placeholder="ex. 150 lbs"
          />
          <span className="units">lbs</span>
        </div>
      </div>
      <button onClick={handleContinueClick} className="continueButton">Continue</button>
    </div>
  );
};

export default WeightQuestion;
