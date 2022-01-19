import React from "react";
import {Link} from "react-router-dom";
import "./NavigationStyle.css"
import Logo from "./icon/logo.png"


class Navigation extends React.Component {

  myFunction = () => {
    let x = document.getElementById("navbarLinks");

    if (x.className === "NavbarLinks") {
      x.className += " active";
      console.log(x.className)
    } else {
      x.className = "NavbarLinks";
    }
  }

  render() {
    return (
      <div className="Navbar">

        {/*<img className="Logo" src={require("./icon/logo.png")} alt="description of image" height={32} width={32}/>*/}
        <div className="Title">
          <img className="Logo" src={require("./icon/logo.png")} alt="survey app"/>
          Survey App
        </div>
        <div className="ToggleButton" onClick={this.myFunction}>
          <span className="Bar"></span>
          <span className="Bar"></span>
          <span className="Bar"></span>
        </div>
        <div className="NavbarLinks" id="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/">Surveys</Link>
          <Link to="/login">Log In</Link>
        </div>


      </div>
    );
  }
}

export default Navigation;