import React, { Component } from 'react';
import Field from '../presentation/Field';

class RandomColor extends Component {
  state = {
    colors: ['red', 'blue', 'yellow', 'orange', 'purple'],
    currentColor: 'green',
  };

  componentDidMount() {
    this.colorInterval();
  }
  colorInterval = () => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 4);
      this.setState({ currentColor: this.state.colors[randomNumber] });
    }, 1000);
  };

  render() {
    return (
      <>
        <h1>This is the color randomizer!</h1>
        <Field currentColor={this.state.currentColor} />
      </>
    );
  }
}

export default RandomColor;
