import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Pricing from "./components/pages/Pricing.jsx";
import Resources from "./components/pages/Resources.jsx";
import Helpdesk from "./components/pages/Helpdesk.jsx";
import Home from "./components/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "pricing", element: <Pricing /> },
      { path: "resources", element: <Resources /> },
      { path: "helpdesk", element: <Helpdesk /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
