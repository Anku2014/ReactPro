import React, { Component } from 'react'
class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        return(
            this.state.isLoggedIn ?
            <div>Welcome Ankit</div> :
            <div>Welcome Guest</div>
        )
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome ANkit
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Ankit</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreetings
