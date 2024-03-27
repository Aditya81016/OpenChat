import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./lib/modules/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<RouterProvider router={routes} />
	// </React.StrictMode>
);
