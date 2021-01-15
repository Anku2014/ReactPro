import React from 'react'
const Topic=({match})=>{
    let item=null;
    if(match.params.topicId==="rendering"){
        item=<p> The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.</p>
    }
 
    if(match.params.topicId==="component"){
        item=<p> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.
                    <br></br>
        Components come in two types, Class components and Function components.</p>
    }
    if(match.params.topicId==="propsState"){
        item=<p>  "props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.
            <br></br>
            In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component. The state can be initialized by props.
        </p>
                
    }
    return(
 
        <div>
            <h3>{match.params.topicId}</h3>
            {item}
        </div>
 
)
}
 
export default Topic;