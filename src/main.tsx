import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/pages/Home.tsx";
import Contact from "./assets/pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/reacthashrouter/",
    element: <App />,
    children: [
      {
        path: "/reacthashrouter/",
        element: <Home />,
      },
      {
        path: "/reacthashrouter/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
