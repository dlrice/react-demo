import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    let { count } = this.state;
    const { increment } = this.props;
    count = count + increment;
    this.setState({ count });
  }

  render() {
    const { count } = this.state;
    const style = {
      fontSize: 10 + count,
    };
    return (
      <button style={style} onClick={() => this.handleClick()}>
        {count}
      </button>
    );
  }
}

class CounterApp extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} />
        <Counter increment={2} />
      </div>
    );
  }
}

export default CounterApp;
