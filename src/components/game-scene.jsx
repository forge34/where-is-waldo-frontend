import React, { useEffect, useState } from "react";
import CharacterDropdown from "./character-dropdown";
import bg1 from "../assets/bg2.jpg";
import { useImmer } from "use-immer";
import { dropdownContext } from "../utils/character-dropdown-context";
import PropTypes from "prop-types";
import Marker from "./marker";
import WinDialog from "./win-dialog";
import { useOutletContext } from "react-router-dom";

function GameScene() {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });
  const [foundCharacters, setFoundCharacters] = useImmer([]);
  const [win, setWin] = useState(false);
  const [userTime, setStopTimer] = useOutletContext();

  useEffect(() => {
    if (foundCharacters.length >= 5) {
      setWin(true);
      console.log(userTime);
      setStopTimer(true);
    }
  }, [foundCharacters, setStopTimer, userTime]);

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
          <Marker
            x={character.x}
            y={character.y}
            key={character.name}
            width={32}
            height={32}
          ></Marker>
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
      {win && <WinDialog></WinDialog>}

      <img src={bg1} onClick={imageClick} />
    </div>
  );
}

GameScene.propTypes = {
  userTime: PropTypes.number,
  setStopTimer: PropTypes.func,
};

export default GameScene;
