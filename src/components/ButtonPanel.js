/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './ButtonPanel.css';

const ButtonPanel = ({handleClick}) => {
  const buttons = [
    [{
      id: 1,
      name: 'AC',
      category: 'functionKey',
    },
    {
      id: 2,
      name: '+/-',
      category: 'functionKey',
    },
    {
      id: 3,
      name: '%',
      category: 'functionKey',
    },
    {
      id: 4,
      name: '÷',
      category: 'operatorKey',
      color: true,
    }],
    [{
      id: 5,
      name: '7',
      category: 'digitKey',
    },
    {
      id: 6,
      name: '8',
      category: 'digitKey',
    },
    {
      id: 7,
      name: '9',
      category: 'digitKey',
    },
    {
      id: 8,
      name: 'x',
      category: 'operatorKey',
      color: true,
    }],
    [{
      id: 9,
      name: '4',
      category: 'digitKey',
    },
    {
      id: 10,
      name: '5',
      category: 'digitKey',
    },
    {
      id: 11,
      name: '6',
      category: 'digitKey',
    },
    {
      id: 12,
      name: '-',
      category: 'operatorKey',
      color: true,
    }],
    [{
      id: 13,
      name: '1',
      category: 'digitKey',
    },
    {
      id: 14,
      name: '2',
      category: 'digitKey',
    },
    {
      id: 15,
      name: '3',
      category: 'digitKey',
    },
    {
      id: 16,
      name: '+',
      category: 'operatorKey',
      color: true,
    }],
    [{
      id: 17,
      name: '0',
      category: 'digitKey',
      wide: true,
    },
    {
      id: 18,
      name: '.',
    },
    {
      id: 19,
      name: '=',
      category: 'operatorKey',
      color: true,
    }]];


  const buttonsList = buttons.map((group, idx) => (
    <div key={idx} className={`category category-${idx}`}>
      {
        group.map(button => (
          <Button
            key={button.id}
            buttonName={button.name}
            color={button.color ? button.color : false}
            wide={button.wide ? button.wide : false}
            handleClick={handleClick}
          />
        ))
      }
    </div>
  ));
  return (
    <div className="calculator-panel">
      {buttonsList}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};


export default ButtonPanel;
