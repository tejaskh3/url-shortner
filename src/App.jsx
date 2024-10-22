import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, Auth, Dashboard, Link, RedirectLink } from "./pages";
import Applayout from "./layouts/AppLayout";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
