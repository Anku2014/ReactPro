import {React,Component} from 'react'
class Login extends Component {
    state={
        username:'',
        password:''
    }
    
   
 
    change = (event)=>{
            const name = event.target.name;
            const value = event.target.value;
            this.setState({
                [name]:value
            })
    }
    render() {
        const action = '/submit/'+this.state.username
        return (
            
        <div className="login-form">
            <form action={action} >
                <h2 classNameName="text-center">Log in</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" name='username' placeholder="Username" required="required" onChange={this.change}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' placeholder="Password" required="required" onChange={this.change}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary btn-block">Log in</button>
                    </div>
            </form>
        </div>                
            
        )
    }
}
 
export default Login;