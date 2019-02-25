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
    labelsVisible: false,
  }

  addAll = () => {
    const { id1, id2, id4, id8, id16, id32, id64, id128 } = this.state;
    return id1 + id2 + id4 + id8 + id16 + id32 + id64 + id128;
  }

  handleChange = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        [event.target.name]: (event.target.value === '1' ? parseInt(event.target.dataset.value) : 0)
      }
    }, () => {
      this.setState(() => {
        return {
          dernary: this.addAll()
        }
      });
    })

  };

  showHideLabels = () => {
    this.setState((prevState) => {
      return {
        labelsVisible: !prevState.labelsVisible,
      }
    });
  }

  render = () => {
    const { dernary, labelsVisible } = this.state;

    return (
      <div>
        <h3>The Calculator</h3>
        <p><button onClick={this.showHideLabels}>{labelsVisible ? "Hide" : "Show"} dernary value of each binary column</button></p>
        <div className="inputs">
          {BINARY.map((val) => (
            <div className="input-column" key={val}>
              {labelsVisible && <label htmlFor={`id-${val}`}>{val}</label>}
              <input type="number" max="1" min="0" placeholder="0" value={(this.state[`id${val}`] ? 1 : 0)} onChange={this.handleChange} name={`id${val}`} id={`id${val}`} data-value={val} />
            </div>
          ))}
        </div>

        <div className="dernary">Dernary value: <strong>{dernary}</strong></div>
      </div>
    );
  };

};

export default Calculator;
