import React from "react";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <i className="fas fa-dice-d20" />
        <span>UI</span>
      </div>
      <ul className={classes.links}>
        <li>Home</li>
        <li>Form</li>
        <li>Components</li>
      </ul>
    </nav>
  );
};

export default Nav;
