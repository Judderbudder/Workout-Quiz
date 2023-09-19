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
          Email:
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="dunnej@lafayette.edu"
          />
        </label>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default EmailQuestion;
