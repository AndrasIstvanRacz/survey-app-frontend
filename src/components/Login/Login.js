import React from "react";

export function Login() {
  return (
    <form className="LoginForm">
      <h1 className="LoginTitle">Log In</h1>
      <input className="FormInput"
             type="text"
             placeholder="Enter your username"/>
      <input className="FormInput"
             type="password"
             placeholder="Enter your password"/>
      <input className="FormButton"
             type="button" value="Log In"/>
    </form>
  )
}