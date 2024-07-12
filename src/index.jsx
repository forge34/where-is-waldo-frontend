import React, { useState } from "react";
import Header from "./components/header";
import GameScene from "./components/game-scene.jsx";
import Timer from "./components/timer";

function Index({}) {
  const [userTime, setUserTime] = useState(0);
  const [stopTimer , setStopTimer] = useState(false)
  return (
    <div>
      <Header>
        <Timer setExternalTime={setUserTime} stopTimer={stopTimer}></Timer>
      </Header>
      <GameScene setStopTimer={setStopTimer} userTime={userTime}></GameScene>
    </div>
  );
}

export default Index;
