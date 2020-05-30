import React from "react";

import "./side-drawer.css";
import { Link } from "react-router-dom";
export const SideDrawer = (props) => {
  let drawerClasses = "Side-drawer";
  if (props.show) drawerClasses = "Side-drawer open";
  return (
    <div className={drawerClasses}>
      <ul>
        {props.menuItems.map((item, index) => (
          <li className="Nav-link-drawer" key={index}>
            <Link key={index} className="Nav-link-drawer" to={item}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
