import React from "react";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from "../home";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
