import React, { Component } from "react";
import routes from "./routes";
import { Link } from "react-router-dom";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div>WestSide University</div>
          <div className="link-wrap">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/About">
              About
            </Link>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}
