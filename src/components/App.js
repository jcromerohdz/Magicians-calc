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
    this.state = { result: null };
  }


  render() {
    return (
      <div className="container-app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
