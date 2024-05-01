import React from 'react'
import ReactDOM from 'react-dom/client'
import {

    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.scss'
import HomeScreen from "./components/screens/HomeScrene.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
