import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import UI from "../../pages/ui";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ui-library",
    element: <UI />,
  },
]);
