import React from 'react';

const Option = ({ option, onSelectOption }) => {
  const handleClick = () => {
    onSelectOption(option.text);
  };

  return (
    
    <li className="option" onClick={handleClick}>
      <div className="text">
      {option.text}
      </div>
      <div className="photo">
      {option.photoUrl && <img src={option.photoUrl} className="option-image" />}
      </div>
    </li>
  );
}

export default Option;
