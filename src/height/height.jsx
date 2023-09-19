import React, { useState } from 'react';
import './height.css';

const HeightQuestion = ({ question, onNext }) => {
  const [height, setHeight] = useState('');

  const handleContinueClick = () => {
    onNext({ height });
  };

  return (
    <div>
      <div className="questionTitler">
        <h3>{question}</h3>
      </div>
      <div>
        <label>
          Height (in feet and inches):
          <input 
            type="text" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="e.g. 5 ft 9 in"
          />
        </label>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default HeightQuestion;
