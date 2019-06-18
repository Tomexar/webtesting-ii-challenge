import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {

    render() {
        return (
            <div>
                <div><h1>At Bat</h1></div>
                <div>
                    <h2>Strikes: {this.props.strike}</h2>
                    <h2>Balls: {this.props.balls}</h2>
                </div>
            </div>
        )
    }
}


export default Display;