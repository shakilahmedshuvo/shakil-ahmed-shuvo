import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './Components/Home/ErrorPage/ErrorPage';
import Home from './Components/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)