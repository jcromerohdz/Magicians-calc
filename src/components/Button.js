/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => (
  <button type="button" value={buttonName}>{buttonName}</button>
);

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
