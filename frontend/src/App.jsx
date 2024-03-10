import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Update from "./Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "update /: id",
    element: <Update />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;