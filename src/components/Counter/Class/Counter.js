import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count < 1) {
      alert("Angka Tidak Boleh 0");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}

export default Counter;
