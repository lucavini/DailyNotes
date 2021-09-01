import React from 'react';
import '../style/radioButton.css';

const RadioButton = ({ options, value, setValue }) => {
  return (
    <div className="radioOptions">
      {options.map((option, index) => (
        <div key={index}>
          <input
            id={option}
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          <label htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
