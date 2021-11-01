import React, { Component } from 'react';
import Field from '../presentation/Field';

class RandomColor extends React.Component {
  state = {
    colors: ['red', 'blue', 'yellow', 'orange', 'purple'],
    currentColor: 'green',
  };

  colorInterval = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setTimeout(() => {
      this.setState({ currentColor: this.state.colors[randomNumber] });
    }, 1000);
  };

  render() {
    return (
      <>
        <h1>This is the color randomizer!</h1>
        <Field color={this.state.currentColor} />
        {/* <div
          style={{
            backgroundColor: this.colorInterval(),
            height: 100,
            width: 100,
            marginTop: 20,
          }}
        ></div> */}
      </>
    );
  }
}

export default RandomColor;
