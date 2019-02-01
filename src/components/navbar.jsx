import React, { Component } from "react";

// stateless functional component
const NavBar = ({ totalCoutners }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCoutners}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
