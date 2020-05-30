import React from "react";
import "./drawer-toggle-button.css";

export const DrawerToggleButton = (props) => {
  return (
    <button className="Toggle-button-container" onClick={props.onClickHandler}>
      <div className="Toggle-line" />
      <div className="Toggle-line" />
      <div className="Toggle-line" />
    </button>
  );
};
