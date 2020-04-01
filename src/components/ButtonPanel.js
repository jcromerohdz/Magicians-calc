/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

import './ButtonPanel.css';

const ButtonPanel = ({ buttons }) => {
  const buttonsList = buttons.map(button => <Button key={button.id} buttonName={button.name} />);
  return (
    <div className="buttonsDisplay">
      {buttonsList}
    </div>
  );
};


export default ButtonPanel;
