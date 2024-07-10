import React, { useState } from "react";
import CharacterDropdown from "./character-dropdown";
import bg1 from "../assets/bg2.jpg";
import { useImmer } from "use-immer";
import { dropdownContext } from "../utils/character-dropdown-context";
import checkmark from "../assets/check-mark.svg";

function GameScene({}) {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });
  const [foundCharacters, setFoundCharacters] = useImmer([]);

  async function imageClick(e) {
    setDimension((draft) => {
      draft.x = e.pageX;
      draft.y = e.pageY;
    });
    setOpen(!open);
  }

  return (
    <div>
      {foundCharacters.map((character) => {
        return (
          <img
            width={32}
            height={32}
            key={character.name}
            src={checkmark}
            className="checkmark"
            style={{
              position: "absolute",
              top: character.y,
              left: character.x,
            }}
          />
        );
      })}

      <dropdownContext.Provider
        value={{
          x: dimension.x,
          y: dimension.y,
          foundCharacters,
          setFoundCharacters,
        }}
      >
        <CharacterDropdown isOpen={open} />
      </dropdownContext.Provider>
      <img src={bg1} onClick={imageClick} />
    </div>
  );
}

GameScene.propTypes = {};

export default GameScene;
