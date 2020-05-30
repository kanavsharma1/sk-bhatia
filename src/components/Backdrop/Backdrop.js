import React from "react";
import "./bacjkdrop.css";

export const Backdrop = (props) => (
  <div className="Backdrop" onClick={props.clickHandler} />
);
