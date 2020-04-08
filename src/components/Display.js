/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    return (
      <div className="calculator-display">
        {this.props.result}
      </div>
    );
  }
}


Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
