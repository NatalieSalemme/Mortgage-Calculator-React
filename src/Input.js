import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: '',
      interest: '',
      length: ''
    }
  }
  render() {
    return (
      <div className="input-container">
        <div classname="row">
        <label className="labels" for="loan">Loan Amount: </label>
        <input id="loan" type="text" placeholder="Loan Amount"/><br />
        </div>
        <div className="row">
        <label className="labels" for="interest">Interest Rate: </label>
        <input id="interest" type="text" placeholder="Interest Rate" /><br />
      </div>
      <div className="row">
        <label className="labels" for="length">Length of loan: </label>
        <input id="length" type="text" placeholder="Length of Loan" />
      </div>
      <br />
      <br />
      <br />
      <div>
      <h3>Your estimated monthly payment will be:</h3>
      <h4>$Results</h4>
    </div>
      </div>
    );
  }
}
