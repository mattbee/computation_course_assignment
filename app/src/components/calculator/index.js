import React from 'react';

import './calculator.css';

const BINARY = [1, 2, 4, 8, 16, 32, 64, 128]

class Calculator extends React.Component {
  onChange = () => {

  };

  render = () => {
    return (
      <div>
        The Calculator
        <div class="inputs">
          {BINARY.reverse().map((val) => (
            <div>
              <label for={`id-${val}`}>{val}</label>
              <input type="number" max="1" min="0" id={`id-${val}`} data-value={val} />
            </div>
          ))}
        </div>
      </div>
    );
  };

};

export default Calculator;
