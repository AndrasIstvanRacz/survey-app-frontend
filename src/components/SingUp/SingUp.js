import React from "react";

export function SingUp() {
  return (
    <form className="LoginForm">
      <h1 className="LoginTitle">Sing Up</h1>
      <input className="FormInput"
             type="text"
             placeholder="Enter your username"/>
      <input className="FormInput"
             type="password"
             placeholder="Enter your password"/>
      <input className="FormInput"
             type="password"
             placeholder="Enter your password again"/>
      <input className="FormButton"
             type="button" value="Sing Up"/>
    </form>
  )
}