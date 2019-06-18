import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
    state = {
        strike: 0
    }

    render() {
        return(
            <div>
                <button onClick={this.props.strikeCount}>strike</button>
                <button onClick={this.props.ballCount}>ball</button>
                <button onClick={this.props.foul}>foul</button>
                <button onClick={this.props.hit}>hit</button>
            </div>
        )
    }
}


export default Dashboard;