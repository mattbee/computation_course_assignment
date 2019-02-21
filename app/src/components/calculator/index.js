import React from 'react';

import './calculator.css';

const BINARY = [1, 2, 4, 8, 16, 32, 64, 128].reverse();

class Calculator extends React.Component {

  state = {
    dernary: 0,
    id1: 0,
    id2: 0,
    id4: 0,
    id8: 0,
    id16: 0,
    id32: 0,
    id64: 0,
    id128: 0,
  }

  addAll = () => {
    const { id1, id2, id4, id8, id16, id32, id64, id128 } = this.state;
    return id1 + id2 + id4 + id8 + id16 + id32 + id64 + id128;
  }

  handleChange = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        [event.target.name]: (event.target.value == 1 ? parseInt(event.target.dataset.value) : 0)
      }
    }, () => {
      this.setState(() => {
        return {
          dernary: this.addAll()
        }
      });
    })

  };

  render = () => {
    const { dernary } = this.state;

    return (
      <div>
        <h3>The Calculator</h3>
        <div className="inputs">
          {BINARY.map((val) => (
            <div key={val}>
              <label htmlFor={`id-${val}`}>{val}</label>
              <input type="number" max="1" min="0" placeholder="0" value={(this.state[`id${val}`] ? 1 : 0)} onChange={this.handleChange} name={`id${val}`} id={`id${val}`} data-value={val} />
            </div>
          ))}
        </div>

        <div className="dernary">{dernary}</div>
      </div>
    );
  };

};

export default Calculator;
