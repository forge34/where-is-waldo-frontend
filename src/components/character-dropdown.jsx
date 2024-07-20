import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import leonardo from "../assets/ninge turtle.png";
import CharacterDropdownItem from "./character-dropdown-item";
import { dropdownContext } from "../utils/character-dropdown-context";
import goku from "../assets/goku.png";
import jasonVoorhees from "../assets/jason voorhees.png";
import guitarGuy from "../assets/guiater-guy.png";
import mojoJojo from "../assets/mojo jojo.png";

const dropdownItems = [
  {
    name: "leonardo",
    imgSrc: leonardo,
  },
  {
    name: "goku",
    imgSrc: goku,
  },
  {
    name: "jason voorhees",
    imgSrc: jasonVoorhees,
  },
  {
    name: "guitar guy",
    imgSrc: guitarGuy,
  },
  {
    name: "mojo jojo",
    imgSrc: mojoJojo,
  },
];

function CharacterDropdown({ isOpen }) {
  const animate = isOpen ? "slide" : "";
  const { dimension } = useContext(dropdownContext);

  return (
    <div
      className={"dropdown " + animate}
      style={{
        display: isOpen ? "block" : "none",
        top: dimension.y + 30,
        left: dimension.x + 20,
      }}
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
};

export default CharacterDropdown;
