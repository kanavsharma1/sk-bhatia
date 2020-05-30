import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { DrawerToggleButton } from "./DrawerToggleButton";

export const NavBar = (props) => {
  return (
    <nav className="Toolbar" position="fixed">
      <DrawerToggleButton onClickHandler={props.drawerClickHandler} />
      <div className="Logo-container">
        <Link className="Logo" to="/">
          SK BHATIA
        </Link>
      </div>
      <div className="spacer" />
      <div className=".Nav-container">
        <ul className="Nav-links-container">
          {props.menuItems.map((item, index) => (
            <li className="Nav-link" key={index}>
              <Link key={index} className="Nav-link" to={item}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
