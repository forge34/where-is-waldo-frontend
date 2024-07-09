import React, { useState } from "react";
import CharacterDropdown from "./character-dropdown";
import bg1 from "../assets/bg2.jpg";
import Rectangle from "./rectangle";
import { useImmer } from "use-immer";

function GameScene({}) {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });

  function imageClick(e) {
    setDimension((draft) => {
      draft.x = e.pageX;
      draft.y = e.pageY;
    });
    setOpen(!open);
  }

  return (
    <div>
      <CharacterDropdown
        x={dimension.x}
        y={dimension.y}
        isOpen={open}
      ></CharacterDropdown>
      {open && <Rectangle x={dimension.x} y={dimension.y}></Rectangle>}
      <img src={bg1} onClick={imageClick} />
    </div>
  );
}

GameScene.propTypes = {};

export default GameScene;
