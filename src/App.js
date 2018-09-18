import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      total: ''
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  calculate() {
    if(isNaN(this.state.value)) {
      alert('Please enter a valid number');
      this.setState({
        value: '',
        total: ''
      });
    } else {
    this.setState({
      total: '$' + (Number(this.state.value) * 1.0725).toFixed(2),
      value: ''
    });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <h1 className="title">Sales Tax Calculator</h1>
        <div className="input-container">
        <label className="labels" for="price">Price: </label>
        <input id="price" type="text" placeholder="Price" value={this.state.value} onChange={this.handleChange} />
        <input id="submit" value="Submit" type="submit" onClick={this.calculate}/>
      <div>
      <h3>Your total will be:</h3>
      <h3 className="total">{this.state.total}</h3>
    </div>
      </div>
    </form>
    );
  }
}
export default App;
