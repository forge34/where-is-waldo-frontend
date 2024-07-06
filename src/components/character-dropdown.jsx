import React, { useState } from "react";
import PropTypes from "prop-types";
import leonardo from "../assets/ninge turtle.png";
// display: open ? "block" : "none",

function CharacterDropdown({ isOpen, x = 0, y = 0 }) {
  const animate = isOpen ? "slide" : "";

  return (
    <div
      className={"dropdown " + animate}
      style={{ display: isOpen ? "block" : "none", top: y + 10, left: x + 15 }}
    >
      <h1 className="dropdown-title">Select Character</h1>
      <div className="dropdown-item">
        <img width={"64px"} height={"64px"} src={leonardo} />
        <h3>Leonardo</h3>
      </div>
      <div className="dropdown-item">
        <img width={"64px"} height={"64px"} src={leonardo} />
        <h3>Leonardo</h3>
      </div>
      <div className="dropdown-item">
        <img width={"64px"} height={"64px"} src={leonardo} />
        <h3>Leonardo</h3>
      </div>
    </div>
  );
}

CharacterDropdown.propTypes = {
  isOpen: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default CharacterDropdown;
