import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2>Counter: {this.state.counter}</h2>
   );
  }
}

const withBackgroundColor = (color) => (Component) => {
  return () => (
    <div style={{background: color}}>
      <Component />
    </div>
  );
}

const withPadding = (padding) => (Component) => {
  return () => (
    <div style={{padding}}>
      <Component />
    </div>
  );
}


//
// state doesn't get reset
//
// const wrapped = withPadding('10px')(Counter);
// export default withBackgroundColor('green')(wrapped);

//
// state gets reset
//
export default withBackgroundColor('green')(
  withPadding('10px')(Counter)
);
