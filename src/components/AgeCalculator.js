import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: '',
    };
  }

  handleBirthdateChange = (e) => {
    this.setState({ birthdate: e.target.value });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    this.setState({ age });
  };

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input
          type="date"
          onChange={this.handleBirthdateChange}
          value={this.state.birthdate}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age && <p>You are {this.state.age} years old</p>}
      </div>
    );
  }
}

export default AgeCalculator;