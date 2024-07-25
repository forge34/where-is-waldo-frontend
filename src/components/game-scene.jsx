import React, { useEffect, useRef, useState } from "react";
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
  const [dimension, setDimension] = useImmer({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [Found, setFound] = useImmer([]);
  const [win, setWin] = useState(false);
  const [notficationSettings, setNotificationSettings] = useImmer({
    status: "inital",
    message: "",
    show: false,
  });

  const imgRef = useRef(null);
  const { setIsRunning } = useOutletContext();

  useEffect(() => {
    setIsRunning(true);
  }, [setIsRunning]);

  useEffect(() => {
    const onEnd = async () => {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/end`, {
        credentials: "include",
      });
      res = await res.json();
    };

    if (Found.length >= 5) {
      setWin(true);
      setIsRunning(false);
      onEnd();
    }
  }, [Found, setWin, setIsRunning]);

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
      -e.target.offsetLeft;

      draft.y = e.pageY - e.target.offsetTop;
      draft.height = e.target.height;
      draft.width = e.target.width;
    });
    setOpen(!open);
  }

  return (
    <div>
      {Found.map((character) => {
        return (
          <Marker
            x={character.x}
            y={character.y + imgRef.current.offsetTop}
            key={character.name}
            width={32}
            height={32}
          ></Marker>
        );
      })}
      <dropdownContext.Provider
        value={{
          dimension,
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
      <img ref={imgRef} src={bg1} onClick={imageClick} />
      {win && <WinDialog></WinDialog>}
    </div>
  );
}

GameScene.propTypes = {
  userTime: PropTypes.number,
  setStopTimer: PropTypes.func,
};

export default GameScene;
