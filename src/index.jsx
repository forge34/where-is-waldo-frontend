import React, { useState } from "react";
import Header from "./components/header";
import Timer from "./components/timer";
import { Outlet } from "react-router-dom";

function Index({}) {
  const [userTime, setUserTime] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  return (
    <div>
      <Header>
        <Timer setExternalTime={setUserTime} stopTimer={stopTimer}></Timer>
      </Header>
      <Outlet context={[userTime, setStopTimer]}></Outlet>
    </div>
  );
}

export default Index;
