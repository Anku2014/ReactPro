import React, { Component } from 'react'
import { Info } from './Info'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
           years : 17,
           occupation:'basketball player'

        }

    }
    render(){
        const { name }=this.props
        const { years ,occupation}=this.state
        return(
            <React.Fragment>
                <h2> Class Component example </h2>
                <p>my name is {name} and i am a very famous {occupation}. I have been playing in NBA for {years} years.</p>
                <Info name={this.props.name} />
            </React.Fragment>
        
        
        )
    }
}
export default Welcome