import React from "react";
import {handleLogIn, errorMessage} from "../AuthForm/AuthFormViewModel";
import {setCookie} from "../utils/cookieHandler";
import {Navigate} from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      authError: "AuthError",
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/create"/>
    }
    return (
      <form className="Form" onSubmit={this.onLogIn}>
        <h1 className="FormTitle">Log In</h1>
        <p id="logInInformation" className="AuthError">Incorrect Username or Password</p>
        <input className="FormInput"
               type="text"
               placeholder="Enter your username"
               onChange={e => this.setState(
                 {username: e.target.value})}
               value={this.state.username}/>
        <input className="FormInput"
               type="password"
               placeholder="Enter your password"
               onChange={e => this.setState(
                 {password: e.target.value})}
               value={this.state.password}/>
        <input className="FormButton"
               type="submit"
               value="Log In"/>
      </form>
    )
  }

  onLogIn = event => {
    event.preventDefault()
    let self = this
    if (this.mounted) {
      handleLogIn(this.state.username, this.state.password)
        .then(function (response) {
          setCookie('userSession', response.data, 30);
          errorMessage('logInInformation', 'AuthError')
          self.setState({
            username: "",
            password: "",
            redirect: true
          })
        }).catch(function (reason) {
        errorMessage('logInInformation', 'AuthError active')
        self.setState({
          password: ""
        })

      })
    }
  }
}