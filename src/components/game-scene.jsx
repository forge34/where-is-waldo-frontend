import React, { useEffect, useState } from "react";
import CharacterDropdown from "./character-dropdown";
import bg1 from "../assets/bg2.jpg";
import { useImmer } from "use-immer";
import { dropdownContext } from "../utils/character-dropdown-context";
import PropTypes from "prop-types";
import Marker from "./marker";
import WinDialog from "./win-dialog";
import { useOutletContext } from "react-router-dom";
import Notification from "./notification";

function GameScene() {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });
  const [Found, setFound] = useImmer([]);
  const [win, setWin] = useState(false);
  const [, setStopTimer] = useOutletContext();
  const [notficationSettings, setNotificationSettings] = useImmer({
    status: "inital",
    message: "",
    show: false,
  });

  useEffect(() => {
    const onEnd = async () => {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/end`, {
        credentials: "include",
      });
      res = await res.json();
    };

    if (Found.length >= 5) {
      setWin(true);
      setStopTimer(true);
      onEnd();
    }
  }, [Found, setStopTimer, setWin]);

  function onCheck(status) {
    if (status) {
      setNotificationSettings((draft) => {
        draft.status = "found";
        draft.message = "Correct!";
        draft.show = true;
      });
    } else {
      setNotificationSettings((draft) => {
        draft.status = "notfound";
        draft.message = "Not correct!, try again";
        draft.show = true;
      });
    }
  }

  async function imageClick(e) {
    setDimension((draft) => {
      draft.x = e.pageX;
      draft.y = e.pageY;
    });
    setOpen(!open);
  }

  return (
    <div>
      {Found.map((character) => {
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
          Found,
          setFound,
          onCheck,
        }}
      >
        <CharacterDropdown isOpen={open} />
        <Notification
          message={notficationSettings.message}
          type={notficationSettings.status}
          show={notficationSettings.show}
          setShow={setNotificationSettings}
        ></Notification>
      </dropdownContext.Provider>
      <img src={bg1} onClick={imageClick} />
      {win && <WinDialog></WinDialog>}
    </div>
  );
}

GameScene.propTypes = {
  userTime: PropTypes.number,
  setStopTimer: PropTypes.func,
};

export default GameScene;
