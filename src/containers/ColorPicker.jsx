import React, { Component } from 'react';

class ColorPicker extends React.Component {
  state = {
    currentColor: 'green',
  };

  render() {
    return (
      <>
        <h1>This is the color picker!</h1>
        <button style={{ backgroundColor: 'red' }} onClick={() => {}}>
          Red
        </button>
        <button style={{ backgroundColor: 'yellow' }} onClick={() => {}}>
          Yellow
        </button>
        <button style={{ backgroundColor: 'blue' }} onClick={() => {}}>
          Blue
        </button>
        <div
          style={{
            backgroundColor: this.state.currentColor,
            height: 100,
            width: 100,
            marginTop: 20,
          }}
        ></div>
      </>
    );
  }
}

export default ColorPicker;
