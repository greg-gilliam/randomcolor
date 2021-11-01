import React, { Component } from 'react';

class RandomColor extends React.Component {
  state = {
    colors: ['red', 'blue', 'yellow', 'orange', 'purple'],
    currentColor: 'green',
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomColor = this.state.colors[randomNumber];
    return (
      <>
        <h1>This is the color randomizer!</h1>
        <div
          style={{
            backgroundColor: randomColor,
            height: 100,
            width: 100,
            marginTop: 20,
          }}
        ></div>
      </>
    );
  }
}

export default RandomColor;
