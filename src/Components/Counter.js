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
            count : this.state.count + 2
        })
    }
    
    render(){
        return(
            <div>
                count incremented by 2  : {this.state.count}
                <button onClick={() => this.increment()}>add</button>
            </div>
        )
    }
}
export default Counter
