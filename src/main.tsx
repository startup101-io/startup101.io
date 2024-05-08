import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, loader as rootLoader } from './layouts/root-layout.tsx';
import { ErrorPage } from './pages/error-page.tsx';
import { User } from './pages/user-page.tsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/:userId",
        element: <User />,
      },
    ],
  },
  // {
  //   path: "/:userId",
  //   element: <User />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
