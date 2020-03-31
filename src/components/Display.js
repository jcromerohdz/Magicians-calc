import React from 'react';

class Display extends React.Component {
  state = { result: this.props.resultDefault };

  onInputChange = (event) =>{
    this.setState({result: event.target.value});
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.result} onChange={this.onInputChange}/>
      </div>
    );
  }
};


export default Display;
