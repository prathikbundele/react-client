import React, { Component } from 'react';

class Counter extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }
    
    render(){
        return(
            <div>
                count  : {this.state.count}
                <button onClick={() => this.increment()}>add</button>
            </div>
        )
    }
}
export default Counter