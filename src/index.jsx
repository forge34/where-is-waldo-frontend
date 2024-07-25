import React, { useState } from "react";
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import bg1 from "./assets/bg2.jpg";

function Index({}) {
  const [isRunning, setIsRunning] = useState(false);
  const localtion = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Stopwatch running={isRunning} ></Stopwatch>
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
                navigate("/game");
              }}
            >
              Start game
            </button>
          </div>
        </div>
      ) : (
        <Outlet context={{ setIsRunning }}></Outlet>
      )}
    </>
  );
}

export default Index;
