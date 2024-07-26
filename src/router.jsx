import { createBrowserRouter } from "react-router-dom";
import Index from "./index.jsx";
import GameScene from "./components/game-scene.jsx";
import Leaderboard from "./components/leaderboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "leaderboard",
        loader: () => {
          return fetch(`${import.meta.env.VITE_API_URL}/leaderboard`, {
            credentials: "include",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          });
        },
        element: <Leaderboard></Leaderboard>,
      },
      {
        path: "game",
        loader: () => {
          return fetch(`${import.meta.env.VITE_API_URL}/start`, {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
        },
        element: <GameScene></GameScene>,
      },
    ],
  },
]);

export default router;
