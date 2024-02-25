import React from "react";
import Nav from "react-bootstrap/Nav";
import classes from "./navBar.scss";

export const NavBar: React.FC = () => {
  return (
    <div className={`${classes.containerNavBar} container-fluid`}>
      <Nav>
        <Nav.Link href="#link1">Link 1</Nav.Link>
        <Nav.Link href="#link2">Link 2</Nav.Link>
        <Nav.Link href="#link3">Link 3</Nav.Link>
      </Nav>
    </div>
  );
};
