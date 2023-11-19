import { createBrowserRouter } from "react-router-dom";
import Home from "../../layouts/home.layout";
import UILibraryPage from "../../pages/ui-library";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ui-library",
    element: <UILibraryPage />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
