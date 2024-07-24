import React, { useState } from "react";
import Header from "./components/header";
import Timer from "./components/timer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import bg1 from "./assets/bg2.jpg";

function Index({}) {
  const [userTime, setUserTime] = useState(0);
  const [stopTimer, setStopTimer] = useState(true);
  const localtion = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Timer setExternalTime={setUserTime} stopTimer={stopTimer}></Timer>
      </Header>
      {localtion.pathname === "/" ? (
        <div className="index">
          <div className="game-card">
            <div className="card-image">
              <img src={bg1} />
            </div>
            <button
              className="card-bottom"
              onClick={() => {
                setStopTimer(false);
                navigate("/game");
              }}
            >
              Start game
            </button>
          </div>
        </div>
      ) : (
        <Outlet context={[userTime, setStopTimer]}></Outlet>
      )}
    </>
  );
}

export default Index;
