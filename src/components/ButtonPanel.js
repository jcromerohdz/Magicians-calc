/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

import './ButtonPanel.css';

const ButtonPanel = () => {
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
      name: 'X',
      category: 'operatorKey',
      
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
    }],
    [{
      id: 17,
      name: '0',
      category: 'digitKey',
    },
    {
      id: 18,
      name: '.',
    },
    {
      id: 19,
      name: '=',
      category: 'operatorKey',
    }]];


  const buttonsList = buttons.map((group, idx) => (
    <div key={idx} className={`category category-${idx}`}>
      {
        group.map(button => (
          <Button key={button.id} buttonName={button.name} />
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


export default ButtonPanel;
