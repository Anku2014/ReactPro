import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        this.state = {
            counter:0,
        }
        //this.onClick = this.onClick.bind(this);
    }
   onClick()
    {
        alert("button is clicked");
    }
    onClick =  () => {

    }
    render() {
        return (
            <div>
                Counter value ={this.state.counter}
                <button class="btn btn primary" onClick={()=>this.onClick()} >+</button>
            </div>
        )
    }
}

export default Counter


