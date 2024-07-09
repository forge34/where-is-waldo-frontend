import React, { useState } from "react";
import CharacterDropdown from "./character-dropdown";
import bg1 from "../assets/bg2.jpg";
import Rectangle from "./rectangle";
import { useImmer } from "use-immer";
import { dropdownContext } from "../utils/character-dropdown-context";

function GameScene({}) {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });

  async function imageClick(e) {
    setDimension((draft) => {
      draft.x = e.pageX;
      draft.y = e.pageY;
    });
    setOpen(!open);
  }

  return (
    <div>
      <dropdownContext.Provider value={{ x: dimension.x, y: dimension.y }}>
        <CharacterDropdown isOpen={open} />
      </dropdownContext.Provider>
      {open && <Rectangle x={dimension.x} y={dimension.y} />}
      <img src={bg1} onClick={imageClick} />
    </div>
  );
}

GameScene.propTypes = {};

export default GameScene;
