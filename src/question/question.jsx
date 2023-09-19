// Question.js
import React from 'react';
import Option from '../option/option';
import './question.css'; // Import styles

const Question = ({ question, options, onSelectOption, currentIndex }) => {
  return (
    <div className="question">
        <div className="questionTitle">
      <h2>{question}</h2>
      </div>
      <ul>
        {options.map(option => (
          <Option key={option.text} option={option} onSelectOption={onSelectOption} />
        ))}
      </ul>
      </div>
  );
}

export default Question;
