import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { dropdownContext } from "../utils/character-dropdown-context";

function CharacterDropDownItem({ name, imgSrc }) {
  const { x, y, setFoundCharacters } = useContext(dropdownContext);

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

    if (res.found) {
      setFoundCharacters((draft) => {
        if (!draft.includes(name)) {
          draft.push({
            x: res.x,
            y: res.y,
            name: name,
          });
        }
      });
    }

    console.log(res);
  }

  return (
    <div className="dropdown-item" onClick={handleClick}>
      <img width={"48px"} height={"48px"} src={imgSrc} />
      <h3>{name}</h3>
    </div>
  );
}

CharacterDropDownItem.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default CharacterDropDownItem;
