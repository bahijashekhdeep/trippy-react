import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Router/About";
import Service from "./Router/Service";
import Contact from "./Router/Contact";
import Singup from "./Router/Singup";
import Home from "./Router/Home";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const router = createBrowserRouter([
  {
    path: "/trippy",
    element: <App />,
    children: [
      {
        path: "/trippy/home",
        element: <Home />,
      },
      {
        path: "/trippy/about",
        element: <About />,
      },
      {
        path: "/trippy/Service",
        element: <Service />,
      },
      {
        path: "/trippy/Contact",
        element: <Contact />,
      },
      {
        path: "/trippy/Singup",
        element: <Singup />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
