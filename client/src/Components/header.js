import React from "react";
import './header.css';
// import logo from "../Assets/images/Trippin";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        {/* <img className="navbar-logo" src={logo} alt=""></img>       */}
        Trippin'
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a> */}
          </li>
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="signup">
              SignUp
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="login">
              LogIn
            </a>
          </li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
