/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ buttonName }) => (
  <button type="button" value={buttonName}>{buttonName}</button>
);

export default Button;
