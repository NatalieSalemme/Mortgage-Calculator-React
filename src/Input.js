import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      tax: ''
    }
  }
  render() {
    return (
      <div className="input-container">

        <label className="labels" for="price">Price: </label>
        <input id="price" type="text" placeholder="Price"/><br />
    
      <div>
      <h3>Your total will be: </h3>
      <h4>$Results</h4>
    </div>
      </div>
    );
  }
}
