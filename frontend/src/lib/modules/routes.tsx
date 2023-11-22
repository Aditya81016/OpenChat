import { createBrowserRouter } from "react-router-dom";
import UILibraryPage from "../../pages/ui-library";
import HomePage from "../../pages/home";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
