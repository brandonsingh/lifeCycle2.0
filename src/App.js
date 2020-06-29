import React, {Component} from 'react';


class Ticker extends Component {


  constructor() {
    super();
    this.state = {
      count: 0,
    };
  };


  componentDidMount() {

setInterval(() => {
  this.setState({
    count: this.state.count + 1
  })
  }, 1000)
}

shouldComponentUpdate(nextProps, nextState) {
//   if(nextState.count % 3 === 0) {
    
//     return true;
//   } //else {
//     //return false;
//  // }
  return nextState.count % 3 === 0;
}

reset = () => {
  this.setState ({
    count: 0,
  })
}

  render() {
    
    return (
      <div>
        <p>The Ticker is: {this.state.count}</p>
        <button type="button" onClick = {this.reset}>Reset Ticker</button>
        
      </div>
    );
  };
};

export default Ticker;