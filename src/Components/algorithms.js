import React,{Component} from 'react';

export default class Algorithms extends Component{
    constructor(props){
        super(props);
        this.state = {
            array : [2,6,9,3,6,1,7,5,,2]
        }
    }
    render(){
        const arr = this.state.array.map(a => {
            return(
                <div>
                    {this.state.array.map(e => 
                        <><span>{e}</span>&nbsp;&nbsp;</>
                        )}
                </div>
            );
        })
        
        return(
            <div>
                {arr}
            </div>
        )
    }
}