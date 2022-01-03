import React from "react";
import {Link} from "react-router-dom";
import "./NavigationStyle.css"

class Navigation extends React.Component {

  render() {
    return (
        <div className="NavButtonsContainer">
          <Link className="NavButtons" to="/">Home</Link>
          <Link className="NavButtons" to="/">placeholder</Link>
        </div>
    );
  }
}

export default Navigation;