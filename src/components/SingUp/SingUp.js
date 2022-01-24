import React from "react";
import {handleSingUp, errorMessage} from "../AuthForm/AuthFormViewModel";
import {setCookie} from "../utils/cookieHandler";

import {Redirect} from "react-router-dom";

export class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      passwordOne: "",
      passwordTwo: "",
      redirect: false
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/create'
      }}/>
    }
    return (
      <form className="Form">
        <h1 className="FormTitle">Sing Up</h1>
        <p id="usernameError" className="AuthError">Username already exists</p>
        <p id="passwordError" className="AuthError">Passwords not matches</p>
        <input className="FormInput"
               type="text"
               placeholder="Enter your Firstname"
               autoComplete="off"
               onChange={e => this.setState(
                 {...this.state, firstname: e.target.value})}
               value={this.state.firstname}/>
        <input className="FormInput"
               type="text"
               placeholder="Enter your Lastname"
               autoComplete="off"
               onChange={e => this.setState(
                 {lastname: e.target.value})}
               value={this.state.lastname}/>
        <input className="FormInput"
               type="text"
               placeholder="Enter your username"
               autoComplete="off"
               onChange={e => this.setState(
                 {username: e.target.value})}
               value={this.state.username}/>
        <input className="FormInput"
               type="password"
               placeholder="Enter your password"
               autoComplete="off"
               onChange={e => this.setState(
                 {passwordOne: e.target.value})}
               value={this.state.passwordOne}/>
        <input className="FormInput"
               type="password"
               placeholder="Enter your password again"
               autoComplete="off"
               onChange={e => this.setState(
                 {...this.state, passwordTwo: e.target.value})}
               value={this.state.passwordTwo}/>
        <input className="FormButton"
               type="button"
               value="Sing Up"
               onClick={this.onSignUp}/>
      </form>
    )
  }

  onSignUp = event => {
    event.preventDefault()
    let self = this
    if (this.state.passwordOne === this.state.passwordTwo) {
      handleSingUp(this.state.firstname, this.state.lastname, this.state.username, this.state.passwordOne)
        .then(function (response) {
          setCookie('userSession', response.data, 14);
          self.setState({
            firstname: "",
            lastname: "",
            username: "",
            passwordOne: "",
            passwordTwo: "",
            redirect: true
          })
          errorMessage("usernameError", "AuthError")
          errorMessage("passwordError", "AuthError")
        }).catch(function (reason) {
        self.setState({
          passwordOne: "",
          passwordTwo: ""
        })
        errorMessage("passwordError", "AuthError")
        errorMessage("usernameError", "AuthError active")
        console.log("Username already exists")
      })
    } else {
      self.setState({
        passwordOne: "",
        passwordTwo: ""
      })
      errorMessage("usernameError", "AuthError")
      errorMessage("passwordError", "AuthError active")
    }
  }

}