/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    const { resultDefault } = this.props;
    this.state = { result: resultDefault };
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.result} />
      </div>
    );
  }
}


export default Display;
