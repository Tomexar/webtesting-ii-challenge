import React from 'react';

import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props)
    if(props.count == undefined) {
      this.state = {
        strikes: 0,
        balls: 0,
      }    
    } else {
      this.state = props.count
    }
  }

  strikeCount = () => {
    if(this.state.strikes <= 1) {
      this.setState({
        strikes: this.state.strikes + 1
      })  
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
      })  
    }
  }

  ballCount = () => {
    if(this.state.balls <= 2){
      this.setState({
      balls: this.state.balls + 1
    })
    } else {
      this.setState({ 
        strikes:0,
        balls:0
      })
    }
    
  }

  foul = () => {
    if(this.state.strikes <= 1) {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  hit = () => {
    this.setState({
      strikes: 0,
      balls: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <Display 
          strike={this.state.strikes} 
          balls={this.state.balls}
        />
        <Dashboard 
          strikeCount={this.strikeCount}
          ballCount={this.ballCount}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );  
  }
}

export default App;