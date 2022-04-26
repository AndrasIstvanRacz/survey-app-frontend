import React from "react";
import {handleSingUp, errorMessage} from "../AuthForm/AuthFormViewModel";
import {setCookie} from "../utils/cookieHandler";
import {Navigate} from "react-router-dom";


export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      passwordOne: "",
      passwordTwo: "",
      redirect: false,
    }
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/profile"/>
    }
    return (
      <form className="Form">
        <h1 className="FormTitle">Sign Up</h1>
        <p id="usernameError" className="AuthError">Username already exists</p>
        <p id="passwordError" className="AuthError">Passwords not matches</p>
        <input
          className="FormInput"
          type="text"
          placeholder="Enter your Firstname"
          autoComplete="off"
          onChange={e => this.setState(
            {...this.state, firstname: e.target.value})}
          value={this.state.firstname}/>
        <input
          className="FormInput"
          type="text"
          placeholder="Enter your Lastname"
          autoComplete="off"
          onChange={e => this.setState(
            {lastname: e.target.value})}
          value={this.state.lastname}/>
        <input
          className="FormInput"
          type="text"
          placeholder="Enter your username"
          autoComplete="off"
          onChange={e => this.setState(
            {username: e.target.value})}
          value={this.state.username}/>
        <input
          className="FormInput"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          onChange={e => this.setState(
            {passwordOne: e.target.value})}
          value={this.state.passwordOne}/>
        <input
          className="FormInput"
          type="password"
          placeholder="Enter your password again"
          autoComplete="off"
          onChange={e => this.setState(
            {...this.state, passwordTwo: e.target.value})}
          value={this.state.passwordTwo}/>
        <input
          className="FormButton"
          type="button"
          value="Sign Up"
          onClick={this.onSignUp}/>
      </form>
    )
  }

  onSignUp = event => {
    event.preventDefault()
    let self = this
    if (this.mounted) {
      if (this.state.passwordOne === this.state.passwordTwo) {
        handleSingUp(this.state.firstname, this.state.lastname, this.state.username, this.state.passwordOne)
          .then(function (response) {
            errorMessage('usernameError', 'AuthError')
            errorMessage('passwordError', 'AuthError')
            setCookie('userSession', response.data, 30);
            self.setState({
              firstname: "",
              lastname: "",
              username: "",
              passwordOne: "",
              passwordTwo: "",
              redirect: true
            })
          }).catch(function (reason) {
          errorMessage('passwordError', 'AuthError')
          errorMessage('usernameError', 'AuthError active')
          self.setState({
            passwordOne: "",
            passwordTwo: ""
          })
        })
      } else {
        errorMessage('usernameError', 'AuthError')
        errorMessage('passwordError', 'AuthError active')
        self.setState({
          passwordOne: "",
          passwordTwo: ""
        })
      }
    }
  }
}