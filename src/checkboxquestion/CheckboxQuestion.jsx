// CheckboxQuestion.js
import React, { useState } from 'react';
import styles from './checkboxquestion.css'; // Import styles

const CheckboxQuestion = ({ question, options, onNext }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (optionText) => {
    if (selectedOptions.includes(optionText)) {
      setSelectedOptions(selectedOptions.filter(item => item !== optionText));
    } else {
      setSelectedOptions([...selectedOptions, optionText]);
    }
  };

  const handleContinueClick = () => {
    onNext(selectedOptions); // Pass selected options to the parent component
  };

  return (
    <div className="checkquestion">
      <div className="checkquestionTitle">
        <h3>{question}</h3>
      </div>
      <div className="checkcontent">
      {options.map((option, index) => (
        <label
          key={index}
          className={selectedOptions.includes(option.text) ? 'customCheckboxLabel checked' : 'customCheckboxLabel'}
          onClick={() => handleOptionClick(option.text)}
        >
          {option.text}
        </label>
      ))}
      <div className="button">
      <button type="button" className="btn btn-dark" onClick={handleContinueClick}>
      Continue
    </button>
      
      </div>
      </div>
    </div>
  );
};

export default CheckboxQuestion;