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
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  }
  handleSubmit(e) {
    alert(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <h1>Sales Tax Calculator</h1>
        <div className="input-container">
        <label className="labels" for="price">Price: </label>
        <input id="price" type="text" placeholder="Price" value={this.state.value} onChange={this.handleChange} />
        <input id="submit" value="Submit" type="submit" />

      <div>
      <h3>Your total will be: </h3>
      <h4>{this.state.value}</h4>
    </div>
      </div>
    </form>
    );
  }
}
export default App;
