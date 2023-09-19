import React, { useState } from 'react';
import './email.css';

const EmailQuestion = ({ question, onNext }) => {
  const [email, setEmail] = useState('');

  const handleContinueClick = () => {
    onNext({ email });
  };

  return (
    <div>
      <div className="questionTitler">
        <h3>{question}</h3>
      </div>
      <div>
        <label>
          Phone Number:
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="(802) 230-8811"
          />
        </label>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default EmailQuestion;
