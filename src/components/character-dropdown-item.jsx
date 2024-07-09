import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dropdownContext } from "../utils/character-dropdown-context";

function CharacterDropDownItem({ name, imgSrc }) {
  const { x, y } = useContext(dropdownContext);
  async function handleClick(e) {
    e.stopPropagation();
    let res = await fetch("http://localhost:3000/check", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        x: x,
        y: y,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await res.json();
    console.log(res);
  }

  return (
    <div className="dropdown-item" onClick={handleClick}>
      <img width={"64px"} height={"64px"} src={imgSrc} />
      <h3>{name}</h3>
    </div>
  );
}

CharacterDropDownItem.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default CharacterDropDownItem;
