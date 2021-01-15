import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export class Login1 extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username, password}= this.state
        if(username==="Ankit" && password==="Anku"){
            localStorage.setItem("token","jsafdafiaugckackadka")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin"/>
        }
        return (
            <div>
                <h1>Library Management System</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br></br>
                    <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br></br>
                    <input type="submit"  />
                    
                </form>
            </div>
        )
    }
}

export default Login1
