import React, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }
    render(){
        return(
            <div>
                <p className="text">Counter</p>
                <p className="text">{this.state.counter}</p>
                <button onMouseOver={() => {this.setState({counter: this.state.counter + 1})}}>Increase</button>
                <button onClick={() => {this.setState({counter: (this.state.counter !== 0 ? this.state.counter - 1 : 0)})}}>Decrease</button>
            </div>
        );
    }
}

export default Counter;