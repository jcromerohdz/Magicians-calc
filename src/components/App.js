/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { result: null };
  }


  render() {
    return (
      <div className="">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
