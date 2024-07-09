import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import leonardo from "../assets/ninge turtle.png";
import CharacterDropdownItem from "./character-dropdown-item";
import { dropdownContext } from "../utils/character-dropdown-context";
// display: open ? "block" : "none",
//
const dropdownItems = [
  {
    name: "leonardo",
    imgSrc: leonardo,
  },
];

function CharacterDropdown({ isOpen }) {
  const animate = isOpen ? "slide" : "";
  const { x, y } = useContext(dropdownContext);

  return (
    <div
      className={"dropdown " + animate}
      style={{ display: isOpen ? "block" : "none", top: y + 10, left: x + 15 }}
    >
      <h1 className="dropdown-title">Select Character</h1>
      {dropdownItems?.map((item) => {
        return (
          <CharacterDropdownItem
            name={item.name}
            imgSrc={item.imgSrc}
            key={item.name}
          />
        );
      })}
    </div>
  );
}

CharacterDropdown.propTypes = {
  isOpen: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default CharacterDropdown;
