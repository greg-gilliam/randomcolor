import React, { Component } from 'react';

const Field = ({ currentColor }) => {
  return (
    <div
      style={{ backgroundColor: currentColor, height: 100, width: 100 }}
    ></div>
  );
};

export default Field;
