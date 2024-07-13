import {  createBrowserRouter } from "react-router-dom";
import Index from "./index.jsx";
import GameScene from "./components/game-scene.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "leaderboard",
        element: <h1>Coming soon</h1>,
      },
      {
        path: "game",
        element: <GameScene></GameScene>,
      },
    ],
  },
]);

export default router;
