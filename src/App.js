import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor (props){
    super (props); 
    this.state = {
      number: 0
    }
  }

  increment = () => {
    console.log('step 1')
    if(this.state.number === 0){
      this.timerID = setInterval( () => this.setState( (state) => ({ 
        number: state.number + 1
      })), 1000 )
    } else {
      clearInterval(this.timerID)
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.number}</p>
        <button type='button' onClick={this.increment}></button>
      </div>
    );
  }
}


export default App;
