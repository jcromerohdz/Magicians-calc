/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ buttonName, color, wide }) => (
  <div className={wide ? 'button-container cero' : 'button-container'}>
    <button className={color ? 'button operator' : 'button'} type="button" value={buttonName}>{buttonName}</button>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
