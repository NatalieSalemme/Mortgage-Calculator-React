import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    this.setState({
      value: (Number(this.state.value) * 1.09).toFixed(2)
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <h1>Sales Tax Calculator</h1>
        <div className="input-container">
        <label className="labels" for="price">Price: </label>
        <input id="price" type="text" placeholder="Price" value={this.state.value} onChange={this.handleChange} />
        <input id="submit" value="Submit" type="submit" onClick={this.calculate}/>

      <div>
      <h3>Your total will be:{this.state.value} </h3>
    </div>
      </div>
    </form>
    );
  }
}
export default App;
