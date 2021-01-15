import React from 'react'
import Welcome from './Welcome'

function Greet(props) {
    const { name } = props
    return (
        <React.Fragment>
            <h1>This is {name}</h1>
            <Welcome name={name}/>
        </React.Fragment>
    )
}


export default Greet