import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dropdownContext } from "../utils/character-dropdown-context";

function CharacterDropDownItem({ name, imgSrc }) {
  const { x, y, setFound, onFoundChange } = useContext(dropdownContext);

  async function handleClick(e) {
    e.stopPropagation();
    let res = await fetch(`${import.meta.env.VITE_API_URL}/check`, {
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
      onFoundChange(true);
      setFound((draft) => {
        if (!draft.includes(name)) {
          draft.push({
            x: res.x,
            y: res.y,
            name: name,
          });
        }
      });
    } else if (!res.found) {
      onFoundChange(false);
    }

    console.log(res);
  }

  return (
    <>
      <div className="dropdown-item" onClick={handleClick}>
        <img width={"48px"} height={"48px"} src={imgSrc} />
        <h3>{name}</h3>
      </div>
    </>
  );
}

CharacterDropDownItem.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default CharacterDropDownItem;
