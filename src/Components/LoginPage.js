import React from 'react'

class LoginPage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userDetails: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/users").then(
      res => {
        res.json()
          .then(endRes => this.setState({ userDetails: endRes })).catch(err => console.log(err))
      })
      .catch(err => console.log(err))
 
  }
 
  submitLogin = (e) => {
    e.preventDefault();
    let isValid = false;
    const { userDetails, username, password } = this.state;
    console.log("userdata", userDetails)
 
    for (var i = 0; i < userDetails.length; i++) {
      if (username === userDetails[i].username && password === userDetails[i].password) {
        isValid = true
        this.props.history.push("/userpage");
      }
 
    }
    if (!isValid)
      alert("Invalid Credentials..")
  }
 
  handleChange = (event) => {
    //console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  render() {
 
    //console.log("userinfo",this.state.userDetails)
 
    const action = '/user/' + this.state.username
    return (
      <div className="inner-container">
 
        <div className="box">
          <form onSubmit={this.submitLogin} >
            <div className="header"> Login</div>
 
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username" value={this.state.username} required="required" onChange={this.handleChange}
                className="login-input"
                placeholder="Username" />
            </div>
 
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password" value={this.state.password} required="required" onChange={this.handleChange}
                className="login-input"
                placeholder="Password" />
            </div>
 
            <button
              type="button"
              className="login-btn"
              onClick={this
                .submitLogin
              }>Login</button>
          </form>
        </div>
 
      </div>
    );
  }
 
}
 
export default LoginPage