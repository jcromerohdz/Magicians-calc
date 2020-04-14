/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }


  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container-app">
        <Display operation={operation} next={next || '0'} total={total || '0'} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
