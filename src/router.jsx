import { createBrowserRouter } from "react-router-dom";
import Index from "./index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default router;
