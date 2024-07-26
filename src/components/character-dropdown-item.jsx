import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dropdownContext } from "../utils/character-dropdown-context";

function CharacterDropDownItem({ name, imgSrc }) {
  const { dimension, setFound, onCheck } = useContext(dropdownContext);

  async function handleClick(e) {
    e.stopPropagation();
    let res = await fetch(`${import.meta.env.VITE_API_URL}/check`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({
        name: name,
        x: dimension.x,
        width: dimension.width,
        height: dimension.height,
        y: dimension.y,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await res.json();

    if (res.found) {
      onCheck(true);
      setFound((draft) => {
        if (!draft.some((e) => e.name === name)) {
          draft.push({
            x: res.x,
            y: res.y,
            name: name,
          });
        }
      });
    } else if (!res.found) {
      onCheck(false);
    }
  }

  return (
    <>
      <div className="dropdown-item " onClick={handleClick}>
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
