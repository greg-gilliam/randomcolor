import React, { Component } from 'react';

const Field = ({ color }) => {
  return (
    <>
      <div style={{ backgroundColor: color, height: 100, width: 100 }}></div>
    </>
  );
};

export default Field;
