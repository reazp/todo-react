import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/todos" className="nav-link">
              Todo List
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              About me
            </Link>
          </li>
        </ul>
        <div className="my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
